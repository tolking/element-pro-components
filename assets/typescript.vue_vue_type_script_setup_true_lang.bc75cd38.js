import{_ as w}from"./index.212ea650.js";import{ay as i,aB as G,aC as L}from"./modules-element-plus.e6bf9f2f.js";import{J as v,b as u,ag as h,o as g,V as S,W as R,Y as T,a7 as N,a as U,_ as D,c as V,S as k,af as F,u as C}from"./modules-vue.f94deb46.js";import{a as A}from"./type.09d0cb13.js";import{d as P}from"./type.70898d0d.js";import{d as B}from"./type.2add69a2.js";const z=v({setup(){const e=u({}),o=u({}),d=u({}),m=[{label:"Date",prop:"date",component:"el-input",add:!0,edit:!0,search:!0,detail:!0},{label:"Name",prop:"name",component:"el-input",add:!0,search:!0,detail:!0},{label:"Address",prop:"address",component:"el-input",add:!0,edit:!0,detail:!0}],b=u([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);return{form:e,serachForm:o,detail:d,data:b,columns:m,beforeOpen:(a,n,t)=>{n==="edit"?e.value=t||{}:n==="detail"&&(d.value=t||{}),a()},search:(a,n,t)=>{i(`search: ${n}`),console.log("search",o.value,n,t),setTimeout(()=>{a()},1e3)},submit:(a,n,t,r,p)=>{i(`submit: ${t}, ${r}`),console.log("submit",e.value,t,r,p),setTimeout(()=>{r?a():n()},1e3)},deleteRow:a=>{i("deleteRow"),console.log("deleteRow",a)}}}});function E(e,o,d,m,b,c){const l=h("pro-crud");return g(),S(l,{modelValue:e.form,"onUpdate:modelValue":o[0]||(o[0]=s=>e.form=s),search:e.serachForm,"onUpdate:search":o[1]||(o[1]=s=>e.serachForm=s),columns:e.columns,menu:{label:"Operations"},data:e.data,detail:e.detail,"before-open":e.beforeOpen,"label-width":"100px",onSearch:e.search,onSubmit:e.submit,onDelete:e.deleteRow},null,8,["modelValue","search","columns","data","detail","before-open","onSearch","onSubmit","onDelete"])}const he=w(z,[["render",E]]),M=v({setup(){const e=u({}),o=u({}),d=u({}),m=[{label:"Date",prop:"date",component:"el-input",add:!0,edit:!0,search:!0,detail:!0},{label:"Name",prop:"name",component:"el-input",add:!0,search:!0,detail:!0},{label:"Address",prop:"address",component:"el-input",add:!0,edit:!0,detail:!0}],b=u([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),c=(a,n,t)=>{n==="edit"?e.value=t||{}:n==="detail"&&(d.value=t||{}),a()},l=(a,n,t)=>{i(`search: ${n}`),console.log("search",o.value,n,t),setTimeout(()=>{a()},1e3)},s=(a,n,t,r,p)=>{i(`submit: ${t}, ${r}`),console.log("submit",e.value,t,r,p),setTimeout(()=>{r?a():n()},1e3)};return{form:e,serachForm:o,columns:m,data:b,detail:d,beforeOpen:c,search:l,submit:s,deleteRow:a=>{i("deleteRow"),console.log("deleteRow",a)}}}});function j(e,o,d,m,b,c){const l=h("pro-crud");return g(),S(l,{modelValue:e.form,"onUpdate:modelValue":o[0]||(o[0]=s=>e.form=s),search:e.serachForm,"onUpdate:search":o[1]||(o[1]=s=>e.serachForm=s),columns:e.columns,menu:{label:"Operations"},data:e.data,detail:e.detail,"before-open":e.beforeOpen,"label-width":"100px",onSearch:e.search,onSubmit:e.submit,onDelete:e.deleteRow},null,8,["modelValue","search","columns","data","detail","before-open","onSearch","onSubmit","onDelete"])}const $e=w(M,[["render",j]]),J=v({setup(){const e=u({"a.b":void 0}),o=u({"a.b":void 0}),d=u({}),m=[{label:"Break",prop:"a.b",component:"el-input",form:!0,search:!0,detail:!0},{label:"Object",prop:"a.b.c",component:"el-input",form:!0,search:!0,detail:!0},{label:"Array",prop:"b[0]",component:"el-input",form:!0,search:!0,detail:!0}],b=[{"a.b":"break nested value",a:{b:{c:"nested value c"}},b:["nested value in array"]}],c=(a,n,t)=>{n==="edit"?e.value=t||{}:n==="detail"?d.value=t||{}:e.value={"a.b":void 0},a()},l=(a,n,t)=>{i(`search: ${n}`),console.log("search",o.value,n,t),setTimeout(()=>{a()},1e3)},s=(a,n,t,r,p)=>{i(`submit: ${t}, ${r}`),console.log("submit",e.value,t,r,p),setTimeout(()=>{r?a():n()},1e3)};return{form:e,serachForm:o,data:b,detail:d,columns:m,beforeOpen:c,search:l,submit:s,deleteRow:a=>{i("deleteRow"),console.log("deleteRow",a)}}}});function W(e,o,d,m,b,c){const l=h("pro-crud");return g(),S(l,{modelValue:e.form,"onUpdate:modelValue":o[0]||(o[0]=s=>e.form=s),search:e.serachForm,"onUpdate:search":o[1]||(o[1]=s=>e.serachForm=s),columns:e.columns,menu:{label:"Operations"},data:e.data,detail:e.detail,"before-open":e.beforeOpen,"label-width":"100px",onSearch:e.search,onSubmit:e.submit,onDelete:e.deleteRow},null,8,["modelValue","search","columns","data","detail","before-open","onSearch","onSubmit","onDelete"])}const ge=w(J,[["render",W]]),Y=v({setup(){const e={label:"Operations",addText:"New",detailText:"View Row",editText:"Edit Row",delText:"Remove",searchText:"Search",searchResetText:"Reset Search",submitText:"Create",resetText:"Reset Form",detail:t=>t.date!=="2016-05-02",edit:t=>t.date!=="2016-05-03",del:t=>t.date!=="2016-05-04",searchReset:!1,detailProps:{type:"success",plain:!0},editProps:{type:"default",plain:!0},delProps:{type:"info",plain:!0}},o=u({}),d=u({}),m=u({}),b=[{label:"Date",prop:"date",component:"el-input",form:!0,detail:!0},{label:"Name",prop:"name",component:"el-input",form:!0,search:!0,detail:!0},{label:"Address",prop:"address",component:"el-input",form:!0,detail:!0}],c=u([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),l=(t,r,p)=>{r==="edit"?o.value=p||{}:r==="detail"&&(m.value=p||{}),t()},s=(t,r,p)=>{i(`search: ${r}`),console.log("search",d.value,r,p),setTimeout(()=>{t()},1e3)},f=(t,r,p,$,O)=>{i(`submit: ${p}, ${$}`),console.log("submit",o.value,p,$,O),setTimeout(()=>{$?t():r()},1e3)};return{form:o,serachForm:d,columns:b,menu:e,data:c,detail:m,beforeOpen:l,search:s,submit:f,reset:()=>{i("reset"),console.log("reset")},deleteRow:t=>{i("deleteRow"),console.log("deleteRow",t)}}}});function q(e,o,d,m,b,c){const l=h("pro-crud");return g(),S(l,{modelValue:e.form,"onUpdate:modelValue":o[0]||(o[0]=s=>e.form=s),search:e.serachForm,"onUpdate:search":o[1]||(o[1]=s=>e.serachForm=s),columns:e.columns,menu:e.menu,data:e.data,detail:e.detail,"before-open":e.beforeOpen,"label-width":"100px",onSearch:e.search,onSearchReset:e.reset,onSubmit:e.submit,onReset:e.reset,onDelete:e.deleteRow},null,8,["modelValue","search","columns","menu","data","detail","before-open","onSearch","onSearchReset","onSubmit","onReset","onDelete"])}const Re=w(Y,[["render",q]]),H=v({setup(){const e=u({}),o=[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],d=A([{label:"Name",prop:"name",component:"el-input"},{label:"Date",prop:"date",component:"el-date-picker",props:{type:"datetimerange",rangeSeparator:"-",startPlaceholder:"start",endPlaceholder:"end"}}]),m=(c,l,s)=>{i(`search: ${l}`),console.log("search",e.value,l,s),setTimeout(()=>{c()},1e3)};return{serachForm:e,columns:o,searchColumns:d,search:m,reset:()=>{i("reset search"),console.log("reset search")}}}});function I(e,o,d,m,b,c){const l=h("pro-crud");return g(),S(l,{search:e.serachForm,"onUpdate:search":o[0]||(o[0]=s=>e.serachForm=s),columns:e.columns,"search-columns":e.searchColumns,onSearch:e.search,onSearchReset:e.reset},null,8,["search","columns","search-columns","onSearch","onSearchReset"])}const ve=w(H,[["render",I]]),K=v({setup(){const e=u({}),o=[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],d=A([{label:"Name",prop:"name",component:"el-input"},{label:"Date",prop:"date",component:"el-date-picker",props:{type:"datetimerange",rangeSeparator:"-",startPlaceholder:"start",endPlaceholder:"end"}}]),m=(c,l,s,f,a)=>{i(`submit: ${s}, ${f}`),console.log("submit",e.value,s,f,a),setTimeout(()=>{f?c():l()},1e3)};return{form:e,columns:o,addColumns:d,submit:m,reset:()=>{i("reset"),console.log("reset")}}}});function Q(e,o,d,m,b,c){const l=h("pro-crud");return g(),S(l,{modelValue:e.form,"onUpdate:modelValue":o[0]||(o[0]=s=>e.form=s),columns:e.columns,"add-columns":e.addColumns,menu:!0,"label-width":"100px",onSubmit:e.submit,onReset:e.reset},null,8,["modelValue","columns","add-columns","onSubmit","onReset"])}const Se=w(K,[["render",Q]]),X=v({setup(){const e=u({}),o=u({}),d=[{label:"Date",prop:"date",component:"el-input",add:!0,detail:!0},{label:"Name",prop:"name",detail:!0},{label:"Address",prop:"address",detail:!0}],m=A([{label:"Name",prop:"name",component:"el-input"},{label:"Date",prop:"date",component:"el-date-picker",props:{type:"datetimerange",rangeSeparator:"-",startPlaceholder:"start",endPlaceholder:"end"}}]),b=u([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),c=(a,n,t)=>{n==="detail"&&(o.value=t||{}),a()},l=(a,n,t,r,p)=>{i(`submit: ${t}, ${r}`),console.log("submit",e.value,t,r,p),setTimeout(()=>{r?a():n()},1e3)};return{form:e,columns:d,detail:o,editColumns:m,data:b,beforeOpen:c,submit:l,reset:()=>{i("reset"),console.log("reset")},deleteRow:a=>{i("deleteRow"),console.log("deleteRow",a)}}}});function Z(e,o,d,m,b,c){const l=h("pro-crud");return g(),S(l,{modelValue:e.form,"onUpdate:modelValue":o[0]||(o[0]=s=>e.form=s),columns:e.columns,"edit-columns":e.editColumns,menu:!0,data:e.data,detail:e.detail,"before-open":e.beforeOpen,"label-width":"100px",onSubmit:e.submit,onReset:e.reset,onDelete:e.deleteRow},null,8,["modelValue","columns","edit-columns","data","detail","before-open","onSubmit","onReset","onDelete"])}const we=w(X,[["render",Z]]),y=v({setup(){const e=u({}),o=u({}),d=[{label:"Date",prop:"date",detail:!0},{label:"Name",prop:"name",detail:!0},{label:"Address",prop:"address",detail:!0}],m=A([{label:"Name",prop:"name",component:"el-input"},{label:"Date",prop:"date",component:"el-date-picker",props:{type:"datetimerange",rangeSeparator:"-",startPlaceholder:"start",endPlaceholder:"end"}}]),b=u([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),c=(a,n,t)=>{n==="edit"?e.value={name:t.name,date:[]}:n==="detail"&&(o.value=t||{}),a()},l=(a,n,t,r,p)=>{i(`submit: ${t}, ${r}`),console.log("submit",e.value,t,r,p),setTimeout(()=>{r?a():n()},1e3)};return{form:e,columns:d,formColumns:m,data:b,detail:o,beforeOpen:c,submit:l,reset:()=>{i("reset"),console.log("reset")},deleteRow:a=>{i("deleteRow"),console.log("deleteRow",a)}}}});function _(e,o,d,m,b,c){const l=h("pro-crud");return g(),S(l,{modelValue:e.form,"onUpdate:modelValue":o[0]||(o[0]=s=>e.form=s),columns:e.columns,"form-columns":e.formColumns,menu:!0,data:e.data,detail:e.detail,"before-open":e.beforeOpen,"label-width":"100px",onSubmit:e.submit,onReset:e.reset,onDelete:e.deleteRow},null,8,["modelValue","columns","form-columns","data","detail","before-open","onSubmit","onReset","onDelete"])}const Te=w(y,[["render",_]]),x=v({setup(){const e=u({}),o=u({}),d=u({}),m=[{label:"Date",prop:"date",component:"el-input",form:!0},{label:"Name",prop:"name"}],b=P([{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]),c=u([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),l=(n,t,r)=>{t==="edit"?e.value=r||{}:t==="detail"&&(d.value=r||{}),n()},s=(n,t,r)=>{i(`search: ${t}`),console.log("search",o.value,t,r),setTimeout(()=>{n()},1e3)},f=(n,t,r,p,$)=>{i(`submit: ${r}, ${p}`),console.log("submit",e.value,r,p,$),setTimeout(()=>{p?n():t()},1e3)};return{form:e,serachForm:o,columns:m,detailColumns:b,data:c,detail:d,beforeOpen:l,search:s,submit:f,deleteRow:n=>{i("deleteRow"),console.log("deleteRow",n)}}}});function ee(e,o,d,m,b,c){const l=h("pro-crud");return g(),S(l,{modelValue:e.form,"onUpdate:modelValue":o[0]||(o[0]=s=>e.form=s),search:e.serachForm,"onUpdate:search":o[1]||(o[1]=s=>e.serachForm=s),columns:e.columns,"detail-columns":e.detailColumns,menu:{label:"Operations"},data:e.data,detail:e.detail,"before-open":e.beforeOpen,"label-width":"100px",onSearch:e.search,onSubmit:e.submit,onDelete:e.deleteRow},null,8,["modelValue","search","columns","detail-columns","data","detail","before-open","onSearch","onSubmit","onDelete"])}const Ce=w(x,[["render",ee]]),oe=v({setup(){const e=u({}),o=u({}),d=u({}),m=[{label:"Date",prop:"date",component:"el-input",form:!0,detail:!0},{label:"Name",prop:"name",component:"el-input",form:!0,search:!0,detail:!0},{label:"Address",prop:"address",component:"el-input",detail:!0}],b=B([{label:"Date",prop:"date"},{label:"User",children:[{label:"Name",prop:"name"},{label:"Address",prop:"address"}]}]),c=u([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),l=(n,t,r)=>{t==="edit"?e.value=r||{}:t==="detail"&&(d.value=r||{}),n()},s=(n,t,r,p,$)=>{i(`submit: ${r}, ${p}`),console.log("submit",e.value,r,p,$),setTimeout(()=>{p?n():t()},1e3)};return{form:e,serachForm:o,columns:m,tableColumns:b,data:c,detail:d,beforeOpen:l,submit:s,reset:()=>{console.log("reset")},deleteRow:n=>{console.log("deleteRow",n)}}}});function te(e,o,d,m,b,c){const l=h("pro-crud");return g(),S(l,{modelValue:e.form,"onUpdate:modelValue":o[0]||(o[0]=s=>e.form=s),search:e.serachForm,"onUpdate:search":o[1]||(o[1]=s=>e.serachForm=s),columns:e.columns,"table-columns":e.tableColumns,menu:{label:"Operations"},data:e.data,detail:e.detail,"before-open":e.beforeOpen,"label-width":"100px",onSubmit:e.submit,onReset:e.reset,onDelete:e.deleteRow},null,8,["modelValue","search","columns","table-columns","data","detail","before-open","onSubmit","onReset","onDelete"])}const Ne=w(oe,[["render",te]]),ne=v({setup(){const e=u({}),o=u({}),d=[{label:"Date",prop:"date",component:"el-input",form:!0,detail:!0},{label:"Name",prop:"name",detail:!0},{label:"Address",prop:"address",detail:!0}],m=u([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),b=(s,f,a)=>{i(`beforeOpen: ${f}`),console.log("beforeOpen",f,a),f==="edit"?e.value=a||{}:f==="detail"&&(o.value=a||{}),s()},c=s=>{i("beforeClose"),console.log("beforeClose"),s()};return{form:e,columns:d,data:m,detail:o,beforeOpen:b,beforeClose:c,deleteRow:s=>{i("deleteRow"),console.log("deleteRow",s)}}}});function se(e,o,d,m,b,c){const l=h("pro-crud");return g(),S(l,{modelValue:e.form,"onUpdate:modelValue":o[0]||(o[0]=s=>e.form=s),columns:e.columns,menu:{label:"Operations"},data:e.data,detail:e.detail,"before-open":e.beforeOpen,"before-close":e.beforeClose,"label-width":"100px",onDelete:e.deleteRow},null,8,["modelValue","columns","data","detail","before-open","before-close","onDelete"])}const De=w(ne,[["render",se]]);const ae=v({setup(){const e=u({}),o=u({}),d=u({}),m=u([{label:"Date",prop:"date",component:"el-input",add:!0,edit:!0,search:!0,detail:!0,render:"--",props:{slots:{suffix:()=>F("span",{className:"el-input__icon"},F(L))}}},{label:"Name",prop:"name",component:"el-input",add:!0,search:!0,detail:!0},{label:"Address",prop:"address",component:"el-input",add:!0,edit:!0,render:a=>F("em",null,a.address)}]),b=u([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),c=(a,n,t)=>{n==="edit"?e.value=t||{}:n==="detail"&&(d.value=t||{}),a()},l=(a,n,t)=>{i(`search: ${n}`),console.log("search",o.value,n,t),setTimeout(()=>{a()},1e3)},s=(a,n,t,r,p)=>{i(`submit: ${t}, ${r}`),console.log("submit",e.value,t,r,p),setTimeout(()=>{r?a():n()},1e3)};return{Refresh:G,form:e,columns:m,serachForm:o,data:b,detail:d,beforeOpen:c,search:l,submit:s,deleteRow:a=>{i("deleteRow"),console.log("deleteRow",a)}}}}),re={style:{"text-align":"center"}},le={key:0,style:{"text-align":"center"}},de=U("span",null,"form slot",-1);function ue(e,o,d,m,b,c){const l=h("el-button"),s=h("pro-column-setting"),f=h("el-tag"),a=h("pro-crud");return g(),S(a,{modelValue:e.form,"onUpdate:modelValue":o[1]||(o[1]=n=>e.form=n),search:e.serachForm,"onUpdate:search":o[2]||(o[2]=n=>e.serachForm=n),columns:e.columns,menu:{label:"Operations"},data:e.data,detail:e.detail,"before-open":e.beforeOpen,selection:"","label-width":"100px",onSearch:e.search,onSubmit:e.submit,onDelete:e.deleteRow},{"menu-right":R(({size:n})=>[T(l,{size:n,type:"danger"},{default:R(()=>[N(" Remove ")]),_:2},1032,["size"])]),menu:R(({size:n})=>[T(l,{size:n,type:"success",link:""},{default:R(()=>[N(" More ")]),_:2},1032,["size"])]),action:R(()=>[T(l,{icon:e.Refresh,circle:"",style:{"margin-right":"8px"}},null,8,["icon"]),T(s,{modelValue:e.columns,"onUpdate:modelValue":o[0]||(o[0]=n=>e.columns=n)},null,8,["modelValue"])]),"dialog-top":R(({type:n})=>[U("p",re," dialog-top "+D(n),1)]),"dialog-bottom":R(({type:n})=>[n==="detail"?(g(),V("p",le," only appears in the detail ")):k("",!0)]),"form-name":R(()=>[de]),"detail-name":R(({item:n,size:t})=>[T(f,{size:t},{default:R(()=>[N(D(n==null?void 0:n.name),1)]),_:2},1032,["size"])]),"table-name":R(({row:n,size:t})=>[T(f,{size:t},{default:R(()=>[N(D(n==null?void 0:n.name),1)]),_:2},1032,["size"])]),"table-name-header":R(({column:n})=>[U("s",null,D(n.label),1)]),_:1},8,["modelValue","search","columns","data","detail","before-open","onSearch","onSubmit","onDelete"])}const Ae=w(ae,[["render",ue]]),Oe=v({__name:"typescript",setup(e){const o=u({}),d=u({}),m=u({}),b={label:"Operations",edit:t=>t.date!=="2016-05-02",del:t=>t.date!=="2016-05-04",searchReset:!1},c=[{label:"Date",prop:"date",component:"el-input",add:!0,edit:!0,search:!0,detail:!0},{label:"Name",prop:"name",component:"el-input",add:!0,search:!0,detail:!0},{label:"Address",prop:"address",component:"el-input",add:!0,edit:!0,detail:!0}],l=u([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),s=(t,r,p)=>{r==="edit"?o.value=p||{}:r==="detail"&&(m.value=p||{}),t()},f=(t,r,p)=>{i(`search: ${r}`),console.log("search",d.value,r,p),setTimeout(()=>{t()},1e3)},a=(t,r,p,$,O)=>{i(`submit: ${p}, ${$}`),console.log("submit",o.value,p,$,O),setTimeout(()=>{$?t():r()},1e3)},n=t=>{i("deleteRow"),console.log("deleteRow",t)};return(t,r)=>{const p=h("pro-crud");return g(),S(p,{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=$=>o.value=$),search:d.value,"onUpdate:search":r[1]||(r[1]=$=>d.value=$),columns:C(c),menu:C(b),data:l.value,detail:m.value,"before-open":C(s),"label-width":"100px",onSearch:C(f),onSubmit:C(a),onDelete:n},null,8,["modelValue","search","columns","menu","data","detail","before-open","onSearch","onSubmit"])}}});export{he as C,Oe as _,$e as a,ge as b,Re as c,ve as d,Se as e,we as f,Te as g,Ce as h,Ne as i,De as j,Ae as k};