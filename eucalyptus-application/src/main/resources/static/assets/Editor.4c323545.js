import{B as n}from"./BasicForm.9f9d1425.js";import{aw as u,a as l,cD as c,ay as e,o as d,j as C,z as i,n as p,bS as f,E as _}from"./index.22b0f670.js";import{T as h}from"./index.38881686.js";import{P as b}from"./index.8f5f8265.js";/* empty css              *//* empty css              */import"./index.65ddfc64.js";import"./index.e6899fd0.js";import"./Checkbox.9ea2f65b.js";import"./index.2279836f.js";import"./index.c4ec8421.js";import"./index.31ae1630.js";import"./index.372f9a54.js";import"./index.770768a4.js";import"./get.9e854f98.js";import"./index.1575f4f2.js";import"./eagerComputed.bf21e7e9.js";import"./index.7175f62e.js";import"./_baseIteratee.50bb3834.js";import"./DeleteOutlined.d5ca8ebc.js";import"./index.22575899.js";import"./useRefs.a2c95200.js";import"./Form.17486a43.js";import"./Col.35934fe0.js";import"./useFlexGapSupport.b40f0b61.js";import"./useSize.db33a410.js";import"./transButton.bac65e0e.js";import"./index.44f22cbb.js";import"./index.23d10b2c.js";import"./useWindowSizeFn.7341961c.js";import"./FullscreenOutlined.abc9bfd2.js";import"./index.7026b45b.js";import"./index.1fb349fa.js";import"./uuid.2b29000c.js";import"./download.5e0b5ba6.js";import"./base64Conver.08b9f4ec.js";import"./index.7c52c84e.js";import"./index.06908fa8.js";import"./uniqBy.9000d3e7.js";import"./index.ef91b7e2.js";import"./index.f2bdea16.js";import"./useContentViewHeight.339c4f2a.js";import"./ArrowLeftOutlined.64371a5a.js";import"./index.d80d1a3f.js";const B=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:t,field:o})=>f(h,{value:t[o],onChange:r=>{t[o]=r}})}],g=l({components:{BasicForm:n,CollapseContainer:c,PageWrapper:b},setup(){const{createMessage:t}=_();return{schemas:B,handleSubmit:o=>{t.success("click search,values:"+JSON.stringify(o))}}}});function S(t,o,r,y,P,V){const a=e("BasicForm"),m=e("CollapseContainer"),s=e("PageWrapper");return d(),C(s,{title:"\u5BCC\u6587\u672C\u5D4C\u5165\u8868\u5355\u793A\u4F8B"},{default:i(()=>[p(m,{title:"\u5BCC\u6587\u672C\u8868\u5355"},{default:i(()=>[p(a,{labelWidth:100,schemas:t.schemas,actionColOptions:{span:24},baseColProps:{span:24},onSubmit:t.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var ft=u(g,[["render",S]]);export{ft as default};