import{u as t}from"./index.67f3777a.js";import{r as n,a9 as a,h as s,N as e,k as o,l,m as c,p,a5 as u,G as r,ak as i,u as d}from"./modules-vue.7b886bc4.js";import"./modules-element-plus.4f915924.js";const k={class:"markdown-body"},g=i('<h1 id="menu" tabindex="-1">Menu <a class="header-anchor" href="#menu" aria-hidden="true">#</a></h1><blockquote><p>Menu that provides navigation for your website</p></blockquote><h2 id="use" tabindex="-1">Use <a class="header-anchor" href="#use" aria-hidden="true">#</a></h2><h3 id="basic-use" tabindex="-1">Basic Use <a class="header-anchor" href="#basic-use" aria-hidden="true">#</a></h3>',4),f=c("p",null,"By default, the component will generate routes from vue-router",-1),y=c("pre",null,[c("code",{"v-pre":""},[c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),d("template")]),c("span",{class:"token punctuation"},">")]),d("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),d("pro-menu")]),d(),c("span",{class:"token punctuation"},"/>")]),d("\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),d("template")]),c("span",{class:"token punctuation"},">")]),d("\n")])],-1),h=c("h3",{id:"custom-mode",tabindex:"-1"},[d("Custom Mode "),c("a",{class:"header-anchor",href:"#custom-mode","aria-hidden":"true"},"#")],-1),m=c("p",null,[d("Set "),c("code",null,"mode"),d(" attribute to enable custom Mode")],-1),x=c("pre",null,[c("code",{"v-pre":""},[c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),d("template")]),c("span",{class:"token punctuation"},">")]),d("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),d("pro-radio-button")]),d("\n    "),c("span",{class:"token attr-name"},"v-model"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),d("mode"),c("span",{class:"token punctuation"},'"')]),d("\n    "),c("span",{class:"token attr-name"},":data"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),d("data"),c("span",{class:"token punctuation"},'"')]),d("\n  "),c("span",{class:"token punctuation"},"/>")]),d("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),d("pro-menu")]),d(),c("span",{class:"token attr-name"},":mode"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),d("mode"),c("span",{class:"token punctuation"},'"')]),d(),c("span",{class:"token punctuation"},"/>")]),d("\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),d("template")]),c("span",{class:"token punctuation"},">")]),d("\n\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),d("script")]),c("span",{class:"token punctuation"},">")]),c("span",{class:"token script"},[c("span",{class:"token language-javascript"},[d("\n"),c("span",{class:"token keyword"},"import"),d(),c("span",{class:"token punctuation"},"{"),d(" ref "),c("span",{class:"token punctuation"},"}"),d(),c("span",{class:"token keyword"},"from"),d(),c("span",{class:"token string"},"'vue'"),d("\n\n"),c("span",{class:"token keyword"},"export"),d(),c("span",{class:"token keyword"},"default"),d(),c("span",{class:"token punctuation"},"{"),d("\n  "),c("span",{class:"token function"},"setup"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),d(),c("span",{class:"token punctuation"},"{"),d("\n    "),c("span",{class:"token keyword"},"const"),d(" mode "),c("span",{class:"token operator"},"="),d(),c("span",{class:"token function"},"ref"),c("span",{class:"token punctuation"},"("),c("span",{class:"token string"},"'horizontal'"),c("span",{class:"token punctuation"},")"),d("\n    "),c("span",{class:"token keyword"},"const"),d(" data "),c("span",{class:"token operator"},"="),d(),c("span",{class:"token punctuation"},"["),d("\n      "),c("span",{class:"token punctuation"},"{"),d(" value"),c("span",{class:"token operator"},":"),d(),c("span",{class:"token string"},"'vertical'"),c("span",{class:"token punctuation"},","),d(" label"),c("span",{class:"token operator"},":"),d(),c("span",{class:"token string"},"'Vertical'"),d(),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},","),d("\n      "),c("span",{class:"token punctuation"},"{"),d(" value"),c("span",{class:"token operator"},":"),d(),c("span",{class:"token string"},"'horizontal'"),c("span",{class:"token punctuation"},","),d(" label"),c("span",{class:"token operator"},":"),d(),c("span",{class:"token string"},"'Horizontal'"),d(),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},","),d("\n    "),c("span",{class:"token punctuation"},"]"),d("\n\n    "),c("span",{class:"token keyword"},"return"),d(),c("span",{class:"token punctuation"},"{"),d("\n      mode"),c("span",{class:"token punctuation"},","),d("\n    "),c("span",{class:"token punctuation"},"}"),d("\n  "),c("span",{class:"token punctuation"},"}"),d("\n"),c("span",{class:"token punctuation"},"}"),d("\n")])]),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),d("script")]),c("span",{class:"token punctuation"},">")]),d("\n")])],-1),b=c("h3",{id:"custom-routes",tabindex:"-1"},[d("Custom routes "),c("a",{class:"header-anchor",href:"#custom-routes","aria-hidden":"true"},"#")],-1),v=c("p",null,[d("Set "),c("code",null,"routes"),d(" attribute to enable custom routes")],-1),w=c("pre",null,[c("code",{"v-pre":""},[c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),d("template")]),c("span",{class:"token punctuation"},">")]),d("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),d("pro-menu")]),d(),c("span",{class:"token attr-name"},":routes"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),d("routes"),c("span",{class:"token punctuation"},'"')]),d(),c("span",{class:"token punctuation"},"/>")]),d("\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),d("template")]),c("span",{class:"token punctuation"},">")]),d("\n\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),d("script")]),c("span",{class:"token punctuation"},">")]),c("span",{class:"token script"},[c("span",{class:"token language-javascript"},[d("\n"),c("span",{class:"token keyword"},"import"),d(),c("span",{class:"token punctuation"},"{"),d(" computed "),c("span",{class:"token punctuation"},"}"),d(),c("span",{class:"token keyword"},"from"),d(),c("span",{class:"token string"},"'vue'"),d("\n"),c("span",{class:"token keyword"},"import"),d(),c("span",{class:"token punctuation"},"{"),d(" useRouter "),c("span",{class:"token punctuation"},"}"),d(),c("span",{class:"token keyword"},"from"),d(),c("span",{class:"token string"},"'vue-router'"),d("\n\n"),c("span",{class:"token keyword"},"export"),d(),c("span",{class:"token keyword"},"default"),d(),c("span",{class:"token punctuation"},"{"),d("\n  "),c("span",{class:"token function"},"setup"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),d(),c("span",{class:"token punctuation"},"{"),d("\n    "),c("span",{class:"token keyword"},"const"),d(" router "),c("span",{class:"token operator"},"="),d(),c("span",{class:"token function"},"useRouter"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),d("\n    "),c("span",{class:"token keyword"},"const"),d(" routes "),c("span",{class:"token operator"},"="),d(),c("span",{class:"token function"},"computed"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),d(),c("span",{class:"token operator"},"=>"),d(),c("span",{class:"token punctuation"},"{"),d("\n      "),c("span",{class:"token keyword"},"const"),d(" _routes "),c("span",{class:"token operator"},"="),d(" router"),c("span",{class:"token punctuation"},"."),d("options"),c("span",{class:"token punctuation"},"."),d("routes\n      "),c("span",{class:"token keyword"},"return"),d(" _routes"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"find"),c("span",{class:"token punctuation"},"("),c("span",{class:"token parameter"},"item"),d(),c("span",{class:"token operator"},"=>"),d(),c("span",{class:"token punctuation"},"{"),d("\n        "),c("span",{class:"token keyword"},"return"),d(" item"),c("span",{class:"token punctuation"},"."),d("path "),c("span",{class:"token operator"},"==="),d(),c("span",{class:"token string"},"'/en-US/components/'"),d("\n      "),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},")"),c("span",{class:"token operator"},"?."),d("children "),c("span",{class:"token operator"},"||"),d(),c("span",{class:"token punctuation"},"["),c("span",{class:"token punctuation"},"]"),d("\n    "),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},")"),d("\n\n    "),c("span",{class:"token keyword"},"return"),d(),c("span",{class:"token punctuation"},"{"),d("\n      routes"),c("span",{class:"token punctuation"},","),d("\n    "),c("span",{class:"token punctuation"},"}"),d("\n  "),c("span",{class:"token punctuation"},"}"),d("\n"),c("span",{class:"token punctuation"},"}"),d("\n")])]),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),d("script")]),c("span",{class:"token punctuation"},">")]),d("\n")])],-1),M=i('<h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Options</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">routes</td><td style="text-align:left;">current routes</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">from <code>vue-router</code></td></tr><tr><td style="text-align:left;">mode</td><td style="text-align:left;">menu display mode</td><td style="text-align:left;">string</td><td style="text-align:left;">horizontal / vertical</td><td style="text-align:left;">vertical</td></tr><tr><td style="text-align:left;">collapse</td><td style="text-align:left;">whether the menu is collapsed (available only in vertical mode)</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">background-color</td><td style="text-align:left;">background color of Menu (hex format)</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">#ffffff</td></tr><tr><td style="text-align:left;">text-color</td><td style="text-align:left;">text color of Menu (hex format)</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">#303133</td></tr><tr><td style="text-align:left;">active-text-color</td><td style="text-align:left;">text color of currently active menu item (hex format)</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">#409EFF</td></tr><tr><td style="text-align:left;">default-openeds</td><td style="text-align:left;">array that contains indexes of currently active sub-menus</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">unique-opened</td><td style="text-align:left;">whether only one sub-menu can be active</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">menu-trigger</td><td style="text-align:left;">how sub-menus are triggered, only works when <code>mode</code> is ‘horizontal’</td><td style="text-align:left;">string</td><td style="text-align:left;">hover / click</td><td style="text-align:left;">hover</td></tr><tr><td style="text-align:left;">collapse-transition</td><td style="text-align:left;">whether to enable the collapse transition</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">-</td><td style="text-align:left;">Control menu display content, parameters { meta, path, redirect }</td></tr></tbody></table>',4),z={setup(i,{expose:d}){d({frontmatter:{title:"Menu",meta:[{name:"description",content:"Menu that provides navigation for your website"},{property:"og:title",content:"Menu"}]}});t({title:"Menu",meta:[{name:"description",content:"Menu that provides navigation for your website"},{property:"og:title",content:"Menu"}]});let z=n("horizontal"),q=[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}],j=a(),S=s((()=>{var t;return(null==(t=j.options.routes.find((t=>"/en-US/components/"===t.path)))?void 0:t.children)||[]}));return(t,n)=>{const a=e("pro-menu"),s=e("pro-code"),i=e("pro-radio-button");return o(),l("div",k,[g,c(s,null,{description:p((()=>[f])),code:p((()=>[y])),default:p((()=>[c(a)])),_:1}),h,c(s,null,{description:p((()=>[m])),code:p((()=>[x])),default:p((()=>[c(i,{modelValue:u(z),"onUpdate:modelValue":n[1]||(n[1]=t=>r(z)?z.value=t:z=t),data:u(q)},null,8,["modelValue","data"]),c(a,{mode:u(z)},null,8,["mode"])])),_:1}),b,c(s,null,{description:p((()=>[v])),code:p((()=>[w])),default:p((()=>[c(a,{routes:u(S)},null,8,["routes"])])),_:1}),M])}}};export{z as default};
