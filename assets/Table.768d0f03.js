import{u as p}from"./index.33ec8670.js";import{T as c,a as u,b as i,c as k,d as r,e as d,f as g,g as f,h as y,i as m,j as x,_ as h}from"./typescript.323f8f40.js";import{H as b,o as w,c as v,P as a,M as s,aw as o,a as t,a4 as n}from"./modules-vue.44fa8951.js";import"./modules-element-plus.c099898d.js";import"./table.d4854e81.js";const A={class:"markdown-body"},E=o('<h1 id="table" tabindex="-1">Table <a class="header-anchor" href="#table" aria-hidden="true">#</a></h1><blockquote><p>\u5C01\u88C5\u8868\u683C\u7EC4\u4EF6\u5B9E\u73B0\u901A\u8FC7\u914D\u7F6E\u52A8\u6001\u751F\u6210\u5217</p></blockquote><h2 id="%E4%BD%BF%E7%94%A8" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#%E4%BD%BF%E7%94%A8" aria-hidden="true">#</a></h2><h3 id="%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" aria-hidden="true">#</a></h3><p>\u5F53 columns \u7ED1\u5B9A\u7684\u662F\u4E00\u4E2A\u5177\u6709\u54CD\u5E94\u5F0F\u7684\u6570\u7EC4\u65F6\uFF0C\u6570\u7EC4\u7684\u53D8\u52A8\u4F1A\u5F71\u54CD\u8868\u683C\u53D8\u52A8\uFF08\u53CA\u52A8\u6001\u8868\u683C\uFF09\u3002\u5982\u679C\u4E0D\u9700\u8981\u52A8\u6001\u8868\u683C\u63A8\u8350\u7ED1\u5B9A\u4E00\u4E2A\u666E\u901A\u6570\u7EC4</p>',5),T=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" columns "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Date'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Name'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Address'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      columns`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),_=t("p",null,"@/demo/Table/base.vue",-1),C=o('<h3 id="%E6%99%BA%E8%83%BD%E6%8F%90%E7%A4%BA" tabindex="-1">\u667A\u80FD\u63D0\u793A <a class="header-anchor" href="#%E6%99%BA%E8%83%BD%E6%8F%90%E7%A4%BA" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u8F85\u52A9\u51FD\u6570 <code>defineTableColumns</code> <code>defineTableMenuColumns</code> <code>defineTableSelectionColumns</code> <code>defineTableIndexColumns</code> <code>defineTableExpandColumns</code> \u63D0\u4F9B\u667A\u80FD\u63D0\u793A</p>',2),B=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineTableColumns "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'element-pro-components'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" columns "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"defineTableColumns"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Date'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Name'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Address'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      columns`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),N=t("p",null,"@/demo/Table/define.vue",-1),S=t("h3",{id:"%E8%8E%B7%E5%8F%96%E5%B5%8C%E5%A5%97%E9%94%AE%E5%80%BC",tabindex:"-1"},[n("\u83B7\u53D6\u5D4C\u5957\u952E\u503C "),t("a",{class:"header-anchor",href:"#%E8%8E%B7%E5%8F%96%E5%B5%8C%E5%A5%97%E9%94%AE%E5%80%BC","aria-hidden":"true"},"#")],-1),L=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineTableColumns "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'element-pro-components'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" columns "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"defineTableColumns"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Break'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'b.c'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Object'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'b.d'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Array'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'d[0].e'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token string"},"'b.c'"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'break nested value'"),t("span",{class:"token punctuation"},","),n(`
        b`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
          c`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'nested value c in b'"),t("span",{class:"token punctuation"},","),n(`
          d`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'nested value d in b'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        d`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(" e"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'nested value in array'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      columns`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),q=t("p",null,"@/demo/Table/nested.vue",-1),G=t("h3",{id:"%E7%B4%A2%E5%BC%95%E8%A1%A8%E6%A0%BC",tabindex:"-1"},[n("\u7D22\u5F15\u8868\u683C "),t("a",{class:"header-anchor",href:"#%E7%B4%A2%E5%BC%95%E8%A1%A8%E6%A0%BC","aria-hidden":"true"},"#")],-1),D=t("p",null,[n("\u901A\u8FC7\u914D\u7F6E "),t("code",null,"index"),n(" \u663E\u793A\u7D22\u5F15\u5217\uFF0C\u652F\u6301 columns \u7684\u53C2\u6570")],-1),F=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":index"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("index"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(`
  defineTableColumns`),t("span",{class:"token punctuation"},","),n(`
  defineTableIndexColumns`),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'element-pro-components'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" index "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"defineTableIndexColumns"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
      label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'#'"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" columns "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"defineTableColumns"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Date'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Name'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Address'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      index`),t("span",{class:"token punctuation"},","),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      columns`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),j=t("p",null,"@/demo/Table/index.vue",-1),z=t("h3",{id:"%E5%A4%9A%E9%80%89%E8%A1%A8%E6%A0%BC",tabindex:"-1"},[n("\u591A\u9009\u8868\u683C "),t("a",{class:"header-anchor",href:"#%E5%A4%9A%E9%80%89%E8%A1%A8%E6%A0%BC","aria-hidden":"true"},"#")],-1),I=t("p",null,[n("\u901A\u8FC7\u914D\u7F6E "),t("code",null,"selection"),n(" \u663E\u793A\u591A\u9009\u6846\uFF0C\u652F\u6301 columns \u7684\u53C2\u6570")],-1),M=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"selection"),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineTableColumns "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'element-pro-components'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" columns "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"defineTableColumns"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Date'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Name'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Address'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      columns`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),O=t("p",null,"@/demo/Table/selection.vue",-1),P=t("h3",{id:"%E5%8F%AF%E5%B1%95%E5%BC%80%E8%A1%A8%E6%A0%BC",tabindex:"-1"},[n("\u53EF\u5C55\u5F00\u8868\u683C "),t("a",{class:"header-anchor",href:"#%E5%8F%AF%E5%B1%95%E5%BC%80%E8%A1%A8%E6%A0%BC","aria-hidden":"true"},"#")],-1),R=t("p",null,[n("\u901A\u8FC7 #expand \u63D2\u69FD\u5B9A\u5236\u663E\u793A\u53EF\u5C55\u5F00\u5185\u5BB9\uFF0C\u901A\u8FC7 "),t("code",null,"expand"),n(" \u53EF\u8FDB\u884C\u76F8\u5173\u914D\u7F6E\uFF0C\u652F\u6301 columns \u7684\u53C2\u6570")],-1),V=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#expand"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ row }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      {{ row }}
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("pro-table")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineTableColumns "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'element-pro-components'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" columns "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"defineTableColumns"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Date'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Name'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Address'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      columns`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),$=t("p",null,"@/demo/Table/expand.vue",-1),K=t("h3",{id:"%E5%AE%9A%E4%B9%89%E6%93%8D%E4%BD%9C%E6%8C%89%E9%92%AE",tabindex:"-1"},[n("\u5B9A\u4E49\u64CD\u4F5C\u6309\u94AE "),t("a",{class:"header-anchor",href:"#%E5%AE%9A%E4%B9%89%E6%93%8D%E4%BD%9C%E6%8C%89%E9%92%AE","aria-hidden":"true"},"#")],-1),H=t("p",null,[n("\u901A\u8FC7 #menu \u63D2\u69FD\u5B9A\u5236\u663E\u793A\u64CD\u4F5C\u6309\u94AE\u5185\u5BB9\uFF0C\u901A\u8FC7 "),t("code",null,"menu"),n(" \u53EF\u8FDB\u884C\u76F8\u5173\u914D\u7F6E\uFF0C\u652F\u6301 columns \u7684\u53C2\u6570")],-1),W=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":menu"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("menu"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#menu"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ size }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("el-button")]),n(`
        `),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("text"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n(`
        Detail
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("el-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("pro-table")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(`
  defineTableColumns`),t("span",{class:"token punctuation"},","),n(`
  defineTableMenuColumns`),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'element-pro-components'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" menu "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"defineTableMenuColumns"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
      label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Operations'"),t("span",{class:"token punctuation"},","),n(`
      align`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'center'"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" columns "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"defineTableColumns"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Date'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Name'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Address'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      menu`),t("span",{class:"token punctuation"},","),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      columns`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),U=t("p",null,"@/demo/Table/menu.vue",-1),J=t("h3",{id:"%E6%8F%92%E6%A7%BD",tabindex:"-1"},[n("\u63D2\u69FD "),t("a",{class:"header-anchor",href:"#%E6%8F%92%E6%A7%BD","aria-hidden":"true"},"#")],-1),Q=t("p",null,[n("\u5728 "),t("code",null,"columns"),n(" \u4E2D\u914D\u7F6E "),t("code",null,"render"),n(" \u53EF\u4EE5\u4F7F\u7528\u7B80\u5355\u7684"),t("a",{href:"https://v3.cn.vuejs.org/guide/render-function.html"},"\u6E32\u67D3\u51FD\u6570"),n("\u3002\u6216\u8005\u76F4\u63A5\u5728\u6A21\u7248\u4E2D\u589E\u52A0\u5E26 "),t("code",null,"[prop]"),n(" \u76F8\u5173\u7684\u63D2\u69FD")],-1),X=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#name-header"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ column }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("s")]),t("span",{class:"token punctuation"},">")]),n("{{ column.label }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("s")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ row, size }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("el-tag")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        {{ row?.name }}
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("el-tag")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("pro-table")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" h"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineTableColumns "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'element-pro-components'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" columns "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"defineTableColumns"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Date'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
        render`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'--'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Name'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Address'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token function-variable function"},"render"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"row"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token function"},"h"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'em'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},","),n(" row"),t("span",{class:"token punctuation"},"."),n("address"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      columns`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),Y=t("p",null,"@/demo/Table/slots.vue",-1),Z=t("h3",{id:"%E6%98%BE%E7%A4%BA%E5%88%86%E9%A1%B5",tabindex:"-1"},[n("\u663E\u793A\u5206\u9875 "),t("a",{class:"header-anchor",href:"#%E6%98%BE%E7%A4%BA%E5%88%86%E9%A1%B5","aria-hidden":"true"},"#")],-1),tt=t("p",null,[n("\u5F53\u4F20\u5165 "),t("code",null,"total"),n(" \u6570\u636E\u65F6\uFF0C\u5C06\u81EA\u52A8\u663E\u793A\u5206\u9875\u3002\u53EF\u4EE5\u901A\u8FC7 "),t("code",null,"v-model:current-page"),n(" \u7ED1\u5B9A\u5F53\u524D\u9875\u6570\u3001\u901A\u8FC7 "),t("code",null,"v-model:page-size"),n(" \u7ED1\u5B9A\u6BCF\u9875\u663E\u793A\u6761\u76EE\u4E2A\u6570")],-1),nt=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("current-page")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("currentPage"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("page-size")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("pageSize"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":total"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("total"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineTableColumns "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'element-pro-components'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" currentPage "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" pageSize "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" total "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"50"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" columns "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"defineTableColumns"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Date'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Name'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Address'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      currentPage`),t("span",{class:"token punctuation"},","),n(`
      pageSize`),t("span",{class:"token punctuation"},","),n(`
      total`),t("span",{class:"token punctuation"},","),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      columns`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),st=t("p",null,"@/demo/Table/pagination.vue",-1),at=t("h3",{id:"%E5%A4%9A%E7%BA%A7%E8%A1%A8%E5%A4%B4",tabindex:"-1"},[n("\u591A\u7EA7\u8868\u5934 "),t("a",{class:"header-anchor",href:"#%E5%A4%9A%E7%BA%A7%E8%A1%A8%E5%A4%B4","aria-hidden":"true"},"#")],-1),et=t("p",null,[n("\u901A\u8FC7 columns \u7684 "),t("code",null,"children"),n(" \u914D\u7F6E\u591A\u7EA7\u8868\u5934")],-1),ot=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineTableColumns "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'element-pro-components'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" columns "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"defineTableColumns"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Date'"),t("span",{class:"token punctuation"},","),n(`
        prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'User'"),t("span",{class:"token punctuation"},","),n(`
        children`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Name'"),t("span",{class:"token punctuation"},","),n(`
            prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Address'"),t("span",{class:"token punctuation"},","),n(`
            prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
        address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      columns`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),lt=t("p",null,"@/demo/Table/group.vue",-1),pt=t("h3",{id:"%E5%BC%82%E6%AD%A5%E8%A1%A8%E6%A0%BC",tabindex:"-1"},[n("\u5F02\u6B65\u8868\u683C "),t("a",{class:"header-anchor",href:"#%E5%BC%82%E6%AD%A5%E8%A1%A8%E6%A0%BC","aria-hidden":"true"},"#")],-1),ct=t("p",null,"\u60F3\u8981\u5B9E\u73B0\u5F02\u6B65\u8868\u683C columns \u5FC5\u987B\u7ED1\u5B9A\u4E00\u4E2A\u52A8\u6001\u6570\u7EC4",-1),ut=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 20px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("el-button")]),n(`
      `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("createTable"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
      Load Table
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("el-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("el-button")]),n(`
      `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("info"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("createDict"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
      Load Dict
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("el-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("el-button")]),n(`
      `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("danger"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("destroyTable"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
      Destroy
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("el-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineTableColumns "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'element-pro-components'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" columns "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"defineTableColumns"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"createTable"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      columns`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"defineTableColumns"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Date'"),t("span",{class:"token punctuation"},","),n(`
          prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Name'"),t("span",{class:"token punctuation"},","),n(`
          prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Address'"),t("span",{class:"token punctuation"},","),n(`
          prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"createDict"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
          name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
          address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
          name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
          address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
          name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
          address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
          name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
          address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"destroyTable"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      columns`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),n(`
      data`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      columns`),t("span",{class:"token punctuation"},","),n(`
      createTable`),t("span",{class:"token punctuation"},","),n(`
      createDict`),t("span",{class:"token punctuation"},","),n(`
      destroyTable`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),it=t("p",null,"@/demo/Table/async.vue",-1),kt=t("h3",{id:"typescript",tabindex:"-1"},[n("TypeScript "),t("a",{class:"header-anchor",href:"#typescript","aria-hidden":"true"},"#")],-1),rt=t("p",null,[t("code",null,"defineTableColumns"),n(" \u652F\u6301\u4F20\u5165\u4E00\u4E2A\u6CDB\u578B\u7528\u6765\u63A8\u65AD "),t("code",null,"prop"),n(" \u503C")],-1),dt=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pro-table")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":columns"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("columns"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":menu"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("menu"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(`
  defineTableColumns`),t("span",{class:"token punctuation"},","),n(`
  defineTableMenuColumns`),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'element-pro-components'"),n(`

`),t("span",{class:"token keyword"},"interface"),n(),t("span",{class:"token class-name"},"DataItem"),n(),t("span",{class:"token punctuation"},"{"),n(`
  date`),t("span",{class:"token operator"},":"),n(` string
  name`),t("span",{class:"token operator"},":"),n(` string
  address`),t("span",{class:"token operator"},":"),n(` string
`),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token keyword"},"const"),n(" menu "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"defineTableMenuColumns"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Operations'"),t("span",{class:"token punctuation"},","),n(`
  align`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'center'"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`),t("span",{class:"token keyword"},"const"),n(" columns "),t("span",{class:"token operator"},"="),n(" defineTableColumns"),t("span",{class:"token operator"},"<"),n("DataItem"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
  `),t("span",{class:"token punctuation"},"{"),n(`
    label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Date'"),t("span",{class:"token punctuation"},","),n(`
    prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token punctuation"},"{"),n(`
    label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Name'"),t("span",{class:"token punctuation"},","),n(`
    prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token punctuation"},"{"),n(`
    label`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Address'"),t("span",{class:"token punctuation"},","),n(`
    prop`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
`),t("span",{class:"token keyword"},"const"),n(" data"),t("span",{class:"token operator"},":"),n(" DataItem"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n(`
  `),t("span",{class:"token punctuation"},"{"),n(`
    date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
    name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
    address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token punctuation"},"{"),n(`
    date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
    name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
    address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token punctuation"},"{"),n(`
    date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
    name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
    address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token punctuation"},"{"),n(`
    date`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
    name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Tom'"),t("span",{class:"token punctuation"},","),n(`
    address`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"]"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),gt=t("p",null,"@/demo/Table/typescript.vue",-1),ft=o('<h3 id="%E9%85%8D%E7%BD%AE" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#%E9%85%8D%E7%BD%AE" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u53EF\u9009\u503C</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">data</td><td style="text-align:left;">\u663E\u793A\u7684\u6570\u636E</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">\u81EA\u52A8\u751F\u6210\u8868\u5355\u7684\u53C2\u6570\uFF0C\u53C2\u8003\u4E0B\u9762 columns</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">selection</td><td style="text-align:left;">\u663E\u793A\u591A\u9009\u6846\uFF0C\u652F\u6301 columns \u7684\u914D\u7F6E</td><td style="text-align:left;">boolean / object</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">index</td><td style="text-align:left;">\u663E\u793A\u7D22\u5F15\uFF0C\u652F\u6301 columns \u7684\u914D\u7F6E</td><td style="text-align:left;">boolean / object</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">expand</td><td style="text-align:left;">\u5F00\u542F\u5C55\u5F00\u63D2\u69FD\uFF0C\u652F\u6301 columns \u7684\u914D\u7F6E</td><td style="text-align:left;">boolean / object</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">menu</td><td style="text-align:left;">\u5F00\u542F\u64CD\u4F5C\u6309\u94AE\u63D2\u69FD\uFF0C\u652F\u6301 columns \u7684\u914D\u7F6E</td><td style="text-align:left;">boolean / object</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">show-overflow-tooltip</td><td style="text-align:left;">\u5F53\u5185\u5BB9\u8FC7\u957F\u88AB\u9690\u85CF\u65F6\u663E\u793A tooltip</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">align</td><td style="text-align:left;">\u5BF9\u9F50\u65B9\u5F0F</td><td style="text-align:left;">string</td><td style="text-align:left;">left / center / right</td><td style="text-align:left;">left</td></tr><tr><td style="text-align:left;">header-align</td><td style="text-align:left;">\u8868\u5934\u5BF9\u9F50\u65B9\u5F0F</td><td style="text-align:left;">string</td><td style="text-align:left;">left / center / right</td><td style="text-align:left;">\u540C align</td></tr><tr><td style="text-align:left;">total</td><td style="text-align:left;">\u603B\u6761\u76EE\u6570</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">current-page</td><td style="text-align:left;">\u5F53\u524D\u9875\u6570\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>v-model:current-page</code> \u7ED1\u5B9A\u503C</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">page-size</td><td style="text-align:left;">\u6BCF\u9875\u663E\u793A\u6761\u76EE\u4E2A\u6570\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>v-model:page-size</code> \u7ED1\u5B9A\u503C</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">pagination</td><td style="text-align:left;">pagination \u7684\u914D\u7F6E\uFF0C\u540C el-pagination</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">\u4ECE\u5168\u5C40\u914D\u7F6E\u4E2D\u83B7\u53D6</td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">Table \u7684\u9AD8\u5EA6</td><td style="text-align:left;">string / number</td><td style="text-align:left;">-</td><td style="text-align:left;">\u81EA\u52A8\u9AD8\u5EA6</td></tr><tr><td style="text-align:left;">max-height</td><td style="text-align:left;">Table \u7684\u6700\u5927\u9AD8\u5EA6</td><td style="text-align:left;">string / number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">stripe</td><td style="text-align:left;">\u662F\u5426\u4E3A\u6591\u9A6C\u7EB9 table</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">border</td><td style="text-align:left;">\u662F\u5426\u5E26\u6709\u7EB5\u5411\u8FB9\u6846</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">Table \u7684\u5C3A\u5BF8</td><td style="text-align:left;">string</td><td style="text-align:left;">medium / small / mini</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">fit</td><td style="text-align:left;">\u5217\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">show-header</td><td style="text-align:left;">\u662F\u5426\u663E\u793A\u8868\u5934</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">highlight-current-row</td><td style="text-align:left;">\u662F\u5426\u8981\u9AD8\u4EAE\u5F53\u524D\u884C</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">current-row-key</td><td style="text-align:left;">\u5F53\u524D\u884C\u7684 key\uFF0C\u53EA\u5199\u5C5E\u6027</td><td style="text-align:left;">string / number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">row-class-name</td><td style="text-align:left;">\u4E3A\u884C\u589E\u52A0 className</td><td style="text-align:left;">Function({row, rowIndex}) / string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">row-style</td><td style="text-align:left;">\u4E3A\u884C\u589E\u52A0 style</td><td style="text-align:left;">Function({row, rowIndex}) / object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">cell-class-name</td><td style="text-align:left;">\u4E3A\u5355\u5143\u683C\u589E\u52A0 className</td><td style="text-align:left;">Function({row, column, rowIndex, columnIndex}) / string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">cell-style</td><td style="text-align:left;">\u4E3A\u5355\u5143\u683C\u589E\u52A0 style</td><td style="text-align:left;">Function({row, column, rowIndex, columnIndex}) / object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">header-row-class-name</td><td style="text-align:left;">\u4E3A\u8868\u5934\u884C\u589E\u52A0 className</td><td style="text-align:left;">Function({row, rowIndex}) / string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">header-row-style</td><td style="text-align:left;">\u4E3A\u8868\u5934\u884C\u589E\u52A0 style</td><td style="text-align:left;">Function({row, rowIndex}) / object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">header-cell-class-name</td><td style="text-align:left;">\u4E3A\u8868\u5934\u5355\u5143\u683C\u589E\u52A0 className</td><td style="text-align:left;">Function({row, column, rowIndex, columnIndex}) / string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">header-cell-style</td><td style="text-align:left;">\u4E3A\u8868\u5934\u5355\u5143\u683C\u589E\u52A0 style</td><td style="text-align:left;">Function({row, column, rowIndex, columnIndex}) / object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">row-key</td><td style="text-align:left;">\u884C\u6570\u636E\u7684 Key\uFF0C\u4F7F\u7528 reserveSelection \u529F\u80FD\u65F6\u5FC5\u586B</td><td style="text-align:left;">Function(row) / string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">empty-text</td><td style="text-align:left;">\u7A7A\u6570\u636E\u65F6\u663E\u793A\u7684\u6587\u672C\u5185\u5BB9</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">\u6682\u65E0\u6570\u636E</td></tr><tr><td style="text-align:left;">default-expand-all</td><td style="text-align:left;">\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u884C</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">expand-row-keys</td><td style="text-align:left;">Table \u76EE\u524D\u7684\u5C55\u5F00\u884C\uFF0C\u4E0E row-key \u914D\u5408\u4F7F\u7528</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">default-sort</td><td style="text-align:left;">\u9ED8\u8BA4\u7684\u6392\u5E8F\u5217\u7684 prop \u548C\u987A\u5E8F</td><td style="text-align:left;">Object</td><td style="text-align:left;"><code>order</code>: ascending, descending</td><td style="text-align:left;">ascending</td></tr><tr><td style="text-align:left;">tooltip-effect</td><td style="text-align:left;">tooltip <code>effect</code> \u5C5E\u6027</td><td style="text-align:left;">String</td><td style="text-align:left;">dark / light</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">show-summary</td><td style="text-align:left;">\u662F\u5426\u5728\u8868\u5C3E\u663E\u793A\u5408\u8BA1\u884C</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">sum-text</td><td style="text-align:left;">\u5408\u8BA1\u884C\u7B2C\u4E00\u5217\u7684\u6587\u672C</td><td style="text-align:left;">String</td><td style="text-align:left;">-</td><td style="text-align:left;">\u5408\u8BA1</td></tr><tr><td style="text-align:left;">summary-method</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u7684\u5408\u8BA1\u8BA1\u7B97\u65B9\u6CD5</td><td style="text-align:left;">Function({ columns, data })</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">span-method</td><td style="text-align:left;">\u5408\u5E76\u884C\u6216\u5217\u7684\u8BA1\u7B97\u65B9\u6CD5</td><td style="text-align:left;">Function({ row, column, rowIndex, columnIndex })</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">select-on-indeterminate</td><td style="text-align:left;">\u5F53\u4EC5\u6709\u90E8\u5206\u884C\u88AB\u9009\u4E2D\u65F6\uFF0C\u70B9\u51FB\u8868\u5934\u7684\u591A\u9009\u6846\u65F6\u7684\u884C\u4E3A\uFF0C\u914D\u5408 selection \u4F7F\u7528</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">indent</td><td style="text-align:left;">\u5C55\u793A\u6811\u5F62\u6570\u636E\u65F6\uFF0C\u6811\u8282\u70B9\u7684\u7F29\u8FDB</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">16</td></tr><tr><td style="text-align:left;">lazy</td><td style="text-align:left;">\u662F\u5426\u61D2\u52A0\u8F7D\u5B50\u8282\u70B9\u6570\u636E</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">load</td><td style="text-align:left;">\u52A0\u8F7D\u5B50\u8282\u70B9\u6570\u636E\u7684\u51FD\u6570\uFF0Clazy \u4E3A true \u65F6\u751F\u6548</td><td style="text-align:left;">Function(row, treeNode, resolve)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">tree-props</td><td style="text-align:left;">\u6E32\u67D3\u5D4C\u5957\u6570\u636E\u7684\u914D\u7F6E\u9009\u9879</td><td style="text-align:left;">Object</td><td style="text-align:left;">-</td><td style="text-align:left;">{ hasChildren: \u2018hasChildren\u2019, children: \u2018children\u2019 }</td></tr></tbody></table><h4 id="columns-%E7%9A%84%E5%8F%82%E6%95%B0" tabindex="-1">columns \u7684\u53C2\u6570 <a class="header-anchor" href="#columns-%E7%9A%84%E5%8F%82%E6%95%B0" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u53EF\u9009\u503C</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">prop</td><td style="text-align:left;">\u5BF9\u5E94 data \u7684\u5B57\u6BB5\u540D (<strong>\u5FC5\u586B\uFF0C\u9700\u8981\u662F\u552F\u4E00\u503C</strong>)</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">label</td><td style="text-align:left;">\u663E\u793A\u7684\u6807\u9898</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">render</td><td style="text-align:left;">\u901A\u8FC7\u6E32\u67D3\u51FD\u6570\u5B9E\u73B0\u7B80\u5355\u7684\u63D2\u69FD\u529F\u80FD</td><td style="text-align:left;">string / function(row)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">hide</td><td style="text-align:left;">\u662F\u5426\u5728\u8868\u683C\u4E2D\u9690\u85CF</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">children</td><td style="text-align:left;">\u5B9E\u73B0\u591A\u7EA7\u8868\u5934</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">columnKey</td><td style="text-align:left;">\u5F53\u524D\u9879\u7684 key\uFF0C\u4F7F\u7528 filter-change \u4E8B\u4EF6\u65F6\u9700\u8981</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">width</td><td style="text-align:left;">\u5BF9\u5E94\u5217\u7684\u5BBD\u5EA6</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">minWidth</td><td style="text-align:left;">\u5BF9\u5E94\u5217\u7684\u6700\u5C0F\u5BBD\u5EA6</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">fixed</td><td style="text-align:left;">\u5217\u662F\u5426\u56FA\u5B9A\uFF0Ctrue \u8868\u793A\u56FA\u5B9A\u5728\u5DE6\u4FA7</td><td style="text-align:left;">string / boolean</td><td style="text-align:left;">true / left / right</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">renderHeader</td><td style="text-align:left;">\u5217\u6807\u9898 Label \u533A\u57DF\u6E32\u67D3\u4F7F\u7528\u7684 Function</td><td style="text-align:left;">Function({ column, $index })</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">sortable</td><td style="text-align:left;">\u5BF9\u5E94\u5217\u662F\u5426\u53EF\u4EE5\u6392\u5E8F</td><td style="text-align:left;">boolean / string</td><td style="text-align:left;">true / false / \u2018custom\u2019</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">sortMethod</td><td style="text-align:left;">\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u7684\u65F6\u5019\u4F7F\u7528\u7684\u65B9\u6CD5</td><td style="text-align:left;">Function(a, b)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">sortBy</td><td style="text-align:left;">\u6307\u5B9A\u6570\u636E\u6309\u7167\u54EA\u4E2A\u5C5E\u6027\u8FDB\u884C\u6392\u5E8F</td><td style="text-align:left;">string / array / Function(row, index)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">sortOrders</td><td style="text-align:left;">\u6570\u636E\u5728\u6392\u5E8F\u65F6\u6240\u4F7F\u7528\u6392\u5E8F\u7B56\u7565\u7684\u8F6E\u8F6C\u987A\u5E8F</td><td style="text-align:left;">array</td><td style="text-align:left;"><code>ascending</code> \u8868\u793A\u5347\u5E8F\uFF0C<code>descending</code> \u8868\u793A\u964D\u5E8F\uFF0C<code>null</code> \u8868\u793A\u8FD8\u539F\u4E3A\u539F\u59CB\u987A\u5E8F</td><td style="text-align:left;">[\u2018ascending\u2019, \u2018descending\u2019, null]</td></tr><tr><td style="text-align:left;">resizable</td><td style="text-align:left;">\u5BF9\u5E94\u5217\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u62D6\u52A8\u6539\u53D8\u5BBD\u5EA6\uFF0C\u914D\u5408 border \u4F7F\u7528</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">formatter</td><td style="text-align:left;">\u7528\u6765\u683C\u5F0F\u5316\u5185\u5BB9</td><td style="text-align:left;">Function(row, column, cellValue, index)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">showOverflowTooltip</td><td style="text-align:left;">\u5F53\u5185\u5BB9\u8FC7\u957F\u88AB\u9690\u85CF\u65F6\u663E\u793A tooltip</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">align</td><td style="text-align:left;">\u5BF9\u9F50\u65B9\u5F0F</td><td style="text-align:left;">string</td><td style="text-align:left;">left / center / right</td><td style="text-align:left;">left</td></tr><tr><td style="text-align:left;">headerAlign</td><td style="text-align:left;">\u8868\u5934\u5BF9\u9F50\u65B9\u5F0F</td><td style="text-align:left;">string</td><td style="text-align:left;">left / center / right</td><td style="text-align:left;">\u540C align</td></tr><tr><td style="text-align:left;">className</td><td style="text-align:left;">\u5217\u7684 className</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">labelClassName</td><td style="text-align:left;">\u5F53\u524D\u5217\u6807\u9898\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">filters</td><td style="text-align:left;">\u6570\u636E\u8FC7\u6EE4\u7684\u9009\u9879</td><td style="text-align:left;">Array[{ text, value }]</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">filterPlacement</td><td style="text-align:left;">\u8FC7\u6EE4\u5F39\u51FA\u6846\u7684\u5B9A\u4F4D</td><td style="text-align:left;">string</td><td style="text-align:left;">top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">filterMultiple</td><td style="text-align:left;">\u6570\u636E\u8FC7\u6EE4\u7684\u9009\u9879\u662F\u5426\u591A\u9009</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">filterMethod</td><td style="text-align:left;">\u6570\u636E\u8FC7\u6EE4\u4F7F\u7528\u7684\u65B9\u6CD5</td><td style="text-align:left;">Function(value, row, column)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">filteredValue</td><td style="text-align:left;">\u9009\u4E2D\u7684\u6570\u636E\u8FC7\u6EE4\u9879</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">index</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u7D22\u5F15\uFF0C\u53EA\u80FD\u591F\u5728 index \u4E2D\u914D\u7F6E</td><td style="text-align:left;">Function(index) / number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">selectable</td><td style="text-align:left;">\u8FD9\u4E00\u884C\u7684 CheckBox \u662F\u5426\u53EF\u4EE5\u52FE\u9009\uFF0C\u53EA\u80FD\u591F\u5728 selection \u4E2D\u914D\u7F6E</td><td style="text-align:left;">Function(row, index)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">reserveSelection</td><td style="text-align:left;">\u662F\u5426\u4FDD\u7559\u4E4B\u524D\u9009\u4E2D\u7684\u6570\u636E\uFF08\u9700\u6307\u5B9A <code>row-key</code>\uFF09\uFF0C\u53EA\u80FD\u591F\u5728 selection \u4E2D\u914D\u7F6E</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr></tbody></table><h3 id="%E4%BA%8B%E4%BB%B6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#%E4%BA%8B%E4%BB%B6" aria-hidden="true">#</a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>select</td><td>\u5F53\u7528\u6237\u624B\u52A8\u52FE\u9009\u6570\u636E\u884C\u7684 Checkbox \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>selection, row</td></tr><tr><td>select-all</td><td>\u5F53\u7528\u6237\u624B\u52A8\u52FE\u9009\u5168\u9009 Checkbox \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>selection</td></tr><tr><td>selection-change</td><td>\u5F53\u9009\u62E9\u9879\u53D1\u751F\u53D8\u5316\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>selection</td></tr><tr><td>cell-mouse-enter</td><td>\u5F53\u5355\u5143\u683C hover \u8FDB\u5165\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, cell, event</td></tr><tr><td>cell-mouse-leave</td><td>\u5F53\u5355\u5143\u683C hover \u9000\u51FA\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, cell, event</td></tr><tr><td>cell-click</td><td>\u5F53\u67D0\u4E2A\u5355\u5143\u683C\u88AB\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, cell, event</td></tr><tr><td>cell-dblclick</td><td>\u5F53\u67D0\u4E2A\u5355\u5143\u683C\u88AB\u53CC\u51FB\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, cell, event</td></tr><tr><td>row-click</td><td>\u5F53\u67D0\u4E00\u884C\u88AB\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, event</td></tr><tr><td>row-contextmenu</td><td>\u5F53\u67D0\u4E00\u884C\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, event</td></tr><tr><td>row-dblclick</td><td>\u5F53\u67D0\u4E00\u884C\u88AB\u53CC\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, event</td></tr><tr><td>header-click</td><td>\u5F53\u67D0\u4E00\u5217\u7684\u8868\u5934\u88AB\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>column, event</td></tr><tr><td>header-contextmenu</td><td>\u5F53\u67D0\u4E00\u5217\u7684\u8868\u5934\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>column, event</td></tr><tr><td>sort-change</td><td>\u5F53\u8868\u683C\u7684\u6392\u5E8F\u6761\u4EF6\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>{ column, prop, order }</td></tr><tr><td>filter-change</td><td>\u5F53\u8868\u683C\u7684\u7B5B\u9009\u6761\u4EF6\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u53C2\u6570\u7684\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u7684 key \u662F column \u7684 columnKey\uFF0C\u5BF9\u5E94\u7684 value \u4E3A\u7528\u6237\u9009\u62E9\u7684\u7B5B\u9009\u6761\u4EF6\u7684\u6570\u7EC4\u3002</td><td>filters</td></tr><tr><td>current-change</td><td>\u5F53\u8868\u683C\u7684\u5F53\u524D\u884C\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u5982\u679C\u8981\u9AD8\u4EAE\u5F53\u524D\u884C\uFF0C\u8BF7\u6253\u5F00\u8868\u683C\u7684 highlight-current-row \u5C5E\u6027</td><td>currentRow, oldCurrentRow</td></tr><tr><td>header-dragend</td><td>\u5F53\u62D6\u52A8\u8868\u5934\u6539\u53D8\u4E86\u5217\u7684\u5BBD\u5EA6\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>newWidth, oldWidth, column, event</td></tr><tr><td>expand-change</td><td>\u5F53\u7528\u6237\u5BF9\u67D0\u4E00\u884C\u5C55\u5F00\u6216\u8005\u5173\u95ED\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF08\u5C55\u5F00\u884C\u65F6\uFF0C\u56DE\u8C03\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A expandedRows\uFF1B\u6811\u5F62\u8868\u683C\u65F6\u7B2C\u4E8C\u53C2\u6570\u4E3A expanded\uFF09</td><td>row, (expandedRows | expanded)</td></tr><tr><td>size-change</td><td>pageSize \u6539\u53D8\u65F6\u4F1A\u89E6\u53D1</td><td>\u6BCF\u9875\u6761\u6570</td></tr><tr><td>current-change</td><td>currentPage \u6539\u53D8\u65F6\u4F1A\u89E6\u53D1</td><td>\u5F53\u524D\u9875</td></tr><tr><td>prev-click</td><td>\u7528\u6237\u70B9\u51FB\u4E0A\u4E00\u9875\u6309\u94AE\u6539\u53D8\u5F53\u524D\u9875\u540E\u89E6\u53D1</td><td>\u5F53\u524D\u9875</td></tr><tr><td>next-click</td><td>\u7528\u6237\u70B9\u51FB\u4E0B\u4E00\u9875\u6309\u94AE\u6539\u53D8\u5F53\u524D\u9875\u540E\u89E6\u53D1</td><td>\u5F53\u524D\u9875</td></tr></tbody></table><h3 id="%E6%96%B9%E6%B3%95" tabindex="-1">\u65B9\u6CD5 <a class="header-anchor" href="#%E6%96%B9%E6%B3%95" aria-hidden="true">#</a></h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>clearSelection</td><td>\u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u6E05\u7A7A\u7528\u6237\u7684\u9009\u62E9</td><td>-</td></tr><tr><td>toggleRowSelection</td><td>\u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u5207\u6362\u67D0\u4E00\u884C\u7684\u9009\u4E2D\u72B6\u6001\uFF0C\u5982\u679C\u4F7F\u7528\u4E86\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5219\u662F\u8BBE\u7F6E\u8FD9\u4E00\u884C\u9009\u4E2D\u4E0E\u5426\uFF08selected \u4E3A true \u5219\u9009\u4E2D\uFF09</td><td>row, selected</td></tr><tr><td>toggleAllSelection</td><td>\u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u5207\u6362\u5168\u9009\u548C\u5168\u4E0D\u9009</td><td>-</td></tr><tr><td>toggleRowExpansion</td><td>\u7528\u4E8E\u53EF\u5C55\u5F00\u8868\u683C\u4E0E\u6811\u5F62\u8868\u683C\uFF0C\u5207\u6362\u67D0\u4E00\u884C\u7684\u5C55\u5F00\u72B6\u6001\uFF0C\u5982\u679C\u4F7F\u7528\u4E86\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5219\u662F\u8BBE\u7F6E\u8FD9\u4E00\u884C\u5C55\u5F00\u4E0E\u5426\uFF08expanded \u4E3A true \u5219\u5C55\u5F00\uFF09</td><td>row, expanded</td></tr><tr><td>setCurrentRow</td><td>\u7528\u4E8E\u5355\u9009\u8868\u683C\uFF0C\u8BBE\u5B9A\u67D0\u4E00\u884C\u4E3A\u9009\u4E2D\u884C\uFF0C\u5982\u679C\u8C03\u7528\u65F6\u4E0D\u52A0\u53C2\u6570\uFF0C\u5219\u4F1A\u53D6\u6D88\u76EE\u524D\u9AD8\u4EAE\u884C\u7684\u9009\u4E2D\u72B6\u6001\u3002</td><td>row</td></tr><tr><td>clearSort</td><td>\u7528\u4E8E\u6E05\u7A7A\u6392\u5E8F\u6761\u4EF6\uFF0C\u6570\u636E\u4F1A\u6062\u590D\u6210\u672A\u6392\u5E8F\u7684\u72B6\u6001</td><td>-</td></tr><tr><td>clearFilter</td><td>\u4E0D\u4F20\u5165\u53C2\u6570\u65F6\u7528\u4E8E\u6E05\u7A7A\u6240\u6709\u8FC7\u6EE4\u6761\u4EF6\uFF0C\u6570\u636E\u4F1A\u6062\u590D\u6210\u672A\u8FC7\u6EE4\u7684\u72B6\u6001\uFF0C\u4E5F\u53EF\u4F20\u5165\u7531 columnKey \u7EC4\u6210\u7684\u6570\u7EC4\u4EE5\u6E05\u9664\u6307\u5B9A\u5217\u7684\u8FC7\u6EE4\u6761\u4EF6</td><td>columnKey</td></tr><tr><td>doLayout</td><td>\u5BF9 Table \u8FDB\u884C\u91CD\u65B0\u5E03\u5C40\u3002\u5F53 Table \u6216\u5176\u7956\u5148\u5143\u7D20\u7531\u9690\u85CF\u5207\u6362\u4E3A\u663E\u793A\u65F6\uFF0C\u53EF\u80FD\u9700\u8981\u8C03\u7528\u6B64\u65B9\u6CD5</td><td>-</td></tr><tr><td>sort</td><td>\u624B\u52A8\u5BF9 Table \u8FDB\u884C\u6392\u5E8F\u3002\u53C2\u6570<code>prop</code>\u5C5E\u6027\u6307\u5B9A\u6392\u5E8F\u5217\uFF0C<code>order</code>\u6307\u5B9A\u6392\u5E8F\u987A\u5E8F\u3002</td><td>prop: string, order: string</td></tr></tbody></table><h3 id="%E6%8F%92%E6%A7%BD-1" tabindex="-1">\u63D2\u69FD <a class="header-anchor" href="#%E6%8F%92%E6%A7%BD-1" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">name</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">-</td><td style="text-align:left;">\u5728\u53F3\u4FA7\u83DC\u5355\u524D\u63D2\u5165\u7684\u4EFB\u610F\u5185\u5BB9</td></tr><tr><td style="text-align:left;">menu</td><td style="text-align:left;">\u8868\u683C\u53F3\u4FA7\u81EA\u5B9A\u4E49\u6309\u94AE\uFF0C\u53C2\u6570\u4E3A { size, row, column, $index }</td></tr><tr><td style="text-align:left;">expand</td><td style="text-align:left;">\u5F53\u524D\u8FD9\u5217\u5C55\u5F00\u663E\u793A\u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { row, column, $index }</td></tr><tr><td style="text-align:left;">append</td><td style="text-align:left;">\u63D2\u5165\u81F3\u8868\u683C\u6700\u540E\u4E00\u884C\u4E4B\u540E\u7684\u5185\u5BB9</td></tr><tr><td style="text-align:left;">[prop]</td><td style="text-align:left;">\u5F53\u524D\u8FD9\u5217\u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { size, row, column, $index }</td></tr><tr><td style="text-align:left;">[prop]-header</td><td style="text-align:left;">\u5F53\u524D\u8FD9\u5217\u8868\u5934\u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { size, column, $index }</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>[prop] \u4E3A columns \u4E2D\u5B9A\u4E49\u7684 prop</p></div>',11),_t={setup(yt,{expose:l}){return l({frontmatter:{title:"Table",meta:[{name:"description",content:"\u5C01\u88C5\u8868\u683C\u7EC4\u4EF6\u5B9E\u73B0\u901A\u8FC7\u914D\u7F6E\u52A8\u6001\u751F\u6210\u5217"},{property:"og:title",content:"Table"}]}}),p({title:"Table",meta:[{name:"description",content:"\u5C01\u88C5\u8868\u683C\u7EC4\u4EF6\u5B9E\u73B0\u901A\u8FC7\u914D\u7F6E\u52A8\u6001\u751F\u6210\u5217"},{property:"og:title",content:"Table"}]}),(ht,bt)=>{const e=b("pro-code");return w(),v("div",A,[E,a(e,null,{source:s(()=>[a(c)]),code:s(()=>[T]),default:s(()=>[_]),_:1}),C,a(e,null,{source:s(()=>[a(u)]),code:s(()=>[B]),default:s(()=>[N]),_:1}),S,a(e,null,{source:s(()=>[a(i)]),code:s(()=>[L]),default:s(()=>[q]),_:1}),G,D,a(e,null,{source:s(()=>[a(k)]),code:s(()=>[F]),default:s(()=>[j]),_:1}),z,I,a(e,null,{source:s(()=>[a(r)]),code:s(()=>[M]),default:s(()=>[O]),_:1}),P,R,a(e,null,{source:s(()=>[a(d)]),code:s(()=>[V]),default:s(()=>[$]),_:1}),K,H,a(e,null,{source:s(()=>[a(g)]),code:s(()=>[W]),default:s(()=>[U]),_:1}),J,Q,a(e,null,{source:s(()=>[a(f)]),code:s(()=>[X]),default:s(()=>[Y]),_:1}),Z,tt,a(e,null,{source:s(()=>[a(y)]),code:s(()=>[nt]),default:s(()=>[st]),_:1}),at,et,a(e,null,{source:s(()=>[a(m)]),code:s(()=>[ot]),default:s(()=>[lt]),_:1}),pt,ct,a(e,null,{source:s(()=>[a(x)]),code:s(()=>[ut]),default:s(()=>[it]),_:1}),kt,rt,a(e,null,{source:s(()=>[a(h)]),code:s(()=>[dt]),default:s(()=>[gt]),_:1}),ft])}}};export{_t as default};
