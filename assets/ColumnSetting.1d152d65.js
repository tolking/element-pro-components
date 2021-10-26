import{u as _}from"./index.40f0dd19.js";import{r as p,R as v,z as G,A as L,U as u,O as e,u as o,f as g,at as S,E as n,a3 as t}from"./modules-vue.fb389e96.js";import"./modules-element-plus.51e4a6a6.js";const q={class:"markdown-body"},V=S('<h1 id="columnsetting" tabindex="-1">ColumnSetting <a class="header-anchor" href="#columnsetting" aria-hidden="true">#</a></h1><blockquote><p>\u63A7\u5236\u8868\u683C\u5185\u90E8\u5217\u7684\u6392\u5E8F\u53CA\u663E\u9690\uFF0C\u914D\u5408 Table \u6216 Crud \u4F7F\u7528</p></blockquote><h2 id="%E4%BD%BF%E7%94%A8" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#%E4%BD%BF%E7%94%A8" aria-hidden="true">#</a></h2><h3 id="%E9%85%8D%E5%90%88-table" tabindex="-1">\u914D\u5408 Table <a class="header-anchor" href="#%E9%85%8D%E5%90%88-table" aria-hidden="true">#</a></h3>',4),F=n("p",null,[t("\u901A\u8FC7 "),n("code",null,"v-model"),t(" \u7ED1\u5B9A\u6570\u636E\uFF0C\u9ED8\u8BA4\u70B9\u51FB\u591A\u9009\u6846\u5207\u6362\u5217\u7684\u663E\u9690\uFF0C\u76F4\u63A5\u62D6\u52A8\u5B9E\u73B0\u5207\u6362\u6392\u5E8F")],-1),B=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-column-setting")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),t("right"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t("10px")]),n("span",{class:"token punctuation"},'"')])]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-table")]),t(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u65E5\u671F'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5730\u5740'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        date`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-03'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        date`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-02'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        date`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-04'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        date`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-01'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      data`),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),C=n("h3",{id:"%E9%85%8D%E5%90%88-crud",tabindex:"-1"},[t("\u914D\u5408 Crud "),n("a",{class:"header-anchor",href:"#%E9%85%8D%E5%90%88-crud","aria-hidden":"true"},"#")],-1),D=n("p",null,[t("\u63A8\u8350\u901A\u8FC7 "),n("code",null,"action"),t(" \u63D2\u69FD\u4F7F\u7528\uFF0C\u53EF\u4EE5\u7ED1\u5B9A "),n("code",null,"Crud"),t(" \u7684 "),n("code",null,"columns"),t(" \u548C "),n("code",null,"table-columns")],-1),R=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-crud")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("search")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("serachForm"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns1"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":menu"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ label: "),n("span",{class:"token punctuation"},"'"),t("\u64CD\u4F5C"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("search"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("submit"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@delete"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("deleteRow"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#action"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-column-setting")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("pro-crud")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" serachForm "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u65E5\u671F'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        add`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        edit`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        search`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        add`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        search`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5730\u5740'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        add`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        edit`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        date`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-03'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        date`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-02'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        date`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-04'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        date`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-01'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"search"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("done"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'search'"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"submit"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("close"),n("span",{class:"token punctuation"},","),t(" done"),n("span",{class:"token punctuation"},","),t(" formType"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'submit'"),n("span",{class:"token punctuation"},","),t(" formType"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields"),n("span",{class:"token punctuation"},")"),t(`
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
      columns1`),n("span",{class:"token punctuation"},","),t(`
      search`),n("span",{class:"token punctuation"},","),t(`
      submit`),n("span",{class:"token punctuation"},","),t(`
      deleteRow`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),U=S('<div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u5982\u679C <code>ColumnSetting</code> \u76F4\u63A5\u7ED1\u5B9A <code>Crud</code> \u7684 <code>columns</code>\uFF0C\u6392\u5E8F\u53D8\u52A8\u4F1A\u5F71\u54CD\u8868\u5355\u7EC4\u4EF6\u548C\u641C\u7D22\u7EC4\u4EF6\u3002\u901A\u8FC7\u7ED1\u5B9A <code>table-columns</code> \u53EF\u4EE5\u5355\u72EC\u7ED1\u5B9A\u8868\u683C\u8FDB\u800C\u907F\u514D\u5F71\u54CD\u8868\u5355\u7EC4\u4EF6\u548C\u641C\u7D22\u7EC4\u4EF6\u3002</p></div><h3 id="%E7%82%B9%E5%87%BB%E8%A7%A6%E5%8F%91%E5%BC%B9%E7%AA%97" tabindex="-1">\u70B9\u51FB\u89E6\u53D1\u5F39\u7A97 <a class="header-anchor" href="#%E7%82%B9%E5%87%BB%E8%A7%A6%E5%8F%91%E5%BC%B9%E7%AA%97" aria-hidden="true">#</a></h3>',2),j=n("p",null,[t("\u901A\u8FC7 "),n("code",null,"trigger"),t(" \u63A7\u5236\u89E6\u53D1\u65B9\u5F0F\uFF0C\u652F\u6301 "),n("code",null,"hover"),t(),n("code",null,"click"),t(),n("code",null,"contextmenu"),t("-\u9F20\u6807\u53F3\u952E")],-1),O=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-crud")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("search")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("serachForm"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns2"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":table-columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tableColumns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":menu"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ label: "),n("span",{class:"token punctuation"},"'"),t("\u64CD\u4F5C"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("search"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("submit"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@delete"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("deleteRow"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#action"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-column-setting")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tableColumns"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("click"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("pro-crud")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" serachForm "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u65E5\u671F'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        add`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        edit`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        search`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        add`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        search`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5730\u5740'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        add`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        edit`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" tableColumns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"parse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),t("columns2"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        date`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-03'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        date`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-02'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        date`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-04'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        date`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-01'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"search"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("done"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'search'"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"submit"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("close"),n("span",{class:"token punctuation"},","),t(" done"),n("span",{class:"token punctuation"},","),t(" formType"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'submit'"),n("span",{class:"token punctuation"},","),t(" formType"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields"),n("span",{class:"token punctuation"},")"),t(`
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
      columns2`),n("span",{class:"token punctuation"},","),t(`
      tableColumns`),n("span",{class:"token punctuation"},","),t(`
      search`),n("span",{class:"token punctuation"},","),t(`
      submit`),n("span",{class:"token punctuation"},","),t(`
      deleteRow`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),J=n("h3",{id:"%E6%94%AF%E6%8C%81%E5%A4%9A%E7%BA%A7%E8%A1%A8%E5%A4%B4",tabindex:"-1"},[t("\u652F\u6301\u591A\u7EA7\u8868\u5934 "),n("a",{class:"header-anchor",href:"#%E6%94%AF%E6%8C%81%E5%A4%9A%E7%BA%A7%E8%A1%A8%E5%A4%B4","aria-hidden":"true"},"#")],-1),z=n("p",null,"\u652F\u6301\u5BF9\u591A\u7EA7\u8868\u5934\u7684\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u5C06\u5217\u62D6\u5165\u6216\u62D6\u51FA\u5B50\u8868\u5934",-1),H=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-column-setting")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns3"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"default-expand-all"),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),t("right"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t("10px")]),n("span",{class:"token punctuation"},'"')])]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-table")]),t(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns3"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u65E5\u671F'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7528\u6237'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),t(`
            prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5730\u5740'"),n("span",{class:"token punctuation"},","),t(`
            prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        date`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-03'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        date`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-02'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        date`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-04'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        date`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2016-05-01'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No. 189, Grove St, Los Angeles'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      data`),n("span",{class:"token punctuation"},","),t(`
      columns3`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),I=S('<h3 id="%E9%85%8D%E7%BD%AE" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#%E9%85%8D%E7%BD%AE" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u53EF\u9009\u503C</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">\u7ED1\u5B9A <code>columns</code> \u503C</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">\u6309\u94AE\u5C3A\u5BF8</td><td style="text-align:left;">string</td><td style="text-align:left;">medium / small / mini</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">placement</td><td style="text-align:left;">\u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E</td><td style="text-align:left;">string</td><td style="text-align:left;">top / top-start / top-end / bottom / bottom-start / bottom-end</td><td style="text-align:left;">bottom-end</td></tr><tr><td style="text-align:left;">trigger</td><td style="text-align:left;">\u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A</td><td style="text-align:left;">string</td><td style="text-align:left;">hover / click / contextmenu</td><td style="text-align:left;">hover</td></tr><tr><td style="text-align:left;">empty-text</td><td style="text-align:left;">\u5185\u5BB9\u4E3A\u7A7A\u7684\u65F6\u5019\u5C55\u793A\u7684\u6587\u672C</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">render-after-expand</td><td style="text-align:left;">\u662F\u5426\u5728\u7B2C\u4E00\u6B21\u5C55\u5F00\u67D0\u4E2A\u6811\u8282\u70B9\u540E\u624D\u6E32\u67D3\u5176\u5B50\u8282\u70B9</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">highlight-current</td><td style="text-align:left;">\u662F\u5426\u9AD8\u4EAE\u5F53\u524D\u9009\u4E2D\u8282\u70B9</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">default-expand-all</td><td style="text-align:left;">\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u8282\u70B9</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">expand-on-click-node</td><td style="text-align:left;">\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">check-on-click-node</td><td style="text-align:left;">\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u9009\u4E2D\u8282\u70B9</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">auto-expand-parent</td><td style="text-align:left;">\u5C55\u5F00\u5B50\u8282\u70B9\u7684\u65F6\u5019\u662F\u5426\u81EA\u52A8\u5C55\u5F00\u7236\u8282\u70B9</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">filter-node-method</td><td style="text-align:left;">\u5BF9\u6811\u8282\u70B9\u8FDB\u884C\u7B5B\u9009\u65F6\u6267\u884C\u7684\u65B9\u6CD5\uFF0C\u8FD4\u56DE boolean</td><td style="text-align:left;">Function(value, data, node)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">accordion</td><td style="text-align:left;">\u662F\u5426\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2A\u540C\u7EA7\u6811\u8282\u70B9\u5C55\u5F00</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">indent</td><td style="text-align:left;">\u76F8\u90BB\u7EA7\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u7F29\u8FDB\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">16</td></tr><tr><td style="text-align:left;">icon-class</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u56FE\u6807</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">allow-drag</td><td style="text-align:left;">\u5224\u65AD\u8282\u70B9\u80FD\u5426\u88AB\u62D6\u62FD</td><td style="text-align:left;">Function(node)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">allow-drop</td><td style="text-align:left;">\u62D6\u62FD\u65F6\u5224\u5B9A\u76EE\u6807\u8282\u70B9\u80FD\u5426\u88AB\u653E\u7F6E\u3002<code>type</code> \u53C2\u6570\u6709\u4E09\u79CD\u60C5\u51B5\uFF1A<code>prev</code>\u3001<code>inner</code> \u548C <code>next</code>\uFF0C\u5206\u522B\u8868\u793A\u653E\u7F6E\u5728\u76EE\u6807\u8282\u70B9\u524D\u3001\u63D2\u5165\u81F3\u76EE\u6807\u8282\u70B9\u548C\u653E\u7F6E\u5728\u76EE\u6807\u8282\u70B9\u540E</td><td style="text-align:left;">Function(draggingNode, dropNode, type)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr></tbody></table>',2),Y={setup(K,{expose:N}){N({frontmatter:{title:"ColumnSetting",meta:[{name:"description",content:"\u63A7\u5236\u8868\u683C\u5185\u90E8\u5217\u7684\u6392\u5E8F\u53CA\u663E\u9690\uFF0C\u914D\u5408 Table \u6216 Crud \u4F7F\u7528"},{property:"og:title",content:"ColumnSetting"}]}}),_({title:"ColumnSetting",meta:[{name:"description",content:"\u63A7\u5236\u8868\u683C\u5185\u90E8\u5217\u7684\u6392\u5E8F\u53CA\u663E\u9690\uFF0C\u914D\u5408 Table \u6216 Crud \u4F7F\u7528"},{property:"og:title",content:"ColumnSetting"}]});let f=p([{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"}]),m=p([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),k=p({}),i=p({}),y=p([{label:"\u65E5\u671F",prop:"date",component:"el-input",add:!0,edit:!0,search:!0},{label:"\u59D3\u540D",prop:"name",component:"el-input",add:!0,search:!0},{label:"\u5730\u5740",prop:"address",component:"el-input",add:!0,edit:!0}]);m=p([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);let h=(c,s,l)=>{console.log("search",s,l),setTimeout(()=>{c()},1e3)},A=(c,s,l,r,d)=>{console.log("submit",l,r,d),setTimeout(()=>{r?c():s()},1e3)},w=c=>{console.log("deleteRow",c)};k=p({}),i=p({});let T=p([{label:"\u65E5\u671F",prop:"date",component:"el-input",add:!0,edit:!0,search:!0},{label:"\u59D3\u540D",prop:"name",component:"el-input",add:!0,search:!0},{label:"\u5730\u5740",prop:"address",component:"el-input",add:!0,edit:!0}]),b=p(JSON.parse(JSON.stringify(T.value)));m=p([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),h=(c,s,l)=>{console.log("search",s,l),setTimeout(()=>{c()},1e3)},A=(c,s,l,r,d)=>{console.log("submit",l,r,d),setTimeout(()=>{r?c():s()},1e3)},w=c=>{console.log("deleteRow",c)};let x=p([{label:"\u65E5\u671F",prop:"date"},{label:"\u7528\u6237",prop:"user",children:[{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"}]}]);return m=p([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),(c,s)=>{const l=v("pro-column-setting"),r=v("pro-table"),d=v("pro-code"),E=v("pro-crud");return G(),L("div",q,[V,u(d,null,{description:e(()=>[F]),code:e(()=>[B]),default:e(()=>[u(l,{modelValue:o(f),"onUpdate:modelValue":s[0]||(s[0]=a=>g(f)?f.value=a:f=a),style:{float:"right","margin-bottom":"10px"}},null,8,["modelValue"]),u(r,{data:o(m),columns:o(f)},null,8,["data","columns"])]),_:1}),C,u(d,null,{description:e(()=>[D]),code:e(()=>[R]),default:e(()=>[u(E,{modelValue:o(k),"onUpdate:modelValue":s[2]||(s[2]=a=>g(k)?k.value=a:k=a),search:o(i),"onUpdate:search":s[3]||(s[3]=a=>g(i)?i.value=a:i=a),columns:o(y),menu:{label:"\u64CD\u4F5C"},data:o(m),onSearch:o(h),onSubmit:o(A),onDelete:o(w)},{action:e(()=>[u(l,{modelValue:o(y),"onUpdate:modelValue":s[1]||(s[1]=a=>g(y)?y.value=a:y=a)},null,8,["modelValue"])]),_:1},8,["modelValue","search","columns","data","onSearch","onSubmit","onDelete"])]),_:1}),U,u(d,null,{description:e(()=>[j]),code:e(()=>[O]),default:e(()=>[u(E,{modelValue:o(k),"onUpdate:modelValue":s[5]||(s[5]=a=>g(k)?k.value=a:k=a),search:o(i),"onUpdate:search":s[6]||(s[6]=a=>g(i)?i.value=a:i=a),columns:o(T),"table-columns":o(b),menu:{label:"\u64CD\u4F5C"},data:o(m),onSearch:o(h),onSubmit:o(A),onDelete:o(w)},{action:e(()=>[u(l,{modelValue:o(b),"onUpdate:modelValue":s[4]||(s[4]=a=>g(b)?b.value=a:b=a),trigger:"click"},null,8,["modelValue"])]),_:1},8,["modelValue","search","columns","table-columns","data","onSearch","onSubmit","onDelete"])]),_:1}),J,u(d,null,{description:e(()=>[z]),code:e(()=>[H]),default:e(()=>[u(l,{modelValue:o(x),"onUpdate:modelValue":s[7]||(s[7]=a=>g(x)?x.value=a:x=a),"default-expand-all":"",style:{float:"right","margin-bottom":"10px"}},null,8,["modelValue"]),u(r,{data:o(m),columns:o(x)},null,8,["data","columns"])]),_:1}),I])}}};export{Y as default};
