import{aw as _,a as m,d0 as S,eC as T,eD as f,eE as x,eF as h,eG as R,eH as X,eI as y,eJ as w,eK as C,eL as E,eM as Y,eN as g,eO as B,v as n,ay as o,o as r,j as i,z as t,i as l,n as p,aI as b,x as k,y as F,B as $}from"./index.22b0f670.js";import{P as N}from"./index.8f5f8265.js";import"./index.ef91b7e2.js";import"./index.f2bdea16.js";import"./useSize.db33a410.js";import"./eagerComputed.bf21e7e9.js";import"./useWindowSizeFn.7341961c.js";import"./useContentViewHeight.339c4f2a.js";import"./ArrowLeftOutlined.64371a5a.js";import"./index.d80d1a3f.js";import"./transButton.bac65e0e.js";const P=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"],A=P.map(e=>({label:e,value:e,key:e})),D=m({components:{Select:S,PageWrapper:N,FadeTransition:T,ScaleTransition:f,SlideYTransition:x,ScrollYTransition:h,SlideYReverseTransition:R,ScrollYReverseTransition:X,SlideXTransition:y,ScrollXTransition:w,SlideXReverseTransition:C,ScrollXReverseTransition:E,ScaleRotateTransition:Y,ExpandXTransition:g,ExpandTransition:B},setup(){const e=n("Fade"),a=n(!0);function s(){a.value=!1,setTimeout(()=>{a.value=!0},300)}return{options:A,value:e,start:s,show:a}}}),I={class:"flex"},V=$(" start "),W={class:"box"};function L(e,a,s,j,z,G){const c=o("Select"),d=o("a-button"),u=o("PageWrapper");return r(),i(u,{title:"\u52A8\u753B\u7EC4\u4EF6\u793A\u4F8B"},{default:t(()=>[l("div",I,[p(c,{options:e.options,value:e.value,"onUpdate:value":a[0]||(a[0]=v=>e.value=v),placeholder:"\u9009\u62E9\u52A8\u753B",style:{width:"150px"}},null,8,["options","value"]),p(d,{type:"primary",class:"ml-4",onClick:e.start},{default:t(()=>[V]),_:1},8,["onClick"])]),(r(),i(b(`${e.value}Transition`),null,{default:t(()=>[k(l("div",W,null,512),[[F,e.show]])]),_:1}))]),_:1})}var oe=_(D,[["render",L],["__scopeId","data-v-191e0ae4"]]);export{oe as default};