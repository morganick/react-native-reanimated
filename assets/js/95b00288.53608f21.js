"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[5964],{22077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>T,default:()=>C,frontMatter:()=>v,metadata:()=>x,toc:()=>I});var l=n(87462),r=n(67294),a=n(3905),o=n(67177),i=n(24404),s=n(72400),c=n(28033),d=n(42233);const m=10,u=100,p=10,f={code:"function ScrollToTsx1(){const{scrollTo,animatedRef,scroll,ITEM_SIZE,ITEM_MARGIN}=this.__closure;scrollTo(animatedRef,0,scroll.value*(ITEM_SIZE+2*ITEM_MARGIN),true);}"};function h(){const e=(0,d.useAnimatedRef)(),t=(0,d.useSharedValue)(0);(0,d.useDerivedValue)(function(){const n=function(){(0,d.scrollTo)(e,0,t.value*(u+2*p),!0)};return n.__closure={scrollTo:d.scrollTo,animatedRef:e,scroll:t,ITEM_SIZE:u,ITEM_MARGIN:p},n.__workletHash=0x92d465d268b,n.__initData=f,n}());const n=Array.from(Array(m).keys());return r.createElement(o.Z,{style:b.container},r.createElement(k,{increment:-1,scroll:t}),r.createElement(o.Z,{style:b.boxWrapper},r.createElement(d.default.ScrollView,{ref:e},n.map(((e,t)=>r.createElement(o.Z,{key:t,style:b.box},r.createElement(i.Z,{style:{textAlign:"center"}},t)))))),r.createElement(k,{increment:1,scroll:t}))}const k=e=>{let{increment:t,scroll:n}=e;return r.createElement(o.Z,{style:b.buttonWrapper},r.createElement(s.Z,{onPress:()=>{n.value=n.value+t>0?n.value+t:m-1+t,n.value>=m-2&&(n.value=0)},title:`Scroll ${Math.abs(t)} ${t>0?"down":"up"}`}))},b=c.Z.create({container:{flex:1,alignItems:"center"},buttonWrapper:{flex:1,alignItems:"center",justifyContent:"center"},box:{width:u,height:u,margin:p,borderRadius:15,backgroundColor:"#b58df1",alignItems:"center",justifyContent:"center"},boxWrapper:{width:"100%",height:250,alignItems:"center"}}),y="import React from 'react';\nimport { Button, View, Text, StyleSheet } from 'react-native';\nimport Animated, {\n  useAnimatedRef,\n  useDerivedValue,\n  useSharedValue,\n  scrollTo,\n} from 'react-native-reanimated';\nimport type { SharedValue } from 'react-native-reanimated';\n\nconst ITEM_COUNT = 10;\nconst ITEM_SIZE = 100;\nconst ITEM_MARGIN = 10;\n\nexport default function App() {\n  const animatedRef = useAnimatedRef<Animated.ScrollView>();\n  const scroll = useSharedValue<number>(0);\n\n  useDerivedValue(() => {\n    // highlight-start\n    scrollTo(\n      animatedRef,\n      0,\n      scroll.value * (ITEM_SIZE + 2 * ITEM_MARGIN),\n      true\n    );\n    // highlight-end\n  });\n\n  const items = Array.from(Array(ITEM_COUNT).keys());\n\n  return (\n    <View style={styles.container}>\n      <Incrementor increment={-1} scroll={scroll} />\n      <View style={styles.boxWrapper}>\n        <Animated.ScrollView ref={animatedRef}>\n          {items.map((_, i) => (\n            <View key={i} style={styles.box}>\n              <Text style={{ textAlign: 'center' }}>{i}</Text>\n            </View>\n          ))}\n        </Animated.ScrollView>\n      </View>\n      <Incrementor increment={1} scroll={scroll} />\n    </View>\n  );\n}\n\nconst Incrementor = ({\n  increment,\n  scroll,\n}: {\n  increment: number;\n  scroll: SharedValue<number>;\n}) => (\n  <View style={styles.buttonWrapper}>\n    <Button\n      onPress={() => {\n        scroll.value =\n          scroll.value + increment > 0\n            ? scroll.value + increment\n            : ITEM_COUNT - 1 + increment;\n\n        if (scroll.value >= ITEM_COUNT - 2) scroll.value = 0;\n      }}\n      title={`Scroll ${Math.abs(increment)} ${increment > 0 ? 'down' : 'up'}`}\n    />\n  </View>\n);\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  buttonWrapper: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  box: {\n    width: ITEM_SIZE,\n    height: ITEM_SIZE,\n    margin: ITEM_MARGIN,\n    borderRadius: 15,\n    backgroundColor: '#b58df1',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  boxWrapper: {\n    width: '100%',\n    height: 250,\n    alignItems: 'center',\n  },\n});\n",v={sidebar_position:1},T="scrollTo",x={unversionedId:"scroll/scrollTo",id:"scroll/scrollTo",title:"scrollTo",description:"scrollTo lets you synchronously scroll to a given X or Y offset.",source:"@site/docs/scroll/scrollTo.mdx",sourceDirName:"scroll",slug:"/scroll/scrollTo",permalink:"/react-native-reanimated/docs/scroll/scrollTo",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/edit/main/packages/docs-reanimated/docs/scroll/scrollTo.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Scroll",permalink:"/react-native-reanimated/docs/category/scroll"},next:{title:"useScrollViewOffset",permalink:"/react-native-reanimated/docs/scroll/useScrollViewOffset"}},g={},I=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>animatedRef</code>",id:"animatedref",level:4},{value:"<code>x</code>",id:"x",level:4},{value:"<code>y</code>",id:"y",level:4},{value:"<code>animated</code>",id:"animated",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],N=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},w=N("InteractiveExample"),E=N("PlatformCompatibility"),R={toc:I},S="wrapper";function C(e){let{components:t,...n}=e;return(0,a.kt)(S,(0,l.Z)({},R,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scrollto"},"scrollTo"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"scrollTo")," lets you synchronously scroll to a given X or Y offset."),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { scrollTo } from 'react-native-reanimated';\n\nfunction App() {\n  const animatedRef = useAnimatedRef();\n  const scrollY = useSharedValue(0);\n\n  useDerivedValue(() => {\n    // highlight-next-line\n    scrollTo(animatedRef, 0, scrollY.value, true);\n  });\n\n  return (\n    <Animated.ScrollView ref={animatedRef}>{/* ... */}</Animated.ScrollView>\n  );\n}\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Type definitions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function scrollTo<T extends Component>(\n  animatedRef: AnimatedRef<T>,\n  x: number,\n  y: number,\n  animated: boolean\n): void;\n"))),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"animatedref"},(0,a.kt)("inlineCode",{parentName:"h4"},"animatedRef")),(0,a.kt)("p",null,"An ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/useAnimatedRef#returns"},"animated ref")," connected to the ScrollView (or other scrollable) component you'd want to scroll on. The animated ref has to be passed either to an ",(0,a.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animated-component"},"Animated component")," or a React Native built-in component."),(0,a.kt)("h4",{id:"x"},(0,a.kt)("inlineCode",{parentName:"h4"},"x")),(0,a.kt)("p",null,"Value in pixels to scroll to on the horizontal X axis."),(0,a.kt)("h4",{id:"y"},(0,a.kt)("inlineCode",{parentName:"h4"},"y")),(0,a.kt)("p",null,"Value in pixels to scroll to on the vertical Y axis."),(0,a.kt)("h4",{id:"animated"},(0,a.kt)("inlineCode",{parentName:"h4"},"animated")),(0,a.kt)("p",null,"Whether the scroll should be smooth (",(0,a.kt)("inlineCode",{parentName:"p"},"true"),") or instant (",(0,a.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"scrollTo")," returns ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(w,{src:y,component:h,mdxType:"InteractiveExample"}),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"scrollTo")," function can only be called from ",(0,a.kt)("a",{parentName:"li",href:"/docs/fundamentals/glossary#ui-thread"},"the UI thread"),"."),(0,a.kt)("li",{parentName:"ul"},"Supports ",(0,a.kt)("inlineCode",{parentName:"li"},"Animated.FlatList"),"."),(0,a.kt)("li",{parentName:"ul"},"Usually works with other ScrollView-like and FlatList-like components if they use a ",(0,a.kt)("inlineCode",{parentName:"li"},"ScrollView")," under the hood and are ",(0,a.kt)("a",{parentName:"li",href:"/docs/core/createAnimatedComponent#reference"},"made animated"),"."),(0,a.kt)("li",{parentName:"ul"},"Scrollable components must implement ",(0,a.kt)("inlineCode",{parentName:"li"},"getScrollableNode")," method (and ",(0,a.kt)("inlineCode",{parentName:"li"},"getNativeScrollRef")," method for the New Architecture) to be compatible with ",(0,a.kt)("inlineCode",{parentName:"li"},"scrollTo"),".")),(0,a.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,a.kt)(E,{android:!0,ios:!0,web:!0,mdxType:"PlatformCompatibility"}))}C.isMDXComponent=!0},72400:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(67294),r=n(28033),a=n(88548),o=n(24404),i=l.forwardRef(((e,t)=>{var n=e.accessibilityLabel,r=e.color,i=e.disabled,c=e.onPress,d=e.testID,m=e.title;return l.createElement(a.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:i,focusable:!i,onPress:c,ref:t,style:[s.button,r&&{backgroundColor:r},i&&s.buttonDisabled],testID:d},l.createElement(o.Z,{style:[s.text,i&&s.textDisabled]},m))}));i.displayName="Button";var s=r.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const c=i}}]);