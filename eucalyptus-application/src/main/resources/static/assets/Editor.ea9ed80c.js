import{B as n}from"./BasicForm.21eafea1.js";import{aw as u,a as l,cD as c,ay as e,o as d,j as C,z as i,n as p,bS as f,E as _}from"./index.2084e233.js";import{T as h}from"./index.6da2e592.js";import{P as b}from"./index.b67d6c94.js";/* empty css              *//* empty css              */import"./index.780e7163.js";import"./index.59027318.js";import"./Checkbox.ca2ecca2.js";import"./index.cb49e90e.js";import"./index.84aef3c6.js";import"./index.1e6d9c89.js";import"./index.f542522f.js";import"./index.6f377f37.js";import"./get.d07fa21b.js";import"./index.7acfb7b4.js";import"./eagerComputed.0999551d.js";import"./index.ac001c45.js";import"./_baseIteratee.4371a21b.js";import"./DeleteOutlined.214888e8.js";import"./index.edd3476c.js";import"./useRefs.457ce1af.js";import"./Form.c55c6f9f.js";import"./Col.f25059a0.js";import"./useFlexGapSupport.c2b52231.js";import"./useSize.b225aeee.js";import"./transButton.12ac9125.js";import"./index.42522d25.js";import"./index.2a7c146b.js";import"./useWindowSizeFn.421f2d0c.js";import"./FullscreenOutlined.8362b047.js";import"./index.f36943b4.js";import"./index.e1d3633a.js";import"./uuid.2b29000c.js";import"./download.5e047479.js";import"./base64Conver.08b9f4ec.js";import"./index.55fb022f.js";import"./index.4fefe693.js";import"./uniqBy.64ebcacd.js";import"./index.b8e65b24.js";import"./index.21f688c3.js";import"./useContentViewHeight.2b6a2bfd.js";import"./ArrowLeftOutlined.03a40cf3.js";import"./index.10838f0f.js";const B=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:t,field:o})=>f(h,{value:t[o],onChange:r=>{t[o]=r}})}],g=l({components:{BasicForm:n,CollapseContainer:c,PageWrapper:b},setup(){const{createMessage:t}=_();return{schemas:B,handleSubmit:o=>{t.success("click search,values:"+JSON.stringify(o))}}}});function S(t,o,r,y,P,V){const a=e("BasicForm"),m=e("CollapseContainer"),s=e("PageWrapper");return d(),C(s,{title:"\u5BCC\u6587\u672C\u5D4C\u5165\u8868\u5355\u793A\u4F8B"},{default:i(()=>[p(m,{title:"\u5BCC\u6587\u672C\u8868\u5355"},{default:i(()=>[p(a,{labelWidth:100,schemas:t.schemas,actionColOptions:{span:24},baseColProps:{span:24},onSubmit:t.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var ft=u(g,[["render",S]]);export{ft as default};