import{u as p}from"./index.562c20fb.js";import{I as c}from"./base.5efea81e.js";import{G as l,o as r,c as u,Q as t,O as s,a as n,$ as a}from"./modules-vue.173e2d76.js";import"./modules-element-plus.399b8831.js";const i={class:"markdown-body"},k=n("h1",{id:"internationalization",tabindex:"-1"},[a("Internationalization "),n("a",{class:"header-anchor",href:"#internationalization","aria-hidden":"true"},"#")],-1),d=n("h2",{id:"configuration",tabindex:"-1"},[a("configuration "),n("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#")],-1),g=n("p",null,"Like elememt-plus, international configuration can be inject through ElConfigProvider",-1),m=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("el-button")]),a(`
    `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),a(" 20px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("toggleLocale"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    Switch lang
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("el-button")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("el-config-provider")]),a(),n("span",{class:"token attr-name"},":locale"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("toggle ? locale1 : locale2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("pro-form")]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("columns"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("100px"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("el-config-provider")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" form "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" columns "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" toggle "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" locale1 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'en'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"pro"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"form"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"submit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Submit'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"reset"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Reset'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" locale2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zh-cn'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"pro"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"form"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"submit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u63D0 \u4EA4'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"reset"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91CD \u7F6E'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"submit"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("done"),n("span",{class:"token punctuation"},","),a(" isValid"),n("span",{class:"token punctuation"},","),a(" invalidFields")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("form"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},","),a(" isValid"),n("span",{class:"token punctuation"},","),a(" invalidFields"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"toggleLocale"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      toggle`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token operator"},"!"),a("toggle"),n("span",{class:"token punctuation"},"."),a(`value
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      form`),n("span",{class:"token punctuation"},","),a(`
      columns`),n("span",{class:"token punctuation"},","),a(`
      toggle`),n("span",{class:"token punctuation"},","),a(`
      locale1`),n("span",{class:"token punctuation"},","),a(`
      locale2`),n("span",{class:"token punctuation"},","),a(`
      submit`),n("span",{class:"token punctuation"},","),a(`
      toggleLocale`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),y=n("p",null,"@/demo/I18n/base.vue",-1),f=n("h2",{id:"configurable-fields",tabindex:"-1"},[a("Configurable fields "),n("a",{class:"header-anchor",href:"#configurable-fields","aria-hidden":"true"},"#")],-1),h=n("div",{class:"language-js"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token keyword"},"const"),a(" locale "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"pro"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"form"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"submit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Submit'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"reset"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Reset'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"crud"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"add"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Add'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"edit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Edit'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"del"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Delete'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"submit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Submit'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"reset"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Reset'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"search"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Search'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"searchReset"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Reset'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),R="Internationalization",S=[{name:"description",content:"How to configure Internationalization of element-pro-components"},{property:"og:title",content:"Internationalization"}],V={setup(b,{expose:o}){return o({frontmatter:{title:"Internationalization",meta:[{name:"description",content:"How to configure Internationalization of element-pro-components"},{property:"og:title",content:"Internationalization"}]}}),p({title:"Internationalization",meta:[{name:"description",content:"How to configure Internationalization of element-pro-components"},{property:"og:title",content:"Internationalization"}]}),(w,z)=>{const e=l("pro-code");return r(),u("div",i,[k,d,g,t(e,null,{source:s(()=>[t(c)]),code:s(()=>[m]),default:s(()=>[y]),_:1}),f,h])}}};export{V as default,S as meta,R as title};
