import{P as B}from"./modules-element-plus.5d87d607.js";import{d as D,h as n,as as M,q,$ as c,o as O,T as $,U as o,W as s,a5 as u,Y as v,a as x}from"./modules-vue.943ce5f3.js";const y=u(" change size "),E=u(" More "),F=x("span",null,"search slot",-1),W=u("Export"),Y=x("span",null,"test form slot",-1),j=u(" Prev "),H=u(" Next "),X=D({name:"Crud",setup(I){const p=n("large"),b=n({}),i=n({}),f=n({}),h=n({}),C=n({addProps:{icon:M(B)},label:"Menu",edit:a=>a.date!=="2016-05-02"}),g=n(1),z=n(10),N=n(50),_=n([{label:"Date",prop:"date",component:"el-input",add:!0,edit:!0,search:!0,detail:!0,rules:{required:!0,message:"please input name",trigger:"blur"}},{label:"Name",prop:"name",component:"el-input",add:!0,edit:!0,detail:!0},{label:"Address",prop:"address",component:"el-input",detail:!0}]),T=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],V=(a,t,l)=>{console.log("beforeOpen",t,l),t==="edit"?i.value=l||{}:t==="detail"&&(h.value=l||{}),a()},U=(a,t,l)=>{console.log("search",f.value,t,l),setTimeout(()=>{a()},1e3)},A=(a,t,l,r,m)=>{console.log("submit",i.value,l,r,m),setTimeout(()=>{r?a():t()},1e3)};q(()=>{console.log(b.value)});function L(a){console.log("beforeClose"),a()}function R(){console.log("load",g.value)}function S(){console.log("reset")}function k(a){console.log("deleteRow",a)}function w(){p.value=p.value==="small"?"large":"small"}return(a,t)=>{const l=c("pro-column-setting"),r=c("el-button"),m=c("el-tag"),G=c("pro-crud"),P=c("pro-card");return O(),$(P,{shadow:"never"},{default:o(()=>[s(G,{ref_key:"crud",ref:b,modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=e=>i.value=e),search:f.value,"onUpdate:search":t[2]||(t[2]=e=>f.value=e),"current-page":g.value,"onUpdate:current-page":t[3]||(t[3]=e=>g.value=e),"page-size":z.value,"onUpdate:page-size":t[4]||(t[4]=e=>z.value=e),columns:_.value,data:T,detail:h.value,total:N.value,menu:C.value,size:p.value,"before-open":V,"before-close":L,selection:"",expand:"",border:"","label-width":"100px","append-to-body":"",class:"ffff",onSearch:U,onSearchReset:S,onSubmit:A,onReset:S,onDelete:k,onLoad:R},{"table-expand":o(({row:e})=>[u(v(e),1)]),action:o(({size:e})=>[s(l,{modelValue:_.value,"onUpdate:modelValue":t[0]||(t[0]=d=>_.value=d),size:e,trigger:"click"},null,8,["modelValue","size"])]),"menu-right":o(({size:e})=>[s(r,{size:e,onClick:w},{default:o(()=>[y]),_:2},1032,["size"])]),menu:o(({size:e,row:d})=>[s(r,{size:e,link:"",onClick:J=>k(d)},{default:o(()=>[E]),_:2},1032,["size","onClick"])]),"search-date-label":o(()=>[F]),"search-menu-right":o(()=>[s(r,null,{default:o(()=>[W]),_:1})]),"form-name":o(()=>[Y]),"table-name":o(({row:e,size:d})=>[s(m,{size:d},{default:o(()=>[u(v(e.name),1)]),_:2},1032,["size"])]),"detail-name":o(({item:e,size:d})=>[s(m,{size:d},{default:o(()=>[u(v(e.name),1)]),_:2},1032,["size"])]),"form-menu-left":o(({loading:e})=>[s(r,{loading:e},{default:o(()=>[j]),_:2},1032,["loading"])]),"form-menu-right":o(({loading:e})=>[s(r,{loading:e},{default:o(()=>[H]),_:2},1032,["loading"])]),_:1},8,["modelValue","search","current-page","page-size","columns","detail","total","menu","size"])]),_:1})}}});export{X as default};
