import{u as s}from"./index-d006dd7f.js";import{o as c,c as d,a as t,a6 as e,X as n,aA as r,af as l}from"./modules-vue-66267ef1.js";import"./modules-element-plus-d5d4b496.js";const i={class:"markdown-body"},h=t("h1",{id:"介绍",tabindex:"-1"},[e("介绍 "),t("a",{class:"header-anchor md-link",href:"#介绍","aria-hidden":"true"},"#")],-1),p={href:"https://element-plus.org/",class:"md-link",target:"_blank",rel:"noopener noreferrer"},m={href:"https://v3.vuejs.org/",class:"md-link",target:"_blank",rel:"noopener noreferrer"},u={href:"https://next.router.vuejs.org/",class:"md-link",target:"_blank",rel:"noopener noreferrer"},_=r('<h2 id="起因" tabindex="-1">起因 <a class="header-anchor md-link" href="#起因" aria-hidden="true">#</a></h2><p>对于中后台开发来说，大部分的表格表单等页面都可以复用，通过将非业务逻辑的部分封装起来成组件能够更加方便使用。同时组件可以和路由等绑定，减少传值。以及实现一些 <code>element-plus</code> 上没有后台常用的功能等</p><p>虽然 <code>element-plus</code> 的封装已经很好了，但对于 <code>el-table</code> 或 <code>el-form</code> 的使用必不可少的需要写大量 <code>el-table-column</code> 或 <code>el-form-item</code> 代码。我们将它转换成 <code>column</code> 配置，通过传入一个数组动态生成这些数据。如果你传入的是具有响应式的数据，在改变 <code>column</code> 时，表格或表单会随之改变。根据这个特性你可以按照喜欢的方式去实现权限等功能</p><h2 id="为什么不是" tabindex="-1">为什么不是 <a class="header-anchor md-link" href="#为什么不是" aria-hidden="true">#</a></h2><h3 id="模版" tabindex="-1">模版 <a class="header-anchor md-link" href="#模版" aria-hidden="true">#</a></h3><p>对于快速开发，或许模版更加方便，但模版并不一定十分适合你。你可能不习惯模版的 <code>prettier</code> 或 <code>eslint</code> 配置、你可能用不上模版的部分依赖、你可能会在意还没有写页面打包就 1M+ 的大小…</p><p>组件化的优势就是，你可以自己搭建开发环境。想用 <code>vite</code> 构建就用、想不用 <code>eslint</code> 就不用…</p><h3 id="基于-vue2-element-ui" tabindex="-1">基于 vue2 element-ui <a class="header-anchor md-link" href="#基于-vue2-element-ui" aria-hidden="true">#</a></h3>',8),f={href:"https://github.com/vuejs/rfcs/pull/227.",class:"md-link",target:"_blank",rel:"noopener noreferrer"},g={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*",class:"md-link",target:"_blank",rel:"noopener noreferrer"},k=r('<h2 id="浏览器支持" tabindex="-1">浏览器支持 <a class="header-anchor md-link" href="#浏览器支持" aria-hidden="true">#</a></h2><p>理论上同 element-plus</p><table><thead><tr><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png" alt="IE"></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png" alt="Firefox"></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png" alt="Chrome"></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png" alt="Safari"></th></tr></thead><tbody><tr><td>Edge ≥ 79</td><td>Firefox ≥ 78</td><td>Chrome ≥ 64</td><td>Safari ≥ 12</td></tr></tbody></table>',3),N="介绍",V=[{name:"description",content:"element-pro-components 组件库的基础信息介绍"},{property:"og:title",content:"介绍"}],B={__name:"introduction",setup(b,{expose:a}){return a({frontmatter:{title:"介绍",meta:[{name:"description",content:"element-pro-components 组件库的基础信息介绍"},{property:"og:title",content:"介绍"}]}}),s({title:"介绍",meta:[{name:"description",content:"element-pro-components 组件库的基础信息介绍"},{property:"og:title",content:"介绍"}]}),(S,j)=>{const o=l("icon-external-link");return c(),d("div",i,[h,t("p",null,[e("element-pro-components 是一个基于 "),t("a",p,[e("element-plus"),n(o,{class:"link-icon"})]),e(", "),t("a",m,[e("vue"),n(o,{class:"link-icon"})]),e(", "),t("a",u,[e("vue-router"),n(o,{class:"link-icon"})]),e(" 的一个适用于中后台开发的一套组件库")]),_,t("p",null,[e("该组件库的开发理念就是面向未来，如果查看源码你就会发现像是 vue 3 的 "),t("a",f,[e("script setup"),n(o,{class:"link-icon"})]),e(" 实验性功能、像是 CSSNext 的 "),t("a",g,[e("CSS Variables"),n(o,{class:"link-icon"})]),e("。在保证大部分浏览器的兼容性的情况下，会更多的使用新特性、新功能来开发")]),k])}}};export{B as default,V as meta,N as title};
