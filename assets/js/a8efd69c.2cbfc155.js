"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[4664],{84394:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(67294),a=n(67177),o=n(72400),r=n(28033),s=n(42233);const l=10,c=100,u=s.Easing.elastic(1.5),d={code:'function SequenceWobbleTsx1(){const{rotation}=this.__closure;return{transform:[{rotateZ:rotation.value+"deg"}]};}'};function m(){const e=(0,s.useSharedValue)(0),t=(0,s.useAnimatedStyle)(function(){const t=()=>({transform:[{rotateZ:`${e.value}deg`}]});return t.__closure={rotation:e},t.__workletHash=4005346110702,t.__initData=d,t}());return i.createElement(a.Z,{style:h.container},i.createElement(s.default.View,{style:[h.box,t]}),i.createElement(o.Z,{title:"wobble",onPress:()=>{e.value=(0,s.withSequence)((0,s.withTiming)(-l,{duration:c/2,easing:u}),(0,s.withRepeat)((0,s.withTiming)(l,{duration:c,easing:u}),7,!0),(0,s.withTiming)(0,{duration:c/2,easing:u}))}}))}const h=r.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"},box:{height:120,width:120,backgroundColor:"#b58df1",borderRadius:20,marginBottom:30}})},85552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>q,frontMatter:()=>g,metadata:()=>w,toc:()=>v});var i=n(87462),a=n(67294),o=n(3905),r=n(67177),s=n(28033),l=n(42233);const c=800,u={code:"function SequenceBasicTsx1(){const{offset}=this.__closure;return{transform:[{translateX:offset.value}]};}"};function d(e){let{width:t}=e;const n=(0,l.useSharedValue)(t/2-240),i=(0,l.useAnimatedStyle)(function(){const e=()=>({transform:[{translateX:n.value}]});return e.__closure={offset:n},e.__workletHash=0xfde66edb755,e.__initData=u,e}());return a.useEffect((()=>{n.value=(0,l.withRepeat)((0,l.withSequence)((0,l.withTiming)(-t/2+240,{duration:c,easing:l.Easing.cubic}),(0,l.withTiming)(0,{duration:c,easing:l.Easing.cubic}),(0,l.withTiming)(t/2-240,{duration:c,easing:l.Easing.cubic})),-1,!0)}),[]),a.createElement(r.Z,{style:m.container},a.createElement(l.default.View,{style:[m.box,i]}))}const m=s.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"},box:{height:120,width:120,backgroundColor:"#b58df1",borderRadius:20}}),h="import React from 'react';\nimport { StyleSheet, View } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n  withTiming,\n  withSequence,\n  Easing,\n  withRepeat,\n} from 'react-native-reanimated';\n\nconst duration = 800;\n\ninterface AppProps {\n  width: number;\n}\n\nexport default function App({ width }: AppProps) {\n  const offset = useSharedValue<number>(width / 2 - 240);\n\n  const animatedStyles = useAnimatedStyle(() => ({\n    transform: [{ translateX: offset.value }],\n  }));\n\n  React.useEffect(() => {\n    offset.value = withRepeat(\n      // highlight-start\n      withSequence(\n        withTiming(-width / 2 + 240, { duration, easing: Easing.cubic }),\n        withTiming(0, { duration, easing: Easing.cubic }),\n        withTiming(width / 2 - 240, { duration, easing: Easing.cubic })\n      ),\n      // highlight-end\n      -1,\n      true\n    );\n  }, []);\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, animatedStyles]} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n  },\n  box: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n  },\n});\n";var p=n(84394),f=n(23387);const g={sidebar_position:4},b="withSequence",w={unversionedId:"animations/withSequence",id:"animations/withSequence",title:"withSequence",description:"withSequence is an animation modifier that lets you run animations in a sequence.",source:"@site/docs/animations/withSequence.mdx",sourceDirName:"animations",slug:"/animations/withSequence",permalink:"/react-native-reanimated/docs/animations/withSequence",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/edit/main/packages/docs-reanimated/docs/animations/withSequence.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"withDecay",permalink:"/react-native-reanimated/docs/animations/withDecay"},next:{title:"withRepeat",permalink:"/react-native-reanimated/docs/animations/withRepeat"}},y={},v=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>reduceMotion</code> <Optional />",id:"reducemotion-",level:4},{value:"<code>...animations</code>",id:"animations",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],S=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},k=S("InteractiveExample"),x=S("Optional"),E=S("PlatformCompatibility"),A={toc:v},T="wrapper";function q(e){let{components:t,...n}=e;return(0,o.kt)(T,(0,i.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"withsequence"},"withSequence"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"withSequence")," is an ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animation-modifier"},"animation modifier")," that lets you run animations in a sequence."),(0,o.kt)(k,{src:h,component:d,mdxType:"InteractiveExample"}),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { withSequence } from 'react-native-reanimated';\n\nfunction App() {\n  sv.value = withSequence(withTiming(50), withTiming(0));\n  // ...\n}\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Type definitions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type AnimatableValue = number | string | number[];\n\nfunction withSequence<T extends AnimatableValue>(\n  reduceMotion?: ReduceMotion,\n  ...animations: [T, ...T[]]\n): T;\n\nenum ReduceMotion {\n  System = 'system',\n  Always = 'always',\n  Never = 'never',\n}\n"))),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"reducemotion-"},(0,o.kt)("inlineCode",{parentName:"h4"},"reduceMotion")," ",(0,o.kt)(x,{mdxType:"Optional"})),(0,o.kt)("p",null,"A parameter that determines how the animation responds to the device's reduced motion accessibility setting."),(0,o.kt)("h4",{id:"animations"},(0,o.kt)("inlineCode",{parentName:"h4"},"...animations")),(0,o.kt)("p",null,"Any number of ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animation-object"},"animation objects")," to be run in a sequence."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"withSequence")," returns an ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animation-object"},"animation object")," which holds the current state of the animation. It can be either assigned directly to a ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared value")," or can be used as a value for a style object returned from ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/useAnimatedStyle"},"useAnimatedStyle"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(k,{src:f.Z,component:p.Z,mdxType:"InteractiveExample"}),(0,o.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,o.kt)(E,{android:!0,ios:!0,web:!0,mdxType:"PlatformCompatibility"}))}q.isMDXComponent=!0},23387:(e,t,n)=>{n.d(t,{Z:()=>i});const i="import React from 'react';\nimport { View, Button, StyleSheet } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  withTiming,\n  Easing,\n  useAnimatedStyle,\n  withRepeat,\n  withSequence,\n} from 'react-native-reanimated';\n\nconst ANGLE = 10;\nconst TIME = 100;\nconst EASING = Easing.elastic(1.5);\n\nexport default function App() {\n  const rotation = useSharedValue<number>(0);\n\n  const animatedStyle = useAnimatedStyle(() => ({\n    transform: [{ rotateZ: `${rotation.value}deg` }],\n  }));\n\n  const handlePress = () => {\n    // highlight-next-line\n    rotation.value = withSequence(\n      // deviate left to start from -ANGLE\n      withTiming(-ANGLE, { duration: TIME / 2, easing: EASING }),\n      // wobble between -ANGLE and ANGLE 7 times\n      withRepeat(\n        withTiming(ANGLE, {\n          duration: TIME,\n          easing: EASING,\n        }),\n        7,\n        true\n      ),\n      // go back to 0 at the end\n      withTiming(0, { duration: TIME / 2, easing: EASING })\n      // highlight-next-line\n    );\n  };\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n      <Button title=\"wobble\" onPress={handlePress} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n  },\n  box: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    marginBottom: 30,\n  },\n});\n"},72400:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(67294),a=n(28033),o=n(88548),r=n(24404),s=i.forwardRef(((e,t)=>{var n=e.accessibilityLabel,a=e.color,s=e.disabled,c=e.onPress,u=e.testID,d=e.title;return i.createElement(o.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:s,focusable:!s,onPress:c,ref:t,style:[l.button,a&&{backgroundColor:a},s&&l.buttonDisabled],testID:u},i.createElement(r.Z,{style:[l.text,s&&l.textDisabled]},d))}));s.displayName="Button";var l=a.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const c=s}}]);