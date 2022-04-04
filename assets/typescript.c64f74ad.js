import{_ as d}from"./index.4595b445.js";import{d as c,k as u,_ as m,o as p,S as $,c as S,a as w,X as L,V as _,Q as y,am as C,T as v,M as k,O as T,a2 as h,u as U}from"./modules-vue.c9056131.js";import{d as F,a as i,b}from"./type.09d0cb13.js";import{ae as N,ad as A,L as R,af as B}from"./modules-element-plus.f3e98165.js";const M=c({setup(){const o=u({});return{form:o,columns:[{label:"Name",prop:"name",component:"el-input"},{label:"Address",prop:"address",component:"el-input"}],submit:(t,r,l)=>{console.log(o.value,r,l),setTimeout(()=>{t()},1e3)}}}});function j(o,e,s,t,r,l){const n=m("pro-form");return p(),$(n,{modelValue:o.form,"onUpdate:modelValue":e[0]||(e[0]=a=>o.form=a),columns:o.columns,"label-width":"100px",onSubmit:o.submit},null,8,["modelValue","columns","onSubmit"])}var wo=d(M,[["render",j]]);const G=c({setup(){const o=F({submitText:"Create",reset:!1}),e=u({}),s=i([{label:"Name",prop:"name",component:"el-input"},{label:"Address",prop:"address",component:"el-input"}]),t=b((r,l,n)=>{console.log(e.value,l,n),setTimeout(()=>{r()},1e3)});return{menu:o,form:e,columns:s,submit:t}}});function z(o,e,s,t,r,l){const n=m("pro-form");return p(),$(n,{modelValue:o.form,"onUpdate:modelValue":e[0]||(e[0]=a=>o.form=a),columns:o.columns,menu:o.menu,"label-width":"100px",onSubmit:o.submit},null,8,["modelValue","columns","menu","onSubmit"])}var yo=d(G,[["render",z]]);const O=c({setup(){const o=u({"a.b":void 0}),e=i([{label:"Break",prop:"a.b",component:"el-input"},{label:"Object",prop:"a.b.c",component:"el-input"},{label:"Array",prop:"b[0]",component:"el-input"}]),s=b((t,r,l)=>{console.log(o.value,r,l),setTimeout(()=>{t()},1e3)});return{form:o,columns:e,submit:s}}});function W(o,e,s,t,r,l){const n=m("pro-form");return p(),S(y,null,[w("p",null,L(o.form),1),_(n,{modelValue:o.form,"onUpdate:modelValue":e[0]||(e[0]=a=>o.form=a),columns:o.columns,"label-width":"100px",onSubmit:o.submit},null,8,["modelValue","columns","onSubmit"])],64)}var ko=d(O,[["render",W]]);const q=c({setup(){const o=u({}),e=u([{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]),s=i([{label:"input",prop:"input",component:"el-input",props:{clearable:!0,placeholder:"Please input",prefixIcon:C(N),slots:{append:()=>"Search"}}},{label:"input-tag",prop:"inputTag",component:"pro-input-tag",props:{placeholder:"Please click the space button after input"}},{label:"radio",prop:"radio",component:"pro-radio",props:{data:e.value}},{label:"checkbox",prop:"checkbox",component:"pro-checkbox",props:{data:e.value}},{label:"select",prop:"select",component:"pro-select",props:{data:e.value}}]),t=b((r,l,n)=>{console.log(o.value,l,n),setTimeout(()=>{r()},1e3)});return{form:o,columns:s,submit:t}}});function J(o,e,s,t,r,l){const n=m("pro-form");return p(),$(n,{modelValue:o.form,"onUpdate:modelValue":e[0]||(e[0]=a=>o.form=a),columns:o.columns,"label-width":"100px",onSubmit:o.submit},null,8,["modelValue","columns","onSubmit"])}var To=d(q,[["render",J]]);const E=c({setup(){const o=u([{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]),e=u({}),s=u(i([{label:"radio",prop:"radio",component:"pro-radio",props:{data:o}},{label:"switch",prop:"switch",component:C(A)}])),t=b((r,l,n)=>{console.log(e.value,l,n),setTimeout(()=>{r()},1e3)});return{form:e,columns:s,submit:t}}});function H(o,e,s,t,r,l){const n=m("pro-form");return p(),$(n,{modelValue:o.form,"onUpdate:modelValue":e[0]||(e[0]=a=>o.form=a),columns:o.columns,gutter:20,"label-width":"100px",onSubmit:o.submit},null,8,["modelValue","columns","onSubmit"])}var Uo=d(E,[["render",H]]);const I=c({components:{Plus:R,PictureRounded:B},setup(){const o=u({}),e=i([{prop:"slot"}]),s=b((r,l,n)=>{console.log(o.value,l,n),setTimeout(()=>{r()},1e3)});function t(r,l){const n=new FileReader;return n.onloadend=a=>l(a.target.result),n.readAsDataURL(r),!1}return{form:o,columns:e,submit:s,beforeUpload:t}}}),Q=w("span",null,"picture",-1),X=["src"];function K(o,e,s,t,r,l){const n=m("picture-rounded"),a=m("plus"),f=m("el-upload"),g=m("pro-form");return p(),$(g,{modelValue:o.form,"onUpdate:modelValue":e[0]||(e[0]=V=>o.form=V),columns:o.columns,"label-width":"100px",onSubmit:o.submit},{"slot-label":v(()=>[_(n,{class:"icon-picture"}),Q]),slot:v(({value:V,setValue:P})=>[_(f,{"show-file-list":!1,"before-upload":D=>o.beforeUpload(D,P),action:"",class:"avatar-uploader"},{default:v(()=>[V?(p(),S("img",{key:0,src:V,class:"avatar"},null,8,X)):(p(),$(a,{key:1,class:"icon-uploader"}))]),_:2},1032,["before-upload"])]),_:1},8,["modelValue","columns","onSubmit"])}var Co=d(I,[["render",K]]);const Y=c({setup(){const o=F({submitText:"Create",reset:!1}),e=u({}),s=i([{label:"Name",prop:"name",component:"el-input"},{label:"Address",prop:"address",component:"el-input"}]),t=b((r,l,n)=>{console.log(e.value,l,n),setTimeout(()=>{r()},1e3)});return{menu:o,form:e,columns:s,submit:t}}});function Z(o,e,s,t,r,l){const n=m("pro-form");return p(),$(n,{modelValue:o.form,"onUpdate:modelValue":e[0]||(e[0]=a=>o.form=a),columns:o.columns,menu:o.menu,"label-width":"100px",onSubmit:o.submit},null,8,["modelValue","columns","menu","onSubmit"])}var Po=d(Y,[["render",Z]]);const x=c({setup(){const o=u({}),e=i([{label:"Goods",prop:"name",component:"el-input"},{label:"Spec",prop:"spec",size:"small",max:3,children:[{label:"Weight",prop:"weight",component:"el-input"},{label:"Size",prop:"size",max:1,children:[{label:"Length",prop:"length",component:"el-input"},{label:"Width",prop:"width",component:"el-input"},{label:"Height",prop:"height",component:"el-input"}]}]}]),s=b((t,r,l)=>{console.log(o.value,r,l),setTimeout(()=>{t()},1e3)});return{form:o,columns:e,submit:s}}});function oo(o,e,s,t,r,l){const n=m("pro-form");return p(),$(n,{modelValue:o.form,"onUpdate:modelValue":e[0]||(e[0]=a=>o.form=a),columns:o.columns,"label-width":"100px",onSubmit:o.submit},null,8,["modelValue","columns","onSubmit"])}var Do=d(x,[["render",oo]]);const eo=c({setup(){const o=u({}),e=u({date:{required:!0,message:"Please input date",trigger:"blur"},user:{required:!0,message:"Please input user",trigger:"blur"}}),s=i([{label:"Date",prop:"date",component:"el-input"},{label:"User",prop:"user",max:3,size:"small",children:[{label:"Name",prop:"name",component:"el-input",rules:{required:!0,message:"Please input Name",trigger:"blur"}},{label:"Address",prop:"address",component:"el-input"}]}]),t=b((l,n,a)=>{console.log(o.value,n,a),setTimeout(()=>{l()},1e3)});function r(){console.log("reset form")}return{form:o,rules:e,columns:s,submit:t,resetForm:r}}});function no(o,e,s,t,r,l){const n=m("pro-form");return p(),$(n,{modelValue:o.form,"onUpdate:modelValue":e[0]||(e[0]=a=>o.form=a),columns:o.columns,rules:o.rules,"label-width":"100px",onSubmit:o.submit,onReset:o.resetForm},null,8,["modelValue","columns","rules","onSubmit","onReset"])}var Lo=d(eo,[["render",no]]);const lo=c({setup(){const o=F({submit:!1,reset:!1}),e=u(0),s=u({}),t=u(i([{label:"Label-0",prop:"prop0",component:"el-input"}])),r=b((a,f,g)=>{console.log(s.value,f,g),setTimeout(()=>{a()},1e3)});function l(){e.value++,t.value.push({label:"Label-"+e.value,prop:"prop"+e.value,component:"el-input"})}function n(){const a=Math.floor(Math.random()*t.value.length);t.value.splice(a,1)}return{menu:o,form:s,columns:t,submit:r,add:l,del:n}}}),to=h(" Add One "),so=h(" Delete One ");function ro(o,e,s,t,r,l){const n=m("el-button"),a=m("pro-form");return p(),$(a,{modelValue:o.form,"onUpdate:modelValue":e[0]||(e[0]=f=>o.form=f),columns:o.columns,menu:o.menu,"label-width":"100px",onSubmit:o.submit},{"menu-left":v(()=>[k(_(n,{onClick:o.add},{default:v(()=>[to]),_:1},8,["onClick"]),[[T,o.columns.length<5]])]),"menu-right":v(()=>[k(_(n,{onClick:o.del},{default:v(()=>[so]),_:1},8,["onClick"]),[[T,o.columns.length]])]),_:1},8,["modelValue","columns","menu","onSubmit"])}var No=d(lo,[["render",ro]]);const ao=c({setup(){const o=u({}),e=i([{label:"Goods",prop:"name",component:"el-input",span:24},{label:"Weight",prop:"weight",component:"el-input",xs:24,md:12},{label:"Count",prop:"count",component:"el-input",xs:24,md:12},{label:"Length",prop:"length",component:"el-input",xs:24,md:8},{label:"Width",prop:"width",component:"el-input",xs:24,md:8},{label:"Height",prop:"height",component:"el-input",xs:24,md:8},{label:"Price",prop:"price",component:"el-input",xs:24,md:12},{label:"MarketPrice",prop:"marketPrice",component:"el-input",xs:24,md:12}]),s=b((t,r,l)=>{console.log(o.value,r,l),setTimeout(()=>{t()},1e3)});return{form:o,columns:e,submit:s}}});function uo(o,e,s,t,r,l){const n=m("pro-form");return p(),$(n,{modelValue:o.form,"onUpdate:modelValue":e[0]||(e[0]=a=>o.form=a),columns:o.columns,gutter:20,"label-width":"100px",onSubmit:o.submit},null,8,["modelValue","columns","onSubmit"])}var Ao=d(ao,[["render",uo]]);const mo=c({setup(){const o=F({submitText:"Search",reset:!1}),e=u({}),s=i([{label:"Name",prop:"name",component:"el-input"},{label:"Address",prop:"address",component:"el-input"}]),t=b((r,l,n)=>{console.log(e.value,l,n),setTimeout(()=>{r()},1e3)});return{menu:o,form:e,columns:s,submit:t}}});function po(o,e,s,t,r,l){const n=m("pro-form");return p(),$(n,{modelValue:o.form,"onUpdate:modelValue":e[0]||(e[0]=a=>o.form=a),columns:o.columns,menu:o.menu,inline:"",onSubmit:o.submit},null,8,["modelValue","columns","menu","onSubmit"])}var Ro=d(mo,[["render",po]]);const io=c({setup(){const o=u(void 0),e=u({}),s=i([{label:"Name",prop:"name",component:"el-input"},{label:"Address",prop:"address",component:"el-input"}]),t=[{label:"Default",value:void 0},{label:"Left",value:"left"},{label:"Right",value:"right"},{label:"Top",value:"top"}],r=b((l,n,a)=>{console.log(e.value,n,a),setTimeout(()=>{l()},1e3)});return{labelPosition:o,data:t,form:e,columns:s,submit:r}}});function co(o,e,s,t,r,l){const n=m("pro-radio-button"),a=m("pro-form");return p(),S(y,null,[_(n,{modelValue:o.labelPosition,"onUpdate:modelValue":e[0]||(e[0]=f=>o.labelPosition=f),data:o.data,style:{"margin-bottom":"18px"}},null,8,["modelValue","data"]),_(a,{modelValue:o.form,"onUpdate:modelValue":e[1]||(e[1]=f=>o.form=f),columns:o.columns,"label-position":o.labelPosition,"label-width":"100px",onSubmit:o.submit},null,8,["modelValue","columns","label-position","onSubmit"])],64)}var Bo=d(io,[["render",co]]);const bo=c({setup(){const o=u([]),e=u({}),s=u(i([])),t=b((a,f,g)=>{console.log(e.value,f,g),setTimeout(()=>{a()},1e3)});return{form:e,columns:s,submit:t,createForm:()=>{s.value=i([{label:"Name",prop:"name",component:"el-input"},{label:"Language",prop:"language",component:"pro-radio",props:{data:o}}])},createDict:()=>{o.value=[{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]},destroyForm:()=>{s.value=[],o.value=[]}}}}),fo={style:{"margin-bottom":"20px"}},$o=h(" Load Form "),_o=h(" Load Dict "),vo=h(" Destroy ");function go(o,e,s,t,r,l){const n=m("el-button"),a=m("pro-form");return p(),S(y,null,[w("div",fo,[_(n,{type:"primary",onClick:o.createForm},{default:v(()=>[$o]),_:1},8,["onClick"]),_(n,{type:"info",onClick:o.createDict},{default:v(()=>[_o]),_:1},8,["onClick"]),_(n,{type:"danger",onClick:o.destroyForm},{default:v(()=>[vo]),_:1},8,["onClick"])]),_(a,{modelValue:o.form,"onUpdate:modelValue":e[0]||(e[0]=f=>o.form=f),columns:o.columns,"label-width":"100px",onSubmit:o.submit},null,8,["modelValue","columns","onSubmit"])],64)}var Mo=d(bo,[["render",go]]);const jo=c({setup(o){const e=u({}),s=i([{label:"Name",prop:"name",component:"el-input"},{label:"Address",prop:"address",component:"el-input"}]),t=b((r,l,n)=>{console.log(e.value,l,n),setTimeout(()=>{r()},1e3)});return(r,l)=>{const n=m("pro-form");return p(),$(n,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=a=>e.value=a),columns:U(s),"label-width":"100px",onSubmit:U(t)},null,8,["modelValue","columns","onSubmit"])}}});export{wo as F,jo as _,yo as a,ko as b,To as c,Uo as d,Co as e,Po as f,Do as g,Lo as h,No as i,Ao as j,Ro as k,Bo as l,Mo as m};
