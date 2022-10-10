import{B as b}from"./TableImg.81c8647f.js";import{j as C}from"./BasicForm.9f9d1425.js";import{u as g}from"./useTable.58f676b6.js";import{d as T}from"./system.8773b1de.js";import{u as _}from"./index.5abec920.js";import{M as w,c as D,s as S}from"./MenuDrawer.75b05071.js";import{aw as B,a as k,ay as t,o as h,h as F,n as m,z as p,j as y,l as M,al as A,B as E}from"./index.22b0f670.js";import"./index.e6899fd0.js";import"./Checkbox.9ea2f65b.js";import"./index.2279836f.js";import"./index.1575f4f2.js";import"./eagerComputed.bf21e7e9.js";import"./useForm.ae6a5675.js";import"./index.8f5f8265.js";import"./index.ef91b7e2.js";import"./index.f2bdea16.js";import"./useSize.db33a410.js";import"./useWindowSizeFn.7341961c.js";import"./useContentViewHeight.339c4f2a.js";import"./ArrowLeftOutlined.64371a5a.js";import"./index.d80d1a3f.js";import"./transButton.bac65e0e.js";import"./index.31ae1630.js";import"./index.372f9a54.js";import"./index.c4ec8421.js";import"./uuid.2b29000c.js";import"./index.7175f62e.js";import"./_baseIteratee.50bb3834.js";import"./get.9e854f98.js";import"./DeleteOutlined.d5ca8ebc.js";import"./index.22575899.js";import"./useRefs.a2c95200.js";import"./Form.17486a43.js";import"./Col.35934fe0.js";import"./useFlexGapSupport.b40f0b61.js";import"./index.23d10b2c.js";import"./FullscreenOutlined.abc9bfd2.js";import"./index.65ddfc64.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a048c517.js";import"./index.1fb349fa.js";import"./fromPairs.84aabb58.js";import"./scrollTo.42e1bb96.js";import"./index.be667380.js";/* empty css              *//* empty css              */import"./index.770768a4.js";import"./index.44f22cbb.js";import"./index.7026b45b.js";import"./download.5e0b5ba6.js";import"./base64Conver.08b9f4ec.js";import"./index.7c52c84e.js";import"./index.06908fa8.js";import"./uniqBy.9000d3e7.js";import"./index.a1f74369.js";const R=k({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:w,TableAction:C},setup(){const[e,{openDrawer:r}]=_(),[c,{reload:l,expandAll:u}]=g({title:"\u83DC\u5355\u5217\u8868",api:T,columns:D,formConfig:{labelWidth:120,schemas:S},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function d(){r(!0,{isUpdate:!1})}function i(o){r(!0,{record:o,isUpdate:!0})}function n(o){}function a(){l()}function s(){A(u)}return{registerTable:c,registerDrawer:e,handleCreate:d,handleEdit:i,handleDelete:n,handleSuccess:a,onFetchSuccess:s}}}),v=E(" \u65B0\u589E\u83DC\u5355 ");function x(e,r,c,l,u,d){const i=t("a-button"),n=t("TableAction"),a=t("BasicTable"),s=t("MenuDrawer");return h(),F("div",null,[m(a,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:p(()=>[m(i,{type:"primary",onClick:e.handleCreate},{default:p(()=>[v]),_:1},8,["onClick"])]),bodyCell:p(({column:o,record:f})=>[o.key==="action"?(h(),y(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,f)}}]},null,8,["actions"])):M("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),m(s,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Ne=B(R,[["render",x]]);export{Ne as default};