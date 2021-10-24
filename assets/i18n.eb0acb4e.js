import{u as w}from"./index.e0b94cb9.js";import{r as i,R as e,z as x,A as z,U as c,O as p,u as a,f as S,E as n,a3 as s}from"./modules-vue.fb389e96.js";import"./modules-element-plus.7b597c42.js";const q={class:"markdown-body"},R=n("h1",{id:"internationalization",tabindex:"-1"},[s("Internationalization "),n("a",{class:"header-anchor",href:"#internationalization","aria-hidden":"true"},"#")],-1),V=n("h2",{id:"configuration",tabindex:"-1"},[s("configuration "),n("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#")],-1),I=n("p",null,"Like elememt-plus, international configuration can be inject through ElConfigProvider",-1),j=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(`
    `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s("20px")]),n("span",{class:"token punctuation"},'"')])]),s(`
    `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("toggleLocale"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    Switch lang
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-config-provider")]),s(),n("span",{class:"token attr-name"},":locale"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("toggle ? locale1 : locale2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("pro-form")]),s(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("form"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("100px"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("submit"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-config-provider")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" form "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" columns "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),s(`
        prop`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
        component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" toggle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" locale1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'en'"),n("span",{class:"token punctuation"},","),s(`
      pro`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        form`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          submit`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Submit'"),n("span",{class:"token punctuation"},","),s(`
          reset`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Reset'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" locale2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'zh-cn'"),n("span",{class:"token punctuation"},","),s(`
      pro`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        form`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          submit`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u63D0 \u4EA4'"),n("span",{class:"token punctuation"},","),s(`
          reset`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u91CD \u7F6E'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"submit"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("done"),n("span",{class:"token punctuation"},","),s(" isValid"),n("span",{class:"token punctuation"},","),s(" invalidFields")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("isValid"),n("span",{class:"token punctuation"},","),s(" invalidFields"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"toggleLocale"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      toggle`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),s("toggle"),n("span",{class:"token punctuation"},"."),s(`value
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      form`),n("span",{class:"token punctuation"},","),s(`
      columns`),n("span",{class:"token punctuation"},","),s(`
      toggle`),n("span",{class:"token punctuation"},","),s(`
      locale1`),n("span",{class:"token punctuation"},","),s(`
      locale2`),n("span",{class:"token punctuation"},","),s(`
      submit`),n("span",{class:"token punctuation"},","),s(`
      toggleLocale`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),C=s(" Switch lang "),L=n("h2",{id:"configurable-fields",tabindex:"-1"},[s("Configurable fields "),n("a",{class:"header-anchor",href:"#configurable-fields","aria-hidden":"true"},"#")],-1),N=n("div",{class:"language-js"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token keyword"},"const"),s(" locale "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  pro`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    form`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      submit`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Submit'"),n("span",{class:"token punctuation"},","),s(`
      reset`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Reset'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    crud`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      add`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Add'"),n("span",{class:"token punctuation"},","),s(`
      edit`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Edit'"),n("span",{class:"token punctuation"},","),s(`
      del`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Delete'"),n("span",{class:"token punctuation"},","),s(`
      submit`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Submit'"),n("span",{class:"token punctuation"},","),s(`
      reset`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Reset'"),n("span",{class:"token punctuation"},","),s(`
      search`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Search'"),n("span",{class:"token punctuation"},","),s(`
      searchReset`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Reset'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),U={setup(E,{expose:m}){m({frontmatter:{title:"Internationalization",meta:[{name:"description",content:"How to configure Internationalization of element-pro-components"},{property:"og:title",content:"Internationalization"}]}}),w({title:"Internationalization",meta:[{name:"description",content:"How to configure Internationalization of element-pro-components"},{property:"og:title",content:"Internationalization"}]});let t=i({}),d=i([{label:"Name",prop:"name",component:"el-input"}]),l=i(!0),g={name:"en",pro:{form:{submit:"Submit",reset:"Reset"}}},f={name:"zh-cn",pro:{form:{submit:"\u63D0 \u4EA4",reset:"\u91CD \u7F6E"}}},b=(k,o,u)=>{console.log(o,u),setTimeout(()=>{k()},1e3)},h=()=>{l.value=!l.value};return(k,o)=>{const u=e("el-button"),_=e("pro-form"),v=e("el-config-provider"),y=e("pro-code");return x(),z("div",q,[R,V,I,c(y,null,{code:p(()=>[j]),default:p(()=>[c(u,{type:"primary",style:{"margin-bottom":"20px"},onClick:a(h)},{default:p(()=>[C]),_:1},8,["onClick"]),c(v,{locale:a(l)?a(g):a(f)},{default:p(()=>[c(_,{modelValue:a(t),"onUpdate:modelValue":o[0]||(o[0]=r=>S(t)?t.value=r:t=r),columns:a(d),"label-width":"100px",onSubmit:a(b)},null,8,["modelValue","columns","onSubmit"])]),_:1},8,["locale"])]),_:1}),L,N])}}};export{U as default};
