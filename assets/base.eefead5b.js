import{_ as u}from"./index.212ea650.js";import{J as l,b as c,ag as i,o as f,V as g}from"./modules-vue.f94deb46.js";const m=l({setup(){const e=c([]),t=[{value:"Go",tag:"go"},{value:"JavaScript",tag:"javascript"},{value:"Python",tag:"python"}];function a(o,n){n(o?t.filter(s=>s.value.indexOf(o.toLowerCase())===0):t)}return{inputTags:e,querySearch:a}}});function d(e,t,a,o,n,s){const r=i("pro-autocomplete-tag");return f(),g(r,{modelValue:e.inputTags,"onUpdate:modelValue":t[0]||(t[0]=p=>e.inputTags=p),"fetch-suggestions":e.querySearch,placeholder:"Please click the space button after input"},null,8,["modelValue","fetch-suggestions"])}const v=u(m,[["render",d]]);export{v as A};