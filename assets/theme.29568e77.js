import{u as o}from"./index.224a7fc0.js";import{o as p,c,aw as a,a as n,a2 as s}from"./modules-vue.f3a2bd49.js";import"./modules-element-plus.412af1fa.js";const e={class:"markdown-body"},l=a('<h1 id="custom-theme" tabindex="-1">Custom theme <a class="header-anchor" href="#custom-theme" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>[test] Since <code>0.12.0</code>, The internal css-variables will give priority to the css-variables from <code>Element Plus</code>, which is convenient for you to control the styles of the two component libraries at the same time</p></div><h2 id="simple-configuration" tabindex="-1">Simple configuration <a class="header-anchor" href="#simple-configuration" aria-hidden="true">#</a></h2>',3),u=n("div",{class:"language-css"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token selector"},":root"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"--el-color-primary"),n("span",{class:"token punctuation"},":"),s(" #42b983"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--pro-layout-aside-background-color"),n("span",{class:"token punctuation"},":"),s(" #f0f2f5"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),i=n("h2",{id:"light/dark-mode",tabindex:"-1"},[s("light/dark mode "),n("a",{class:"header-anchor",href:"#light/dark-mode","aria-hidden":"true"},"#")],-1),r=n("div",{class:"language-css"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@media"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token property"},"prefers-color-scheme"),n("span",{class:"token punctuation"},":"),s(" light"),n("span",{class:"token punctuation"},")")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token selector"},":root"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"--el-color-primary"),n("span",{class:"token punctuation"},":"),s(" #42b983"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"--pro-layout-aside-background-color"),n("span",{class:"token punctuation"},":"),s(" #f0f2f5"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"/* You can also add only the following to increase the dark mode */"),s(`
`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@media"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token property"},"prefers-color-scheme"),n("span",{class:"token punctuation"},":"),s(" dark"),n("span",{class:"token punctuation"},")")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token selector"},":root"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"--el-color-primary"),n("span",{class:"token punctuation"},":"),s(" #25272a"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"--pro-layout-aside-background-color"),n("span",{class:"token punctuation"},":"),s(" #2b2b2b"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),k=n("h2",{id:"multi-theme",tabindex:"-1"},[s("Multi-theme "),n("a",{class:"header-anchor",href:"#multi-theme","aria-hidden":"true"},"#")],-1),d=n("div",{class:"language-css"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token selector"},":root"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"--el-color-primary"),n("span",{class:"token punctuation"},":"),s(" #42b983"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--pro-layout-aside-background-color"),n("span",{class:"token punctuation"},":"),s(" #f0f2f5"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},"html[theme='dark']"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"--el-color-primary"),n("span",{class:"token punctuation"},":"),s(" #25272a"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--pro-layout-aside-background-color"),n("span",{class:"token punctuation"},":"),s(" #2b2b2b"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},"html[theme='other']"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"/* ... */"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),f=n("div",{class:"language-html"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("html")]),s(),n("span",{class:"token attr-name"},"theme"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("other"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("html")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),y=a('<div class="tip custom-block"><p class="custom-block-title">Tip</p><p>Then you can dynamically change the value of theme through js</p><p>Use <a href="https://github.com/postcss/postcss-custom-properties">postcss-custom-properties</a> or similar plugin of postcss to convert <code>css-variables</code> for better compatibility, so that the default value style can be displayed when <code>css-variables</code> is not supported.</p></div><h2 id="provide-configuration-parameters" tabindex="-1">Provide configuration parameters <a class="header-anchor" href="#provide-configuration-parameters" aria-hidden="true">#</a></h2><ul><li>public css-variables</li></ul>',3),h=n("div",{class:"language-css"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token selector"},":root"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"--pro-layout-header-background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-color-white"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--pro-layout-aside-background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-color-white"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--pro-tabs-background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-color-white"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--pro-layout-width-aside"),n("span",{class:"token punctuation"},":"),s(" 240px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--pro-layout-width-aside-collapse"),n("span",{class:"token punctuation"},":"),s(" 60px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--pro-layout-height"),n("span",{class:"token punctuation"},":"),s(" 100vh"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--pro-layout-height-header"),n("span",{class:"token punctuation"},":"),s(" 54px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--pro-layout-index-header"),n("span",{class:"token punctuation"},":"),s(" 10"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--pro-layout-index-sidebar"),n("span",{class:"token punctuation"},":"),s(" 1800"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),g=n("ul",null,[n("li",null,"public css-variables of Element Plus")],-1),b=n("div",{class:"language-css"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@charset"),s(),n("span",{class:"token string"},'"UTF-8"'),n("span",{class:"token punctuation"},";")]),n("span",{class:"token selector"},":root"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token property"},"--el-color-white"),n("span",{class:"token punctuation"},":"),s("#ffffff"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-black"),n("span",{class:"token punctuation"},":"),s("#000000"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-primary-rgb"),n("span",{class:"token punctuation"},":"),s("64"),n("span",{class:"token punctuation"},","),s("158"),n("span",{class:"token punctuation"},","),s("255"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-success-rgb"),n("span",{class:"token punctuation"},":"),s("103"),n("span",{class:"token punctuation"},","),s("194"),n("span",{class:"token punctuation"},","),s("58"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-warning-rgb"),n("span",{class:"token punctuation"},":"),s("230"),n("span",{class:"token punctuation"},","),s("162"),n("span",{class:"token punctuation"},","),s("60"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-danger-rgb"),n("span",{class:"token punctuation"},":"),s("245"),n("span",{class:"token punctuation"},","),s("108"),n("span",{class:"token punctuation"},","),s("108"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-error-rgb"),n("span",{class:"token punctuation"},":"),s("245"),n("span",{class:"token punctuation"},","),s("108"),n("span",{class:"token punctuation"},","),s("108"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-info-rgb"),n("span",{class:"token punctuation"},":"),s("144"),n("span",{class:"token punctuation"},","),s("147"),n("span",{class:"token punctuation"},","),s("153"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-font-size-extra-large"),n("span",{class:"token punctuation"},":"),s("20px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-font-size-large"),n("span",{class:"token punctuation"},":"),s("18px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-font-size-medium"),n("span",{class:"token punctuation"},":"),s("16px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-font-size-base"),n("span",{class:"token punctuation"},":"),s("14px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-font-size-small"),n("span",{class:"token punctuation"},":"),s("13px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-font-size-extra-small"),n("span",{class:"token punctuation"},":"),s("12px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-font-family"),n("span",{class:"token punctuation"},":"),n("span",{class:"token string"},"'Helvetica Neue'"),n("span",{class:"token punctuation"},","),s("Helvetica"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'PingFang SC'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'Hiragino Sans GB'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'Microsoft YaHei'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'\u5FAE\u8F6F\u96C5\u9ED1'"),n("span",{class:"token punctuation"},","),s("Arial"),n("span",{class:"token punctuation"},","),s("sans-serif"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-font-weight-primary"),n("span",{class:"token punctuation"},":"),s("500"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-font-line-height-primary"),n("span",{class:"token punctuation"},":"),s("24px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-index-normal"),n("span",{class:"token punctuation"},":"),s("1"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-index-top"),n("span",{class:"token punctuation"},":"),s("1000"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-index-popper"),n("span",{class:"token punctuation"},":"),s("2000"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-border-radius-base"),n("span",{class:"token punctuation"},":"),s("4px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-border-radius-small"),n("span",{class:"token punctuation"},":"),s("2px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-border-radius-round"),n("span",{class:"token punctuation"},":"),s("20px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-border-radius-circle"),n("span",{class:"token punctuation"},":"),s("100%"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-transition-duration"),n("span",{class:"token punctuation"},":"),s("0.3s"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-transition-duration-fast"),n("span",{class:"token punctuation"},":"),s("0.2s"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-transition-function-ease-in-out-bezier"),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"cubic-bezier"),n("span",{class:"token punctuation"},"("),s("0.645"),n("span",{class:"token punctuation"},","),s(" 0.045"),n("span",{class:"token punctuation"},","),s(" 0.355"),n("span",{class:"token punctuation"},","),s(" 1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-transition-function-fast-bezier"),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"cubic-bezier"),n("span",{class:"token punctuation"},"("),s("0.23"),n("span",{class:"token punctuation"},","),s(" 1"),n("span",{class:"token punctuation"},","),s(" 0.32"),n("span",{class:"token punctuation"},","),s(" 1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-transition-all"),n("span",{class:"token punctuation"},":"),s("all "),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-transition-duration"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-transition-function-ease-in-out-bezier"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-transition-fade"),n("span",{class:"token punctuation"},":"),s("opacity "),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-transition-duration"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-transition-function-fast-bezier"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-transition-md-fade"),n("span",{class:"token punctuation"},":"),s("transform "),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-transition-duration"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-transition-function-fast-bezier"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s("opacity "),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-transition-duration"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-transition-function-fast-bezier"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-transition-fade-linear"),n("span",{class:"token punctuation"},":"),s("opacity "),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-transition-duration-fast"),n("span",{class:"token punctuation"},")"),s(" linear"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-transition-border"),n("span",{class:"token punctuation"},":"),s("border-color "),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-transition-duration-fast"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-transition-function-ease-in-out-bezier"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-transition-box-shadow"),n("span",{class:"token punctuation"},":"),s("box-shadow "),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-transition-duration-fast"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-transition-function-ease-in-out-bezier"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-transition-color"),n("span",{class:"token punctuation"},":"),s("color "),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-transition-duration-fast"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-transition-function-ease-in-out-bezier"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token selector"},":root"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token property"},"color-scheme"),n("span",{class:"token punctuation"},":"),s("light"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-white"),n("span",{class:"token punctuation"},":"),s("#ffffff"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-black"),n("span",{class:"token punctuation"},":"),s("#000000"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-primary"),n("span",{class:"token punctuation"},":"),s("#409eff"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-primary-light-3"),n("span",{class:"token punctuation"},":"),s("#79bbff"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-primary-light-5"),n("span",{class:"token punctuation"},":"),s("#a0cfff"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-primary-light-7"),n("span",{class:"token punctuation"},":"),s("#c6e2ff"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-primary-light-8"),n("span",{class:"token punctuation"},":"),s("#d9ecff"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-primary-light-9"),n("span",{class:"token punctuation"},":"),s("#ecf5ff"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-primary-dark-2"),n("span",{class:"token punctuation"},":"),s("#337ecc"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-success"),n("span",{class:"token punctuation"},":"),s("#67c23a"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-success-light-3"),n("span",{class:"token punctuation"},":"),s("#95d475"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-success-light-5"),n("span",{class:"token punctuation"},":"),s("#b3e19d"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-success-light-7"),n("span",{class:"token punctuation"},":"),s("#d1edc4"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-success-light-8"),n("span",{class:"token punctuation"},":"),s("#e1f3d8"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-success-light-9"),n("span",{class:"token punctuation"},":"),s("#f0f9eb"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-success-dark-2"),n("span",{class:"token punctuation"},":"),s("#529b2e"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-warning"),n("span",{class:"token punctuation"},":"),s("#e6a23c"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-warning-light-3"),n("span",{class:"token punctuation"},":"),s("#eebe77"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-warning-light-5"),n("span",{class:"token punctuation"},":"),s("#f3d19e"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-warning-light-7"),n("span",{class:"token punctuation"},":"),s("#f8e3c5"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-warning-light-8"),n("span",{class:"token punctuation"},":"),s("#faecd8"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-warning-light-9"),n("span",{class:"token punctuation"},":"),s("#fdf6ec"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-warning-dark-2"),n("span",{class:"token punctuation"},":"),s("#b88230"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-danger"),n("span",{class:"token punctuation"},":"),s("#f56c6c"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-danger-light-3"),n("span",{class:"token punctuation"},":"),s("#f89898"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-danger-light-5"),n("span",{class:"token punctuation"},":"),s("#fab6b6"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-danger-light-7"),n("span",{class:"token punctuation"},":"),s("#fcd3d3"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-danger-light-8"),n("span",{class:"token punctuation"},":"),s("#fde2e2"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-danger-light-9"),n("span",{class:"token punctuation"},":"),s("#fef0f0"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-danger-dark-2"),n("span",{class:"token punctuation"},":"),s("#c45656"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-error"),n("span",{class:"token punctuation"},":"),s("#f56c6c"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-error-light-3"),n("span",{class:"token punctuation"},":"),s("#f89898"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-error-light-5"),n("span",{class:"token punctuation"},":"),s("#fab6b6"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-error-light-7"),n("span",{class:"token punctuation"},":"),s("#fcd3d3"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-error-light-8"),n("span",{class:"token punctuation"},":"),s("#fde2e2"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-error-light-9"),n("span",{class:"token punctuation"},":"),s("#fef0f0"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-error-dark-2"),n("span",{class:"token punctuation"},":"),s("#c45656"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-info"),n("span",{class:"token punctuation"},":"),s("#909399"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-info-light-3"),n("span",{class:"token punctuation"},":"),s("#b1b3b8"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-info-light-5"),n("span",{class:"token punctuation"},":"),s("#c8c9cc"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-info-light-7"),n("span",{class:"token punctuation"},":"),s("#dedfe0"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-info-light-8"),n("span",{class:"token punctuation"},":"),s("#e9e9eb"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-info-light-9"),n("span",{class:"token punctuation"},":"),s("#f4f4f5"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-color-info-dark-2"),n("span",{class:"token punctuation"},":"),s("#73767a"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-bg-color"),n("span",{class:"token punctuation"},":"),s("#ffffff"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-bg-color-page"),n("span",{class:"token punctuation"},":"),s("#ffffff"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-bg-color-overlay"),n("span",{class:"token punctuation"},":"),s("#ffffff"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-text-color-primary"),n("span",{class:"token punctuation"},":"),s("#303133"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-text-color-regular"),n("span",{class:"token punctuation"},":"),s("#606266"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-text-color-secondary"),n("span",{class:"token punctuation"},":"),s("#909399"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-text-color-placeholder"),n("span",{class:"token punctuation"},":"),s("#a8abb2"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-text-color-disabled"),n("span",{class:"token punctuation"},":"),s("#c0c4cc"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-border-color"),n("span",{class:"token punctuation"},":"),s("#dcdfe6"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-border-color-light"),n("span",{class:"token punctuation"},":"),s("#e4e7ed"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-border-color-lighter"),n("span",{class:"token punctuation"},":"),s("#ebeef5"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-border-color-extra-light"),n("span",{class:"token punctuation"},":"),s("#f2f6fc"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-border-color-dark"),n("span",{class:"token punctuation"},":"),s("#d4d7de"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-border-color-darker"),n("span",{class:"token punctuation"},":"),s("#cdd0d6"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-fill-color"),n("span",{class:"token punctuation"},":"),s("#f0f2f5"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-fill-color-light"),n("span",{class:"token punctuation"},":"),s("#f5f7fa"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-fill-color-lighter"),n("span",{class:"token punctuation"},":"),s("#fafafa"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-fill-color-extra-light"),n("span",{class:"token punctuation"},":"),s("#fafcff"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-fill-color-dark"),n("span",{class:"token punctuation"},":"),s("#ebedf0"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-fill-color-darker"),n("span",{class:"token punctuation"},":"),s("#e6e8eb"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-fill-color-blank"),n("span",{class:"token punctuation"},":"),s("#ffffff"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-box-shadow"),n("span",{class:"token punctuation"},":"),s("0px 12px 32px 4px "),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.04"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s("0px 8px 20px "),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.08"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-box-shadow-light"),n("span",{class:"token punctuation"},":"),s("0px 0px 12px "),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.12"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-box-shadow-lighter"),n("span",{class:"token punctuation"},":"),s("0px 0px 6px "),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.12"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-box-shadow-dark"),n("span",{class:"token punctuation"},":"),s("0px 16px 48px 16px "),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.08"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s("0px 12px 32px "),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.12"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s("0px 8px 16px -8px "),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.16"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-disabled-bg-color"),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-fill-color-light"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-disabled-text-color"),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-text-color-placeholder"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-disabled-border-color"),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-border-color-light"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-overlay-color"),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.8"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-overlay-color-light"),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.7"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-overlay-color-lighter"),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-mask-color"),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("255"),n("span",{class:"token punctuation"},","),s(" 255"),n("span",{class:"token punctuation"},","),s(" 255"),n("span",{class:"token punctuation"},","),s(" 0.9"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-mask-color-extra-light"),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("255"),n("span",{class:"token punctuation"},","),s(" 255"),n("span",{class:"token punctuation"},","),s(" 255"),n("span",{class:"token punctuation"},","),s(" 0.3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-border-width"),n("span",{class:"token punctuation"},":"),s("1px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-border-style"),n("span",{class:"token punctuation"},":"),s("solid"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-border-color-hover"),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-text-color-disabled"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-border"),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-border-width"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-border-style"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-border-color"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"--el-svg-monochrome-grey"),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--el-border-color"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")])])],-1),m=[l,u,i,r,k,d,f,y,h,g,b],B={setup(x,{expose:t}){return t({frontmatter:{title:"Theme",meta:[{name:"description",content:"How to configure the theme of the element-pro-components component library"},{property:"og:title",content:"Theme"}]}}),o({title:"Theme",meta:[{name:"description",content:"How to configure the theme of the element-pro-components component library"},{property:"og:title",content:"Theme"}]}),(_,z)=>(p(),c("div",e,m))}};export{B as default};
