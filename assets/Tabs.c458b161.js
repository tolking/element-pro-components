import{u as t}from"./index.e657b745.js";import{B as a,D as n,o as s,N as o,k as e,l as c,m as p,p as l,a5 as u,ak as i,u as k}from"./modules-vue.7b886bc4.js";import"./modules-element-plus.4f915924.js";const d={class:"markdown-body"},r=i('<h1 id="tabs" tabindex="-1">Tabs <a class="header-anchor" href="#tabs" aria-hidden="true">#</a></h1><blockquote><p>根据浏览记录自动记录历史 tab</p></blockquote><h2 id="%E4%BD%BF%E7%94%A8" tabindex="-1">使用 <a class="header-anchor" href="#%E4%BD%BF%E7%94%A8" aria-hidden="true">#</a></h2><h3 id="%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" tabindex="-1">基础用法 <a class="header-anchor" href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" aria-hidden="true">#</a></h3>',4),h=p("p",null,"将自动记录路由变化",-1),b=p("pre",null,[p("code",{"v-pre":""},[p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),k("template")]),p("span",{class:"token punctuation"},">")]),k("\n  "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),k("pro-tabs")]),k(),p("span",{class:"token punctuation"},"/>")]),k("\n"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),k("template")]),p("span",{class:"token punctuation"},">")]),k("\n")])],-1),g=p("h3",{id:"%E5%A4%96%E9%83%A8%E8%B0%83%E7%94%A8%E5%85%B3%E9%97%AD",tabindex:"-1"},[k("外部调用关闭 "),p("a",{class:"header-anchor",href:"#%E5%A4%96%E9%83%A8%E8%B0%83%E7%94%A8%E5%85%B3%E9%97%AD","aria-hidden":"true"},"#")],-1),m=p("p",null,[k("通过 "),p("code",null,"ref"),k(" 绑定 "),p("code",null,"Tabs"),k(" 进而通过外部调用关闭 tab 页。注："),p("code",null,"const tabs = inject('tabs')"),k(" 由顶层 "),p("code",null,"Layout"),k(" 注入 "),p("a",{href:"https://github.com/tolking/element-pro-components/blob/master/docs/src/layout/Layout.vue"},"参考")],-1),E=p("pre",null,[p("code",{"v-pre":""},[p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),k("template")]),p("span",{class:"token punctuation"},">")]),k("\n  "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),k("pro-tabs")]),k(),p("span",{class:"token attr-name"},"ref"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),k("childTabs"),p("span",{class:"token punctuation"},'"')]),k(),p("span",{class:"token special-attr"},[p("span",{class:"token attr-name"},"style"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),p("span",{class:"token value css language-css"},[p("span",{class:"token property"},"margin-bottom"),p("span",{class:"token punctuation"},":"),k("15px")]),p("span",{class:"token punctuation"},'"')])]),k(),p("span",{class:"token punctuation"},"/>")]),k("\n  "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),k("el-button")]),k(),p("span",{class:"token attr-name"},"@click"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),k("childTabs.close("),p("span",{class:"token punctuation"},"'"),k("/zh-CN/guide/"),p("span",{class:"token punctuation"},"'"),k(")"),p("span",{class:"token punctuation"},'"')]),p("span",{class:"token punctuation"},">")]),k("关闭主页"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),k("el-button")]),p("span",{class:"token punctuation"},">")]),k("\n  "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),k("el-button")]),k(),p("span",{class:"token attr-name"},"@click"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),k("childTabs.closeOther"),p("span",{class:"token punctuation"},'"')]),p("span",{class:"token punctuation"},">")]),k("关闭其它"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),k("el-button")]),p("span",{class:"token punctuation"},">")]),k("\n  "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),k("el-button")]),k(),p("span",{class:"token attr-name"},"@click"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),k("asyncList"),p("span",{class:"token punctuation"},'"')]),p("span",{class:"token punctuation"},">")]),k("同步"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),k("el-button")]),p("span",{class:"token punctuation"},">")]),k("\n"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),k("template")]),p("span",{class:"token punctuation"},">")]),k("\n\n"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),k("script")]),p("span",{class:"token punctuation"},">")]),p("span",{class:"token script"},[p("span",{class:"token language-javascript"},[k("\n"),p("span",{class:"token keyword"},"import"),k(),p("span",{class:"token punctuation"},"{"),k(" inject"),p("span",{class:"token punctuation"},","),k(" onMounted"),p("span",{class:"token punctuation"},","),k(" shallowRef "),p("span",{class:"token punctuation"},"}"),k(),p("span",{class:"token keyword"},"from"),k(),p("span",{class:"token string"},"'vue'"),k("\n\n"),p("span",{class:"token keyword"},"export"),k(),p("span",{class:"token keyword"},"default"),k(),p("span",{class:"token punctuation"},"{"),k("\n  "),p("span",{class:"token function"},"setup"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},")"),k(),p("span",{class:"token punctuation"},"{"),k("\n    "),p("span",{class:"token keyword"},"const"),k(" tabs "),p("span",{class:"token operator"},"="),k(),p("span",{class:"token function"},"inject"),p("span",{class:"token punctuation"},"("),p("span",{class:"token string"},"'tabs'"),p("span",{class:"token punctuation"},")"),k(),p("span",{class:"token comment"},"// 获取顶层 `Tabs` 注入"),k("\n    "),p("span",{class:"token keyword"},"const"),k(" childTabs "),p("span",{class:"token operator"},"="),k(),p("span",{class:"token function"},"shallowRef"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},"{"),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},")"),k("\n\n    "),p("span",{class:"token function"},"onMounted"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},")"),k(),p("span",{class:"token operator"},"=>"),k(),p("span",{class:"token punctuation"},"{"),k("\n      "),p("span",{class:"token function"},"asyncList"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},")"),k("\n    "),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},")"),k("\n\n    "),p("span",{class:"token keyword"},"function"),k(),p("span",{class:"token function"},"asyncList"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},")"),k(),p("span",{class:"token punctuation"},"{"),k("\n      childTabs"),p("span",{class:"token punctuation"},"."),k("value"),p("span",{class:"token punctuation"},"."),k("list "),p("span",{class:"token operator"},"="),k(" tabs"),p("span",{class:"token punctuation"},"."),k("value"),p("span",{class:"token punctuation"},"."),k("list\n    "),p("span",{class:"token punctuation"},"}"),k("\n\n    "),p("span",{class:"token keyword"},"return"),k(),p("span",{class:"token punctuation"},"{"),k("\n      childTabs"),p("span",{class:"token punctuation"},","),k("\n      asyncList"),p("span",{class:"token punctuation"},","),k("\n    "),p("span",{class:"token punctuation"},"}"),k("\n  "),p("span",{class:"token punctuation"},"}"),k("\n"),p("span",{class:"token punctuation"},"}"),k("\n")])]),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),k("script")]),p("span",{class:"token punctuation"},">")]),k("\n")])],-1),f=k("关闭主页"),B=k("关闭其它"),y=k("同步"),v=i('<h3 id="%E9%85%8D%E7%BD%AE" tabindex="-1">配置 <a class="header-anchor" href="#%E9%85%8D%E7%BD%AE" aria-hidden="true">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>风格类型</td><td>string</td><td>card / border-card</td><td>-</td></tr><tr><td>closable</td><td>标签是否可关闭</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td>stretch</td><td>标签的宽度是否自撑开</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-leave</td><td>切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。</td><td>Function(activeName, oldActiveName)</td><td>-</td><td>-</td></tr></tbody></table><h3 id="%E4%BA%8B%E4%BB%B6" tabindex="-1">事件 <a class="header-anchor" href="#%E4%BA%8B%E4%BB%B6" aria-hidden="true">#</a></h3><table><thead><tr><th>名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>tab-click</td><td>tab 被选中时触发</td><td>被选中的标签 tab 实例</td></tr><tr><td>tab-remove</td><td>点击 tab 移除按钮后触发</td><td>被删除的标签的 name</td></tr></tbody></table><h3 id="%E6%96%B9%E6%B3%95" tabindex="-1">方法 <a class="header-anchor" href="#%E6%96%B9%E6%B3%95" aria-hidden="true">#</a></h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>close</td><td>从 tabs 中关闭指定路由的页面</td><td>path (需要关闭页面的路由)</td></tr><tr><td>closeOther</td><td>从 tabs 中关闭除当前路由的其它路由</td><td>-</td></tr></tbody></table>',6),A={setup(i,{expose:k}){k({frontmatter:{title:"Tabs",meta:[{name:"description",content:"根据浏览记录自动记录历史 tab"},{property:"og:title",content:"Tabs"}]}});t({title:"Tabs",meta:[{name:"description",content:"根据浏览记录自动记录历史 tab"},{property:"og:title",content:"Tabs"}]});let A=a("tabs"),x=n({});function T(){x.value.list=A.value.list}return s((()=>{T()})),(t,a)=>{const n=o("pro-tabs"),s=o("pro-code"),i=o("el-button");return e(),c("div",d,[r,p(s,null,{description:l((()=>[h])),code:l((()=>[b])),default:l((()=>[p(n)])),_:1}),g,p(s,null,{description:l((()=>[m])),code:l((()=>[E])),default:l((()=>[p(n,{ref:x,style:{"margin-bottom":"15px"}},null,512),p(i,{onClick:a[1]||(a[1]=t=>u(x).close("/zh-CN/guide/"))},{default:l((()=>[f])),_:1}),p(i,{onClick:u(x).closeOther},{default:l((()=>[B])),_:1},8,["onClick"]),p(i,{onClick:T},{default:l((()=>[y])),_:1})])),_:1}),v])}}};export{A as default};