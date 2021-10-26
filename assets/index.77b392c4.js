import{u as o}from"./index.40f0dd19.js";import{z as e,A as p,at as a,E as n,a3 as s}from"./modules-vue.fb389e96.js";import"./modules-element-plus.51e4a6a6.js";const c={class:"markdown-body"},l=a('<h1 id="quick-start" tabindex="-1">Quick start <a class="header-anchor" href="#quick-start" aria-hidden="true">#</a></h1><h2 id="ready" tabindex="-1">Ready <a class="header-anchor" href="#ready" aria-hidden="true">#</a></h2><p>You may need the vue3 version of the scaffolding tool before you start</p><ul><li><a href="https://vitejs.dev/">vite</a></li><li><a href="https://cli.vuejs.org/zh/">vue-cli</a></li><li><a href="https://zh.nuxtjs.org/">nuxt</a></li></ul><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h2><p><a href="https://npmjs.com/package/element-pro-components"><img src="https://img.shields.io/npm/v/element-pro-components.svg?style=flat-square&amp;logo=npm" alt="Latest tag via npm"></a><a href="https://npmjs.com/package/element-pro-components"><img src="https://img.shields.io/bundlephobia/min/element-pro-components?label=size&amp;logo=npm&amp;style=flat-square" alt="npm bundle size"></a><a href="https://www.npmjs.com/package/element-pro-components"><img src="https://img.shields.io/badge/dynamic/json.svg?style=flat-square&amp;logo=npm&amp;label=last%20release&amp;url=http%3A%2F%2Fregistry.npmjs.org%2Felement-pro-components&amp;query=$.time.modified" alt="Npm Last Updated"></a></p>',6),u=n("div",{class:"language-"},[n("pre",null,[n("code",{"v-pre":""},`yarn add element-pro-components
# or
npm i element-pro-components
`)])],-1),i=n("h2",{id:"fully-import",tabindex:"-1"},[s("Fully import "),n("a",{class:"header-anchor",href:"#fully-import","aria-hidden":"true"},"#")],-1),r=n("div",{class:"language-js"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createApp "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" App "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./App.vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" ElementPro "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'element-pro-components'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'element-pro-components/lib/styles/index.css'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createApp"),n("span",{class:"token punctuation"},"("),s("App"),n("span",{class:"token punctuation"},")"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("ElementPro"),n("span",{class:"token punctuation"},")"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#app'"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),k=a('<h2 id="on-demand" tabindex="-1">On demand <a class="header-anchor" href="#on-demand" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>Since <code>0.12.0</code>, it is recommended to use the js file in the style folder imported on demand instead of the css file to avoid repeated references of styles. (Note: Referencing js style files requires compilation tools to support ES modules)</p></div><h3 id="recommended-unplugin-vue-components" tabindex="-1">Recommended unplugin-vue-components <a class="header-anchor" href="#recommended-unplugin-vue-components" aria-hidden="true">#</a></h3><p>Installation and use view <a href="https://www.npmjs.com/package/unplugin-vue-components">unplugin-vue-components</a></p><ul><li>Configuration information</li></ul>',5),m=n("div",{class:"language-js"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token punctuation"},"{"),s(`
  resolvers`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"name"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"startsWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Pro'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" fileName "),n("span",{class:"token operator"},"="),s(" name"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\B([A-Z])"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'-$1'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
          importName`),n("span",{class:"token operator"},":"),s(" name"),n("span",{class:"token punctuation"},","),s(`
          path`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'element-pro-components'"),n("span",{class:"token punctuation"},","),s(`
          sideEffects`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"element-pro-components/lib/styles/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("fileName"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),d=n("h3",{id:"use-vite-plugin-style-import-in-vite",tabindex:"-1"},[s("Use vite-plugin-style-import in vite "),n("a",{class:"header-anchor",href:"#use-vite-plugin-style-import-in-vite","aria-hidden":"true"},"#")],-1),g=n("p",null,[s("Installation and use view "),n("a",{href:"https://github.com/anncwb/vite-plugin-style-import"},"vite-plugin-style-import")],-1),h=n("ul",null,[n("li",null,"change vite.config")],-1),f=n("div",{class:"language-js"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token keyword"},"import"),s(" styleImport "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vite-plugin-style-import'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"styleImport"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      libs`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          importTest`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"^Pro"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
          libraryName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'element-pro-components'"),n("span",{class:"token punctuation"},","),s(`
          ensureStyleFile`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token function-variable function"},"resolveStyle"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"name"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"element-pro-components/lib/styles/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("name"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},".css"),n("span",{class:"token template-punctuation string"},"`")]),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),y=n("h3",{id:"use-babel-plugin-import-in-vue-cli",tabindex:"-1"},[s("Use babel-plugin-import in vue-cli "),n("a",{class:"header-anchor",href:"#use-babel-plugin-import-in-vue-cli","aria-hidden":"true"},"#")],-1),v=n("p",null,[s("Installation and use view "),n("a",{href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import")],-1),b=n("ul",null,[n("li",null,"change babel.config")],-1),w=n("div",{class:"language-js"},[n("pre",null,[n("code",{"v-pre":""},[s("module"),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token string"},"'import'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        libraryName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'element-pro-components'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function-variable function"},"customStyleName"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"name"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"element-pro-components/lib/styles/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("name"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},".css"),n("span",{class:"token template-punctuation string"},"`")]),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),_=n("h3",{id:"by-hand",tabindex:"-1"},[s("By hand "),n("a",{class:"header-anchor",href:"#by-hand","aria-hidden":"true"},"#")],-1),x=n("p",null,"example:",-1),j=n("div",{class:"language-js"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ProLayout "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'element-pro-components'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'element-pro-components/lib/styles/layout.css'"),s(`
`)])])],-1),P=a('<div class="tip custom-block"><p class="custom-block-title">Tip</p><p>Component list reference <a href="https://github.com/tolking/element-pro-components/blob/master/src/index.ts">components</a></p><p>In addition to components, you can also use some internal <a href="https://github.com/tolking/element-pro-components/blob/master/src/utils/">utils</a> or <a href="https://github.com/tolking/element-pro-components/blob/master/src/composables/">composables</a></p></div><h2 id="global-config" tabindex="-1">Global config <a class="header-anchor" href="#global-config" aria-hidden="true">#</a></h2><ul><li>refer</li></ul>',3),q=n("div",{class:"language-ts"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" InstallOptions "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../types/index'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" config"),n("span",{class:"token operator"},":"),s(" Required"),n("span",{class:"token operator"},"<"),s("InstallOptions"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  pagination`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    background`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    layout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'prev, pager, next, sizes'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  menu`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    add`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    addText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Add'"),n("span",{class:"token punctuation"},","),s(`
    addProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(" type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'primary'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    edit`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    editText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Edit'"),n("span",{class:"token punctuation"},","),s(`
    editProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(" type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'text'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    del`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    delText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Delete'"),n("span",{class:"token punctuation"},","),s(`
    delProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(" type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'text'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    submit`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    submitText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Submit'"),n("span",{class:"token punctuation"},","),s(`
    submitProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(" type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'primary'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    reset`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    resetText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Reset'"),n("span",{class:"token punctuation"},","),s(`
    search`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    searchText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Search'"),n("span",{class:"token punctuation"},","),s(`
    searchProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(" type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'primary'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    searchReset`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    searchResetText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Reset'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),I=n("ul",null,[n("li",null,"config")],-1),N=n("div",{class:"language-js"},[n("pre",null,[n("code",{"v-pre":""},[s("app"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("ElementPro"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  pagination`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    small`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    hideOnSinglePage`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    layout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'prev, pager, next'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),T=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"Tip"),n("p",null,[s("If you use on demand import components, you can inject global config through one of "),n("code",null,"ProCrud"),s(),n("code",null,"ProForm"),s(),n("code",null,"ProTable")])],-1),S=n("h2",{id:"start-using",tabindex:"-1"},[s("Start using "),n("a",{class:"header-anchor",href:"#start-using","aria-hidden":"true"},"#")],-1),R=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"Tip"),n("p",null,[s("Document example based on "),n("a",{href:"https://v3.vuejs.org/guide/composition-api-introduction.html"},"Composition API"),s(", If you are not familiar with the syntax, please visit the official document")]),n("p",null,[s("If you use VS Code to develop, cooperate with "),n("a",{href:"https://marketplace.visualstudio.com/items?itemName=octref.vetur"},"Vetur"),s(" to provide complete components, prop, and event completion. example: input "),n("code",null,"<pro-"),s(" will list all components")]),n("p",null,[s("If you use VS Code with typescript to develop, It is recommended to use plug-in "),n("a",{href:"https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar"},"Volar"),s(". Just add to the "),n("code",null,"include"),s(" field in the "),n("code",null,"tsconfig.json"),s(" file")]),n("div",{class:"language-diff"},[n("pre",null,[n("code",{"v-pre":""},[s(`{
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` "include": [
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`   "node_modules/element-pro-components/types/components.d.ts"
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` ]
`)]),s(`}
`)])])]),n("p",null,"If you use webstorm to develop, complete components, prop, and event completions"),n("p",null,[s("If you use TypeScript to develop, You can refer to the "),n("a",{href:"https://github.com/tolking/element-pro-components/tree/master/docs/src/views/"},"example"),s(", Some types are provided internally for easy use")])],-1),A=n("div",{class:"language-vue"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("pro-layout")]),s(),n("span",{class:"token attr-name"},":routes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("routes"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#logo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ collapse }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("transition")]),s(`
        `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("el-zoom-in-top"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("out-in"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(`
          `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("collapse"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/logo.svg"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("logo"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("logo-img"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(`
          `),n("span",{class:"token attr-name"},"v-else"),s(`
          `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("logo-title"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token punctuation"},">")]),s("element-pro-components"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("transition")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#header-left"),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("pro-breadcrumb")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#header-right"),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("nav-header")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#header-bottom"),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("pro-tabs")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tabs"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("pro-layout")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("pwa-popup")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" computed"),n("span",{class:"token punctuation"},","),s(" provide"),n("span",{class:"token punctuation"},","),s(" shallowRef "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useRouter "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue-router'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useLang "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../composables/index'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" NavHeader "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../components/NavHeader.vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" PwaPopup "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../components/PwaPopup.vue'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" router "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useRouter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" lang "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useLang"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" tabs "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"shallowRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" routes "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" reg "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"RegExp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"^\\\\/("),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("lang"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"|dev)\\\\/"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" routes "),n("span",{class:"token operator"},"="),s(" router"),n("span",{class:"token punctuation"},"."),s("options"),n("span",{class:"token punctuation"},"."),s(`routes
  `),n("span",{class:"token keyword"},"return"),s(" routes"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" reg"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("path"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token function"},"provide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'tabs'"),n("span",{class:"token punctuation"},","),s(" tabs"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".logo-img"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"calc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--pro-layout-width-aside-collapse"),n("span",{class:"token punctuation"},")"),s(" - 20px"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".logo-title"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--pro-layout-height-header"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),E=[l,u,i,r,k,m,d,g,h,f,y,v,b,w,_,x,j,P,q,I,N,T,S,R,A],O={setup(z,{expose:t}){return t({frontmatter:{title:"Quick start",meta:[{name:"description",content:"Quick start with element-pro-components component library"},{property:"og:title",content:"Quick start"}]}}),o({title:"Quick start",meta:[{name:"description",content:"Quick start with element-pro-components component library"},{property:"og:title",content:"Quick start"}]}),(Q,V)=>(e(),p("div",c,E))}};export{O as default};