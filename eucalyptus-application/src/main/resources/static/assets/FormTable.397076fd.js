import{B as g}from"./TableImg.81c8647f.js";import"./BasicForm.9f9d1425.js";import{u as h}from"./useTable.58f676b6.js";import{getBasicColumns as _,getFormConfig as F}from"./tableData.0902c609.js";import{aw as k,a as y,v as B,ay as i,o as m,j as C,z as t,n as s,h as c,i as b,t as E,F as T,B as p}from"./index.22b0f670.js";import{A}from"./index.7026b45b.js";import{d as S}from"./table.d674eb38.js";import"./index.e6899fd0.js";import"./Checkbox.9ea2f65b.js";import"./index.2279836f.js";import"./index.1575f4f2.js";import"./eagerComputed.bf21e7e9.js";import"./useForm.ae6a5675.js";import"./index.8f5f8265.js";import"./index.ef91b7e2.js";import"./index.f2bdea16.js";import"./useSize.db33a410.js";import"./useWindowSizeFn.7341961c.js";import"./useContentViewHeight.339c4f2a.js";import"./ArrowLeftOutlined.64371a5a.js";import"./index.d80d1a3f.js";import"./transButton.bac65e0e.js";import"./index.31ae1630.js";import"./index.372f9a54.js";import"./index.c4ec8421.js";import"./uuid.2b29000c.js";import"./index.7175f62e.js";import"./_baseIteratee.50bb3834.js";import"./get.9e854f98.js";import"./DeleteOutlined.d5ca8ebc.js";import"./index.22575899.js";import"./useRefs.a2c95200.js";import"./Form.17486a43.js";import"./Col.35934fe0.js";import"./useFlexGapSupport.b40f0b61.js";import"./index.23d10b2c.js";import"./FullscreenOutlined.abc9bfd2.js";import"./index.65ddfc64.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a048c517.js";import"./index.1fb349fa.js";import"./fromPairs.84aabb58.js";import"./scrollTo.42e1bb96.js";import"./index.be667380.js";/* empty css              *//* empty css              */import"./index.770768a4.js";import"./index.44f22cbb.js";import"./download.5e0b5ba6.js";import"./base64Conver.08b9f4ec.js";import"./index.7c52c84e.js";import"./index.06908fa8.js";import"./uniqBy.9000d3e7.js";const w=y({components:{BasicTable:g,AAlert:A},setup(){const o=B([]),[e,{getForm:n}]=h({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:S,columns:_(),useSearchForm:!0,formConfig:F(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id"});function a(){n().getFieldsValue()}function u(r){o.value=r}return{registerTable:e,getFormValues:a,checkedKeys:o,onSelectChange:u}}}),D=p(" custom-slot "),K=p("\u6E05\u7A7A"),V={key:1},v=p("\u83B7\u53D6\u8868\u5355\u6570\u636E");function $(o,e,n,a,u,r){const l=i("a-button"),d=i("a-alert"),f=i("BasicTable");return m(),C(f,{onRegister:o.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:o.checkedKeys,onChange:o.onSelectChange}},{"form-custom":t(()=>[D]),headerTop:t(()=>[s(d,{type:"info","show-icon":""},{message:t(()=>[o.checkedKeys.length>0?(m(),c(T,{key:0},[b("span",null,"\u5DF2\u9009\u4E2D"+E(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),s(l,{type:"link",onClick:e[0]||(e[0]=N=>o.checkedKeys=[]),size:"small"},{default:t(()=>[K]),_:1})],64)):(m(),c("span",V,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:t(()=>[s(l,{type:"primary",onClick:o.getFormValues},{default:t(()=>[v]),_:1},8,["onClick"])]),_:1},8,["onRegister","rowSelection"])}var zo=k(w,[["render",$]]);export{zo as default};