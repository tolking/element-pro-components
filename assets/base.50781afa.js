import{_ as c}from"./index.212ea650.js";import{J as r,b as o,ag as s,o as u,V as b}from"./modules-vue.f94deb46.js";const i=r({setup(){const e=o([]),a=o([{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]);return{checkbox:e,data:a}}});function h(e,a,n,p,d,v){const t=s("pro-checkbox");return u(),b(t,{modelValue:e.checkbox,"onUpdate:modelValue":a[0]||(a[0]=l=>e.checkbox=l),data:e.data},null,8,["modelValue","data"])}const y=c(i,[["render",h]]),k=r({setup(){const e=o([]),a=o([{value:"Go",label:"go",disabled:!0},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]);return{checkbox:e,list:a}}});function m(e,a,n,p,d,v){const t=s("pro-checkbox");return u(),b(t,{modelValue:e.checkbox,"onUpdate:modelValue":a[0]||(a[0]=l=>e.checkbox=l),data:e.list},null,8,["modelValue","data"])}const C=c(k,[["render",m]]),f=r({setup(){const e=o([]),a=o({value:"label",label:"value"}),n=o([{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]);return{checkbox:e,config:a,data:n}}});function $(e,a,n,p,d,v){const t=s("pro-checkbox");return u(),b(t,{modelValue:e.checkbox,"onUpdate:modelValue":a[0]||(a[0]=l=>e.checkbox=l),data:e.data,config:e.config},null,8,["modelValue","data","config"])}const D=c(f,[["render",$]]),_=r({setup(){const e=o([]),a=o([{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]);return{checkboxbutton:e,data:a}}});function x(e,a,n,p,d,v){const t=s("pro-checkbox-button");return u(),b(t,{modelValue:e.checkboxbutton,"onUpdate:modelValue":a[0]||(a[0]=l=>e.checkboxbutton=l),data:e.data},null,8,["modelValue","data"])}const J=c(_,[["render",x]]);export{y as C,C as a,D as b,J as c};