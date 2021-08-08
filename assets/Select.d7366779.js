import{u as t}from"./index.e657b745.js";import{r as n,N as a,k as s,l as e,m as l,p as o,a5 as p,G as c,ak as u,u as i}from"./modules-vue.7b886bc4.js";import"./modules-element-plus.4f915924.js";const r={class:"markdown-body"},d=u('<h1 id="select" tabindex="-1">Select <a class="header-anchor" href="#select" aria-hidden="true">#</a></h1><blockquote><p>When there are plenty of options, use a drop-down menu to display and select desired ones</p></blockquote><h2 id="use" tabindex="-1">Use <a class="header-anchor" href="#use" aria-hidden="true">#</a></h2><h3 id="basic-use" tabindex="-1">Basic Use <a class="header-anchor" href="#basic-use" aria-hidden="true">#</a></h3>',4),k=l("p",null,[i("Set "),l("code",null,"data"),i(" attribute will automatic generate options")],-1),g=l("pre",null,[l("code",{"v-pre":""},[l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),i("template")]),l("span",{class:"token punctuation"},">")]),i("\n  "),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),i("pro-select")]),i("\n    "),l("span",{class:"token attr-name"},"v-model"),l("span",{class:"token attr-value"},[l("span",{class:"token punctuation attr-equals"},"="),l("span",{class:"token punctuation"},'"'),i("select"),l("span",{class:"token punctuation"},'"')]),i("\n    "),l("span",{class:"token attr-name"},":data"),l("span",{class:"token attr-value"},[l("span",{class:"token punctuation attr-equals"},"="),l("span",{class:"token punctuation"},'"'),i("data"),l("span",{class:"token punctuation"},'"')]),i("\n  "),l("span",{class:"token punctuation"},"/>")]),i("\n"),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"</"),i("template")]),l("span",{class:"token punctuation"},">")]),i("\n\n"),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),i("script")]),l("span",{class:"token punctuation"},">")]),l("span",{class:"token script"},[l("span",{class:"token language-javascript"},[i("\n"),l("span",{class:"token keyword"},"import"),i(),l("span",{class:"token punctuation"},"{"),i(" ref "),l("span",{class:"token punctuation"},"}"),i(),l("span",{class:"token keyword"},"from"),i(),l("span",{class:"token string"},"'vue'"),i("\n\n"),l("span",{class:"token keyword"},"export"),i(),l("span",{class:"token keyword"},"default"),i(),l("span",{class:"token punctuation"},"{"),i("\n  "),l("span",{class:"token function"},"setup"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},")"),i(),l("span",{class:"token punctuation"},"{"),i("\n    "),l("span",{class:"token keyword"},"const"),i(" select "),l("span",{class:"token operator"},"="),i(),l("span",{class:"token function"},"ref"),l("span",{class:"token punctuation"},"("),l("span",{class:"token string"},"''"),l("span",{class:"token punctuation"},")"),i("\n    "),l("span",{class:"token keyword"},"const"),i(" data "),l("span",{class:"token operator"},"="),i(),l("span",{class:"token function"},"ref"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},"["),i("\n      "),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Go'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'go'"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i("\n      "),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'JavaScript'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'javascript'"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i("\n      "),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Python'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'python'"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i("\n      "),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Dart'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'dart'"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i("\n      "),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'V'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'v'"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i("\n    "),l("span",{class:"token punctuation"},"]"),l("span",{class:"token punctuation"},")"),i("\n\n    "),l("span",{class:"token keyword"},"return"),i(),l("span",{class:"token punctuation"},"{"),i("\n      select"),l("span",{class:"token punctuation"},","),i("\n      data"),l("span",{class:"token punctuation"},","),i("\n    "),l("span",{class:"token punctuation"},"}"),i("\n  "),l("span",{class:"token punctuation"},"}"),i("\n"),l("span",{class:"token punctuation"},"}"),i("\n")])]),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"</"),i("script")]),l("span",{class:"token punctuation"},">")]),i("\n")])],-1),f=l("h3",{id:"disabled-state",tabindex:"-1"},[i("Disabled State "),l("a",{class:"header-anchor",href:"#disabled-state","aria-hidden":"true"},"#")],-1),y=l("p",null,[i("Set the "),l("code",null,"disabled"),i(" attribute in prop "),l("code",null,"data")],-1),h=l("pre",null,[l("code",{"v-pre":""},[l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),i("template")]),l("span",{class:"token punctuation"},">")]),i("\n  "),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),i("pro-select")]),i("\n    "),l("span",{class:"token attr-name"},"v-model"),l("span",{class:"token attr-value"},[l("span",{class:"token punctuation attr-equals"},"="),l("span",{class:"token punctuation"},'"'),i("select1"),l("span",{class:"token punctuation"},'"')]),i("\n    "),l("span",{class:"token attr-name"},":data"),l("span",{class:"token attr-value"},[l("span",{class:"token punctuation attr-equals"},"="),l("span",{class:"token punctuation"},'"'),i("list"),l("span",{class:"token punctuation"},'"')]),i("\n  "),l("span",{class:"token punctuation"},"/>")]),i("\n"),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"</"),i("template")]),l("span",{class:"token punctuation"},">")]),i("\n\n"),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),i("script")]),l("span",{class:"token punctuation"},">")]),l("span",{class:"token script"},[l("span",{class:"token language-javascript"},[i("\n"),l("span",{class:"token keyword"},"import"),i(),l("span",{class:"token punctuation"},"{"),i(" ref "),l("span",{class:"token punctuation"},"}"),i(),l("span",{class:"token keyword"},"from"),i(),l("span",{class:"token string"},"'vue'"),i("\n\n"),l("span",{class:"token keyword"},"export"),i(),l("span",{class:"token keyword"},"default"),i(),l("span",{class:"token punctuation"},"{"),i("\n  "),l("span",{class:"token function"},"setup"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},")"),i(),l("span",{class:"token punctuation"},"{"),i("\n    "),l("span",{class:"token keyword"},"const"),i(" select1 "),l("span",{class:"token operator"},"="),i(),l("span",{class:"token function"},"ref"),l("span",{class:"token punctuation"},"("),l("span",{class:"token string"},"''"),l("span",{class:"token punctuation"},")"),i("\n    "),l("span",{class:"token keyword"},"const"),i(" list "),l("span",{class:"token operator"},"="),i(),l("span",{class:"token function"},"ref"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},"["),i("\n      "),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Go'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'go'"),l("span",{class:"token punctuation"},","),i(" disabled"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token boolean"},"true"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i("\n      "),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'JavaScript'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'javascript'"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i("\n      "),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Python'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'python'"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i("\n      "),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Dart'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'dart'"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i("\n      "),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'V'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'v'"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i("\n    "),l("span",{class:"token punctuation"},"]"),l("span",{class:"token punctuation"},")"),i("\n\n    "),l("span",{class:"token keyword"},"return"),i(),l("span",{class:"token punctuation"},"{"),i("\n      select1"),l("span",{class:"token punctuation"},","),i("\n      list"),l("span",{class:"token punctuation"},","),i("\n    "),l("span",{class:"token punctuation"},"}"),i("\n  "),l("span",{class:"token punctuation"},"}"),i("\n"),l("span",{class:"token punctuation"},"}"),i("\n")])]),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"</"),i("script")]),l("span",{class:"token punctuation"},">")]),i("\n")])],-1),x=l("h3",{id:"configure-binding-data-key",tabindex:"-1"},[i("Configure binding data key "),l("a",{class:"header-anchor",href:"#configure-binding-data-key","aria-hidden":"true"},"#")],-1),b=l("p",null,[i("Set "),l("code",null,"config"),i(" attribute. "),l("code",null,"value"),i("- v-model bind key; "),l("code",null,"label"),i("- display key; "),l("code",null,"disabled"),i("- Disabled key; "),l("code",null,"children"),i("- children key")],-1),v=l("pre",null,[l("code",{"v-pre":""},[l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),i("template")]),l("span",{class:"token punctuation"},">")]),i("\n  "),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),i("pro-select")]),i("\n    "),l("span",{class:"token attr-name"},"v-model"),l("span",{class:"token attr-value"},[l("span",{class:"token punctuation attr-equals"},"="),l("span",{class:"token punctuation"},'"'),i("select2"),l("span",{class:"token punctuation"},'"')]),i("\n    "),l("span",{class:"token attr-name"},":data"),l("span",{class:"token attr-value"},[l("span",{class:"token punctuation attr-equals"},"="),l("span",{class:"token punctuation"},'"'),i("data"),l("span",{class:"token punctuation"},'"')]),i("\n    "),l("span",{class:"token attr-name"},":config"),l("span",{class:"token attr-value"},[l("span",{class:"token punctuation attr-equals"},"="),l("span",{class:"token punctuation"},'"'),i("config"),l("span",{class:"token punctuation"},'"')]),i("\n  "),l("span",{class:"token punctuation"},"/>")]),i("\n"),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"</"),i("template")]),l("span",{class:"token punctuation"},">")]),i("\n\n"),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),i("script")]),l("span",{class:"token punctuation"},">")]),l("span",{class:"token script"},[l("span",{class:"token language-javascript"},[i("\n"),l("span",{class:"token keyword"},"import"),i(),l("span",{class:"token punctuation"},"{"),i(" ref "),l("span",{class:"token punctuation"},"}"),i(),l("span",{class:"token keyword"},"from"),i(),l("span",{class:"token string"},"'vue'"),i("\n\n"),l("span",{class:"token keyword"},"export"),i(),l("span",{class:"token keyword"},"default"),i(),l("span",{class:"token punctuation"},"{"),i("\n  "),l("span",{class:"token function"},"setup"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},")"),i(),l("span",{class:"token punctuation"},"{"),i("\n    "),l("span",{class:"token keyword"},"const"),i(" select2 "),l("span",{class:"token operator"},"="),i(),l("span",{class:"token function"},"ref"),l("span",{class:"token punctuation"},"("),l("span",{class:"token string"},"''"),l("span",{class:"token punctuation"},")"),i("\n    "),l("span",{class:"token keyword"},"const"),i(" config "),l("span",{class:"token operator"},"="),i(),l("span",{class:"token function"},"ref"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'label'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'value'"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},")"),i("\n    "),l("span",{class:"token keyword"},"const"),i(" data "),l("span",{class:"token operator"},"="),i(),l("span",{class:"token function"},"ref"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},"["),i("\n      "),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Go'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'go'"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i("\n      "),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'JavaScript'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'javascript'"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i("\n      "),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Python'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'python'"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i("\n      "),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Dart'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'dart'"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i("\n      "),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'V'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'v'"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i("\n    "),l("span",{class:"token punctuation"},"]"),l("span",{class:"token punctuation"},")"),i("\n\n    "),l("span",{class:"token keyword"},"return"),i(),l("span",{class:"token punctuation"},"{"),i("\n      select2"),l("span",{class:"token punctuation"},","),i("\n      config"),l("span",{class:"token punctuation"},","),i("\n      data"),l("span",{class:"token punctuation"},","),i("\n    "),l("span",{class:"token punctuation"},"}"),i("\n  "),l("span",{class:"token punctuation"},"}"),i("\n"),l("span",{class:"token punctuation"},"}"),i("\n")])]),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"</"),i("script")]),l("span",{class:"token punctuation"},">")]),i("\n")])],-1),m=l("h3",{id:"basic-multiple-select",tabindex:"-1"},[i("Basic multiple select "),l("a",{class:"header-anchor",href:"#basic-multiple-select","aria-hidden":"true"},"#")],-1),w=l("p",null,[i("Set "),l("code",null,"multiple"),i(" attribute to enable multiple mode. In this case, the value of v-model will be an array of selected options")],-1),S=l("pre",null,[l("code",{"v-pre":""},[l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),i("template")]),l("span",{class:"token punctuation"},">")]),i("\n  "),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),i("pro-select")]),i("\n    "),l("span",{class:"token attr-name"},"v-model"),l("span",{class:"token attr-value"},[l("span",{class:"token punctuation attr-equals"},"="),l("span",{class:"token punctuation"},'"'),i("select3"),l("span",{class:"token punctuation"},'"')]),i("\n    "),l("span",{class:"token attr-name"},":data"),l("span",{class:"token attr-value"},[l("span",{class:"token punctuation attr-equals"},"="),l("span",{class:"token punctuation"},'"'),i("data"),l("span",{class:"token punctuation"},'"')]),i("\n    "),l("span",{class:"token attr-name"},"multiple"),i("\n  "),l("span",{class:"token punctuation"},"/>")]),i("\n"),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"</"),i("template")]),l("span",{class:"token punctuation"},">")]),i("\n\n"),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),i("script")]),l("span",{class:"token punctuation"},">")]),l("span",{class:"token script"},[l("span",{class:"token language-javascript"},[i("\n"),l("span",{class:"token keyword"},"import"),i(),l("span",{class:"token punctuation"},"{"),i(" ref "),l("span",{class:"token punctuation"},"}"),i(),l("span",{class:"token keyword"},"from"),i(),l("span",{class:"token string"},"'vue'"),i("\n\n"),l("span",{class:"token keyword"},"export"),i(),l("span",{class:"token keyword"},"default"),i(),l("span",{class:"token punctuation"},"{"),i("\n  "),l("span",{class:"token function"},"setup"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},")"),i(),l("span",{class:"token punctuation"},"{"),i("\n    "),l("span",{class:"token keyword"},"const"),i(" select3 "),l("span",{class:"token operator"},"="),i(),l("span",{class:"token function"},"ref"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},"["),l("span",{class:"token punctuation"},"]"),l("span",{class:"token punctuation"},")"),i("\n    "),l("span",{class:"token keyword"},"const"),i(" data "),l("span",{class:"token operator"},"="),i(),l("span",{class:"token function"},"ref"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},"["),i("\n      "),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Go'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'go'"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i("\n      "),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'JavaScript'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'javascript'"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i("\n      "),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Python'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'python'"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i("\n      "),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Dart'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'dart'"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i("\n      "),l("span",{class:"token punctuation"},"{"),i(" value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'V'"),l("span",{class:"token punctuation"},","),i(" label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'v'"),i(),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i("\n    "),l("span",{class:"token punctuation"},"]"),l("span",{class:"token punctuation"},")"),i("\n\n    "),l("span",{class:"token keyword"},"return"),i(),l("span",{class:"token punctuation"},"{"),i("\n      select3"),l("span",{class:"token punctuation"},","),i("\n      data"),l("span",{class:"token punctuation"},","),i("\n    "),l("span",{class:"token punctuation"},"}"),i("\n  "),l("span",{class:"token punctuation"},"}"),i("\n"),l("span",{class:"token punctuation"},"}"),i("\n")])]),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"</"),i("script")]),l("span",{class:"token punctuation"},">")]),i("\n")])],-1),V=l("h3",{id:"grouping",tabindex:"-1"},[i("Grouping "),l("a",{class:"header-anchor",href:"#grouping","aria-hidden":"true"},"#")],-1),j=l("p",null,[i("Set "),l("code",null,"children"),i(" in "),l("code",null,"data"),i(" will automatic generate the children options (If there is a multi-layer hierarchies, "),l("code",null,"TreeSelect"),i(" is recommended)")],-1),D=l("pre",null,[l("code",{"v-pre":""},[l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),i("template")]),l("span",{class:"token punctuation"},">")]),i("\n  "),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),i("pro-select")]),i("\n    "),l("span",{class:"token attr-name"},"v-model"),l("span",{class:"token attr-value"},[l("span",{class:"token punctuation attr-equals"},"="),l("span",{class:"token punctuation"},'"'),i("select4"),l("span",{class:"token punctuation"},'"')]),i("\n    "),l("span",{class:"token attr-name"},":data"),l("span",{class:"token attr-value"},[l("span",{class:"token punctuation attr-equals"},"="),l("span",{class:"token punctuation"},'"'),i("data1"),l("span",{class:"token punctuation"},'"')]),i("\n  "),l("span",{class:"token punctuation"},"/>")]),i("\n"),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"</"),i("template")]),l("span",{class:"token punctuation"},">")]),i("\n\n"),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),i("script")]),l("span",{class:"token punctuation"},">")]),l("span",{class:"token script"},[l("span",{class:"token language-javascript"},[i("\n"),l("span",{class:"token keyword"},"import"),i(),l("span",{class:"token punctuation"},"{"),i(" ref "),l("span",{class:"token punctuation"},"}"),i(),l("span",{class:"token keyword"},"from"),i(),l("span",{class:"token string"},"'vue'"),i("\n\n"),l("span",{class:"token keyword"},"export"),i(),l("span",{class:"token keyword"},"default"),i(),l("span",{class:"token punctuation"},"{"),i("\n  "),l("span",{class:"token function"},"setup"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},")"),i(),l("span",{class:"token punctuation"},"{"),i("\n    "),l("span",{class:"token keyword"},"const"),i(" select4 "),l("span",{class:"token operator"},"="),i(),l("span",{class:"token function"},"ref"),l("span",{class:"token punctuation"},"("),l("span",{class:"token string"},"''"),l("span",{class:"token punctuation"},")"),i("\n    "),l("span",{class:"token keyword"},"const"),i(" data1 "),l("span",{class:"token operator"},"="),i(),l("span",{class:"token function"},"ref"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},"["),l("span",{class:"token punctuation"},"{"),i("\n      label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Popular cities'"),l("span",{class:"token punctuation"},","),i("\n      children"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token punctuation"},"["),l("span",{class:"token punctuation"},"{"),i("\n        value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Shanghai'"),l("span",{class:"token punctuation"},","),i("\n        label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Shanghai'"),i("\n      "),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i(),l("span",{class:"token punctuation"},"{"),i("\n        value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Beijing'"),l("span",{class:"token punctuation"},","),i("\n        label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Beijing'"),i("\n      "),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},"]"),i("\n    "),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i(),l("span",{class:"token punctuation"},"{"),i("\n      label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'City name'"),l("span",{class:"token punctuation"},","),i("\n      children"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token punctuation"},"["),l("span",{class:"token punctuation"},"{"),i("\n        value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Chengdu'"),l("span",{class:"token punctuation"},","),i("\n        label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Chengdu'"),i("\n      "),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i(),l("span",{class:"token punctuation"},"{"),i("\n        value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Shenzhen'"),l("span",{class:"token punctuation"},","),i("\n        label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Shenzhen'"),i("\n      "),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i(),l("span",{class:"token punctuation"},"{"),i("\n        value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Guangzhou'"),l("span",{class:"token punctuation"},","),i("\n        label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Guangzhou'"),i("\n      "),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),i(),l("span",{class:"token punctuation"},"{"),i("\n        value"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Dalian'"),l("span",{class:"token punctuation"},","),i("\n        label"),l("span",{class:"token operator"},":"),i(),l("span",{class:"token string"},"'Dalian'"),i("\n      "),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},"]"),i("\n    "),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},"]"),l("span",{class:"token punctuation"},")"),i("\n\n    "),l("span",{class:"token keyword"},"return"),i(),l("span",{class:"token punctuation"},"{"),i("\n      select4"),l("span",{class:"token punctuation"},","),i("\n      data1"),l("span",{class:"token punctuation"},","),i("\n    "),l("span",{class:"token punctuation"},"}"),i("\n  "),l("span",{class:"token punctuation"},"}"),i("\n"),l("span",{class:"token punctuation"},"}"),i("\n")])]),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"</"),i("script")]),l("span",{class:"token punctuation"},">")]),i("\n")])],-1),q=u('<h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Options</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">binding value</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">data</td><td style="text-align:left;">binding data</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">config</td><td style="text-align:left;">config the key of data</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">{ value: ‘value’, label: ‘label’, disabled: ‘disabled’, children: ‘children’ }</td></tr><tr><td style="text-align:left;">multiple</td><td style="text-align:left;">whether multiple-select is activated</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">whether disabled</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">component size</td><td style="text-align:left;">string</td><td style="text-align:left;">medium / small / mini</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">clearable</td><td style="text-align:left;">whether clearable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">collapse-tags</td><td style="text-align:left;">whether to collapse tags to a text when multiple selecting</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">multiple-limit</td><td style="text-align:left;">maximum number of options user can select when multiple is true. No limit when set to 0</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;">the name attribute of select input</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">autocomplete</td><td style="text-align:left;">the autocomplete attribute of select input</td><td style="text-align:left;">string</td><td style="text-align:left;">on /off</td><td style="text-align:left;">off</td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;">placeholder</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">Select</td></tr><tr><td style="text-align:left;">filterable</td><td style="text-align:left;">whether Select is filterable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">allow-create</td><td style="text-align:left;">whether creating new items is allowed. To use this, <code>filterable</code> must be true</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">filter-method</td><td style="text-align:left;">custom filter method</td><td style="text-align:left;">function</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">remote</td><td style="text-align:left;">whether options are loaded from server</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">remote-method</td><td style="text-align:left;">custom remote search method</td><td style="text-align:left;">function</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">loading</td><td style="text-align:left;">whether Select is loading data from server</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">loading-text</td><td style="text-align:left;">displayed text while loading data from server</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">Loading</td></tr><tr><td style="text-align:left;">no-match-text</td><td style="text-align:left;">displayed text when no data matches the filtering query, you can also use slot <code>empty</code></td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">No matching data</td></tr><tr><td style="text-align:left;">no-data-text</td><td style="text-align:left;">displayed text when there is no options, you can also use slot empty</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">No data</td></tr><tr><td style="text-align:left;">popper-class</td><td style="text-align:left;">custom class name for Select’s dropdown</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">reserve-keyword</td><td style="text-align:left;">when <code>multiple</code> and <code>filter</code> is true, whether to reserve current keyword after selecting an option</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">default-first-option</td><td style="text-align:left;">select first matching option on enter key. Use with <code>filterable</code> or <code>remote</code></td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">popper-append-to-body</td><td style="text-align:left;">whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">automatic-dropdown</td><td style="text-align:left;">for non-filterable Select, this prop decides if the option menu pops up when the input is focused</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">clear-icon</td><td style="text-align:left;">Custom clear icon class</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">el-icon-circle-close</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when the selected value changes</td><td>current selected value</td></tr><tr><td>visible-change</td><td>triggers when the dropdown appears/disappears</td><td>true when it appears, and false otherwise</td></tr><tr><td>remove-tag</td><td>triggers when a tag is removed in multiple mode</td><td>removed tag value</td></tr><tr><td>clear</td><td>triggers when the clear icon is clicked in a clearable Select</td><td>—</td></tr><tr><td>blur</td><td>triggers when Input blurs</td><td>(event: Event)</td></tr><tr><td>focus</td><td>triggers when Input focuses</td><td>(event: Event)</td></tr></tbody></table>',4),G={setup(u,{expose:i}){i({frontmatter:{title:"Select",meta:[{name:"description",content:"When there are plenty of options, use a drop-down menu to display and select desired ones"},{property:"og:title",content:"Select"}]}});t({title:"Select",meta:[{name:"description",content:"When there are plenty of options, use a drop-down menu to display and select desired ones"},{property:"og:title",content:"Select"}]});let G=n(""),P=n([{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]),z=n(""),C=n([{value:"Go",label:"go",disabled:!0},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]),J=n(""),U=n({value:"label",label:"value"});P=n([{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]);let B=n([]);P=n([{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]);let N=n(""),I=n([{label:"Popular cities",children:[{value:"Shanghai",label:"Shanghai"},{value:"Beijing",label:"Beijing"}]},{label:"City name",children:[{value:"Chengdu",label:"Chengdu"},{value:"Shenzhen",label:"Shenzhen"},{value:"Guangzhou",label:"Guangzhou"},{value:"Dalian",label:"Dalian"}]}]);return(t,n)=>{const u=a("pro-select"),i=a("pro-code");return s(),e("div",r,[d,l(i,null,{description:o((()=>[k])),code:o((()=>[g])),default:o((()=>[l(u,{modelValue:p(G),"onUpdate:modelValue":n[1]||(n[1]=t=>c(G)?G.value=t:G=t),data:p(P)},null,8,["modelValue","data"])])),_:1}),f,l(i,null,{description:o((()=>[y])),code:o((()=>[h])),default:o((()=>[l(u,{modelValue:p(z),"onUpdate:modelValue":n[2]||(n[2]=t=>c(z)?z.value=t:z=t),data:p(C)},null,8,["modelValue","data"])])),_:1}),x,l(i,null,{description:o((()=>[b])),code:o((()=>[v])),default:o((()=>[l(u,{modelValue:p(J),"onUpdate:modelValue":n[3]||(n[3]=t=>c(J)?J.value=t:J=t),data:p(P),config:p(U)},null,8,["modelValue","data","config"])])),_:1}),m,l(i,null,{description:o((()=>[w])),code:o((()=>[S])),default:o((()=>[l(u,{modelValue:p(B),"onUpdate:modelValue":n[4]||(n[4]=t=>c(B)?B.value=t:B=t),data:p(P),multiple:""},null,8,["modelValue","data"])])),_:1}),V,l(i,null,{description:o((()=>[j])),code:o((()=>[D])),default:o((()=>[l(u,{modelValue:p(N),"onUpdate:modelValue":n[5]||(n[5]=t=>c(N)?N.value=t:N=t),data:p(I)},null,8,["modelValue","data"])])),_:1}),q])}}};export{G as default};