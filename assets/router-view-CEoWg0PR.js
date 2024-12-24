import{_ as c,r as n,o as a,c as l,g as f,a9 as h,x as k,aa as V,h as g,a as b,e as d,F as w,ab as S,ac as C,w as r,b as _,H as z,T as B,X as F}from"./index-By7wvJ5L.js";const I={};function R(o,t){const e=n("pro-layout");return a(),l(e,{class:"docs-layout"})}const oo=c(I,[["render",R]]),U={};function E(o,t){const e=n("pro-layout");return a(),l(e,{mode:"horizontal",class:"docs-layout"})}const to=c(U,[["render",E]]),T=f({setup(){const o=h();return{routes:k(()=>{var s;const e=o.options.routes;return((s=e.find(p=>p.path==="/en-US/components/"))==null?void 0:s.children)||e})}}});function M(o,t,e,s,p,i){const u=n("pro-layout");return a(),l(u,{routes:o.routes,class:"docs-layout"},null,8,["routes"])}const eo=c(T,[["render",M]]),D={};function G(o,t){const e=n("pro-layout");return a(),l(e,{transition:"el-fade-in",class:"docs-layout"})}const no=c(D,[["render",G]]),H={};function K(o,t){const e=n("pro-layout");return a(),l(e,{"keep-alive":"",include:/^Keep/,class:"docs-layout"})}const ao=c(H,[["render",K]]),N=f({setup(){const o=h(),t=[{path:"/en-US/components/layout",meta:{title:"Layout"}},{path:"https://github.com/tolking/element-pro-components",meta:{title:"Github"}},{path:"https://github.com/tolking/element-admin-template",meta:{title:"Template"}}];function e(s){V(s)?window.open(s):o.push(s)}return{routes:t,handleSelect:e}}});function A(o,t,e,s,p,i){const u=n("pro-layout");return a(),l(u,{routes:o.routes,router:!1,class:"docs-layout",onSelect:o.handleSelect},null,8,["routes","onSelect"])}const so=c(N,[["render",A]]),P=f({setup(){return{routes:[{path:"/one",component:{template:"one page"},meta:{title:"one",group:!0},children:[{path:"/one/index",component:{template:"one index page"},meta:{title:"oneIndex"}},{path:"/one/info",component:{template:"one info page"},meta:{title:"oneInfo"}}]},{path:"/two",component:{template:"two page"},meta:{title:"two",group:!0},children:[{path:"/two/index",component:{template:"two page"},meta:{title:"twoIndex"}},{path:"/two/info",component:{template:"two page"},meta:{title:"twoInfo"}}]}]}}});function X(o,t,e,s,p,i){const u=n("pro-layout");return a(),l(u,{routes:o.routes,class:"docs-layout"},null,8,["routes"])}const ro=c(P,[["render",X]]),j=f({setup(){return{mode:g("vertical"),data:[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}]}}});function q(o,t,e,s,p,i){const u=n("pro-radio-button"),y=n("pro-layout");return a(),b(w,null,[d(u,{modelValue:o.mode,"onUpdate:modelValue":t[0]||(t[0]=$=>o.mode=$),data:o.data,style:{"margin-bottom":"16px"}},null,8,["modelValue","data"]),d(y,{mode:o.mode,class:"docs-layout"},null,8,["mode"])],64)}const lo=c(j,[["render",q],["__scopeId","data-v-ed71baf2"]]),J=f({components:{Expand:S,Fold:C},setup(){return{mode:g("vertical"),data:[{value:"vertical",label:"Menu vertical"},{value:"horizontal",label:"Menu horizontal"}]}}}),O={style:{"line-height":"54px"}};function Q(o,t,e,s,p,i){const u=n("pro-radio-button"),y=n("Expand"),$=n("Fold"),v=n("el-icon"),x=n("pro-layout");return a(),b(w,null,[d(u,{modelValue:o.mode,"onUpdate:modelValue":t[0]||(t[0]=m=>o.mode=m),data:o.data,style:{"margin-bottom":"16px"}},null,8,["modelValue","data"]),d(x,{mode:o.mode,class:"docs-layout"},{logo:r(({collapse:m})=>[_("span",O,z(m?"L":"logo"),1)]),footer:r(()=>t[1]||(t[1]=[_("p",null,"footer",-1)])),"collapse-button":r(({collapse:m,toggleShow:L})=>[d(v,{size:30,onClick:L},{default:r(()=>[m?(a(),l(y,{key:0})):(a(),l($,{key:1}))]),_:2},1032,["onClick"])]),"header-left":r(()=>t[2]||(t[2]=[_("span",null,"header-left",-1)])),"header-right":r(()=>t[3]||(t[3]=[_("span",null,"header-right",-1)])),"header-bottom":r(()=>t[4]||(t[4]=[_("span",null,"header-bottom",-1)])),default:r(()=>t[5]||(t[5]=[_("p",null,"default",-1)])),_:1},8,["mode"])],64)}const uo=c(J,[["render",Q]]),W={};function Y(o,t){const e=n("pro-card"),s=n("router-view",!0),p=n("pro-layout");return a(),l(p,{class:"docs-layout"},{default:r(()=>[d(s,null,{default:r(({Component:i,route:u})=>[d(B,{name:"el-fade-in",mode:"out-in",appear:""},{default:r(()=>[(a(),l(e,{key:u.fullPath,shadow:"never"},{default:r(()=>[(a(),l(F(i)))]),_:2},1024))]),_:2},1024)]),_:1})]),_:1})}const co=c(W,[["render",Y]]);export{oo as L,to as a,eo as b,no as c,ao as d,so as e,ro as f,lo as g,uo as h,co as i};