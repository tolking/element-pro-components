import{u as z}from"./index.e0b94cb9.js";import{r as l,R as w,z as U,A as S,U as p,O as e,u as o,f as i,E as n,J as _,H as T,at as V,a3 as a}from"./modules-vue.fb389e96.js";import"./modules-element-plus.7b597c42.js";const C={class:"markdown-body"},L=V('<h1 id="treeselect" tabindex="-1">TreeSelect <a class="header-anchor" href="#treeselect" aria-hidden="true">#</a></h1><blockquote><p>\u5F53\u9009\u9879\u7684\u5C42\u7EA7\u591A\u6DF1\u65F6\uFF0C\u4F7F\u7528\u6811\u5F62\u9009\u62E9\u5668\u6BD4\u666E\u901A\u9009\u62E9\u5668\u66F4\u9002\u5408</p></blockquote><h2 id="%E4%BD%BF%E7%94%A8" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#%E4%BD%BF%E7%94%A8" aria-hidden="true">#</a></h2><h3 id="%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" aria-hidden="true">#</a></h3><p>\u4F20\u5165 data \u6570\u636E\uFF0C\u751F\u6210\u6811\u5F62\u7ED3\u6784 (\u683C\u5F0F\u540C Select \u5206\u7EC4)</p>',5),H=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("pro-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"clearable"),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" select "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"111"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"211"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-2'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"221"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-2-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"311"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-2'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"321"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-2-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      select`),n("span",{class:"token punctuation"},","),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),K=n("h3",{id:"%E6%8E%A7%E5%88%B6%E4%B8%8D%E5%8F%AF%E9%80%89%E9%A1%B9%E7%9B%AE",tabindex:"-1"},[a("\u63A7\u5236\u4E0D\u53EF\u9009\u9879\u76EE "),n("a",{class:"header-anchor",href:"#%E6%8E%A7%E5%88%B6%E4%B8%8D%E5%8F%AF%E9%80%89%E9%A1%B9%E7%9B%AE","aria-hidden":"true"},"#")],-1),R=n("p",null,[a("\u5C06\u4F20\u5165 data \u6570\u636E\u4E2D\u7684\u67D0\u9879\u8BBE\u7F6E\u4E3A "),n("code",null,"disabled: true"),a(" \u5373\u53EF")],-1),J=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("pro-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select1"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data1"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" select1 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data1 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
      disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"111"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-1'"),n("span",{class:"token punctuation"},","),a(`
        disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"211"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-2'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"221"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-2-1'"),n("span",{class:"token punctuation"},","),a(" disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"311"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-2'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"321"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-2-1'"),n("span",{class:"token punctuation"},","),a(" disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      select1`),n("span",{class:"token punctuation"},","),a(`
      data1`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),O=n("h3",{id:"%E9%85%8D%E7%BD%AE%E7%BB%91%E5%AE%9A%E6%95%B0%E6%8D%AE%E9%94%AE%E5%80%BC",tabindex:"-1"},[a("\u914D\u7F6E\u7ED1\u5B9A\u6570\u636E\u952E\u503C "),n("a",{class:"header-anchor",href:"#%E9%85%8D%E7%BD%AE%E7%BB%91%E5%AE%9A%E6%95%B0%E6%8D%AE%E9%94%AE%E5%80%BC","aria-hidden":"true"},"#")],-1),G=n("p",null,[a("\u901A\u8FC7 config \u914D\u7F6E\u6570\u636E\u952E\u503C\u3002"),n("code",null,"value"),a("- v-model \u7ED1\u5B9A\u7684\u952E\u503C\u3001"),n("code",null,"label"),a("-\u663E\u793A\u952E\u503C\u3001"),n("code",null,"disabled"),a("-\u63A7\u5236\u4E0D\u53EF\u9009\u7684\u952E\u503C\u3001"),n("code",null,"children"),a("-\u5B50\u8282\u70B9\u7684\u952E\u503C")],-1),I=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("pro-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select2"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":config"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("config"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" select2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" config "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'label'"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'value'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"111"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"211"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-2'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"221"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-2-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"311"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-2'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"321"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-2-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      select2`),n("span",{class:"token punctuation"},","),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),M=n("h3",{id:"%E5%BC%80%E5%90%AF%E5%A4%9A%E9%80%89",tabindex:"-1"},[a("\u5F00\u542F\u591A\u9009 "),n("a",{class:"header-anchor",href:"#%E5%BC%80%E5%90%AF%E5%A4%9A%E9%80%89","aria-hidden":"true"},"#")],-1),P=n("p",null,[a("\u5F53 "),n("code",null,"multiple"),a(" \u4E3A "),n("code",null,"true"),a(" \u65F6\uFF0C\u542F\u7528\u591A\u9009\u3002\u6B64\u65F6\u7ED1\u5B9A\u7684 model-value \u4E3A\u6570\u7EC4\u683C\u5F0F")],-1),Q=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("pro-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select3"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"multiple"),a(`
    `),n("span",{class:"token attr-name"},"clearable"),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" select3 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"111"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"211"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-2'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"221"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-2-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"311"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-2'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"321"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-2-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      select3`),n("span",{class:"token punctuation"},","),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),W=n("h3",{id:"%E5%A4%9A%E9%80%89%E6%8E%A7%E5%88%B6%E4%B8%8D%E5%8F%AF%E9%80%89%E9%A1%B9%E7%9B%AE",tabindex:"-1"},[a("\u591A\u9009\u63A7\u5236\u4E0D\u53EF\u9009\u9879\u76EE "),n("a",{class:"header-anchor",href:"#%E5%A4%9A%E9%80%89%E6%8E%A7%E5%88%B6%E4%B8%8D%E5%8F%AF%E9%80%89%E9%A1%B9%E7%9B%AE","aria-hidden":"true"},"#")],-1),X=n("p",null,[a("\u540C\u5355\u9009\u53EA\u9700\u5C06\u4F20\u5165 data \u6570\u636E\u4E2D\u7684\u67D0\u9879\u8BBE\u7F6E\u4E3A "),n("code",null,"disabled: true"),a(" \u5373\u53EF")],-1),Y=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("pro-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select4"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data1"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"multiple"),a(`
    `),n("span",{class:"token attr-name"},"default-expand-all"),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" select4 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data1 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
      disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"111"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-1'"),n("span",{class:"token punctuation"},","),a(`
        disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"211"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-2'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"221"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-2-1'"),n("span",{class:"token punctuation"},","),a(" disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"311"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-2'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"321"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-2-1'"),n("span",{class:"token punctuation"},","),a(" disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      select4`),n("span",{class:"token punctuation"},","),a(`
      data1`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Z=n("h3",{id:"%E5%A4%9A%E9%80%89%E7%88%B6%E5%AD%90%E8%8A%82%E7%82%B9%E4%BA%92%E4%B8%8D%E5%85%B3%E8%81%94",tabindex:"-1"},[a("\u591A\u9009\u7236\u5B50\u8282\u70B9\u4E92\u4E0D\u5173\u8054 "),n("a",{class:"header-anchor",href:"#%E5%A4%9A%E9%80%89%E7%88%B6%E5%AD%90%E8%8A%82%E7%82%B9%E4%BA%92%E4%B8%8D%E5%85%B3%E8%81%94","aria-hidden":"true"},"#")],-1),$=n("p",null,[a("\u5F53 "),n("code",null,"check-strictly"),a(" \u4E3A "),n("code",null,"true"),a(" \u65F6\uFF0C\u7236\u5B50\u8282\u70B9\u4E92\u4E0D\u5173\u8054")],-1),nn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("pro-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select5"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"multiple"),a(`
    `),n("span",{class:"token attr-name"},"check-strictly"),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" select5 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"111"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"211"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-2'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"221"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-2-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"311"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-2'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"321"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-2-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      select5`),n("span",{class:"token punctuation"},","),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),an=n("h3",{id:"%E5%8F%AA%E9%80%89%E5%8F%96%E5%AD%90%E8%8A%82%E7%82%B9",tabindex:"-1"},[a("\u53EA\u9009\u53D6\u5B50\u8282\u70B9 "),n("a",{class:"header-anchor",href:"#%E5%8F%AA%E9%80%89%E5%8F%96%E5%AD%90%E8%8A%82%E7%82%B9","aria-hidden":"true"},"#")],-1),tn=n("p",null,[a("\u5F53 "),n("code",null,"only-select-leaf"),a(" \u4E3A "),n("code",null,"true"),a(" \u65F6\uFF0C\u53EA\u4F1A\u9009\u53D6\u5B50\u8282\u70B9\u7684\u6570\u636E")],-1),sn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("pro-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select6"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"multiple"),a(`
    `),n("span",{class:"token attr-name"},"only-select-leaf"),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" select6 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"111"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"211"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-2'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"221"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-2-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"311"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-2'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"321"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-2-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      select6`),n("span",{class:"token punctuation"},","),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),en=n("h3",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E8%8A%82%E7%82%B9%E6%98%BE%E7%A4%BA",tabindex:"-1"},[a("\u81EA\u5B9A\u4E49\u8282\u70B9\u663E\u793A "),n("a",{class:"header-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%8A%82%E7%82%B9%E6%98%BE%E7%A4%BA","aria-hidden":"true"},"#")],-1),on=n("p",null,[a("\u901A\u8FC7 "),n("code",null,"default"),a(" \u63D2\u69FD\u53EF\u4EE5\u5B9A\u4E49\u5185\u5BB9\u3002"),n("strong",null,"\u6CE8\u610F\uFF1A\u5728\u5355\u9009\u6A21\u5F0F\u4E0B\u9700\u8981\u53C2\u8003\u4E0B\u9762\u5185\u5BB9\u81EA\u5B9A\u4E49 class \u5B9E\u73B0\u63A7\u5236\u4E0D\u53EF\u9009\u9879\u76EE\u6837\u5F0F")],-1),ln=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("pro-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select7"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data1"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#default"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ node, data, multiple }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),a(`
        `),n("span",{class:"token attr-name"},":class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("node.disabled && !multiple ? "),n("span",{class:"token punctuation"},"'"),a("is-disabled"),n("span",{class:"token punctuation"},"'"),a(" : "),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("custom-tree-node"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("{{ data.label }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("em")]),n("span",{class:"token punctuation"},">")]),a("{{ data.value }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("em")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("pro-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" select7 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data1 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
      disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"111"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-1'"),n("span",{class:"token punctuation"},","),a(`
        disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"211"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-2'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"221"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-2-1'"),n("span",{class:"token punctuation"},","),a(" disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"311"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-2'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"321"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-2-1'"),n("span",{class:"token punctuation"},","),a(" disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      select7`),n("span",{class:"token punctuation"},","),a(`
      data1`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".custom-tree-node"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"flex"),n("span",{class:"token punctuation"},":"),a(" 1"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),a(" space-between"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".custom-tree-node em"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"padding-right"),n("span",{class:"token punctuation"},":"),a(" 15px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),pn=n("h3",{id:"%E9%80%89%E6%8B%A9%E8%8A%82%E7%82%B9%E8%BF%87%E6%BB%A4",tabindex:"-1"},[a("\u9009\u62E9\u8282\u70B9\u8FC7\u6EE4 "),n("a",{class:"header-anchor",href:"#%E9%80%89%E6%8B%A9%E8%8A%82%E7%82%B9%E8%BF%87%E6%BB%A4","aria-hidden":"true"},"#")],-1),cn=n("p",null,[a("\u5F53 "),n("code",null,"filterable"),a(" \u4E3A "),n("code",null,"true"),a(" \u65F6\uFF0C\u542F\u7528\u9009\u62E9\u8282\u70B9\u8FC7\u6EE4\u3002\u5728\u9009\u62E9\u6846\u4E2D\u8F93\u5165\u6587\u672C\uFF0C\u5C06\u8FC7\u6EE4\u8282\u70B9\u5185\u5BB9")],-1),un=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("pro-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select8"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"multiple"),a(`
    `),n("span",{class:"token attr-name"},"filterable"),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" select8 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"111"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"211"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-2'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"221"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2-2-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-1'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"311"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-2'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"321"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3-2-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      select8`),n("span",{class:"token punctuation"},","),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),kn=n("h3",{id:"%E6%87%92%E5%8A%A0%E8%BD%BD",tabindex:"-1"},[a("\u61D2\u52A0\u8F7D "),n("a",{class:"header-anchor",href:"#%E6%87%92%E5%8A%A0%E8%BD%BD","aria-hidden":"true"},"#")],-1),rn=n("p",null,[a("\u4E0E "),n("code",null,"ElTree"),a(" \u4E00\u6837\uFF0C\u914D\u7F6E "),n("code",null,"lazy"),a(),n("code",null,"load"),a(" \u5373\u53EF\u4F7F\u7528\u61D2\u52A0\u8F7D\u6570\u636E")],-1),dn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("pro-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select9"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data2"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":load"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("loadNode"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"lazy"),a(`
    `),n("span",{class:"token attr-name"},"multiple"),a(`
    `),n("span",{class:"token attr-name"},"filterable"),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" select9 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"loadNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("node"),n("span",{class:"token punctuation"},","),a(" resolve")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("node"),n("span",{class:"token punctuation"},"."),a("level "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'region'"),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'region'"),n("span",{class:"token punctuation"},","),a(`
          isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("node"),n("span",{class:"token punctuation"},"."),a("level "),n("span",{class:"token operator"},">"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf-'"),a(),n("span",{class:"token operator"},"+"),a(" node"),n("span",{class:"token punctuation"},"."),a("level"),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf-'"),a(),n("span",{class:"token operator"},"+"),a(" node"),n("span",{class:"token punctuation"},"."),a("level"),n("span",{class:"token punctuation"},","),a(`
          isLeaf`),n("span",{class:"token operator"},":"),a(" node"),n("span",{class:"token punctuation"},"."),a("level "),n("span",{class:"token operator"},"<="),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zone-'"),a(),n("span",{class:"token operator"},"+"),a(" node"),n("span",{class:"token punctuation"},"."),a("level"),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zone-'"),a(),n("span",{class:"token operator"},"+"),a(" node"),n("span",{class:"token punctuation"},"."),a("level"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),a("data"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"500"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      select9`),n("span",{class:"token punctuation"},","),a(`
      data2`),n("span",{class:"token punctuation"},","),a(`
      loadNode`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),gn=V('<h3 id="%E9%85%8D%E7%BD%AE" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#%E9%85%8D%E7%BD%AE" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u53EF\u9009\u503C</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">\u7ED1\u5B9A\u503C</td><td style="text-align:left;">string / array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">data</td><td style="text-align:left;">\u7ED1\u5B9A\u6570\u636E</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">config</td><td style="text-align:left;">\u914D\u7F6E\u7ED1\u5B9A\u6570\u636E\u952E\u503C</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">{ value: \u2018value\u2019, label: \u2018label\u2019, disabled: \u2018disabled\u2019, children: \u2018children\u2019 }</td></tr><tr><td style="text-align:left;">multiple</td><td style="text-align:left;">\u662F\u5426\u591A\u9009</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">\u662F\u5426\u7981\u7528</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">\u5C3A\u5BF8</td><td style="text-align:left;">string</td><td style="text-align:left;">medium / small / mini</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">clearable</td><td style="text-align:left;">\u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u9009\u9879</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">collapse-tags</td><td style="text-align:left;">\u591A\u9009\u65F6\u662F\u5426\u5C06\u9009\u4E2D\u503C\u6309\u6587\u5B57\u7684\u5F62\u5F0F\u5C55\u793A</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;">select input \u7684 name \u5C5E\u6027</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">autocomplete</td><td style="text-align:left;">select input \u7684 autocomplete \u5C5E\u6027</td><td style="text-align:left;">string</td><td style="text-align:left;">on / off</td><td style="text-align:left;">off</td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;">\u5360\u4F4D\u7B26</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">\u8BF7\u9009\u62E9</td></tr><tr><td style="text-align:left;">only-select-leaf</td><td style="text-align:left;">\u662F\u5426\u53EA\u9009\u53D6\u5B50\u8282\u70B9</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">filterable</td><td style="text-align:left;">\u662F\u5426\u53EF\u8FC7\u6EE4\u6811\u5F62</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">reserve-keyword</td><td style="text-align:left;">\u591A\u9009\u4E14\u53EF\u8FC7\u6EE4\u65F6\uFF0C\u662F\u5426\u5728\u9009\u4E2D\u4E00\u4E2A\u9009\u9879\u540E\u4FDD\u7559\u5F53\u524D\u7684\u641C\u7D22\u5173\u952E\u8BCD</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">popper-append-to-body</td><td style="text-align:left;">\u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20\u3002\u5728\u5F39\u51FA\u6846\u7684\u5B9A\u4F4D\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u53EF\u5C06\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3A false</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">automatic-dropdown</td><td style="text-align:left;">\u5BF9\u4E8E\u4E0D\u53EF\u641C\u7D22\u7684 Select\uFF0C\u662F\u5426\u5728\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u540E\u81EA\u52A8\u5F39\u51FA\u9009\u9879\u83DC\u5355</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">clear-icon</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u6E05\u7A7A\u56FE\u6807\u7684\u7C7B\u540D</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">el-icon-circle-close</td></tr><tr><td style="text-align:left;">render-after-expand</td><td style="text-align:left;">\u662F\u5426\u5728\u7B2C\u4E00\u6B21\u5C55\u5F00\u67D0\u4E2A\u6811\u8282\u70B9\u540E\u624D\u6E32\u67D3\u5176\u5B50\u8282\u70B9</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">load</td><td style="text-align:left;">\u52A0\u8F7D\u5B50\u6811\u6570\u636E\u7684\u65B9\u6CD5\uFF0C\u4EC5\u5F53 lazy \u5C5E\u6027\u4E3A true \u65F6\u751F\u6548</td><td style="text-align:left;">function(node, resolve)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">render-content</td><td style="text-align:left;">\u6811\u8282\u70B9\u7684\u5185\u5BB9\u533A\u7684\u6E32\u67D3 Function</td><td style="text-align:left;">Function(h, { node, data, store }</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">default-expand-all</td><td style="text-align:left;">\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u8282\u70B9</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">expand-on-click-node</td><td style="text-align:left;">\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\uFF0C \u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u5982\u679C\u4E3A false\uFF0C\u5219\u53EA\u6709\u70B9\u7BAD\u5934\u56FE\u6807\u7684\u65F6\u5019\u624D\u4F1A\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\u3002</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">check-on-click-node</td><td style="text-align:left;">\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\uFF0C\u5373\u53EA\u6709\u5728\u70B9\u51FB\u590D\u9009\u6846\u65F6\u624D\u4F1A\u9009\u4E2D\u8282\u70B9\u3002</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">auto-expand-parent</td><td style="text-align:left;">\u5C55\u5F00\u5B50\u8282\u70B9\u7684\u65F6\u5019\u662F\u5426\u81EA\u52A8\u5C55\u5F00\u7236\u8282\u70B9</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">check-strictly</td><td style="text-align:left;">\u5728\u663E\u793A\u590D\u9009\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u4E25\u683C\u7684\u9075\u5FAA\u7236\u5B50\u4E0D\u4E92\u76F8\u5173\u8054\u7684\u505A\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A false</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">filter-node-method</td><td style="text-align:left;">\u5BF9\u6811\u8282\u70B9\u8FDB\u884C\u7B5B\u9009\u65F6\u6267\u884C\u7684\u65B9\u6CD5\uFF0C\u8FD4\u56DE true \u8868\u793A\u8FD9\u4E2A\u8282\u70B9\u53EF\u4EE5\u663E\u793A\uFF0C\u8FD4\u56DE false \u5219\u8868\u793A\u8FD9\u4E2A\u8282\u70B9\u4F1A\u88AB\u9690\u85CF</td><td style="text-align:left;">Function(value, data, node)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">accordion</td><td style="text-align:left;">\u662F\u5426\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2A\u540C\u7EA7\u6811\u8282\u70B9\u5C55\u5F00</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">indent</td><td style="text-align:left;">\u76F8\u90BB\u7EA7\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u7F29\u8FDB\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">16</td></tr><tr><td style="text-align:left;">icon-class</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u56FE\u6807</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">lazy</td><td style="text-align:left;">\u662F\u5426\u61D2\u52A0\u8F7D\u5B50\u8282\u70B9\uFF0C\u9700\u4E0E load \u65B9\u6CD5\u7ED3\u5408\u4F7F\u7528</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">draggable</td><td style="text-align:left;">\u662F\u5426\u5F00\u542F\u62D6\u62FD\u8282\u70B9\u529F\u80FD</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">allow-drag</td><td style="text-align:left;">\u5224\u65AD\u8282\u70B9\u80FD\u5426\u88AB\u62D6\u62FD</td><td style="text-align:left;">Function(node)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">allow-drop</td><td style="text-align:left;">\u62D6\u62FD\u65F6\u5224\u5B9A\u76EE\u6807\u8282\u70B9\u80FD\u5426\u88AB\u653E\u7F6E\u3002<code>type</code> \u53C2\u6570\u6709\u4E09\u79CD\u60C5\u51B5\uFF1A\u2018prev\u2019\u3001\u2018inner\u2019 \u548C \u2018next\u2019\uFF0C\u5206\u522B\u8868\u793A\u653E\u7F6E\u5728\u76EE\u6807\u8282\u70B9\u524D\u3001\u63D2\u5165\u81F3\u76EE\u6807\u8282\u70B9\u548C\u653E\u7F6E\u5728\u76EE\u6807\u8282\u70B9\u540E</td><td style="text-align:left;">Function(draggingNode, dropNode, type)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr></tbody></table><h3 id="%E4%BA%8B%E4%BB%B6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#%E4%BA%8B%E4%BB%B6" aria-hidden="true">#</a></h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u76EE\u524D\u7684\u9009\u4E2D\u503C</td></tr><tr><td>visible-change</td><td>\u4E0B\u62C9\u6846\u51FA\u73B0/\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u51FA\u73B0\u5219\u4E3A true\uFF0C\u9690\u85CF\u5219\u4E3A false</td></tr><tr><td>remove-tag</td><td>\u591A\u9009\u6A21\u5F0F\u4E0B\u79FB\u9664 tag \u65F6\u89E6\u53D1</td><td>\u79FB\u9664\u7684 tag \u503C</td></tr><tr><td>clear</td><td>\u53EF\u6E05\u7A7A\u7684\u5355\u9009\u6A21\u5F0F\u4E0B\u7528\u6237\u70B9\u51FB\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>blur</td><td>\u5F53 input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td></tr><tr><td>focus</td><td>\u5F53 input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td></tr><tr><td>node-click</td><td>\u8282\u70B9\u88AB\u70B9\u51FB\u65F6\u7684\u56DE\u8C03</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u8282\u70B9\u7EC4\u4EF6\u672C\u8EAB\u3002</td></tr><tr><td>node-contextmenu</td><td>\u5F53\u67D0\u4E00\u8282\u70B9\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>\u5171\u56DB\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1Aevent\u3001\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u8282\u70B9\u7EC4\u4EF6\u672C\u8EAB\u3002</td></tr><tr><td>check-change</td><td>\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u8282\u70B9\u672C\u8EAB\u662F\u5426\u88AB\u9009\u4E2D\u3001\u8282\u70B9\u7684\u5B50\u6811\u4E2D\u662F\u5426\u6709\u88AB\u9009\u4E2D\u7684\u8282\u70B9</td></tr><tr><td>check</td><td>\u5F53\u590D\u9009\u6846\u88AB\u70B9\u51FB\u7684\u65F6\u5019\u89E6\u53D1</td><td>\u5171\u4E24\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u6811\u76EE\u524D\u7684\u9009\u4E2D\u72B6\u6001\u5BF9\u8C61\uFF0C\u5305\u542B checkedNodes\u3001checkedKeys\u3001halfCheckedNodes\u3001halfCheckedKeys \u56DB\u4E2A\u5C5E\u6027</td></tr><tr><td>current-change</td><td>\u5F53\u524D\u9009\u4E2D\u8282\u70B9\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E24\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u5F53\u524D\u8282\u70B9\u7684\u6570\u636E\uFF0C\u5F53\u524D\u8282\u70B9\u7684 Node \u5BF9\u8C61</td></tr><tr><td>node-expand</td><td>\u8282\u70B9\u88AB\u5C55\u5F00\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u8282\u70B9\u7EC4\u4EF6\u672C\u8EAB</td></tr><tr><td>node-collapse</td><td>\u8282\u70B9\u88AB\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u8282\u70B9\u7EC4\u4EF6\u672C\u8EAB</td></tr><tr><td>node-drag-start</td><td>\u8282\u70B9\u5F00\u59CB\u62D6\u62FD\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E24\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001event</td></tr><tr><td>node-drag-enter</td><td>\u62D6\u62FD\u8FDB\u5165\u5176\u4ED6\u8282\u70B9\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u6240\u8FDB\u5165\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001event</td></tr><tr><td>node-drag-leave</td><td>\u62D6\u62FD\u79BB\u5F00\u67D0\u4E2A\u8282\u70B9\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u6240\u79BB\u5F00\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001event</td></tr><tr><td>node-drag-over</td><td>\u5728\u62D6\u62FD\u8282\u70B9\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF08\u7C7B\u4F3C\u6D4F\u89C8\u5668\u7684 mouseover \u4E8B\u4EF6\uFF09</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u5F53\u524D\u8FDB\u5165\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001event</td></tr><tr><td>node-drag-end</td><td>\u62D6\u62FD\u7ED3\u675F\u65F6\uFF08\u53EF\u80FD\u672A\u6210\u529F\uFF09\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u56DB\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u7ED3\u675F\u62D6\u62FD\u65F6\u6700\u540E\u8FDB\u5165\u7684\u8282\u70B9\uFF08\u53EF\u80FD\u4E3A\u7A7A\uFF09\u3001\u88AB\u62D6\u62FD\u8282\u70B9\u7684\u653E\u7F6E\u4F4D\u7F6E\uFF08before\u3001after\u3001inner\uFF09\u3001event</td></tr><tr><td>node-drop</td><td>\u62D6\u62FD\u6210\u529F\u5B8C\u6210\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u56DB\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u7ED3\u675F\u62D6\u62FD\u65F6\u6700\u540E\u8FDB\u5165\u7684\u8282\u70B9\u3001\u88AB\u62D6\u62FD\u8282\u70B9\u7684\u653E\u7F6E\u4F4D\u7F6E\uFF08before\u3001after\u3001inner\uFF09\u3001event</td></tr></tbody></table><h3 id="%E6%8F%92%E6%A7%BD" tabindex="-1">\u63D2\u69FD <a class="header-anchor" href="#%E6%8F%92%E6%A7%BD" aria-hidden="true">#</a></h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { node, data, multiple }</td></tr></tbody></table>',6),xn={setup(bn,{expose:D}){D({frontmatter:{title:"TreeSelect",meta:[{name:"description",content:"\u5F53\u9009\u9879\u7684\u5C42\u7EA7\u591A\u6DF1\u65F6\uFF0C\u4F7F\u7528\u6811\u5F62\u9009\u62E9\u5668\u6BD4\u666E\u901A\u9009\u62E9\u5668\u66F4\u9002\u5408"},{property:"og:title",content:"TreeSelect"}]}}),z({title:"TreeSelect",meta:[{name:"description",content:"\u5F53\u9009\u9879\u7684\u5C42\u7EA7\u591A\u6DF1\u65F6\uFF0C\u4F7F\u7528\u6811\u5F62\u9009\u62E9\u5668\u6BD4\u666E\u901A\u9009\u62E9\u5668\u66F4\u9002\u5408"},{property:"og:title",content:"TreeSelect"}]});let g=l(""),c=l([{label:"1",value:1,children:[{value:11,label:"1-1",children:[{value:111,label:"1-1-1"}]}]},{value:2,label:"2",children:[{value:21,label:"2-1",children:[{value:211,label:"2-1-1"}]},{value:22,label:"2-2",children:[{value:221,label:"2-2-1"}]}]},{value:3,label:"3",children:[{value:31,label:"3-1",children:[{value:311,label:"3-1-1"}]},{value:32,label:"3-2",children:[{value:321,label:"3-2-1"}]}]}]),b=l(""),d=l([{label:"1",value:1,disabled:!0,children:[{value:11,label:"1-1",children:[{value:111,label:"1-1-1"}]}]},{value:2,label:"2",children:[{value:21,label:"2-1",disabled:!0,children:[{value:211,label:"2-1-1"}]},{value:22,label:"2-2",children:[{value:221,label:"2-2-1",disabled:!0}]}]},{value:3,label:"3",children:[{value:31,label:"3-1",children:[{value:311,label:"3-1-1"}]},{value:32,label:"3-2",children:[{value:321,label:"3-2-1",disabled:!0}]}]}]),f=l(""),q=l({value:"label",label:"value"});c=l([{label:"1",value:1,children:[{value:11,label:"1-1",children:[{value:111,label:"1-1-1"}]}]},{value:2,label:"2",children:[{value:21,label:"2-1",children:[{value:211,label:"2-1-1"}]},{value:22,label:"2-2",children:[{value:221,label:"2-2-1"}]}]},{value:3,label:"3",children:[{value:31,label:"3-1",children:[{value:311,label:"3-1-1"}]},{value:32,label:"3-2",children:[{value:321,label:"3-2-1"}]}]}]);let v=l([]);c=l([{label:"1",value:1,children:[{value:11,label:"1-1",children:[{value:111,label:"1-1-1"}]}]},{value:2,label:"2",children:[{value:21,label:"2-1",children:[{value:211,label:"2-1-1"}]},{value:22,label:"2-2",children:[{value:221,label:"2-2-1"}]}]},{value:3,label:"3",children:[{value:31,label:"3-1",children:[{value:311,label:"3-1-1"}]},{value:32,label:"3-2",children:[{value:321,label:"3-2-1"}]}]}]);let m=l([]);d=l([{label:"1",value:1,disabled:!0,children:[{value:11,label:"1-1",children:[{value:111,label:"1-1-1"}]}]},{value:2,label:"2",children:[{value:21,label:"2-1",disabled:!0,children:[{value:211,label:"2-1-1"}]},{value:22,label:"2-2",children:[{value:221,label:"2-2-1",disabled:!0}]}]},{value:3,label:"3",children:[{value:31,label:"3-1",children:[{value:311,label:"3-1-1"}]},{value:32,label:"3-2",children:[{value:321,label:"3-2-1",disabled:!0}]}]}]);let h=l([]);c=l([{label:"1",value:1,children:[{value:11,label:"1-1",children:[{value:111,label:"1-1-1"}]}]},{value:2,label:"2",children:[{value:21,label:"2-1",children:[{value:211,label:"2-1-1"}]},{value:22,label:"2-2",children:[{value:221,label:"2-2-1"}]}]},{value:3,label:"3",children:[{value:31,label:"3-1",children:[{value:311,label:"3-1-1"}]},{value:32,label:"3-2",children:[{value:321,label:"3-2-1"}]}]}]);let y=l([]);c=l([{label:"1",value:1,children:[{value:11,label:"1-1",children:[{value:111,label:"1-1-1"}]}]},{value:2,label:"2",children:[{value:21,label:"2-1",children:[{value:211,label:"2-1-1"}]},{value:22,label:"2-2",children:[{value:221,label:"2-2-1"}]}]},{value:3,label:"3",children:[{value:31,label:"3-1",children:[{value:311,label:"3-1-1"}]},{value:32,label:"3-2",children:[{value:321,label:"3-2-1"}]}]}]);let x=l("");d=l([{label:"1",value:1,disabled:!0,children:[{value:11,label:"1-1",children:[{value:111,label:"1-1-1"}]}]},{value:2,label:"2",children:[{value:21,label:"2-1",disabled:!0,children:[{value:211,label:"2-1-1"}]},{value:22,label:"2-2",children:[{value:221,label:"2-2-1",disabled:!0}]}]},{value:3,label:"3",children:[{value:31,label:"3-1",children:[{value:311,label:"3-1-1"}]},{value:32,label:"3-2",children:[{value:321,label:"3-2-1",disabled:!0}]}]}]);let E=l([]);c=l([{label:"1",value:1,children:[{value:11,label:"1-1",children:[{value:111,label:"1-1-1"}]}]},{value:2,label:"2",children:[{value:21,label:"2-1",children:[{value:211,label:"2-1-1"}]},{value:22,label:"2-2",children:[{value:221,label:"2-2-1"}]}]},{value:3,label:"3",children:[{value:31,label:"3-1",children:[{value:311,label:"3-1-1"}]},{value:32,label:"3-2",children:[{value:321,label:"3-2-1"}]}]}]);let A=l([]),F=[];function N(r,s){if(r.level===0)return s([{label:"region",value:"region",isLeaf:!0}]);if(r.level>2)return s([]);setTimeout(()=>{c=[{label:"leaf-"+r.level,value:"leaf-"+r.level,isLeaf:r.level<=2},{label:"zone-"+r.level,value:"zone-"+r.level}],s(c)},500)}return(r,s)=>{const u=w("pro-tree-select"),k=w("pro-code");return U(),S("div",C,[L,p(k,null,{code:e(()=>[H]),default:e(()=>[p(u,{modelValue:o(g),"onUpdate:modelValue":s[0]||(s[0]=t=>i(g)?g.value=t:g=t),data:o(c),clearable:""},null,8,["modelValue","data"])]),_:1}),K,R,p(k,null,{code:e(()=>[J]),default:e(()=>[p(u,{modelValue:o(b),"onUpdate:modelValue":s[1]||(s[1]=t=>i(b)?b.value=t:b=t),data:o(d)},null,8,["modelValue","data"])]),_:1}),O,G,p(k,null,{code:e(()=>[I]),default:e(()=>[p(u,{modelValue:o(f),"onUpdate:modelValue":s[2]||(s[2]=t=>i(f)?f.value=t:f=t),data:o(c),config:o(q)},null,8,["modelValue","data","config"])]),_:1}),M,P,p(k,null,{code:e(()=>[Q]),default:e(()=>[p(u,{modelValue:o(v),"onUpdate:modelValue":s[3]||(s[3]=t=>i(v)?v.value=t:v=t),data:o(c),multiple:"",clearable:""},null,8,["modelValue","data"])]),_:1}),W,X,p(k,null,{code:e(()=>[Y]),default:e(()=>[p(u,{modelValue:o(m),"onUpdate:modelValue":s[4]||(s[4]=t=>i(m)?m.value=t:m=t),data:o(d),multiple:"","default-expand-all":""},null,8,["modelValue","data"])]),_:1}),Z,$,p(k,null,{code:e(()=>[nn]),default:e(()=>[p(u,{modelValue:o(h),"onUpdate:modelValue":s[5]||(s[5]=t=>i(h)?h.value=t:h=t),data:o(c),multiple:"","check-strictly":""},null,8,["modelValue","data"])]),_:1}),an,tn,p(k,null,{code:e(()=>[sn]),default:e(()=>[p(u,{modelValue:o(y),"onUpdate:modelValue":s[6]||(s[6]=t=>i(y)?y.value=t:y=t),data:o(c),multiple:"","only-select-leaf":""},null,8,["modelValue","data"])]),_:1}),en,on,p(k,null,{code:e(()=>[ln]),default:e(()=>[p(u,{modelValue:o(x),"onUpdate:modelValue":s[7]||(s[7]=t=>i(x)?x.value=t:x=t),data:o(d)},{default:e(({node:t,data:B,multiple:j})=>[n("p",{class:T([t.disabled&&!j?"is-disabled":"","custom-tree-node"])},[n("span",null,_(B.label),1),n("em",null,_(B.value),1)],2)]),_:1},8,["modelValue","data"])]),_:1}),pn,cn,p(k,null,{code:e(()=>[un]),default:e(()=>[p(u,{modelValue:o(E),"onUpdate:modelValue":s[8]||(s[8]=t=>i(E)?E.value=t:E=t),data:o(c),multiple:"",filterable:""},null,8,["modelValue","data"])]),_:1}),kn,rn,p(k,null,{code:e(()=>[dn]),default:e(()=>[p(u,{modelValue:o(A),"onUpdate:modelValue":s[9]||(s[9]=t=>i(A)?A.value=t:A=t),data:o(F),load:N,lazy:"",multiple:"",filterable:""},null,8,["modelValue","data"])]),_:1}),gn])}}};export{xn as default};
