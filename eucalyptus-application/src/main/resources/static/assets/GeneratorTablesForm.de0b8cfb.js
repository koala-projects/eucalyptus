import{a as d,ay as x,o as y,h as E,n as t,z as o,k as e,B as n,c_ as h}from"./index.22b0f670.js";/* empty css              */import{B}from"./TableImg.81c8647f.js";import"./BasicForm.9f9d1425.js";import{u as C}from"./useTable.58f676b6.js";import{C as i,R as a}from"./index.06908fa8.js";import"./index.e6899fd0.js";import"./Checkbox.9ea2f65b.js";import"./index.2279836f.js";import"./index.1575f4f2.js";import"./eagerComputed.bf21e7e9.js";import"./useForm.ae6a5675.js";import"./index.8f5f8265.js";import"./index.ef91b7e2.js";import"./index.f2bdea16.js";import"./useSize.db33a410.js";import"./useWindowSizeFn.7341961c.js";import"./useContentViewHeight.339c4f2a.js";import"./ArrowLeftOutlined.64371a5a.js";import"./index.d80d1a3f.js";import"./transButton.bac65e0e.js";import"./index.31ae1630.js";import"./index.372f9a54.js";import"./index.c4ec8421.js";import"./uuid.2b29000c.js";import"./index.7175f62e.js";import"./_baseIteratee.50bb3834.js";import"./get.9e854f98.js";import"./DeleteOutlined.d5ca8ebc.js";import"./index.22575899.js";import"./useRefs.a2c95200.js";import"./Form.17486a43.js";import"./Col.35934fe0.js";import"./useFlexGapSupport.b40f0b61.js";import"./index.23d10b2c.js";import"./FullscreenOutlined.abc9bfd2.js";import"./index.65ddfc64.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a048c517.js";import"./index.1fb349fa.js";import"./fromPairs.84aabb58.js";import"./scrollTo.42e1bb96.js";import"./index.be667380.js";/* empty css              */import"./index.770768a4.js";import"./index.44f22cbb.js";import"./index.7026b45b.js";import"./download.5e0b5ba6.js";import"./base64Conver.08b9f4ec.js";import"./index.7c52c84e.js";import"./uniqBy.9000d3e7.js";const b=n("\u4E0A\u4E00\u6B65"),g=n("\u4E0B\u4E00\u6B65"),gt=d({__name:"GeneratorTablesForm",emits:["next","prev"],setup(k,{expose:s,emit:p}){const[u,{setTableData:l,getSelectRows:c}]=C({rowKey:"name",columns:[{title:"\u8868\u540D",dataIndex:"name"},{title:"\u5907\u6CE8",dataIndex:"remarks"}],pagination:!1,rowSelection:{type:"checkbox"}});function f(){p("prev")}function _(){const r=c();if(r.length===0)return h.error("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u6570\u636E\u5E93\u8868"),!1;p("next",r)}return s({setTableData:l}),(r,v)=>{const m=x("a-button");return y(),E("div",null,[t(e(a),{type:"flex",justify:"center"},{default:o(()=>[t(e(i),{span:20,type:"flex",justify:"center"},{default:o(()=>[t(e(B),{onRegister:e(u)},null,8,["onRegister"])]),_:1})]),_:1}),t(e(a),{type:"flex",justify:"center"},{default:o(()=>[t(e(i),{span:4},{default:o(()=>[t(m,{onClick:f},{default:o(()=>[b]),_:1})]),_:1}),t(e(i),{span:4},{default:o(()=>[t(m,{type:"primary",onClick:_},{default:o(()=>[g]),_:1})]),_:1})]),_:1})])}}});export{gt as default};