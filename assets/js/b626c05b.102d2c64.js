"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[9070],{83042:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),i=n(67177),l=n(72400),s=n(28033),r=n(42233);const o={code:"function AnimatingStylesTsx1(){const{withSpring,translateX}=this.__closure;return{transform:[{translateX:withSpring(translateX.value*2)}]};}"};function d(){const e=(0,r.useSharedValue)(0),t=(0,r.useAnimatedStyle)(function(){const t=()=>({transform:[{translateX:(0,r.withSpring)(2*e.value)}]});return t.__closure={withSpring:r.withSpring,translateX:e},t.__workletHash=0xf16af34d7f,t.__initData=o,t}());return a.createElement(a.Fragment,null,a.createElement(r.default.View,{style:[u.box,t]}),a.createElement(i.Z,{style:u.container},a.createElement(l.Z,{onPress:()=>{e.value+=50},title:"Click me"})))}const u=s.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center"},box:{height:120,width:120,backgroundColor:"#b58df1",borderRadius:20,marginVertical:50}})},98388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>b,frontMatter:()=>r,metadata:()=>d,toc:()=>m});var a=n(87462),i=(n(67294),n(3905)),l=n(83042),s=n(11031);const r={sidebar_position:2},o="useAnimatedStyle",d={unversionedId:"core/useAnimatedStyle",id:"core/useAnimatedStyle",title:"useAnimatedStyle",description:"useAnimatedStyle lets you create a styles object, similar to StyleSheet styles, which can be animated using shared values.",source:"@site/docs/core/useAnimatedStyle.mdx",sourceDirName:"core",slug:"/core/useAnimatedStyle",permalink:"/react-native-reanimated/docs/core/useAnimatedStyle",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/edit/main/packages/docs-reanimated/docs/core/useAnimatedStyle.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"useSharedValue",permalink:"/react-native-reanimated/docs/core/useSharedValue"},next:{title:"useAnimatedProps",permalink:"/react-native-reanimated/docs/core/useAnimatedProps"}},u={},m=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>updater</code>",id:"updater",level:4},{value:"<code>dependencies</code> <Optional/>",id:"dependencies-",level:4},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=p("Optional"),y=p("InteractiveExample"),h=p("Indent"),k=p("PlatformCompatibility"),f={toc:m},g="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"useanimatedstyle"},"useAnimatedStyle"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," lets you create a styles object, similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"StyleSheet")," styles, which can be animated using ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared values"),"."),(0,i.kt)("p",null,"Styles defined using ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," have to be passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," property of an ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animated-component"},"Animated component"),". Styles are automatically updated whenever an associated shared value or React state changes."),(0,i.kt)("p",null,"In contrast to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animations-in-inline-styling"},"inline styling"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," allows to ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/animating-styles-and-props/#animating-styles"},"access values stored in shared values")," in the styles object it defines."),(0,i.kt)("p",null,"For animating properties use ",(0,i.kt)("a",{parentName:"p",href:"/docs/core/useAnimatedProps"},(0,i.kt)("inlineCode",{parentName:"a"},"useAnimatedProps"))," instead."),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useAnimatedStyle } from 'react-native-reanimated';\n\nfunction App() {\n  // highlight-next-line\n  const animatedStyles = useAnimatedStyle(() => {\n    return {\n      opacity: sv.value ? 1 : 0,\n    };\n    // highlight-next-line\n  });\n\n  // highlight-next-line\n  return <Animated.View style={[styles.box, animatedStyles]} />;\n}\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Type definitions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type DefaultStyle = ViewStyle | ImageStyle | TextStyle;\ntype DependencyList = Array<unknown> | undefined;\n\nexport function useAnimatedStyle<Style extends DefaultStyle>(\n  updater: () => Style,\n  dependencies?: DependencyList | null\n): Style;\n"))),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"updater"},(0,i.kt)("inlineCode",{parentName:"h4"},"updater")),(0,i.kt)("p",null,"A function returning an object with style properties you want to animate. You can animate any style property available in React Native."),(0,i.kt)("h4",{id:"dependencies-"},(0,i.kt)("inlineCode",{parentName:"h4"},"dependencies")," ",(0,i.kt)(c,{mdxType:"Optional"})),(0,i.kt)("p",null,"An optional array of dependencies."),(0,i.kt)("p",null,"Only relevant when using Reanimated ",(0,i.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/guides/web-support#web-without-the-babel-plugin"},"without the Babel plugin on the Web"),"."),(0,i.kt)("h2",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," returns an animated style object which has to be passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," property of an ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animated-component"},"Animated component")," that you want to animate."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," mimics the behavior of ",(0,i.kt)("inlineCode",{parentName:"p"},"StyleSheet")," as much as possible. ",(0,i.kt)("inlineCode",{parentName:"p"},"updater")," callback returns a value that looks like a regular style object in which you can also use shared values."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(y,{src:s.Z,component:l.Z,showCode:!0,mdxType:"InteractiveExample"}),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutating shared values in ",(0,i.kt)("inlineCode",{parentName:"li"},"useAnimatedStyle"),"'s callback is an undefined behavior which may lead to infinite loops.")),(0,i.kt)(h,{mdxType:"Indent"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function App() {\n  const sv = useSharedValue(0);\n  const animatedStyles = useAnimatedStyle(() => {\n    // highlight-next-line\n    sv.value = withTiming(1); // Don't do this!\n    return { opacity: sv.value };\n  });\n}\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can apply the value returned from ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," only to ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated")," components. Passing the animated styles to non-animated component will result in an error.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Only define the dynamic part of your styles with ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," and keep the static ones separately using ",(0,i.kt)("inlineCode",{parentName:"p"},"StyleSheet")," API or (if you really have to) with inline styles. That way you avoid lots of unnecessary style recalculations. Static and dynamic styles can be easily merged using the ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")," syntax:"))),(0,i.kt)(h,{mdxType:"Indent"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function App() {\n  const animatedStyles = useAnimatedStyle(() => ({\n    offset: sv.value,\n  }));\n\n  // highlight-next-line\n  return <Animated.View style={[styles.box, animatedStyles]} />;\n}\n\nconst styles = StyleSheet.create({\n  box: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#b58df1',\n  },\n});\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can share animated styles between components to avoid code duplication.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The callback passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," is first run on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#javascript-thread"},"JavaScript thread")," and immediately after on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),". This may cause an error if you write your code as if it's running on UI thread only. To avoid this, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"global._WORKLET")," variable to check if the code is running on the UI thread:"))),(0,i.kt)(h,{mdxType:"Indent"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function App() {\n  const animatedStyles = useAnimatedStyle(() => {\n    // highlight-next-line\n    if (global._WORKLET) {\n      // UI thread only code\n    } else {\n      // JS thread fallback code\n    }\n  });\n}\n"))),(0,i.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,i.kt)(k,{android:!0,ios:!0,web:!0,mdxType:"PlatformCompatibility"}))}b.isMDXComponent=!0},11031:(e,t,n)=>{n.d(t,{Z:()=>a});const a="import React from 'react';\nimport { Button, View, StyleSheet } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  withSpring,\n  useAnimatedStyle,\n} from 'react-native-reanimated';\n\nexport default function App() {\n  const translateX = useSharedValue<number>(0);\n\n  const handlePress = () => {\n    translateX.value += 50;\n  };\n\n  // highlight-start\n  const animatedStyles = useAnimatedStyle(() => ({\n    transform: [{ translateX: withSpring(translateX.value * 2) }],\n  }));\n  // highlight-end\n\n  return (\n    <>\n      {/* highlight-next-line */}\n      <Animated.View style={[styles.box, animatedStyles]} />\n      <View style={styles.container}>\n        <Button onPress={handlePress} title=\"Click me\" />\n      </View>\n    </>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  box: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    marginVertical: 50,\n  },\n});\n"},72400:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),i=n(28033),l=n(88548),s=n(24404),r=a.forwardRef(((e,t)=>{var n=e.accessibilityLabel,i=e.color,r=e.disabled,d=e.onPress,u=e.testID,m=e.title;return a.createElement(l.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:r,focusable:!r,onPress:d,ref:t,style:[o.button,i&&{backgroundColor:i},r&&o.buttonDisabled],testID:u},a.createElement(s.Z,{style:[o.text,r&&o.textDisabled]},m))}));r.displayName="Button";var o=i.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const d=r}}]);