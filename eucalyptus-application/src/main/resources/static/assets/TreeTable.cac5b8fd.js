import{B as n}from"./TableImg.e85007c0.js";import"./BasicForm.21eafea1.js";import{u as l}from"./useTable.55ec82a8.js";import{getBasicColumns as c,getTreeTableData as d}from"./tableData.0902c609.js";import{aw as _,a as b,ay as a,o as f,h as C,n as t,z as r,B as s}from"./index.2084e233.js";import"./index.59027318.js";import"./Checkbox.ca2ecca2.js";import"./index.cb49e90e.js";import"./index.7acfb7b4.js";import"./eagerComputed.0999551d.js";import"./useForm.88884a65.js";import"./index.b67d6c94.js";import"./index.b8e65b24.js";import"./index.21f688c3.js";import"./useSize.b225aeee.js";import"./useWindowSizeFn.421f2d0c.js";import"./useContentViewHeight.2b6a2bfd.js";import"./ArrowLeftOutlined.03a40cf3.js";import"./index.10838f0f.js";import"./transButton.12ac9125.js";import"./index.1e6d9c89.js";import"./index.f542522f.js";import"./index.84aef3c6.js";import"./uuid.2b29000c.js";import"./index.ac001c45.js";import"./_baseIteratee.4371a21b.js";import"./get.d07fa21b.js";import"./DeleteOutlined.214888e8.js";import"./index.edd3476c.js";import"./useRefs.457ce1af.js";import"./Form.c55c6f9f.js";import"./Col.f25059a0.js";import"./useFlexGapSupport.c2b52231.js";import"./index.2a7c146b.js";import"./FullscreenOutlined.8362b047.js";import"./index.780e7163.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.701d39e5.js";import"./index.e1d3633a.js";import"./fromPairs.84aabb58.js";import"./scrollTo.8f622af1.js";import"./index.b83d2f07.js";/* empty css              *//* empty css              */import"./index.6f377f37.js";import"./index.42522d25.js";import"./index.f36943b4.js";import"./download.5e047479.js";import"./base64Conver.08b9f4ec.js";import"./index.55fb022f.js";import"./index.4fefe693.js";import"./uniqBy.64ebcacd.js";const T=b({components:{BasicTable:n},setup(){const[o,{expandAll:e,collapseAll:i}]=l({title:"\u6811\u5F62\u8868\u683C",isTreeTable:!0,rowSelection:{type:"checkbox",getCheckboxProps(p){return p.id==="0"?{disabled:!0}:{disabled:!1}}},titleHelpMessage:"\u6811\u5F62\u7EC4\u4EF6\u4E0D\u80FD\u548C\u5E8F\u5217\u53F7\u5217\u540C\u65F6\u5B58\u5728",columns:c(),dataSource:d(),rowKey:"id"});return{register:o,expandAll:e,collapseAll:i}}}),B={class:"p-4"},g=s("\u5C55\u5F00\u5168\u90E8"),h=s("\u6298\u53E0\u5168\u90E8");function k(o,e,i,p,E,F){const m=a("a-button"),u=a("BasicTable");return f(),C("div",B,[t(u,{onRegister:o.register},{toolbar:r(()=>[t(m,{type:"primary",onClick:o.expandAll},{default:r(()=>[g]),_:1},8,["onClick"]),t(m,{type:"primary",onClick:o.collapseAll},{default:r(()=>[h]),_:1},8,["onClick"])]),_:1},8,["onRegister"])])}var Fo=_(T,[["render",k]]);export{Fo as default};