var F=(u,s,e)=>new Promise((i,m)=>{var d=t=>{try{o(e.next(t))}catch(a){m(a)}},p=t=>{try{o(e.throw(t))}catch(a){m(a)}},o=t=>t.done?i(t.value):Promise.resolve(t.value).then(d,p);o((e=e.apply(u,s)).next())});import{P as B}from"./index.8f5f8265.js";import{aw as C,a as f,s as E,ay as c,o as D,j as A,z as r,n,B as l,i as y}from"./index.22b0f670.js";import{t as g}from"./account.eb528534.js";import{C as _}from"./index.4824b3c2.js";import"./index.c40db61b.js";/* empty css              */import"./index.ef91b7e2.js";import"./index.f2bdea16.js";import"./useSize.db33a410.js";import"./eagerComputed.bf21e7e9.js";import"./useWindowSizeFn.7341961c.js";import"./useContentViewHeight.339c4f2a.js";import"./ArrowLeftOutlined.64371a5a.js";import"./index.d80d1a3f.js";import"./transButton.bac65e0e.js";import"./index.d4328290.js";import"./TabPane.0610752d.js";import"./index.06908fa8.js";import"./Col.35934fe0.js";import"./useFlexGapSupport.b40f0b61.js";import"./useRefs.a2c95200.js";import"./PlusOutlined.8fa2eb5c.js";const k=f({name:"TestSessionTimeout",components:{ACardGrid:_.Grid,ACard:_,PageWrapper:B},setup(){const u=E();function s(){return F(this,null,function*(){u.setToken(void 0),u.setSessionTimeout(!0)})}function e(){return F(this,null,function*(){try{yield g()}catch(i){i.message}})}return{test1:s,test2:e}}}),h=l("HttpStatus == 401"),x=y("span",null,null,-1),T=l("Response.code == 401");function w(u,s,e,i,m,d){const p=c("a-button"),o=c("a-card-grid"),t=c("a-card"),a=c("PageWrapper");return D(),A(a,{title:"\u767B\u5F55\u8FC7\u671F\u793A\u4F8B",content:"\u7528\u6237\u767B\u5F55\u8FC7\u671F\u793A\u4F8B\uFF0C\u4E0D\u518D\u8DF3\u8F6C\u767B\u5F55\u9875\uFF0C\u76F4\u63A5\u751F\u6210\u9875\u9762\u8986\u76D6\u5F53\u524D\u9875\u9762\uFF0C\u65B9\u4FBF\u4FDD\u6301\u8FC7\u671F\u524D\u7684\u7528\u6237\u72B6\u6001\uFF01"},{default:r(()=>[n(t,{title:"\u8BF7\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u8BBF\u95EE\u6D4B\u8BD5\u63A5\u53E3",extra:"\u6240\u8BBF\u95EE\u7684\u63A5\u53E3\u4F1A\u8FD4\u56DEToken\u8FC7\u671F\u54CD\u5E94"},{default:r(()=>[n(o,{style:{width:"50%","text-align":"center"}},{default:r(()=>[n(p,{type:"primary",onClick:u.test1},{default:r(()=>[h]),_:1},8,["onClick"])]),_:1}),n(o,{style:{width:"50%","text-align":"center"}},{default:r(()=>[x,n(p,{class:"ml-4",type:"primary",onClick:u.test2},{default:r(()=>[T]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}var Y=C(k,[["render",w]]);export{Y as default};