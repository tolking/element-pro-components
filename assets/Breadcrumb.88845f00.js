import{u as d}from"./index.40f0dd19.js";import{R as s,z as i,A as p,U as n,O as a,at as o,E as t,a3 as e}from"./modules-vue.fb389e96.js";import"./modules-element-plus.51e4a6a6.js";const u={class:"markdown-body"},h=o('<h1 id="breadcrumb" tabindex="-1">Breadcrumb <a class="header-anchor" href="#breadcrumb" aria-hidden="true">#</a></h1><blockquote><p>Auto generate breadcrumbs according to the current page router</p></blockquote><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>If the routes contains <a href="https://next.router.vuejs.org/guide/essentials/dynamic-matching.html">dynamic-matching</a>, you need to specify the <a href="https://next.router.vuejs.org/api/#name-1">name</a> of router to be able to generate the corresponding breadcrumbs</p></div><h2 id="use" tabindex="-1">Use <a class="header-anchor" href="#use" aria-hidden="true">#</a></h2><h3 id="basic-use" tabindex="-1">Basic Use <a class="header-anchor" href="#basic-use" aria-hidden="true">#</a></h3>',5),g=t("p",null,"Will be auto generated according to the current routes",-1),m=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("pro-breadcrumb")]),e(),t("span",{class:"token punctuation"},"/>")]),e(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[e(`
`),t("span",{class:"token keyword"},"export"),e(),t("span",{class:"token keyword"},"default"),e(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("script")]),t("span",{class:"token punctuation"},">")]),e(`
`)])],-1),b=o('<h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Options</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">routes</td><td style="text-align:left;">current routes</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">from <code>vue-router</code></td></tr><tr><td style="text-align:left;">separator</td><td style="text-align:left;">separator character</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;"><code>/</code></td></tr><tr><td style="text-align:left;">separator-class</td><td style="text-align:left;">class name of icon separator</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr></tbody></table>',2),N={setup(f,{expose:r}){return r({frontmatter:{title:"Breadcrumb",meta:[{name:"description",content:"Auto generate breadcrumbs according to the current page router"},{property:"og:title",content:"Breadcrumb"}]}}),d({title:"Breadcrumb",meta:[{name:"description",content:"Auto generate breadcrumbs according to the current page router"},{property:"og:title",content:"Breadcrumb"}]}),(x,_)=>{const c=s("pro-breadcrumb"),l=s("pro-code");return i(),p("div",u,[h,n(l,null,{description:a(()=>[g]),code:a(()=>[m]),default:a(()=>[n(c)]),_:1}),b])}}};export{N as default};