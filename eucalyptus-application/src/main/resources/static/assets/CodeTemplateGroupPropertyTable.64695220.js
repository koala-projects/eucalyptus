var I=Object.defineProperty,y=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var d=(n,o,i)=>o in n?I(n,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[o]=i,c=(n,o)=>{for(var i in o||(o={}))w.call(o,i)&&d(n,i,o[i]);if(s)for(var i of s(o))k.call(o,i)&&d(n,i,o[i]);return n},f=(n,o)=>y(n,R(o));import{B as v}from"./TableImg.e85007c0.js";import{j as N}from"./BasicForm.21eafea1.js";import{u as g}from"./useTable.55ec82a8.js";import{u as A}from"./uniqueId.11619467.js";import{a as S,ay as G,o as L,h as O,n as m,z as b,k as l,B as P}from"./index.2084e233.js";import"./index.59027318.js";import"./Checkbox.ca2ecca2.js";import"./index.cb49e90e.js";import"./index.7acfb7b4.js";import"./eagerComputed.0999551d.js";import"./useForm.88884a65.js";import"./index.b67d6c94.js";import"./index.b8e65b24.js";import"./index.21f688c3.js";import"./useSize.b225aeee.js";import"./useWindowSizeFn.421f2d0c.js";import"./useContentViewHeight.2b6a2bfd.js";import"./ArrowLeftOutlined.03a40cf3.js";import"./index.10838f0f.js";import"./transButton.12ac9125.js";import"./index.1e6d9c89.js";import"./index.f542522f.js";import"./index.84aef3c6.js";import"./uuid.2b29000c.js";import"./index.ac001c45.js";import"./_baseIteratee.4371a21b.js";import"./get.d07fa21b.js";import"./DeleteOutlined.214888e8.js";import"./index.edd3476c.js";import"./useRefs.457ce1af.js";import"./Form.c55c6f9f.js";import"./Col.f25059a0.js";import"./useFlexGapSupport.c2b52231.js";import"./index.2a7c146b.js";import"./FullscreenOutlined.8362b047.js";import"./index.780e7163.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.701d39e5.js";import"./index.e1d3633a.js";import"./fromPairs.84aabb58.js";import"./scrollTo.8f622af1.js";import"./index.b83d2f07.js";/* empty css              *//* empty css              */import"./index.6f377f37.js";import"./index.42522d25.js";import"./index.f36943b4.js";import"./download.5e047479.js";import"./base64Conver.08b9f4ec.js";import"./index.55fb022f.js";import"./index.4fefe693.js";import"./uniqBy.64ebcacd.js";const V=P(" \u65B0\u589E\u53C2\u6570 "),Vt=S({__name:"CodeTemplateGroupPropertyTable",setup(n,{expose:o}){const[i,{getDataSource:p,setTableData:C}]=g({columns:[{title:"\u540D\u79F0",dataIndex:"name",editRow:!0},{title:"\u4EE3\u7801",dataIndex:"code",editRow:!0},{title:"\u7C7B\u578B",dataIndex:"type",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"\u6574\u578B",value:"INTEGER"},{label:"\u6D6E\u70B9\u578B",value:"FLOAT"},{label:"\u5B57\u7B26\u4E32",value:"STRING"},{label:"\u5E03\u5C14",value:"BOOLEAN"},{label:"\u65E5\u671F\u65F6\u95F4",value:"LOCAL_DATE_TIME"}]}}],showIndexColumn:!1,actionColumn:{width:160,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function E(){const t=p(),e=t.length+1,u={name:`\u53C2\u6570-${e}`,code:`propery-${e}`,type:"STRING",editable:!0,isNew:!0};t.push(u)}function r(t){const e=p(),u=e.findIndex(a=>a.code===t.code);e.splice(u,1)}function _(t){var e;(e=t.onEdit)==null||e.call(t,!0)}function B(t){var e;(e=t.onEdit)==null||e.call(t,!1),t.isNew&&r(t)}function h(t){var e;(e=t.onEdit)==null||e.call(t,!1,!0)}function D(t,e){return t.editable?[{label:"\u4FDD\u5B58",onClick:h.bind(null,t,e)},{label:"\u53D6\u6D88",popConfirm:{title:"\u662F\u5426\u53D6\u6D88\u7F16\u8F91",confirm:B.bind(null,t,e)}}]:[{label:"\u7F16\u8F91",onClick:_.bind(null,t)},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u5220\u9664",confirm:r.bind(null,t,e)}}]}function F(t){C(t.map(e=>f(c({},e),{key:A("property-")})))}function T(){return p().map(t=>({name:t.name,code:t.code,type:t.type,description:t.description}))}return o({setProperties:F,getProperties:T}),(t,e)=>{const u=G("a-button");return L(),O("div",null,[m(l(v),{onRegister:l(i)},{action:b(({record:a,column:x})=>[m(l(N),{actions:D(a,x)},null,8,["actions"])]),_:1},8,["onRegister"]),m(u,{block:"",type:"dashed",onClick:E},{default:b(()=>[V]),_:1})])}}});export{Vt as default};