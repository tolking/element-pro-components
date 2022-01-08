import{u as c}from"./index.427fa934.js";import{C as l,a as u,b as r,c as k}from"./group.80266723.js";import{I as i,o as d,c as y,Q as a,O as s,ax as e,a as n,a5 as t}from"./modules-vue.feae9409.js";import"./modules-element-plus.2aa38461.js";const g={class:"markdown-body"},m=e('<h1 id="columnsetting" tabindex="-1">ColumnSetting <a class="header-anchor" href="#columnsetting" aria-hidden="true">#</a></h1><blockquote><p>\u63A7\u5236\u8868\u683C\u5185\u90E8\u5217\u7684\u6392\u5E8F\u53CA\u663E\u9690\uFF0C\u914D\u5408 Table \u6216 Crud \u4F7F\u7528</p></blockquote><h2 id="%E4%BD%BF%E7%94%A8" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#%E4%BD%BF%E7%94%A8" aria-hidden="true">#</a></h2><h3 id="%E9%85%8D%E5%90%88-table" tabindex="-1">\u914D\u5408 Table <a class="header-anchor" href="#%E9%85%8D%E5%90%88-table" aria-hidden="true">#</a></h3>',4),f=n("p",null,[t("\u901A\u8FC7 "),n("code",null,"v-model"),t(" \u7ED1\u5B9A\u6570\u636E\uFF0C\u9ED8\u8BA4\u70B9\u51FB\u591A\u9009\u6846\u5207\u6362\u5217\u7684\u663E\u9690\uFF0C\u76F4\u63A5\u62D6\u52A8\u5B9E\u73B0\u5207\u6362\u6392\u5E8F")],-1),x=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-column-setting")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),t(" right"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 10px")]),n("span",{class:"token punctuation"},'"')])]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-table")]),t(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Date'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-03'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-02'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-04'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-01'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      data`),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),h=n("p",null,"@/demo/ColumnSetting/table.vue",-1),v=n("h3",{id:"%E9%85%8D%E5%90%88-crud",tabindex:"-1"},[t("\u914D\u5408 Crud "),n("a",{class:"header-anchor",href:"#%E9%85%8D%E5%90%88-crud","aria-hidden":"true"},"#")],-1),b=n("p",null,[t("\u63A8\u8350\u901A\u8FC7 "),n("code",null,"action"),t(" \u63D2\u69FD\u4F7F\u7528\uFF0C\u53EF\u4EE5\u7ED1\u5B9A "),n("code",null,"Crud"),t(" \u7684 "),n("code",null,"columns"),t(" \u548C "),n("code",null,"table-columns")],-1),w=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-crud")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("search")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("serachForm"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":menu"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ label: "),n("span",{class:"token punctuation"},"'"),t("Operations"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("search"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("submit"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@delete"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("deleteRow"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#action"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-column-setting")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("pro-crud")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" serachForm "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Date'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"add"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"edit"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"search"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"add"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"search"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"add"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"edit"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-03'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-02'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-04'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-01'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"search"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("done"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'search'"),n("span",{class:"token punctuation"},","),t(" serachForm"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"submit"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("close"),n("span",{class:"token punctuation"},","),t(" done"),n("span",{class:"token punctuation"},","),t(" formType"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'submit'"),n("span",{class:"token punctuation"},","),t(" form"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(" formType"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        isValid `),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"deleteRow"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"row"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'deleteRow'"),n("span",{class:"token punctuation"},","),t(" row"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      form`),n("span",{class:"token punctuation"},","),t(`
      serachForm`),n("span",{class:"token punctuation"},","),t(`
      data`),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      search`),n("span",{class:"token punctuation"},","),t(`
      submit`),n("span",{class:"token punctuation"},","),t(`
      deleteRow`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),_=n("p",null,"@/demo/ColumnSetting/crud.vue",-1),A=e('<div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u5982\u679C <code>ColumnSetting</code> \u76F4\u63A5\u7ED1\u5B9A <code>Crud</code> \u7684 <code>columns</code>\uFF0C\u6392\u5E8F\u53D8\u52A8\u4F1A\u5F71\u54CD\u8868\u5355\u7EC4\u4EF6\u548C\u641C\u7D22\u7EC4\u4EF6\u3002\u901A\u8FC7\u7ED1\u5B9A <code>table-columns</code> \u53EF\u4EE5\u5355\u72EC\u7ED1\u5B9A\u8868\u683C\u8FDB\u800C\u907F\u514D\u5F71\u54CD\u8868\u5355\u7EC4\u4EF6\u548C\u641C\u7D22\u7EC4\u4EF6\u3002</p></div><h3 id="%E7%82%B9%E5%87%BB%E8%A7%A6%E5%8F%91%E5%BC%B9%E7%AA%97" tabindex="-1">\u70B9\u51FB\u89E6\u53D1\u5F39\u7A97 <a class="header-anchor" href="#%E7%82%B9%E5%87%BB%E8%A7%A6%E5%8F%91%E5%BC%B9%E7%AA%97" aria-hidden="true">#</a></h3>',2),C=n("p",null,[t("\u901A\u8FC7 "),n("code",null,"trigger"),t(" \u63A7\u5236\u89E6\u53D1\u65B9\u5F0F\uFF0C\u652F\u6301 "),n("code",null,"hover"),t(),n("code",null,"click"),t(),n("code",null,"contextmenu"),t("-\u9F20\u6807\u53F3\u952E")],-1),E=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-crud")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("search")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("serachForm"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":table-columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tableColumns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":menu"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ label: "),n("span",{class:"token punctuation"},"'"),t("Operations"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("search"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("submit"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@delete"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("deleteRow"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#action"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-column-setting")]),t(`
        `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tableColumns"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("click"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("pro-crud")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" serachForm "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Date'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"add"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"edit"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"search"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"add"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"search"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"add"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"edit"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" tableColumns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"parse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),t("columns"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-03'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-02'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-04'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-01'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"search"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("done"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'search'"),n("span",{class:"token punctuation"},","),t(" serachForm"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"submit"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("close"),n("span",{class:"token punctuation"},","),t(" done"),n("span",{class:"token punctuation"},","),t(" formType"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'submit'"),n("span",{class:"token punctuation"},","),t(" form"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(" formType"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        isValid `),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"deleteRow"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"row"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'deleteRow'"),n("span",{class:"token punctuation"},","),t(" row"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      form`),n("span",{class:"token punctuation"},","),t(`
      serachForm`),n("span",{class:"token punctuation"},","),t(`
      data`),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      tableColumns`),n("span",{class:"token punctuation"},","),t(`
      search`),n("span",{class:"token punctuation"},","),t(`
      submit`),n("span",{class:"token punctuation"},","),t(`
      deleteRow`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),T=n("p",null,"@/demo/ColumnSetting/trigger.vue",-1),S=n("h3",{id:"%E6%94%AF%E6%8C%81%E5%A4%9A%E7%BA%A7%E8%A1%A8%E5%A4%B4",tabindex:"-1"},[t("\u652F\u6301\u591A\u7EA7\u8868\u5934 "),n("a",{class:"header-anchor",href:"#%E6%94%AF%E6%8C%81%E5%A4%9A%E7%BA%A7%E8%A1%A8%E5%A4%B4","aria-hidden":"true"},"#")],-1),q=n("p",null,"\u652F\u6301\u5BF9\u591A\u7EA7\u8868\u5934\u7684\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u5C06\u5217\u62D6\u5165\u6216\u62D6\u51FA\u5B50\u8868\u5934",-1),N=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-column-setting")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"default-expand-all"),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),t(" right"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 10px")]),n("span",{class:"token punctuation"},'"')])]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-table")]),t(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Date'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'User'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-03'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-02'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-04'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-01'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      data`),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),F=n("p",null,"@/demo/ColumnSetting/group.vue",-1),B=e('<h3 id="%E9%85%8D%E7%BD%AE" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#%E9%85%8D%E7%BD%AE" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u53EF\u9009\u503C</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">\u7ED1\u5B9A <code>columns</code> \u503C</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">\u6309\u94AE\u5C3A\u5BF8</td><td style="text-align:left;">string</td><td style="text-align:left;">large / default /small</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">placement</td><td style="text-align:left;">\u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E</td><td style="text-align:left;">string</td><td style="text-align:left;">top / top-start / top-end / bottom / bottom-start / bottom-end</td><td style="text-align:left;">bottom-end</td></tr><tr><td style="text-align:left;">trigger</td><td style="text-align:left;">\u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A</td><td style="text-align:left;">string</td><td style="text-align:left;">hover / click / contextmenu</td><td style="text-align:left;">hover</td></tr><tr><td style="text-align:left;">empty-text</td><td style="text-align:left;">\u5185\u5BB9\u4E3A\u7A7A\u7684\u65F6\u5019\u5C55\u793A\u7684\u6587\u672C</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">render-after-expand</td><td style="text-align:left;">\u662F\u5426\u5728\u7B2C\u4E00\u6B21\u5C55\u5F00\u67D0\u4E2A\u6811\u8282\u70B9\u540E\u624D\u6E32\u67D3\u5176\u5B50\u8282\u70B9</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">highlight-current</td><td style="text-align:left;">\u662F\u5426\u9AD8\u4EAE\u5F53\u524D\u9009\u4E2D\u8282\u70B9</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">default-expand-all</td><td style="text-align:left;">\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u8282\u70B9</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">expand-on-click-node</td><td style="text-align:left;">\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">check-on-click-node</td><td style="text-align:left;">\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u9009\u4E2D\u8282\u70B9</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">auto-expand-parent</td><td style="text-align:left;">\u5C55\u5F00\u5B50\u8282\u70B9\u7684\u65F6\u5019\u662F\u5426\u81EA\u52A8\u5C55\u5F00\u7236\u8282\u70B9</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">filter-node-method</td><td style="text-align:left;">\u5BF9\u6811\u8282\u70B9\u8FDB\u884C\u7B5B\u9009\u65F6\u6267\u884C\u7684\u65B9\u6CD5\uFF0C\u8FD4\u56DE boolean</td><td style="text-align:left;">Function(value, data, node)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">accordion</td><td style="text-align:left;">\u662F\u5426\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2A\u540C\u7EA7\u6811\u8282\u70B9\u5C55\u5F00</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">indent</td><td style="text-align:left;">\u76F8\u90BB\u7EA7\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u7F29\u8FDB\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">16</td></tr><tr><td style="text-align:left;">icon-class</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u56FE\u6807</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">allow-drag</td><td style="text-align:left;">\u5224\u65AD\u8282\u70B9\u80FD\u5426\u88AB\u62D6\u62FD</td><td style="text-align:left;">Function(node)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">allow-drop</td><td style="text-align:left;">\u62D6\u62FD\u65F6\u5224\u5B9A\u76EE\u6807\u8282\u70B9\u80FD\u5426\u88AB\u653E\u7F6E\u3002<code>type</code> \u53C2\u6570\u6709\u4E09\u79CD\u60C5\u51B5\uFF1A<code>prev</code>\u3001<code>inner</code> \u548C <code>next</code>\uFF0C\u5206\u522B\u8868\u793A\u653E\u7F6E\u5728\u76EE\u6807\u8282\u70B9\u524D\u3001\u63D2\u5165\u81F3\u76EE\u6807\u8282\u70B9\u548C\u653E\u7F6E\u5728\u76EE\u6807\u8282\u70B9\u540E</td><td style="text-align:left;">Function(draggingNode, dropNode, type)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr></tbody></table>',2),H="ColumnSetting",I=[{name:"description",content:"\u63A7\u5236\u8868\u683C\u5185\u90E8\u5217\u7684\u6392\u5E8F\u53CA\u663E\u9690\uFF0C\u914D\u5408 Table \u6216 Crud \u4F7F\u7528"},{property:"og:title",content:"ColumnSetting"}],Q={setup(G,{expose:p}){return p({frontmatter:{title:"ColumnSetting",meta:[{name:"description",content:"\u63A7\u5236\u8868\u683C\u5185\u90E8\u5217\u7684\u6392\u5E8F\u53CA\u663E\u9690\uFF0C\u914D\u5408 Table \u6216 Crud \u4F7F\u7528"},{property:"og:title",content:"ColumnSetting"}]}}),c({title:"ColumnSetting",meta:[{name:"description",content:"\u63A7\u5236\u8868\u683C\u5185\u90E8\u5217\u7684\u6392\u5E8F\u53CA\u663E\u9690\uFF0C\u914D\u5408 Table \u6216 Crud \u4F7F\u7528"},{property:"og:title",content:"ColumnSetting"}]}),(V,j)=>{const o=i("pro-code");return d(),y("div",g,[m,a(o,null,{source:s(()=>[a(l)]),description:s(()=>[f]),code:s(()=>[x]),default:s(()=>[h]),_:1}),v,a(o,null,{source:s(()=>[a(u)]),description:s(()=>[b]),code:s(()=>[w]),default:s(()=>[_]),_:1}),A,a(o,null,{source:s(()=>[a(r)]),description:s(()=>[C]),code:s(()=>[E]),default:s(()=>[T]),_:1}),S,a(o,null,{source:s(()=>[a(k)]),description:s(()=>[q]),code:s(()=>[N]),default:s(()=>[F]),_:1}),B])}}};export{Q as default,I as meta,H as title};
