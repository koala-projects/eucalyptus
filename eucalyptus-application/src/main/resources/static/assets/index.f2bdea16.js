import{a as G,G as J,v as f,J as V,f as X,cH as Y,a7 as C,N as D,al as z,c6 as K,S as o,n as g,_,ch as Q,T as A,Y as U,aL as Z}from"./index.22b0f670.js";import{u as $}from"./useSize.db33a410.js";import{e as aa}from"./eagerComputed.bf21e7e9.js";var ta=function(){return{prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:function(){return"default"}},src:String,srcset:String,icon:J.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}},ea=G({name:"AAvatar",inheritAttrs:!1,props:ta(),slots:["icon"],setup:function(a,w){var x=w.slots,d=w.attrs,p=f(!0),k=f(!1),h=f(1),m=f(null),b=f(null),P=V("avatar",a),I=P.prefixCls,T=$(),n=X(function(){return a.size==="default"?T.value:a.size}),N=Y(),s=aa(function(){if(U(a.size)==="object"){var e=Z.find(function(r){return N.value[r]}),t=a.size[e];return t}}),O=function(t){return s.value?{width:"".concat(s.value,"px"),height:"".concat(s.value,"px"),lineHeight:"".concat(s.value,"px"),fontSize:"".concat(t?s.value/2:18,"px")}:{}},y=function(){if(!(!m.value||!b.value)){var t=m.value.offsetWidth,r=b.value.offsetWidth;if(t!==0&&r!==0){var l=a.gap,c=l===void 0?4:l;c*2<r&&(h.value=r-c*2<t?(r-c*2)/t:1)}}},R=function(){var t=a.loadError,r=t==null?void 0:t();r!==!1&&(p.value=!1)};return C(function(){return a.src},function(){z(function(){p.value=!0,h.value=1})}),C(function(){return a.gap},function(){z(function(){y()})}),D(function(){z(function(){y(),k.value=!0})}),function(){var e,t,r=a.shape,l=a.src,c=a.alt,W=a.srcset,H=a.draggable,B=a.crossOrigin,v=K(x,a,"icon"),i=I.value,L=(e={},o(e,"".concat(d.class),!!d.class),o(e,i,!0),o(e,"".concat(i,"-lg"),n.value==="large"),o(e,"".concat(i,"-sm"),n.value==="small"),o(e,"".concat(i,"-").concat(r),r),o(e,"".concat(i,"-image"),l&&p.value),o(e,"".concat(i,"-icon"),v),e),F=typeof n.value=="number"?{width:"".concat(n.value,"px"),height:"".concat(n.value,"px"),lineHeight:"".concat(n.value,"px"),fontSize:v?"".concat(n.value/2,"px"):"18px"}:{},j=(t=x.default)===null||t===void 0?void 0:t.call(x),u;if(l&&p.value)u=g("img",{draggable:H,src:l,srcset:W,onError:R,alt:c,crossorigin:B},null);else if(v)u=v;else if(k.value||h.value!==1){var S="scale(".concat(h.value,") translateX(-50%)"),M={msTransform:S,WebkitTransform:S,transform:S},q=typeof n.value=="number"?{lineHeight:"".concat(n.value,"px")}:{};u=g(Q,{onResize:y},{default:function(){return[g("span",{class:"".concat(i,"-string"),ref:m,style:_(_({},q),M)},[j])]}})}else u=g("span",{class:"".concat(i,"-string"),ref:m,style:{opacity:0}},[j]);return g("span",A(A({},d),{},{ref:b,class:L,style:[F,O(!!v),d.style]}),[u])}}}),la=ea;export{la as A};