import{I as x}from"./index.a00c7f78.js";import{B as h}from"./TableImg.e85007c0.js";import"./BasicForm.21eafea1.js";import{P as S}from"./index.b67d6c94.js";import{aw as E,a as F,v as I,ay as e,o as i,j as d,z as s,n as f,h as b,aB as g,F as v,B as C}from"./index.2084e233.js";import"./index.2a7c146b.js";import"./useWindowSizeFn.421f2d0c.js";import"./FullscreenOutlined.8362b047.js";import"./useForm.88884a65.js";import"./index.59027318.js";import"./Checkbox.ca2ecca2.js";import"./index.cb49e90e.js";import"./index.7acfb7b4.js";import"./eagerComputed.0999551d.js";import"./index.1e6d9c89.js";import"./index.f542522f.js";import"./index.84aef3c6.js";import"./uuid.2b29000c.js";import"./index.ac001c45.js";import"./_baseIteratee.4371a21b.js";import"./get.d07fa21b.js";import"./DeleteOutlined.214888e8.js";import"./index.edd3476c.js";import"./useRefs.457ce1af.js";import"./Form.c55c6f9f.js";import"./Col.f25059a0.js";import"./useFlexGapSupport.c2b52231.js";import"./useSize.b225aeee.js";import"./index.780e7163.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.701d39e5.js";import"./index.e1d3633a.js";import"./fromPairs.84aabb58.js";import"./scrollTo.8f622af1.js";import"./index.b83d2f07.js";/* empty css              *//* empty css              */import"./index.6f377f37.js";import"./transButton.12ac9125.js";import"./index.42522d25.js";import"./index.f36943b4.js";import"./download.5e047479.js";import"./base64Conver.08b9f4ec.js";import"./index.55fb022f.js";import"./index.4fefe693.js";import"./uniqBy.64ebcacd.js";import"./index.b8e65b24.js";import"./index.21f688c3.js";import"./useContentViewHeight.2b6a2bfd.js";import"./ArrowLeftOutlined.03a40cf3.js";import"./index.10838f0f.js";const k=F({components:{BasicTable:h,ImpExcel:x,PageWrapper:S},setup(){const t=I([]);function c(p){t.value=[];for(const n of p){const{header:u,results:l,meta:{sheetName:m}}=n,o=[];for(const r of u)o.push({title:r,dataIndex:r});t.value.push({title:m,dataSource:l,columns:o})}}return{loadDataSuccess:c,tableListRef:t}}}),D=C(" \u5BFC\u5165Excel ");function P(t,c,p,n,u,l){const m=e("a-button"),o=e("ImpExcel"),r=e("BasicTable"),_=e("PageWrapper");return i(),d(_,{title:"excel\u6570\u636E\u5BFC\u5165\u793A\u4F8B"},{default:s(()=>[f(o,{onSuccess:t.loadDataSuccess,dateFormat:"YYYY-MM-DD"},{default:s(()=>[f(m,{class:"m-3"},{default:s(()=>[D]),_:1})]),_:1},8,["onSuccess"]),(i(!0),b(v,null,g(t.tableListRef,(a,B)=>(i(),d(r,{key:B,title:a.title,columns:a.columns,dataSource:a.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}var kt=E(k,[["render",P]]);export{kt as default};