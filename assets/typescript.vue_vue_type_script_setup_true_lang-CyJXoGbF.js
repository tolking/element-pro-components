import{_ as m,g as p,r as l,o as i,c as u,h as C,a as h,e as _,F as S,w as d,b as g,d as A,H as D,al as v,E as B}from"./index-By7wvJ5L.js";import{d as b}from"./type-DeQo96Nv.js";import{d as L,b as T}from"./type-BSH8CNJX.js";const V=p({setup(){return{columns:[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],detail:{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"}}}});function z(e,o,n,a,t,r){const s=l("pro-descriptions");return i(),u(s,{columns:e.columns,detail:e.detail},null,8,["columns","detail"])}const I=m(V,[["render",z]]),G=p({setup(){return{columns:b([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]),detail:{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"}}}});function k(e,o,n,a,t,r){const s=l("pro-descriptions");return i(),u(s,{columns:e.columns,detail:e.detail},null,8,["columns","detail"])}const J=m(G,[["render",k]]),w=p({setup(){return{columns:b([{label:"A",prop:"a"},{label:"B",prop:"b.c"},{label:"C",prop:"b.d"},{label:"D",prop:"d[0].e"}]),detail:{a:"a value","b.c":"break nested value",b:{c:"nested value c in b",d:"nested value d in b"},d:[{e:"nested value in array"}]}}}});function F(e,o,n,a,t,r){const s=l("pro-descriptions");return i(),u(s,{columns:e.columns,detail:e.detail,column:1},null,8,["columns","detail"])}const K=m(w,[["render",F]]),y=p({setup(){const e=C({border:!0,align:"right",labelAlign:"left"}),o=[{value:"left",label:"left"},{value:"center",label:"center"},{value:"right",label:"right"}],n=L([{label:"border",prop:"border",component:"el-switch"},{label:"align",prop:"align",component:"pro-radio-button",props:{data:o}},{label:"label-align",prop:"labelAlign",component:"pro-radio-button",props:{data:o}}]),a=T({submit:!1,reset:!1}),t=b([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]);return{form:e,formColumns:n,menu:a,columns:t,detail:{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"}}}});function E(e,o,n,a,t,r){const s=l("pro-form"),f=l("pro-descriptions");return i(),h(S,null,[_(s,{modelValue:e.form,"onUpdate:modelValue":o[0]||(o[0]=$=>e.form=$),columns:e.formColumns,menu:e.menu,"label-width":"100px"},null,8,["modelValue","columns","menu"]),_(f,{columns:e.columns,detail:e.detail,border:e.form.border,align:e.form.align,"label-align":e.form.labelAlign},null,8,["columns","detail","border","align","label-align"])],64)}const O=m(y,[["render",E]]),H=p({setup(){return{columns:b([{label:"Date",prop:"date",render:n=>v("em",n.date),renderLabel:n=>v("em",n.label)},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]),detail:{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"}}}});function M(e,o,n,a,t,r){const s=l("el-button"),f=l("el-tag"),$=l("pro-descriptions");return i(),u($,{columns:e.columns,detail:e.detail,border:"",size:"small"},{title:d(()=>o[0]||(o[0]=[g("span",null,"title",-1)])),extra:d(({size:c})=>[_(s,{size:c},{default:d(()=>o[1]||(o[1]=[A(" extra ")])),_:2},1032,["size"])]),"detail-name":d(({item:c,size:N})=>[_(f,{size:N},{default:d(()=>[A(D(c.name),1)]),_:2},1032,["size"])]),"detail-name-label":d(({item:c})=>[g("span",null,D(c.label)+":",1)]),_:1},8,["columns","detail"])}const P=m(H,[["render",M]]),Q=p({__name:"typescript",setup(e){const o=b([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]),n={date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"};return(a,t)=>{const r=l("pro-descriptions");return i(),u(r,{columns:B(o),detail:n},null,8,["columns"])}}});export{I as D,Q as _,J as a,K as b,O as c,P as d};