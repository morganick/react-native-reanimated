"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[4881],{32144:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(71435),i=n(28033);const o=()=>{const{colorScheme:e}=(0,a.tv)();return"light"===e?l.darkText:l.lightText},l=i.Z.create({lightText:{color:"var(--swm-off-white)"},darkText:{color:"var(--swm-navy-light-100)"}})},72809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>C,frontMatter:()=>b,metadata:()=>g,toc:()=>x});var a=n(87462),i=n(67294),o=n(3905),l=n(67177),r=n(72400),d=n(28033),s=n(42233),m=n(32144);const c=1e3,u=500,h=["React","Native","Reanimated"];function p(e){let{width:t}=e;const n=(0,m.Z)(),[a,o]=(0,i.useState)(!1),d=(0,s.useSharedValue)(0),p=(0,s.useSharedValue)(0),w=(0,s.useSharedValue)(0);return i.createElement(l.Z,{style:y.container},i.createElement(l.Z,{style:y.text},i.createElement(s.default.Text,{style:[y.label,n,{opacity:d}]},h[0]),i.createElement(s.default.Text,{style:[y.label,n,{opacity:p}]},h[1]),t>450&&i.createElement(s.default.Text,{style:[y.label,n,{opacity:w}]},h[2])),t<=450&&i.createElement(s.default.Text,{style:[y.label,n,{opacity:w}]},h[2]),i.createElement(r.Z,{title:a?"Hide":"Show",onPress:()=>{a?(w.value=(0,s.withDelay)(0*u,(0,s.withTiming)(0,{duration:c})),p.value=(0,s.withDelay)(1*u,(0,s.withTiming)(0,{duration:c})),d.value=(0,s.withDelay)(2*u,(0,s.withTiming)(0,{duration:c}))):(d.value=(0,s.withDelay)(0*u,(0,s.withTiming)(1,{duration:c})),p.value=(0,s.withDelay)(1*u,(0,s.withTiming)(1,{duration:c})),w.value=(0,s.withDelay)(2*u,(0,s.withTiming)(1,{duration:c}))),o(!a)}}))}const y=d.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%",flexDirection:"column"},text:{flexDirection:"row"},tab:{paddingHorizontal:20,paddingVertical:10},label:{fontSize:42,textAlign:"center",fontWeight:"bold",marginRight:8},divider:{borderRightWidth:1,borderRightColor:"#ddd"},animatedBorder:{height:8,width:64,backgroundColor:"tomato",borderRadius:20}}),w="import React, { useState } from 'react';\nimport { Button, StyleSheet, View } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  withDelay,\n  withTiming,\n} from 'react-native-reanimated';\nimport useThemedTextStyle from '@site/src/hooks/useThemedTextStyle';\n\nconst DURATION = 1000;\nconst DELAY = 500;\n\nconst text = ['React', 'Native', 'Reanimated'];\n\ninterface AppProps {\n  width: number;\n}\n\nexport default function App({ width }: AppProps) {\n  const textColor = useThemedTextStyle();\n  const [isShown, setShown] = useState<boolean>(false);\n\n  const opacity1 = useSharedValue<number>(0);\n  const opacity2 = useSharedValue<number>(0);\n  const opacity3 = useSharedValue<number>(0);\n\n  // prettier-ignore\n  const show = () => {\n    if (isShown) {\n      opacity3.value = withDelay(0 * DELAY, withTiming(0, { duration: DURATION }));\n      opacity2.value = withDelay(1 * DELAY, withTiming(0, { duration: DURATION }));\n      opacity1.value = withDelay(2 * DELAY, withTiming(0, { duration: DURATION }));\n    } else {\n      opacity1.value = withDelay(0 * DELAY, withTiming(1, { duration: DURATION }));\n      opacity2.value = withDelay(1 * DELAY, withTiming(1, { duration: DURATION }));\n      opacity3.value = withDelay(2 * DELAY, withTiming(1, { duration: DURATION }));\n    }\n\n    setShown(!isShown);\n  };\n\n  return (\n    <View style={styles.container}>\n      <View style={styles.text}>\n        <Animated.Text style={[styles.label, textColor, { opacity: opacity1 }]}>\n          {text[0]}\n        </Animated.Text>\n        <Animated.Text style={[styles.label, textColor, { opacity: opacity2 }]}>\n          {text[1]}\n        </Animated.Text>\n        {width > 450 && (\n          <Animated.Text\n            style={[styles.label, textColor, { opacity: opacity3 }]}>\n            {text[2]}\n          </Animated.Text>\n        )}\n      </View>\n      {width <= 450 && (\n        <Animated.Text style={[styles.label, textColor, { opacity: opacity3 }]}>\n          {text[2]}\n        </Animated.Text>\n      )}\n      <Button title={isShown ? 'Hide' : 'Show'} onPress={show} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n    flexDirection: 'column',\n  },\n  text: {\n    flexDirection: 'row',\n  },\n  tab: {\n    paddingHorizontal: 20,\n    paddingVertical: 10,\n  },\n  label: {\n    fontSize: 42,\n    textAlign: 'center',\n    fontWeight: 'bold',\n    marginRight: 8,\n  },\n  divider: {\n    borderRightWidth: 1,\n    borderRightColor: '#ddd',\n  },\n  animatedBorder: {\n    height: 8,\n    width: 64,\n    backgroundColor: 'tomato',\n    borderRadius: 20,\n  },\n});\n",b={sidebar_position:6},f="withDelay",g={unversionedId:"animations/withDelay",id:"animations/withDelay",title:"withDelay",description:"withDelay is an animation modifier that lets you start an animation with a delay.",source:"@site/docs/animations/withDelay.mdx",sourceDirName:"animations",slug:"/animations/withDelay",permalink:"/react-native-reanimated/docs/animations/withDelay",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/edit/main/packages/docs-reanimated/docs/animations/withDelay.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"withRepeat",permalink:"/react-native-reanimated/docs/animations/withRepeat"},next:{title:"withClamp",permalink:"/react-native-reanimated/docs/animations/withClamp"}},v={},x=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>delayMs</code>",id:"delayms",level:4},{value:"<code>delayedAnimation</code>",id:"delayedanimation",level:4},{value:"<code>reduceMotion</code> <Optional />",id:"reducemotion-",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],D=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},T=D("Optional"),k=D("InteractiveExample"),A=D("PlatformCompatibility"),S={toc:x},R="wrapper";function C(e){let{components:t,...n}=e;return(0,o.kt)(R,(0,a.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"withdelay"},"withDelay"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"withDelay")," is an ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animation-modifier"},"animation modifier")," that lets you start an animation with a delay."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { withDelay } from 'react-native-reanimated';\n\nfunction App() {\n  sv.value = withDelay(500, withTiming(0));\n  // ...\n}\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Type definitions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type AnimatableValue = number | string | number[];\n\nfunction withDelay<T extends AnimatableValue>(\n  delayMs: number,\n  delayedAnimation: T,\n  reduceMotion?: ReduceMotion\n): T;\n\nenum ReduceMotion {\n  System = 'system',\n  Always = 'always',\n  Never = 'never',\n}\n"))),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"delayms"},(0,o.kt)("inlineCode",{parentName:"h4"},"delayMs")),(0,o.kt)("p",null,"Duration (in milliseconds) before the animation starts."),(0,o.kt)("h4",{id:"delayedanimation"},(0,o.kt)("inlineCode",{parentName:"h4"},"delayedAnimation")),(0,o.kt)("p",null,"Animation to delay."),(0,o.kt)("h4",{id:"reducemotion-"},(0,o.kt)("inlineCode",{parentName:"h4"},"reduceMotion")," ",(0,o.kt)(T,{mdxType:"Optional"})),(0,o.kt)("p",null,"A parameter that determines how the animation responds to the device's reduced motion accessibility setting."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"withDelay")," returns an ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animation-object"},"animation object")," which holds the current state of the animation. It can be either assigned directly to a ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared value")," or can be used as a value for a style object returned from ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/useAnimatedStyle"},"useAnimatedStyle"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(k,{src:w,component:p,mdxType:"InteractiveExample"}),(0,o.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,o.kt)(A,{android:!0,ios:!0,web:!0,mdxType:"PlatformCompatibility"}))}C.isMDXComponent=!0},72400:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),i=n(28033),o=n(88548),l=n(24404),r=a.forwardRef(((e,t)=>{var n=e.accessibilityLabel,i=e.color,r=e.disabled,s=e.onPress,m=e.testID,c=e.title;return a.createElement(o.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:r,focusable:!r,onPress:s,ref:t,style:[d.button,i&&{backgroundColor:i},r&&d.buttonDisabled],testID:m},a.createElement(l.Z,{style:[d.text,r&&d.textDisabled]},c))}));r.displayName="Button";var d=i.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const s=r}}]);