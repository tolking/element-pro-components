import{u as c}from"./index.33ec8670.js";import{I as p}from"./base.9bc0a8f4.js";import{H as l,o as u,c as i,P as t,M as a,a as n,a4 as s}from"./modules-vue.44fa8951.js";import"./modules-element-plus.c099898d.js";const k={class:"markdown-body"},r=n("h1",{id:"internationalization",tabindex:"-1"},[s("Internationalization "),n("a",{class:"header-anchor",href:"#internationalization","aria-hidden":"true"},"#")],-1),d=n("h2",{id:"configuration",tabindex:"-1"},[s("configuration "),n("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#")],-1),g=n("p",null,"Like elememt-plus, international configuration can be inject through ElConfigProvider",-1),m=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(`
    `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" 20px")]),n("span",{class:"token punctuation"},'"')])]),s(`
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
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
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
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("form"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},","),s(" isValid"),n("span",{class:"token punctuation"},","),s(" invalidFields"),n("span",{class:"token punctuation"},")"),s(`
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
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),f=n("p",null,"@/demo/I18n/base.vue",-1),h=n("h2",{id:"configurable-fields",tabindex:"-1"},[s("Configurable fields "),n("a",{class:"header-anchor",href:"#configurable-fields","aria-hidden":"true"},"#")],-1),b=n("div",{class:"language-js"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token keyword"},"const"),s(" locale "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),C={setup(v,{expose:o}){return o({frontmatter:{title:"Internationalization",meta:[{name:"description",content:"How to configure Internationalization of element-pro-components"},{property:"og:title",content:"Internationalization"}]}}),c({title:"Internationalization",meta:[{name:"description",content:"How to configure Internationalization of element-pro-components"},{property:"og:title",content:"Internationalization"}]}),(w,x)=>{const e=l("pro-code");return u(),i("div",k,[r,d,g,t(e,null,{source:a(()=>[t(p)]),code:a(()=>[m]),default:a(()=>[f]),_:1}),h,b])}}};export{C as default};
