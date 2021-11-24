import{u as D}from"./index.e5d80030.js";import{s as l,H as S,o as I,z as L,a as c,M as e,av as j,L as n,a3 as t,v as o,l as i,Q as q,R as E}from"./modules-vue.d2e4dada.js";import"./modules-element-plus.abc6f9b1.js";const B={class:"markdown-body"},F=j('<h1 id="treeselect" tabindex="-1">TreeSelect <a class="header-anchor" href="#treeselect" aria-hidden="true">#</a></h1><blockquote><p>When there are deep of options, use tree selectors is more suitable than ordinary select</p></blockquote><h2 id="use" tabindex="-1">Use <a class="header-anchor" href="#use" aria-hidden="true">#</a></h2><h3 id="basic-use" tabindex="-1">Basic Use <a class="header-anchor" href="#basic-use" aria-hidden="true">#</a></h3><p>Set <code>data</code> attribute will automatic generate options (same like Select Group)</p>',5),W=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("select"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"clearable"),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" select "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"111"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"211"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-2'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"221"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-2-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"311"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-2'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"321"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-2-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      select`),n("span",{class:"token punctuation"},","),t(`
      data`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),H=n("h3",{id:"disabled-state",tabindex:"-1"},[t("Disabled State "),n("a",{class:"header-anchor",href:"#disabled-state","aria-hidden":"true"},"#")],-1),K=n("p",null,[t("Set the "),n("code",null,"disabled"),t(" attribute in prop "),n("code",null,"data")],-1),M=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("select1"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data1"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" select1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
      disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"111"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-1'"),n("span",{class:"token punctuation"},","),t(`
        disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"211"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-2'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"221"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-2-1'"),n("span",{class:"token punctuation"},","),t(" disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"311"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-2'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"321"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-2-1'"),n("span",{class:"token punctuation"},","),t(" disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      select1`),n("span",{class:"token punctuation"},","),t(`
      data1`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),O=j('<h3 id="configure-binding-data-key" tabindex="-1">Configure binding data key <a class="header-anchor" href="#configure-binding-data-key" aria-hidden="true">#</a></h3><p>Set <code>config</code> attribute. <code>value</code>- v-model bind key; <code>label</code>- display key; <code>disabled</code>- Disabled key; <code>children</code>- children key</p>',2),P=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("select2"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":config"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("config"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" select2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" config "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'value'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"111"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"211"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-2'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"221"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-2-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"311"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-2'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"321"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-2-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      select2`),n("span",{class:"token punctuation"},","),t(`
      data`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),R=n("h3",{id:"basic-multiple-select",tabindex:"-1"},[t("Basic multiple select "),n("a",{class:"header-anchor",href:"#basic-multiple-select","aria-hidden":"true"},"#")],-1),G=n("p",null,[t("Set "),n("code",null,"multiple"),t(" attribute to enable multiple mode. In this case, the value of v-model will be an array of selected options")],-1),Q=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("select3"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"multiple"),t(`
    `),n("span",{class:"token attr-name"},"clearable"),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" select3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"111"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"211"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-2'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"221"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-2-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"311"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-2'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"321"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-2-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      select3`),n("span",{class:"token punctuation"},","),t(`
      data`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),A=n("h3",{id:"disabled-state-on-multiple-select",tabindex:"-1"},[t("Disabled State on multiple select "),n("a",{class:"header-anchor",href:"#disabled-state-on-multiple-select","aria-hidden":"true"},"#")],-1),J=n("p",null,[t("Same like default select. Set the "),n("code",null,"disabled"),t(" attribute in prop "),n("code",null,"data")],-1),X=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("select4"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data1"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"multiple"),t(`
    `),n("span",{class:"token attr-name"},"default-expand-all"),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" select4 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
      disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"111"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-1'"),n("span",{class:"token punctuation"},","),t(`
        disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"211"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-2'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"221"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-2-1'"),n("span",{class:"token punctuation"},","),t(" disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"311"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-2'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"321"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-2-1'"),n("span",{class:"token punctuation"},","),t(" disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      select4`),n("span",{class:"token punctuation"},","),t(`
      data1`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Y=n("h3",{id:"check-strictly",tabindex:"-1"},[t("Check Strictly "),n("a",{class:"header-anchor",href:"#check-strictly","aria-hidden":"true"},"#")],-1),Z=n("p",null,[t("Set "),n("code",null,"check-strictly"),t(" attribute to checked state of a node not affects its father and child nodes")],-1),$=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("select5"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"multiple"),t(`
    `),n("span",{class:"token attr-name"},"check-strictly"),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" select5 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"111"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"211"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-2'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"221"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-2-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"311"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-2'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"321"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-2-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      select5`),n("span",{class:"token punctuation"},","),t(`
      data`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),nn=n("h3",{id:"only-select-leaf",tabindex:"-1"},[t("Only Select Leaf "),n("a",{class:"header-anchor",href:"#only-select-leaf","aria-hidden":"true"},"#")],-1),tn=n("p",null,[t("Set "),n("code",null,"only-select-leaf"),t(" attribute to only the data of child nodes will be selected")],-1),an=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("select6"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"multiple"),t(`
    `),n("span",{class:"token attr-name"},"only-select-leaf"),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" select6 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"111"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"211"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-2'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"221"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-2-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"311"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-2'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"321"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-2-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      select6`),n("span",{class:"token punctuation"},","),t(`
      data`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),sn=n("h3",{id:"custom-node-content",tabindex:"-1"},[t("Custom node content "),n("a",{class:"header-anchor",href:"#custom-node-content","aria-hidden":"true"},"#")],-1),en=n("p",null,[t("Use "),n("code",null,"default"),t(" slot to enable custom node content. "),n("strong",null,"Note: In the single select mode, you need to refer to the following content to customize the class to achieve control disabled item styles")],-1),on=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("select7"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data1"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#default"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ node, data, multiple }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(`
        `),n("span",{class:"token attr-name"},":class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("node.disabled && !multiple ? "),n("span",{class:"token punctuation"},"'"),t("is-disabled"),n("span",{class:"token punctuation"},"'"),t(" : "),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("custom-tree-node"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("{{ data.label }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("em")]),n("span",{class:"token punctuation"},">")]),t("{{ data.value }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("em")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("pro-tree-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" select7 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
      disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"111"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-1'"),n("span",{class:"token punctuation"},","),t(`
        disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"211"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-2'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"221"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-2-1'"),n("span",{class:"token punctuation"},","),t(" disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"311"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-2'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"321"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-2-1'"),n("span",{class:"token punctuation"},","),t(" disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      select7`),n("span",{class:"token punctuation"},","),t(`
      data1`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".custom-tree-node"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"flex"),n("span",{class:"token punctuation"},":"),t(" 1"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),t(" space-between"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".custom-tree-node em"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding-right"),n("span",{class:"token punctuation"},":"),t(" 15px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),ln=n("h3",{id:"tree-node-filtering",tabindex:"-1"},[t("Tree node filtering "),n("a",{class:"header-anchor",href:"#tree-node-filtering","aria-hidden":"true"},"#")],-1),cn=n("p",null,[t("Set "),n("code",null,"filterable"),t(" attribute to enable node filtering. Enter text in the input, the content of the tree node will be filtered")],-1),pn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("select8"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"multiple"),t(`
    `),n("span",{class:"token attr-name"},"filterable"),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" select8 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"111"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"211"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-2'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"221"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2-2-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"311"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-2'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"321"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3-2-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      select8`),n("span",{class:"token punctuation"},","),t(`
      data`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),un=n("h3",{id:"lazy-mode",tabindex:"-1"},[t("Lazy Mode "),n("a",{class:"header-anchor",href:"#lazy-mode","aria-hidden":"true"},"#")],-1),kn=n("p",null,[t("Same like "),n("code",null,"ElTree"),t(", set "),n("code",null,"lazy"),t(" and "),n("code",null,"load"),t(" attribute to enable lazy mode")],-1),rn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("select9"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data2"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":load"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loadNode"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"lazy"),t(`
    `),n("span",{class:"token attr-name"},"multiple"),t(`
    `),n("span",{class:"token attr-name"},"filterable"),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" select9 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"loadNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("node"),n("span",{class:"token punctuation"},","),t(" resolve")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("level "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
          label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'region'"),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'region'"),n("span",{class:"token punctuation"},","),t(`
          isLeaf`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("level "),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
          label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf-'"),t(),n("span",{class:"token operator"},"+"),t(" node"),n("span",{class:"token punctuation"},"."),t("level"),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf-'"),t(),n("span",{class:"token operator"},"+"),t(" node"),n("span",{class:"token punctuation"},"."),t("level"),n("span",{class:"token punctuation"},","),t(`
          isLeaf`),n("span",{class:"token operator"},":"),t(" node"),n("span",{class:"token punctuation"},"."),t("level "),n("span",{class:"token operator"},"<="),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
          label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'zone-'"),t(),n("span",{class:"token operator"},"+"),t(" node"),n("span",{class:"token punctuation"},"."),t("level"),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'zone-'"),t(),n("span",{class:"token operator"},"+"),t(" node"),n("span",{class:"token punctuation"},"."),t("level"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"500"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      select9`),n("span",{class:"token punctuation"},","),t(`
      data2`),n("span",{class:"token punctuation"},","),t(`
      loadNode`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),dn=j('<h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Options</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">binding value</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">data</td><td style="text-align:left;">binding data</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">config</td><td style="text-align:left;">config the key of data</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">{ value: \u2018value\u2019, label: \u2018label\u2019, disabled: \u2018disabled\u2019, children: \u2018children\u2019 }</td></tr><tr><td style="text-align:left;">multiple</td><td style="text-align:left;">whether multiple-select is activated</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">whether disabled</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">component size</td><td style="text-align:left;">string</td><td style="text-align:left;">medium / small / mini</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">clearable</td><td style="text-align:left;">whether clearable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">collapse-tags</td><td style="text-align:left;">whether to collapse tags to a text when multiple selecting</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;">the name attribute of select input</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">autocomplete</td><td style="text-align:left;">the autocomplete attribute of select input</td><td style="text-align:left;">string</td><td style="text-align:left;">on / off</td><td style="text-align:left;">off</td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;">placeholder</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">Select</td></tr><tr><td style="text-align:left;">only-select-leaf</td><td style="text-align:left;">whether to select only child leaf</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">filterable</td><td style="text-align:left;">whether Select is filterable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">reserve-keyword</td><td style="text-align:left;">when <code>multiple</code> and <code>filter</code> is true, whether to reserve current keyword after selecting an option</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">popper-append-to-body</td><td style="text-align:left;">whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">automatic-dropdown</td><td style="text-align:left;">for non-filterable Select, this prop decides if the option menu pops up when the input is focused</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">clear-icon</td><td style="text-align:left;">Custom clear icon class</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">el-icon-circle-close</td></tr><tr><td style="text-align:left;">render-after-expand</td><td style="text-align:left;">whether to render child nodes only after a parent node is expanded for the first time</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">load</td><td style="text-align:left;">method for loading subtree data, only works when <code>lazy</code> is true</td><td style="text-align:left;">function(node, resolve)</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">render-content</td><td style="text-align:left;">render function for tree node</td><td style="text-align:left;">Function(h, { node, data, store })</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">default-expand-all</td><td style="text-align:left;">whether to expand all nodes by default</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">expand-on-click-node</td><td style="text-align:left;">whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon.</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">check-on-click-node</td><td style="text-align:left;">whether to check or uncheck node when clicking on the node, if false, the node can only be checked or unchecked by clicking on the checkbox.</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">auto-expand-parent</td><td style="text-align:left;">whether to expand father node when a child node is expanded</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">default-expanded-keys</td><td style="text-align:left;">array of keys of initially expanded nodes</td><td style="text-align:left;">array</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">check-strictly</td><td style="text-align:left;">whether checked state of a node not affects its father and child nodes when <code>show-checkbox</code> is <code>true</code></td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">filter-node-method</td><td style="text-align:left;">this function will be executed on each node when use filter method. if return <code>false</code>, tree node will be hidden.</td><td style="text-align:left;">Function(value, data, node)</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">accordion</td><td style="text-align:left;">whether only one node among the same level can be expanded at one time</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">indent</td><td style="text-align:left;">horizontal indentation of nodes in adjacent levels in pixels</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">16</td></tr><tr><td style="text-align:left;">icon-class</td><td style="text-align:left;">custome tree node icon</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">lazy</td><td style="text-align:left;">whether to lazy load leaf node, used with <code>load</code> attribute</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">draggable</td><td style="text-align:left;">whether enable tree nodes drag and drop</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">allow-drag</td><td style="text-align:left;">this function will be executed before dragging a node. If <code>false</code> is returned, the node can not be dragged</td><td style="text-align:left;">Function(node)</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">allow-drop</td><td style="text-align:left;">this function will be executed before the dragging node is dropped. If <code>false</code> is returned, the dragging node can not be dropped at the target node. <code>type</code> has three possible values: \u2018prev\u2019 (inserting the dragging node before the target node), \u2018inner\u2019 (inserting the dragging node to the target node) and \u2018next\u2019 (inserting the dragging node after the target node)</td><td style="text-align:left;">Function(draggingNode, dropNode, type)</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when the selected value changes</td><td>current selected value</td></tr><tr><td>visible-change</td><td>triggers when the dropdown appears/disappears</td><td>true when it appears, and false otherwise</td></tr><tr><td>remove-tag</td><td>triggers when a tag is removed in multiple mode</td><td>removed tag value</td></tr><tr><td>clear</td><td>triggers when the clear icon is clicked in a clearable Select</td><td>\u2014</td></tr><tr><td>blur</td><td>triggers when Input blurs</td><td>(event: Event)</td></tr><tr><td>focus</td><td>triggers when Input focuses</td><td>(event: Event)</td></tr><tr><td>node-click</td><td>triggers when a node is clicked</td><td>three parameters: node object corresponding to the node clicked, <code>node</code> property of TreeNode, TreeNode itself</td></tr><tr><td>node-contextmenu</td><td>triggers when a node is clicked by right button</td><td>four parameters: event, node object corresponding to the node clicked, <code>node</code> property of TreeNode, TreeNode itself</td></tr><tr><td>check-change</td><td>triggers when the selected state of the node changes</td><td>three parameters: node object corresponding to the node whose selected state is changed, whether the node is selected, whether node\u2019s subtree has selected nodes</td></tr><tr><td>check</td><td>triggers after clicking the checkbox of a node</td><td>two parameters: node object corresponding to the node that is checked / unchecked, tree checked status object which has four props: checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys</td></tr><tr><td>current-change</td><td>triggers when current node changes</td><td>two parameters: node object corresponding to the current node, <code>node</code> property of TreeNode</td></tr><tr><td>node-expand</td><td>triggers when current node open</td><td>three parameters: node object corresponding to the node opened, <code>node</code> property of TreeNode, TreeNode itself</td></tr><tr><td>node-collapse</td><td>triggers when current node close</td><td>three parameters: node object corresponding to the node closed, <code>node</code> property of TreeNode, TreeNode itself</td></tr><tr><td>node-drag-start</td><td>triggers when dragging starts</td><td>two parameters: node object corresponding to the dragging node, event.</td></tr><tr><td>node-drag-enter</td><td>triggers when the dragging node enters another node</td><td>three parameters: node object corresponding to the dragging node, node object corresponding to the entering node, event.</td></tr><tr><td>node-drag-leave</td><td>triggers when the dragging node leaves a node</td><td>three parameters: node object corresponding to the dragging node, node object corresponding to the leaving node, event.</td></tr><tr><td>node-drag-over</td><td>triggers when dragging over a node (like mouseover event)</td><td>three parameters: node object corresponding to the dragging node, node object corresponding to the dragging over node, event.</td></tr><tr><td>node-drag-end</td><td>triggers when dragging ends</td><td>four parameters: node object corresponding to the dragging node, node object corresponding to the dragging end node (may be <code>undefined</code>), node drop type (before / after / inner), event.</td></tr><tr><td>node-drop</td><td>triggers after the dragging node is dropped</td><td>four parameters: node object corresponding to the dragging node, node object corresponding to the dropped node, node drop type (before / after / inner), event.</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>-</td><td>Custom content for tree nodes. The scope parameter is { node, data, multiple }</td></tr></tbody></table>',6),yn={setup(gn,{expose:N}){N({frontmatter:{title:"TreeSelect",meta:[{name:"description",content:"When there are deep of options, use tree selectors is more suitable than ordinary select"},{property:"og:title",content:"TreeSelect"}]}}),D({title:"TreeSelect",meta:[{name:"description",content:"When there are deep of options, use tree selectors is more suitable than ordinary select"},{property:"og:title",content:"TreeSelect"}]});let g=l(""),p=l([{label:"1",value:1,children:[{value:11,label:"1-1",children:[{value:111,label:"1-1-1"}]}]},{value:2,label:"2",children:[{value:21,label:"2-1",children:[{value:211,label:"2-1-1"}]},{value:22,label:"2-2",children:[{value:221,label:"2-2-1"}]}]},{value:3,label:"3",children:[{value:31,label:"3-1",children:[{value:311,label:"3-1-1"}]},{value:32,label:"3-2",children:[{value:321,label:"3-2-1"}]}]}]),b=l(""),d=l([{label:"1",value:1,disabled:!0,children:[{value:11,label:"1-1",children:[{value:111,label:"1-1-1"}]}]},{value:2,label:"2",children:[{value:21,label:"2-1",disabled:!0,children:[{value:211,label:"2-1-1"}]},{value:22,label:"2-2",children:[{value:221,label:"2-2-1",disabled:!0}]}]},{value:3,label:"3",children:[{value:31,label:"3-1",children:[{value:311,label:"3-1-1"}]},{value:32,label:"3-2",children:[{value:321,label:"3-2-1",disabled:!0}]}]}]),h=l(""),T=l({value:"label",label:"value"});p=l([{label:"1",value:1,children:[{value:11,label:"1-1",children:[{value:111,label:"1-1-1"}]}]},{value:2,label:"2",children:[{value:21,label:"2-1",children:[{value:211,label:"2-1-1"}]},{value:22,label:"2-2",children:[{value:221,label:"2-2-1"}]}]},{value:3,label:"3",children:[{value:31,label:"3-1",children:[{value:311,label:"3-1-1"}]},{value:32,label:"3-2",children:[{value:321,label:"3-2-1"}]}]}]);let f=l([]);p=l([{label:"1",value:1,children:[{value:11,label:"1-1",children:[{value:111,label:"1-1-1"}]}]},{value:2,label:"2",children:[{value:21,label:"2-1",children:[{value:211,label:"2-1-1"}]},{value:22,label:"2-2",children:[{value:221,label:"2-2-1"}]}]},{value:3,label:"3",children:[{value:31,label:"3-1",children:[{value:311,label:"3-1-1"}]},{value:32,label:"3-2",children:[{value:321,label:"3-2-1"}]}]}]);let v=l([]);d=l([{label:"1",value:1,disabled:!0,children:[{value:11,label:"1-1",children:[{value:111,label:"1-1-1"}]}]},{value:2,label:"2",children:[{value:21,label:"2-1",disabled:!0,children:[{value:211,label:"2-1-1"}]},{value:22,label:"2-2",children:[{value:221,label:"2-2-1",disabled:!0}]}]},{value:3,label:"3",children:[{value:31,label:"3-1",children:[{value:311,label:"3-1-1"}]},{value:32,label:"3-2",children:[{value:321,label:"3-2-1",disabled:!0}]}]}]);let m=l([]);p=l([{label:"1",value:1,children:[{value:11,label:"1-1",children:[{value:111,label:"1-1-1"}]}]},{value:2,label:"2",children:[{value:21,label:"2-1",children:[{value:211,label:"2-1-1"}]},{value:22,label:"2-2",children:[{value:221,label:"2-2-1"}]}]},{value:3,label:"3",children:[{value:31,label:"3-1",children:[{value:311,label:"3-1-1"}]},{value:32,label:"3-2",children:[{value:321,label:"3-2-1"}]}]}]);let y=l([]);p=l([{label:"1",value:1,children:[{value:11,label:"1-1",children:[{value:111,label:"1-1-1"}]}]},{value:2,label:"2",children:[{value:21,label:"2-1",children:[{value:211,label:"2-1-1"}]},{value:22,label:"2-2",children:[{value:221,label:"2-2-1"}]}]},{value:3,label:"3",children:[{value:31,label:"3-1",children:[{value:311,label:"3-1-1"}]},{value:32,label:"3-2",children:[{value:321,label:"3-2-1"}]}]}]);let x=l("");d=l([{label:"1",value:1,disabled:!0,children:[{value:11,label:"1-1",children:[{value:111,label:"1-1-1"}]}]},{value:2,label:"2",children:[{value:21,label:"2-1",disabled:!0,children:[{value:211,label:"2-1-1"}]},{value:22,label:"2-2",children:[{value:221,label:"2-2-1",disabled:!0}]}]},{value:3,label:"3",children:[{value:31,label:"3-1",children:[{value:311,label:"3-1-1"}]},{value:32,label:"3-2",children:[{value:321,label:"3-2-1",disabled:!0}]}]}]);let w=l([]);p=l([{label:"1",value:1,children:[{value:11,label:"1-1",children:[{value:111,label:"1-1-1"}]}]},{value:2,label:"2",children:[{value:21,label:"2-1",children:[{value:211,label:"2-1-1"}]},{value:22,label:"2-2",children:[{value:221,label:"2-2-1"}]}]},{value:3,label:"3",children:[{value:31,label:"3-1",children:[{value:311,label:"3-1-1"}]},{value:32,label:"3-2",children:[{value:321,label:"3-2-1"}]}]}]);let _=l([]),z=[];function U(r,s){if(r.level===0)return s([{label:"region",value:"region",isLeaf:!0}]);if(r.level>2)return s([]);setTimeout(()=>{p=[{label:"leaf-"+r.level,value:"leaf-"+r.level,isLeaf:r.level<=2},{label:"zone-"+r.level,value:"zone-"+r.level}],s(p)},500)}return(r,s)=>{const u=S("pro-tree-select"),k=S("pro-code");return I(),L("div",B,[F,c(k,null,{code:e(()=>[W]),default:e(()=>[c(u,{modelValue:o(g),"onUpdate:modelValue":s[0]||(s[0]=a=>i(g)?g.value=a:g=a),data:o(p),clearable:""},null,8,["modelValue","data"])]),_:1}),H,K,c(k,null,{code:e(()=>[M]),default:e(()=>[c(u,{modelValue:o(b),"onUpdate:modelValue":s[1]||(s[1]=a=>i(b)?b.value=a:b=a),data:o(d)},null,8,["modelValue","data"])]),_:1}),O,c(k,null,{code:e(()=>[P]),default:e(()=>[c(u,{modelValue:o(h),"onUpdate:modelValue":s[2]||(s[2]=a=>i(h)?h.value=a:h=a),data:o(p),config:o(T)},null,8,["modelValue","data","config"])]),_:1}),R,G,c(k,null,{code:e(()=>[Q]),default:e(()=>[c(u,{modelValue:o(f),"onUpdate:modelValue":s[3]||(s[3]=a=>i(f)?f.value=a:f=a),data:o(p),multiple:"",clearable:""},null,8,["modelValue","data"])]),_:1}),A,J,c(k,null,{code:e(()=>[X]),default:e(()=>[c(u,{modelValue:o(v),"onUpdate:modelValue":s[4]||(s[4]=a=>i(v)?v.value=a:v=a),data:o(d),multiple:"","default-expand-all":""},null,8,["modelValue","data"])]),_:1}),Y,Z,c(k,null,{code:e(()=>[$]),default:e(()=>[c(u,{modelValue:o(m),"onUpdate:modelValue":s[5]||(s[5]=a=>i(m)?m.value=a:m=a),data:o(p),multiple:"","check-strictly":""},null,8,["modelValue","data"])]),_:1}),nn,tn,c(k,null,{code:e(()=>[an]),default:e(()=>[c(u,{modelValue:o(y),"onUpdate:modelValue":s[6]||(s[6]=a=>i(y)?y.value=a:y=a),data:o(p),multiple:"","only-select-leaf":""},null,8,["modelValue","data"])]),_:1}),sn,en,c(k,null,{code:e(()=>[on]),default:e(()=>[c(u,{modelValue:o(x),"onUpdate:modelValue":s[7]||(s[7]=a=>i(x)?x.value=a:x=a),data:o(d)},{default:e(({node:a,data:V,multiple:C})=>[n("p",{class:E([a.disabled&&!C?"is-disabled":"","custom-tree-node"])},[n("span",null,q(V.label),1),n("em",null,q(V.value),1)],2)]),_:1},8,["modelValue","data"])]),_:1}),ln,cn,c(k,null,{code:e(()=>[pn]),default:e(()=>[c(u,{modelValue:o(w),"onUpdate:modelValue":s[8]||(s[8]=a=>i(w)?w.value=a:w=a),data:o(p),multiple:"",filterable:""},null,8,["modelValue","data"])]),_:1}),un,kn,c(k,null,{code:e(()=>[rn]),default:e(()=>[c(u,{modelValue:o(_),"onUpdate:modelValue":s[9]||(s[9]=a=>i(_)?_.value=a:_=a),data:o(z),load:U,lazy:"",multiple:"",filterable:""},null,8,["modelValue","data"])]),_:1}),dn])}}};export{yn as default};
