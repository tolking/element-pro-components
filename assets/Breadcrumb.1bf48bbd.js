import{r as t,o as e,c as a,f as s,g as n,j as l,ag as o}from"./vendor.6730c589.js";const c={class:"markdown-body"},p=s("h1",null,"Breadcrumb",-1),d=s("blockquote",null,[s("p",null,[l("根据当前页面路由自动生成面包屑，与 "),s("code",null,"vue-router"),l(" 高度绑定")])],-1),u=s("h2",null,"使用",-1),r=s("h3",null,"基础用法",-1),i=s("p",null,"将根据当前路由自动生成",-1),g=s("pre",null,[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),l("template")]),s("span",{class:"token punctuation"},">")]),l("\n  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),l("pro-breadcrumb")]),l(),s("span",{class:"token punctuation"},"/>")]),l("\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),l("template")]),s("span",{class:"token punctuation"},">")]),l("\n\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),l("script")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token script"},[s("span",{class:"token language-javascript"},[l("\n"),s("span",{class:"token keyword"},"export"),l(),s("span",{class:"token keyword"},"default"),l(),s("span",{class:"token punctuation"},"{"),s("span",{class:"token punctuation"},"}"),l("\n")])]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),l("script")]),s("span",{class:"token punctuation"},">")]),l("\n")])],-1),k=o('<h2>配置</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">可选值</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">routes</td><td style="text-align:left;">自定义生成侧边菜单栏的路由，同 <code>vue-router</code> 中 routes (仅扩展 meta)</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">从 <code>vue-router</code> 中获取</td></tr><tr><td style="text-align:left;">separator</td><td style="text-align:left;">分隔符</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">‘/’</td></tr><tr><td style="text-align:left;">separator-class</td><td style="text-align:left;">图标分隔符 class</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr></tbody></table>',2),y={expose:[],setup:l=>(l,o)=>{const y=t("pro-breadcrumb"),f=t("pro-code");return e(),a("div",c,[p,d,u,r,s(f,null,{description:n((()=>[i])),code:n((()=>[g])),default:n((()=>[s(y)])),_:1}),k])}};export default y;