import{u as p}from"./index.4595b445.js";import{I as c}from"./base.768e43af.js";import{_ as l,o as u,c as r,V as t,T as a,a as n,a2 as s}from"./modules-vue.c9056131.js";import"./modules-element-plus.f3e98165.js";const k={class:"markdown-body"},i=n("h1",{id:"%E5%9B%BD%E9%99%85%E5%8C%96",tabindex:"-1"},[s("\u56FD\u9645\u5316 "),n("a",{class:"header-anchor",href:"#%E5%9B%BD%E9%99%85%E5%8C%96","aria-hidden":"true"},"#")],-1),d=n("h2",{id:"%E9%85%8D%E7%BD%AE",tabindex:"-1"},[s("\u914D\u7F6E "),n("a",{class:"header-anchor",href:"#%E9%85%8D%E7%BD%AE","aria-hidden":"true"},"#")],-1),m=n("p",null,"\u540C elememt-plus \u4E00\u6837\u53EF\u4EE5\u901A\u8FC7 ElConfigProvider \u6CE8\u5165\u56FD\u9645\u5316\u914D\u7F6E",-1),y=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
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
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" toggle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" locale1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'en'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"pro"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"form"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"submit"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Submit'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"reset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Reset'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" locale2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'zh-cn'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"pro"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"form"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"submit"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u63D0 \u4EA4'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"reset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u91CD \u7F6E'"),n("span",{class:"token punctuation"},","),s(`
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
`)])],-1),g=n("p",null,"@/demo/I18n/base.vue",-1),f=n("h2",{id:"%E5%8F%AF%E9%85%8D%E7%BD%AE%E5%AD%97%E6%AE%B5",tabindex:"-1"},[s("\u53EF\u914D\u7F6E\u5B57\u6BB5 "),n("a",{class:"header-anchor",href:"#%E5%8F%AF%E9%85%8D%E7%BD%AE%E5%AD%97%E6%AE%B5","aria-hidden":"true"},"#")],-1),h=n("div",{class:"language-js"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token keyword"},"const"),s(" locale "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"pro"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"form"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"submit"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u63D0\u4EA4'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"reset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u91CD\u7F6E'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"crud"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"add"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u65B0\u589E'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"edit"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F16\u8F91'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"del"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5220\u9664'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"submit"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u63D0\u4EA4'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"reset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u91CD\u7F6E'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"search"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u641C\u7D22'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"searchReset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u91CD\u7F6E'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),q={setup(v,{expose:o}){return o({frontmatter:{title:"\u56FD\u9645\u5316",meta:[{name:"description",content:"element-pro-components \u5982\u4F55\u8FDB\u884C\u56FD\u9645\u5316\u914D\u7F6E"},{property:"og:title",content:"\u56FD\u9645\u5316"}]}}),p({title:"\u56FD\u9645\u5316",meta:[{name:"description",content:"element-pro-components \u5982\u4F55\u8FDB\u884C\u56FD\u9645\u5316\u914D\u7F6E"},{property:"og:title",content:"\u56FD\u9645\u5316"}]}),(b,w)=>{const e=l("pro-code");return u(),r("div",k,[i,d,m,t(e,null,{source:a(()=>[t(c)]),code:a(()=>[y]),default:a(()=>[g]),_:1}),f,h])}}};export{q as default};
