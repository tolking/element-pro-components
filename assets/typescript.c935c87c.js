import{_}from"./index.850853ea.js";import{d as c,_ as r,o as p,S as b,m as l,T as i,a2 as v,X as $,V as g,aa as L,a as A,c as G,Q as h,u as N}from"./modules-vue.4d15950c.js";import{d as m,a as D,b as f}from"./type.2add69a2.js";const y=c({setup(){return{data:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],columns:[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]}}});function C(e,a,s,n,t,d){const o=r("pro-table");return p(),b(o,{data:e.data,columns:e.columns},null,8,["data","columns"])}var ne=_(y,[["render",C]]);const k=c({setup(){const e=m([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]);return{data:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],columns:e}}});function z(e,a,s,n,t,d){const o=r("pro-table");return p(),b(o,{data:e.data,columns:e.columns},null,8,["data","columns"])}var te=_(k,[["render",z]]);const B=c({setup(){const e=m([{label:"Break",prop:"b.c"},{label:"Object",prop:"b.d"},{label:"Array",prop:"d[0].e"}]);return{data:[{"b.c":"break nested value",b:{c:"nested value c in b",d:"nested value d in b"},d:[{e:"nested value in array"}]}],columns:e}}});function P(e,a,s,n,t,d){const o=r("pro-table");return p(),b(o,{data:e.data,columns:e.columns},null,8,["data","columns"])}var re=_(B,[["render",P]]);const V=c({setup(){const e=D({label:"#"}),a=m([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]),s=l([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);return{index:e,data:s,columns:a}}});function M(e,a,s,n,t,d){const o=r("pro-table");return p(),b(o,{data:e.data,columns:e.columns,index:e.index},null,8,["data","columns","index"])}var de=_(V,[["render",M]]);const O=c({setup(){const e=m([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]);return{data:l([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),columns:e}}});function U(e,a,s,n,t,d){const o=r("pro-table");return p(),b(o,{data:e.data,columns:e.columns,selection:""},null,8,["data","columns"])}var le=_(O,[["render",U]]);const j=c({setup(){const e=m([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]);return{data:l([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),columns:e}}});function E(e,a,s,n,t,d){const o=r("pro-table");return p(),b(o,{data:e.data,columns:e.columns},{expand:i(({row:u})=>[v($(u),1)]),_:1},8,["data","columns"])}var me=_(j,[["render",E]]);const I=c({setup(){const e=f({label:"Operations",align:"center"}),a=m([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]),s=l([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);return{menu:e,data:s,columns:a}}}),F=v(" Detail ");function Q(e,a,s,n,t,d){const o=r("el-button"),u=r("pro-table");return p(),b(u,{data:e.data,columns:e.columns,menu:e.menu},{menu:i(({size:T})=>[g(o,{size:T,type:"text"},{default:i(()=>[F]),_:2},1032,["size"])]),_:1},8,["data","columns","menu"])}var ce=_(I,[["render",Q]]);const X=c({setup(){const e=m([{label:"Date",prop:"date",render:"--"},{label:"Name",prop:"name"},{label:"Address",prop:"address",render:s=>L("em",null,s.address)}]);return{data:l([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),columns:e}}});function q(e,a,s,n,t,d){const o=r("el-tag"),u=r("pro-table");return p(),b(u,{data:e.data,columns:e.columns},{"name-header":i(({column:T})=>[A("s",null,$(T.label),1)]),name:i(({row:T,size:S})=>[g(o,{size:S},{default:i(()=>[v($(T==null?void 0:T.name),1)]),_:2},1032,["size"])]),_:1},8,["data","columns"])}var pe=_(X,[["render",q]]);const H=c({setup(){const e=l(1),a=l(10),s=l(50),n=m([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]),t=l([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);function d(){t.value.sort(()=>Math.random()>=.5?1:-1)}return{currentPage:e,pageSize:a,total:s,data:t,columns:n,load:d}}});function J(e,a,s,n,t,d){const o=r("pro-table");return p(),b(o,{"current-page":e.currentPage,"onUpdate:current-page":a[0]||(a[0]=u=>e.currentPage=u),"page-size":e.pageSize,"onUpdate:page-size":a[1]||(a[1]=u=>e.pageSize=u),data:e.data,columns:e.columns,total:e.total,onLoad:e.load},null,8,["current-page","page-size","data","columns","total","onLoad"])}var ue=_(H,[["render",J]]);const K=c({setup(){const e=m([{label:"Date",prop:"date"},{label:"User",children:[{label:"Name",prop:"name"},{label:"Address",prop:"address"}]}]);return{data:l([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),columns:e}}});function R(e,a,s,n,t,d){const o=r("pro-table");return p(),b(o,{data:e.data,columns:e.columns},null,8,["data","columns"])}var _e=_(K,[["render",R]]);const W=c({setup(){const e=l([]),a=l(m([]));return{data:e,columns:a,createTable:()=>{a.value=m([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}])},createDict:()=>{e.value=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]},destroyTable:()=>{a.value=[],e.value=[]}}}}),Y={style:{"margin-bottom":"20px"}},Z=v(" Load Table "),w=v(" Load Dict "),x=v(" Destroy ");function ee(e,a,s,n,t,d){const o=r("el-button"),u=r("pro-table");return p(),G(h,null,[A("div",Y,[g(o,{type:"primary",onClick:e.createTable},{default:i(()=>[Z]),_:1},8,["onClick"]),g(o,{type:"info",onClick:e.createDict},{default:i(()=>[w]),_:1},8,["onClick"]),g(o,{type:"danger",onClick:e.destroyTable},{default:i(()=>[x]),_:1},8,["onClick"])]),g(u,{data:e.data,columns:e.columns},null,8,["data","columns"])],64)}var be=_(W,[["render",ee]]);const ie=c({setup(e){const a=f({label:"Operations",align:"center"}),s=m([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]),n=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(t,d)=>{const o=r("pro-table");return p(),b(o,{data:n,columns:N(s),menu:N(a)},null,8,["columns","menu"])}}});export{ne as T,ie as _,te as a,re as b,de as c,le as d,me as e,ce as f,pe as g,ue as h,_e as i,be as j};
