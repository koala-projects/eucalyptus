var A=(t,m,r)=>new Promise((c,u)=>{var l=o=>{try{n(r.next(o))}catch(p){u(p)}},O=o=>{try{n(r.throw(o))}catch(p){u(p)}},n=o=>o.done?c(o.value):Promise.resolve(o.value).then(l,O);n((r=r.apply(t,m)).next())});import{B as L}from"./BasicForm.9f9d1425.js";import{u as I}from"./useForm.ae6a5675.js";import{a as N,v as h,o as B,j as F,k as E}from"./index.22b0f670.js";/* empty css              *//* empty css              */import"./index.65ddfc64.js";import"./index.e6899fd0.js";import"./Checkbox.9ea2f65b.js";import"./index.2279836f.js";import"./index.c4ec8421.js";import"./index.31ae1630.js";import"./index.372f9a54.js";import"./index.770768a4.js";import"./get.9e854f98.js";import"./index.1575f4f2.js";import"./eagerComputed.bf21e7e9.js";import"./index.7175f62e.js";import"./_baseIteratee.50bb3834.js";import"./DeleteOutlined.d5ca8ebc.js";import"./index.22575899.js";import"./useRefs.a2c95200.js";import"./Form.17486a43.js";import"./Col.35934fe0.js";import"./useFlexGapSupport.b40f0b61.js";import"./useSize.db33a410.js";import"./transButton.bac65e0e.js";import"./index.44f22cbb.js";import"./index.23d10b2c.js";import"./useWindowSizeFn.7341961c.js";import"./FullscreenOutlined.abc9bfd2.js";import"./index.7026b45b.js";import"./index.1fb349fa.js";import"./uuid.2b29000c.js";import"./download.5e0b5ba6.js";import"./base64Conver.08b9f4ec.js";import"./index.7c52c84e.js";import"./index.06908fa8.js";import"./uniqBy.9000d3e7.js";var e=(t=>(t.INTEGER="INTEGER",t.FLOAT="FLOAT",t.STRING="STRING",t.BOOLEAN="BOOLEAN",t.LOCALDATETIME="LOCAL_DATE_TIME",t))(e||{});const i=new Map;i.set(e.STRING,"Input");i.set(e.INTEGER,"InputNumber");i.set(e.FLOAT,"InputNumber");i.set(e.BOOLEAN,"Switch");i.set(e.LOCALDATETIME,"DatePicker");const s=new Map;s.set(e.STRING,a);s.set(e.INTEGER,a);s.set(e.FLOAT,a);s.set(e.BOOLEAN,a);s.set(e.LOCALDATETIME,R);function d(t){return s.get(t.type)(t)}function R(t){const m=a(t);return m.componentProps={showTime:!0},m}function a(t){return{field:t.code,label:t.name,component:i.get(t.type),colProps:{span:24},required:!0}}const ut=N({__name:"GeneratorPropertiesForm",emits:["next","prev"],setup(t,{expose:m,emit:r}){const c=h(),[u,{validate:l,setFieldsValue:O}]=I({labelWidth:100,actionColOptions:{span:14},resetButtonOptions:{text:"\u4E0A\u4E00\u6B65"},resetFunc:n,submitButtonOptions:{text:"\u4E0B\u4E00\u6B65"},submitFunc:o});function n(){return A(this,null,function*(){r("prev")})}function o(){return A(this,null,function*(){r("next",yield l())})}function p(T){c.value=T.map(f=>d(f))}return m({setSchemas:p,setFieldsValue:O}),(T,f)=>(B(),F(E(L),{onRegister:E(u),schemas:c.value},null,8,["onRegister","schemas"]))}});export{ut as default};