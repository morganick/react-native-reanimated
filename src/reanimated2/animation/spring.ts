import { defineAnimation } from './util';
import {
  Animation,
  AnimationCallback,
  AnimatableValue,
  Timestamp,
} from '../commonTypes';
import {
  SpringConfig,
  initialCalculations,
  calcuateNewMassToMatchDuration,
  SpringAnimation,
  InnerSpringAnimation,
  underDampedSpringCalculations,
  criticallyDampedSpringCalculations,
  isAnimationTerminatingCalculation,
} from './springUtils';

export function withSpring(
  toValue: AnimatableValue,
  userConfig?: SpringConfig,
  callback?: AnimationCallback
): Animation<SpringAnimation> {
  'worklet';

  return defineAnimation<SpringAnimation>(toValue, () => {
    'worklet';
    const defaultConfig: Record<keyof SpringConfig, any> = {
      damping: 10,
      mass: 1,
      stiffness: 100,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 2,
      velocity: 0,
      duration: 2000,
      dampingRatio: 0.5,
    } as const;

    const config = {
      ...defaultConfig,
      ...userConfig,
      useDuration: userConfig?.duration || userConfig?.dampingRatio,
    };

    function spring(animation: InnerSpringAnimation, now: Timestamp): boolean {
      const { toValue, startTimestamp, current } = animation;

      const timeFromStart = now - startTimestamp;

      if (config.useDuration && timeFromStart >= config.duration) {
        animation.current = toValue;

        // clear lastTimestamp to avoid using stale value by the next spring animation that starts after this one
        animation.lastTimestamp = 0;
        return true;
      }

      const { lastTimestamp, velocity } = animation;

      const deltaTime = Math.min(now - lastTimestamp, 64);
      animation.lastTimestamp = now;

      const t = deltaTime / 1000;
      const v0 = -velocity;
      const x0 = toValue - current;

      const { zeta, omega0, omega1 } = animation;

      const { position: newPosition, velocity: newVelocity } =
        zeta < 1
          ? underDampedSpringCalculations(animation, {
              zeta,
              v0,
              x0,
              omega0,
              omega1,
              t,
            })
          : criticallyDampedSpringCalculations(animation, {
              v0,
              x0,
              omega0,
              t,
            });

      if (!config.useDuration) {
        const { isOvershooting, isVelocity, isDisplacement } =
          isAnimationTerminatingCalculation(animation, config);

        animation.current = newPosition;
        animation.velocity = newVelocity;

        const springIsNotInMove =
          isOvershooting || (isVelocity && isDisplacement);

        if (springIsNotInMove) {
          if (config.stiffness !== 0) {
            animation.velocity = 0;
            animation.current = toValue;
          }
          // clear lastTimestamp to avoid using stale value by the next spring animation that starts after this one
          animation.lastTimestamp = 0;
          return true;
        }
      }
      return false;
    }

    function isTriggeredTwice(
      previousAnimation: SpringAnimation | undefined,
      animation: SpringAnimation
    ) {
      return (
        previousAnimation?.toValue === animation.toValue &&
        previousAnimation?.duration === animation.duration &&
        previousAnimation?.dampingRatio === animation.dampingRatio
      );
    }

    function onStart(
      animation: SpringAnimation,
      value: number,
      now: Timestamp,
      previousAnimation: SpringAnimation | undefined
    ): void {
      animation.current = value;
      animation.startValue = value;

      let mass = config.mass;
      const triggeredTwice = isTriggeredTwice(previousAnimation, animation);

      const duration = config.duration;

      const x0 = triggeredTwice
        ? // If animation is triggered twice we want to continue the previous animation
          // form the previous starting point
          (previousAnimation?.startValue as number)
        : Number(animation.toValue) - value;

      animation.velocity = previousAnimation
        ? triggeredTwice
          ? previousAnimation.velocity
          : previousAnimation.velocity + config.velocity
        : config.velocity;

      if (triggeredTwice) {
        animation.zeta = previousAnimation?.zeta || 0;
        animation.omega0 = previousAnimation?.omega0 || 0;
        animation.omega1 = previousAnimation?.omega1 || 0;
      } else {
        if (config.useDuration) {
          const acutalDuration = triggeredTwice
            ? // If animation is triggered twice we want to continue the previous animation
              // so we need to include the time that already elapsed
              duration -
              ((previousAnimation?.lastTimestamp || 0) -
                (previousAnimation?.startTimestamp || 0))
            : duration;

          config.duration = acutalDuration;
          mass = calcuateNewMassToMatchDuration(x0, config, animation.velocity);
        }

        const { zeta, omega0, omega1 } = initialCalculations(mass, config);
        animation.zeta = zeta;
        animation.omega0 = omega0;
        animation.omega1 = omega1;
      }

      animation.lastTimestamp = previousAnimation?.lastTimestamp || now;

      animation.startTimestamp = triggeredTwice
        ? previousAnimation?.startTimestamp || now
        : now;
    }

    return {
      onFrame: spring,
      onStart,
      toValue,
      velocity: config.velocity || 0,
      current: toValue,
      startValue: 0,
      callback,
      lastTimestamp: 0,
      startTimestamp: 0,
      zeta: 0,
      omega0: 0,
      omega1: 0,
    } as SpringAnimation;
  });
}