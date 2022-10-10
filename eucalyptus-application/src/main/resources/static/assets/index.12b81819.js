import{aw as x,a as I,cG as M,b7 as k,bs as b,aG as $,b as U,s as N,f as O,ay as r,o as n,h as S,n as t,z as m,j as h,l as g,i as a,q as s,t as A,F as E,c as P,aN as R}from"./index.22b0f670.js";import{D as V}from"./siteSetting.c485f07c.js";import{c as C,u as z}from"./index.46b84fec.js";import{b as B}from"./index.23d10b2c.js";import{h as T}from"./header.d801b988.js";import"./FullscreenOutlined.abc9bfd2.js";import"./index.f2040cf7.js";import"./useWindowSizeFn.7341961c.js";import"./useContentViewHeight.339c4f2a.js";import"./uniqBy.9000d3e7.js";import"./_baseIteratee.50bb3834.js";import"./get.9e854f98.js";import"./index.a1f74369.js";import"./index.c40db61b.js";import"./useRefs.a2c95200.js";import"./PlusOutlined.8fa2eb5c.js";import"./RedoOutlined.a048c517.js";import"./index.d4328290.js";import"./TabPane.0610752d.js";import"./lock.1c525bc8.js";const F=I({name:"UserDropdown",components:{Dropdown:M,Menu:k,MenuItem:C(()=>b(()=>import("./DropMenuItem.297f7a2c.js"),["assets/DropMenuItem.297f7a2c.js","assets/index.22b0f670.js","assets/index.321d6a34.css"])),MenuDivider:k.Divider,LockAction:C(()=>b(()=>import("./LockModal.36beef97.js"),["assets/LockModal.36beef97.js","assets/LockModal.0068f88c.css","assets/index.86d55544.css","assets/index.a18cc309.css","assets/index.22b0f670.js","assets/index.321d6a34.css","assets/index.23d10b2c.js","assets/index.d0b877f3.css","assets/useWindowSizeFn.7341961c.js","assets/FullscreenOutlined.abc9bfd2.js","assets/BasicForm.9f9d1425.js","assets/BasicForm.9ea33745.css","assets/index.65ddfc64.js","assets/index.3a3c1369.css","assets/index.e6899fd0.js","assets/index.cb0992d5.css","assets/Checkbox.9ea2f65b.js","assets/index.2279836f.js","assets/index.695a0c50.css","assets/index.c4ec8421.js","assets/index.49ada229.css","assets/index.31ae1630.js","assets/index.47f7c782.css","assets/index.372f9a54.js","assets/index.579bd49e.css","assets/index.770768a4.js","assets/index.7b8b5e30.css","assets/get.9e854f98.js","assets/index.1575f4f2.js","assets/index.560eb672.css","assets/eagerComputed.bf21e7e9.js","assets/index.7175f62e.js","assets/index.aeeee80c.css","assets/_baseIteratee.50bb3834.js","assets/DeleteOutlined.d5ca8ebc.js","assets/index.22575899.js","assets/index.8f5fe29a.css","assets/useRefs.a2c95200.js","assets/Form.17486a43.js","assets/Col.35934fe0.js","assets/useFlexGapSupport.b40f0b61.js","assets/useSize.db33a410.js","assets/transButton.bac65e0e.js","assets/index.44f22cbb.js","assets/index.cd256673.css","assets/index.7026b45b.js","assets/index.9d09be4d.css","assets/index.1fb349fa.js","assets/index.b1363280.css","assets/uuid.2b29000c.js","assets/download.5e0b5ba6.js","assets/base64Conver.08b9f4ec.js","assets/index.7c52c84e.js","assets/index.88b1d373.css","assets/index.06908fa8.js","assets/uniqBy.9000d3e7.js","assets/useForm.ae6a5675.js","assets/lock.1c525bc8.js","assets/header.d801b988.js"]))},props:{theme:$.oneOf(["dark","light"])},setup(){const{prefixCls:e}=U("header-user-dropdown"),{t:f}=P(),{getShowDoc:_,getUseLockPage:v}=z(),i=N(),w=O(()=>{const{realName:u="",avatar:D,desc:L}=i.getUserInfo||{};return{realName:u,avatar:D||T,desc:L}}),[o,{openModal:d}]=B();function p(){d(!0)}function l(){i.confirmLoginOut()}function c(){R(V)}function y(u){switch(u.key){case"logout":l();break;case"doc":c();break;case"lock":p();break}}return{prefixCls:e,t:f,getUserInfo:w,handleMenuClick:y,getShowDoc:_,register:o,getUseLockPage:v}}}),G=["src"];function j(e,f,_,v,i,w){const o=r("MenuItem"),d=r("MenuDivider"),p=r("Menu"),l=r("Dropdown"),c=r("LockAction");return n(),S(E,null,[t(l,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m(()=>[t(p,{onClick:e.handleMenuClick},{default:m(()=>[e.getShowDoc?(n(),h(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):g("",!0),e.getShowDoc?(n(),h(d,{key:1})):g("",!0),e.getUseLockPage?(n(),h(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):g("",!0),t(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:m(()=>[a("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,G),a("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},A(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),t(c,{onRegister:e.register},null,8,["onRegister"])],64)}var ce=x(F,[["render",j]]);export{ce as default};