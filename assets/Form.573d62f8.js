import{r as c,X as an,R as h,z as T,A as U,U as l,O as s,u as e,f as k,E as n,P as C,Q as L,at as y,a3 as t}from"./modules-vue.fb389e96.js";import{u as en}from"./index.40f0dd19.js";import{O as on}from"./modules-element-plus.51e4a6a6.js";const ln={class:"markdown-body"},pn=y('<h1 id="form" tabindex="-1">Form <a class="header-anchor" href="#form" aria-hidden="true">#</a></h1><blockquote><p>Form consists of <code>input</code>, <code>radio</code>, <code>select</code>, <code>checkbox</code> and so on. With form, you can collect, verify and submit data</p></blockquote><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>Applicable to any component that can bind value \u200B\u200Bthrough <code>v-model</code>. example:</p><ul><li>Support <code>el-input</code> <code>el-switch</code> \u2026</li><li>Not support <code>el-upload</code> \u2026 (The relevant components need to be rewritten to support <code>v-model</code> components)</li></ul></div><h2 id="use" tabindex="-1">Use <a class="header-anchor" href="#use" aria-hidden="true">#</a></h2><h3 id="basic-use" tabindex="-1">Basic Use <a class="header-anchor" href="#basic-use" aria-hidden="true">#</a></h3><p>When columns is bound to a reactive array, changes in the array will affect form changes (dynamic form). If you don\u2019t need a dynamic form, it is recommended to bind an ordinary array.</p>',6),cn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("submit"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"submit"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("done"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      form`),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      submit`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),un=n("h3",{id:"custom-component",tabindex:"-1"},[t("Custom Component "),n("a",{class:"header-anchor",href:"#custom-component","aria-hidden":"true"},"#")],-1),kn=t("Set "),rn=n("code",null,"component",-1),dn=t(" in "),mn=n("code",null,"columns",-1),gn=t(" attribute to dfine what component the item generates, that component should can bind value \u200B\u200Bthrough "),fn=n("code",null,"v-model",-1),hn=t(". props \u200B\u200Bcan be passed to the component through "),yn=n("code",null,"props",-1),bn=t(", "),xn=t("render-function"),vn=t(" can be passed to the component thrrough "),wn=n("code",null,"slots",-1),_n=t(" in "),qn=n("code",null,"props",-1),Fn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form1"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns1"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" h"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Go'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'go'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'JavaScript'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'javascript'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Python'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'python'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Dart'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'dart'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'V'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'v'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        props`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          clearable`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
          placeholder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Please input'"),n("span",{class:"token punctuation"},","),t(`
          slots`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token function-variable function"},"prefix"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'i'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(" className"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input__icon el-icon-search'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function-variable function"},"append"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token string"},"'Search'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input-tag'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'inputTag'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'pro-input-tag'"),n("span",{class:"token punctuation"},","),t(`
        props`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          placeholder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Please click the space button after input'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'radio'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'radio'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'pro-radio'"),n("span",{class:"token punctuation"},","),t(`
        props`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          data`),n("span",{class:"token operator"},":"),t(" list"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'checkbox'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'checkbox'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'pro-checkbox'"),n("span",{class:"token punctuation"},","),t(`
        props`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          data`),n("span",{class:"token operator"},":"),t(" list"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'pro-select'"),n("span",{class:"token punctuation"},","),t(`
        props`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          data`),n("span",{class:"token operator"},":"),t(" list"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      form1`),n("span",{class:"token punctuation"},","),t(`
      columns1`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Vn=n("h3",{id:"custom-local-component",tabindex:"-1"},[t("Custom local component "),n("a",{class:"header-anchor",href:"#custom-local-component","aria-hidden":"true"},"#")],-1),jn=n("p",null,[t("Local component can be passed directly through "),n("code",null,"component"),t(" in "),n("code",null,"columns"),t(" attribute, But it is not recommended to use with dynamic form")],-1),Sn=n("p",null,"For performance reasons, please do not use partial components in dynamic form",-1),Dn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form7"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns7"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":gutter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("20"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("submit"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ElSwitch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'element-plus'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Go'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'go'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'JavaScript'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'javascript'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Python'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'python'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Dart'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'dart'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'V'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'v'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form7 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns7 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'radio'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'radio'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'pro-radio'"),n("span",{class:"token punctuation"},","),t(`
        props`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          data`),n("span",{class:"token operator"},":"),t(" list"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'switch'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'switch'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(" ElSwitch"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"]"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      form7`),n("span",{class:"token punctuation"},","),t(`
      columns7`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Pn=n("h3",{id:"slots",tabindex:"-1"},[t("Slots "),n("a",{class:"header-anchor",href:"#slots","aria-hidden":"true"},"#")],-1),Nn=n("p",null,[t("Directly add some slot with "),n("code",null,"[prop]"),t(" in the template")],-1),Tn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form2"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns2"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#slot-label"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("i")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("el-icon-picture-outline"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("picture"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#slot"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ value, setValue }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-upload")]),t(`
        `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("avatar-uploader"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},":show-file-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(file) => beforeUpload(file, setValue)"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("img")]),t(`
          `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("avatar"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("i")]),t(`
          `),n("span",{class:"token attr-name"},"v-else"),t(`
          `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("el-icon-plus avatar-uploader-icon"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("el-upload")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("pro-form")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'slot'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"beforeUpload"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("file"),n("span",{class:"token punctuation"},","),t(" setValue")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token comment"},"// Simulate uploading pictures"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" fileReader "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"FileReader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      fileReader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onloadend"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"e"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"setValue"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},"."),t("target"),n("span",{class:"token punctuation"},"."),t("result"),n("span",{class:"token punctuation"},")"),t(`
      fileReader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"readAsDataURL"),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"false"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      form2`),n("span",{class:"token punctuation"},","),t(`
      columns2`),n("span",{class:"token punctuation"},","),t(`
      beforeUpload`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".avatar-uploader .el-upload"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),t(" 1px dashed #d9d9d9"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),t(" 6px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" hidden"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".avatar-uploader .el-upload:hover"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"border-color"),n("span",{class:"token punctuation"},":"),t(" #409eff"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".avatar-uploader .avatar-uploader-icon"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 28px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #8c939d"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 178px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 178px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),t(" 178px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".avatar-uploader .avatar"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 178px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 178px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" block"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Un=n("i",{class:"el-icon-picture-outline"},null,-1),Cn=n("span",null,"picture",-1),Ln=["src"],Rn={key:1,class:"el-icon-plus avatar-uploader-icon"},Wn=n("h3",{id:"custom-menu",tabindex:"-1"},[t("Custom Menu "),n("a",{class:"header-anchor",href:"#custom-menu","aria-hidden":"true"},"#")],-1),zn=n("p",null,[t("Set "),n("code",null,"menu"),t(" attribute to enable custom menu")],-1),An=t("Menu can also be configured through "),In=t("Global config"),Mn=t(" or "),En=t("Localization"),Gn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":menu"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("menu"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" menu "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
      submitText`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Create'"),n("span",{class:"token punctuation"},","),t(`
      reset`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      menu`),n("span",{class:"token punctuation"},","),t(`
      form`),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),On=n("h3",{id:"custom-children-form",tabindex:"-1"},[t("Custom children form "),n("a",{class:"header-anchor",href:"#custom-children-form","aria-hidden":"true"},"#")],-1),Jn=n("p",null,[t("Set "),n("code",null,"children"),t(" in "),n("code",null,"columns"),t(" attribute to enable custom children form")],-1),Bn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form3"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns3"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Goods'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Spec'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'spec'"),n("span",{class:"token punctuation"},","),t(`
        size`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'small'"),n("span",{class:"token punctuation"},","),t(`
        max`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Weight'"),n("span",{class:"token punctuation"},","),t(`
            prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'weight'"),n("span",{class:"token punctuation"},","),t(`
            component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Size'"),n("span",{class:"token punctuation"},","),t(`
            prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'size'"),n("span",{class:"token punctuation"},","),t(`
            max`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Length'"),n("span",{class:"token punctuation"},","),t(`
                prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'length'"),n("span",{class:"token punctuation"},","),t(`
                component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Width'"),n("span",{class:"token punctuation"},","),t(`
                prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'width'"),n("span",{class:"token punctuation"},","),t(`
                component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Height'"),n("span",{class:"token punctuation"},","),t(`
                prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'height'"),n("span",{class:"token punctuation"},","),t(`
                component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      form3`),n("span",{class:"token punctuation"},","),t(`
      columns3`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Hn=n("h3",{id:"validation",tabindex:"-1"},[t("Validation "),n("a",{class:"header-anchor",href:"#validation","aria-hidden":"true"},"#")],-1),Qn=n("p",null,[t("Set "),n("code",null,"rules"),t(" attribute to enable validation, or Set "),n("code",null,"rules"),t(" in "),n("code",null,"columns"),t(" attribute to enable validation, or reference "),n("code",null,"${parental prop}.${current index}.${current prop}")],-1),Xn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form4"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns4"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("rules"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("submitForm"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@reset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("resetForm"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form4 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" rules "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      date`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(" required"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(" message"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Please input date'"),n("span",{class:"token punctuation"},","),t(" trigger"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'blur'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      user`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(" required"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(" message"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Please input user'"),n("span",{class:"token punctuation"},","),t(" trigger"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'blur'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns4 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Date'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'User'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),t(`
        max`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
        size`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'small'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),t(`
            prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
            component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
            rules`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(" required"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(" message"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Please input Name'"),n("span",{class:"token punctuation"},","),t(" trigger"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'blur'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
            prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
            component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"submitForm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("done"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("isValid"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'submit!'"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'error submit!!'"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"resetForm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'reset form'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      form4`),n("span",{class:"token punctuation"},","),t(`
      columns4`),n("span",{class:"token punctuation"},","),t(`
      submitForm`),n("span",{class:"token punctuation"},","),t(`
      resetForm`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Kn=n("h3",{id:"dynamically-form",tabindex:"-1"},[t("Dynamically Form "),n("a",{class:"header-anchor",href:"#dynamically-form","aria-hidden":"true"},"#")],-1),Yn=n("p",null,"If the columns with reactive, the dynamically modified columns form will also change accordingly",-1),Zn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form5"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns5"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":menu"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("menu5"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#menu-left"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-button")]),t(`
        `),n("span",{class:"token attr-name"},"v-show"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns5.length < 5"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("add"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t(`
        Add One
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("el-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#menu-right"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-button")]),t(`
        `),n("span",{class:"token attr-name"},"v-show"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns5.length"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("del"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t(`
        Delete One
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("el-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("pro-form")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" menu5 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
      submit`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
      reset`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" count "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form5 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns5 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Label-0'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'prop0'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      count`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token operator"},"++"),t(`
      columns5`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Label-'"),t(),n("span",{class:"token operator"},"+"),t(" count"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'prop'"),t(),n("span",{class:"token operator"},"+"),t(" count"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"del"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" index "),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"*"),t(" columns5"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},")"),t(`
      columns5`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),t("index"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      menu5`),n("span",{class:"token punctuation"},","),t(`
      form5`),n("span",{class:"token punctuation"},","),t(`
      columns5`),n("span",{class:"token punctuation"},","),t(`
      add`),n("span",{class:"token punctuation"},","),t(`
      del`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),$n=t(" Add One "),nt=t(" Delete One "),tt=y('<h3 id="layout" tabindex="-1">Layout <a class="header-anchor" href="#layout" aria-hidden="true">#</a></h3><p>Use the same way as <code>el-row</code> <code>el-col</code> (<code>el-row</code> corresponds to <code>pro-form</code>; <code>el-col</code> corresponds to <code>columns</code>) <strong>Invalid when <code>inline</code> is <code>true</code></strong></p>',2),st=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form6"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns6"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":gutter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("20"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("submit"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form6 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns6 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Goods'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Weight'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'weight'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        xs`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),t(`
        md`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Count'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'count'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        xs`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),t(`
        md`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Length'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'length'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        xs`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),t(`
        md`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Width'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'width'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        xs`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),t(`
        md`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Height'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'height'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        xs`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),t(`
        md`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Price'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'price'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        xs`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),t(`
        md`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'MarketPrice'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'marketPrice'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        xs`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),t(`
        md`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"submit"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("done"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      form6`),n("span",{class:"token punctuation"},","),t(`
      columns6`),n("span",{class:"token punctuation"},","),t(`
      submit`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),at=n("h3",{id:"async-form",tabindex:"-1"},[t("Async Form "),n("a",{class:"header-anchor",href:"#async-form","aria-hidden":"true"},"#")],-1),et=n("p",null,"To implement Async Form, columns must be bound to a reactive array",-1),ot=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t("20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-button")]),t(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("createForm"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      Load Form
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("el-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-button")]),t(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("info"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("createDict"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      Load Dict
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("el-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-button")]),t(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("danger"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("destroyForm"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      Destroy
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("el-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form8"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns8"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("submit"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list8 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form8 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns8 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"submit"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("done"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"createForm"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      columns8`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),t(`
          prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
          component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Language'"),n("span",{class:"token punctuation"},","),t(`
          prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'language'"),n("span",{class:"token punctuation"},","),t(`
          component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'pro-radio'"),n("span",{class:"token punctuation"},","),t(`
          props`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
            data`),n("span",{class:"token operator"},":"),t(" list8"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"createDict"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      list8`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Go'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'go'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'JavaScript'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'javascript'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Python'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'python'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Dart'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'dart'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'V'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'v'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"destroyForm"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      columns8`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(`
      list8`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      form8`),n("span",{class:"token punctuation"},","),t(`
      columns8`),n("span",{class:"token punctuation"},","),t(`
      submit`),n("span",{class:"token punctuation"},","),t(`
      createForm`),n("span",{class:"token punctuation"},","),t(`
      createDict`),n("span",{class:"token punctuation"},","),t(`
      destroyForm`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),lt={style:{"margin-bottom":"20px"}},pt=t(" Load Form "),ct=t(" Load Dict "),ut=t(" Destroy "),it=y('<h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Options</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">binding value</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">to generate form components, reference <code>columns</code></td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">menu</td><td style="text-align:left;">config the menu content, reference <code>menu</code></td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">rules</td><td style="text-align:left;">validation rules of form</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">inline</td><td style="text-align:left;">whether the form is inline</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">label-position</td><td style="text-align:left;">position of label. If set to \u2018left\u2019 or \u2018right\u2019, <code>label-width</code> prop is also required</td><td style="text-align:left;">string</td><td style="text-align:left;">right / left / top</td><td style="text-align:left;">right</td></tr><tr><td style="text-align:left;">label-width</td><td style="text-align:left;">width of label, e.g. \u201850px\u2019. All its direct child form items will inherit this value. Width <code>auto</code> is supported.</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">label-suffix</td><td style="text-align:left;">suffix of the label</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">hide-required-asterisk</td><td style="text-align:left;">whether required fields should have a red asterisk (star) beside their labels</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">show-message</td><td style="text-align:left;">whether to show the error message</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">inline-message</td><td style="text-align:left;">whether to display the error message inline with the form item</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">status-icon</td><td style="text-align:left;">whether to display an icon indicating the validation result</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">validate-on-rule-change</td><td style="text-align:left;">whether to trigger validation when the <code>rules</code> prop is changed</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">control the size of components in this form</td><td style="text-align:left;">string</td><td style="text-align:left;">medium / small / mini</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">whether to disabled all components in this form. If set to true, it cannot be overridden by its inner components\u2019 <code>disabled</code> prop</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">gutter</td><td style="text-align:left;">grid spacing</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">justify</td><td style="text-align:left;">horizontal alignment of flex layout</td><td style="text-align:left;">string</td><td style="text-align:left;">start / end / center / space-around / space-between</td><td style="text-align:left;">start</td></tr><tr><td style="text-align:left;">align</td><td style="text-align:left;">vertical alignment of flex layout</td><td style="text-align:left;">string</td><td style="text-align:left;">top / middle / bottom</td><td style="text-align:left;">top</td></tr></tbody></table><h4 id="columns" tabindex="-1">columns <a class="header-anchor" href="#columns" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Options</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">prop</td><td style="text-align:left;">a key of <code>v-model</code></td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">label</td><td style="text-align:left;">label text</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">component</td><td style="text-align:left;">binding component</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">props</td><td style="text-align:left;">transfer <code>props</code> to the current component</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">children</td><td style="text-align:left;">sub-columns</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">max</td><td style="text-align:left;">limit the maximum number of sub-columns</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">labelWidth</td><td style="text-align:left;">width of label, e.g. \u201850px\u2019. Width <code>auto</code> is supported.</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">required</td><td style="text-align:left;">whether the field is required or not, will be determined by validation rules if omitted</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">rules</td><td style="text-align:left;">validation rules of form</td><td style="text-align:left;">object</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">error</td><td style="text-align:left;">field error message, set its value and the field will validate error and show this message immediately</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">showMessage</td><td style="text-align:left;">whether to show the error message</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">inlineMessage</td><td style="text-align:left;">inline style validate message</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">control the size of components in this form-item</td><td style="text-align:left;">string</td><td style="text-align:left;">medium / small / mini</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">span</td><td style="text-align:left;">number of column the grid spans</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">24</td></tr><tr><td style="text-align:left;">offset</td><td style="text-align:left;">number of spacing on the left side of the grid</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">push</td><td style="text-align:left;">number of columns that grid moves to the right</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">pull</td><td style="text-align:left;">number of columns that grid moves to the left</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">xs</td><td style="text-align:left;"><code>&lt;768px</code> Responsive columns or column props object</td><td style="text-align:left;">number / object (e.g. {span: 4, offset: 4})</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">sm</td><td style="text-align:left;"><code>\u2265768px</code> Responsive columns or column props object</td><td style="text-align:left;">number / object (e.g. {span: 4, offset: 4})</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">md</td><td style="text-align:left;"><code>\u2265992px</code> Responsive columns or column props object</td><td style="text-align:left;">number / object (e.g. {span: 4, offset: 4})</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">lg</td><td style="text-align:left;"><code>\u22651200px</code> Responsive columns or column props object</td><td style="text-align:left;">number / object (e.g. {span: 4, offset: 4})</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">xl</td><td style="text-align:left;"><code>\u22651920px</code> Responsive columns or column props object</td><td style="text-align:left;">number / object (e.g. {span: 4, offset: 4})</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr></tbody></table>',4),kt=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"about props"),n("p",null,[t("The props attribute will all be passed to the component. "),n("strong",null,[t("For events need to be bound by "),n("code",null,"on[Event]"),t(". example: "),n("code",null,"change"),t(" -> "),n("code",null,"onChange"),t(", "),n("code",null,"input"),t(" -> "),n("code",null,"onInput")])]),n("div",{class:"language-js"},[n("pre",null,[n("code",{"v-pre":""},[t("props"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
  clearable`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token string"},"'prefix-icon'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-icon-search'"),n("span",{class:"token punctuation"},","),t(`
  suffixIcon`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-icon-date'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function-variable function"},"onChange"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token parameter"},"e"),t(),n("span",{class:"token operator"},"=>"),t(" console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])])])],-1),rt=y('<h4 id="menu" tabindex="-1">menu <a class="header-anchor" href="#menu" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Options</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">submit</td><td style="text-align:left;">whether to display a submit button</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">submitText</td><td style="text-align:left;">the text of submit button</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">Submit</td></tr><tr><td style="text-align:left;">submitProps</td><td style="text-align:left;">the props of submit button, reference <code>el-button</code></td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">{ type: \u2018primary\u2019 }</td></tr><tr><td style="text-align:left;">reset</td><td style="text-align:left;">Whether to display a reset button</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">resetText</td><td style="text-align:left;">the text of reset button</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">Reset</td></tr><tr><td style="text-align:left;">resetProps</td><td style="text-align:left;">the props of reset button, reference <code>el-button</code></td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>submit</td><td>triggers when the submit click</td><td>done, isValid, invalidFields</td></tr><tr><td>reset</td><td>triggers when the reset click</td><td>-</td></tr><tr><td>validate</td><td>triggers after a form item is validated</td><td>prop name of the form item being validated, whether validation is passed and the error message if not</td></tr></tbody></table><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Name</th></tr></thead><tbody><tr><td>validate</td><td>validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted</td><td>Function(callback: Function(boolean, object))</td></tr><tr><td>validateField</td><td>validate one or several form items</td><td>Function(props: string | array, callback: Function(errorMessage: string))</td></tr><tr><td>resetFields</td><td>reset all the fields and remove validation result</td><td>\u2014</td></tr><tr><td>clearValidate</td><td>clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields\u2019 validation messages will be cleared</td><td>Function(props: string | array)</td></tr></tbody></table>',6),dt=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"Tip"),n("p",null,[t("If you use "),n("code",null,"typescript"),t(", you can export "),n("code",null,"IFormExpose"),t(" from the component to provide better type inference. example:")]),n("div",{class:"language-vue"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ruleForm"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" IFormExpose "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'element-pro-components'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" ruleForm "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("IFormExpose"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"as"),t(" IFormExpose"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token comment"},"// code..."),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"submitForm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      ruleForm`),n("span",{class:"token punctuation"},"."),t(`value
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"validate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'submit!'"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'error submit!!'"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" ruleForm"),n("span",{class:"token punctuation"},","),t(" submitForm "),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])])],-1),mt=y('<h3 id="slots-1" tabindex="-1">Slots <a class="header-anchor" href="#slots-1" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">-</td><td style="text-align:left;">anything inserted before the menu</td></tr><tr><td style="text-align:left;">menu-left</td><td style="text-align:left;">control the menu left display content</td></tr><tr><td style="text-align:left;">menu-right</td><td style="text-align:left;">control the menu right display content</td></tr><tr><td style="text-align:left;">[prop]</td><td style="text-align:left;">control the <code>Item</code> display content, parameters { item, value, setValue }</td></tr><tr><td style="text-align:left;">[prop]-label</td><td style="text-align:left;">control the <code>Item</code> label display content, parameters { item }</td></tr><tr><td style="text-align:left;">[prop]-error</td><td style="text-align:left;">control the <code>Item</code> error display content, parameters { error, item }</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>[prop] the prop of columns</p></div>',3),vt={setup(gt,{expose:R}){R({frontmatter:{title:"Form",meta:[{name:"description",content:"Form consists of `input`, `radio`, `select`, `checkbox` and so on. With form, you can collect, verify and submit data"},{property:"og:title",content:"Form"}]}}),en({title:"Form",meta:[{name:"description",content:"Form consists of `input`, `radio`, `select`, `checkbox` and so on. With form, you can collect, verify and submit data"},{property:"og:title",content:"Form"}]});let r=c({}),j=[{label:"Name",prop:"name",component:"el-input"},{label:"Address",prop:"address",component:"el-input"}],d=(u,o,p)=>{console.log(o,p),setTimeout(()=>{u()},1e3)},b=c({}),g=c([{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]),W=[{label:"input",prop:"input",component:"el-input",props:{clearable:!0,placeholder:"Please input",slots:{prefix:()=>an("i",{className:"el-input__icon el-icon-search"}),append:()=>"Search"}}},{label:"input-tag",prop:"inputTag",component:"pro-input-tag",props:{placeholder:"Please click the space button after input"}},{label:"radio",prop:"radio",component:"pro-radio",props:{data:g.value}},{label:"checkbox",prop:"checkbox",component:"pro-checkbox",props:{data:g.value}},{label:"select",prop:"select",component:"pro-select",props:{data:g.value}}];g=c([{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]);let x=c({}),z=[{label:"radio",prop:"radio",component:"pro-radio",props:{data:g.value}},{label:"switch",prop:"switch",component:on}],v=c({}),A=c([{prop:"slot"}]);function I(u,o){let p=new FileReader;return p.onloadend=i=>o(i.target.result),p.readAsDataURL(u),!1}let M={submitText:"Create",reset:!1};r=c({}),j=c([{label:"Name",prop:"name",component:"el-input"},{label:"Address",prop:"address",component:"el-input"}]);let w=c({}),E=[{label:"Goods",prop:"name",component:"el-input"},{label:"Spec",prop:"spec",size:"small",max:3,children:[{label:"Weight",prop:"weight",component:"el-input"},{label:"Size",prop:"size",max:1,children:[{label:"Length",prop:"length",component:"el-input"},{label:"Width",prop:"width",component:"el-input"},{label:"Height",prop:"height",component:"el-input"}]}]}],_=c({}),G=c({date:{required:!0,message:"Please input date",trigger:"blur"},user:{required:!0,message:"Please input user",trigger:"blur"}}),O=c([{label:"Date",prop:"date",component:"el-input"},{label:"User",prop:"user",max:3,size:"small",children:[{label:"Name",prop:"name",component:"el-input",rules:{required:!0,message:"Please input Name",trigger:"blur"}},{label:"Address",prop:"address",component:"el-input"}]}]);function J(u,o,p){o?alert("submit!"):console.log("error submit!!"),u()}function B(){console.log("reset form")}let H={submit:!1,reset:!1},S=c(0),q=c({}),m=c([{label:"Label-0",prop:"prop0",component:"el-input"}]);function Q(){S.value++,m.value.push({label:"Label-"+S.value,prop:"prop"+S.value,component:"el-input"})}function X(){let u=Math.floor(Math.random()*m.value.length);m.value.splice(u,1)}let F=c({}),K=[{label:"Goods",prop:"name",component:"el-input",span:24},{label:"Weight",prop:"weight",component:"el-input",xs:24,md:12},{label:"Count",prop:"count",component:"el-input",xs:24,md:12},{label:"Length",prop:"length",component:"el-input",xs:24,md:8},{label:"Width",prop:"width",component:"el-input",xs:24,md:8},{label:"Height",prop:"height",component:"el-input",xs:24,md:8},{label:"Price",prop:"price",component:"el-input",xs:24,md:12},{label:"MarketPrice",prop:"marketPrice",component:"el-input",xs:24,md:12}];d=(u,o,p)=>{console.log(o,p),setTimeout(()=>{u()},1e3)};let D=c([]),V=c({}),P=c([]);d=(u,o,p)=>{console.log(o,p),setTimeout(()=>{u()},1e3)};let Y=()=>{P.value=[{label:"Name",prop:"name",component:"el-input"},{label:"Language",prop:"language",component:"pro-radio",props:{data:D}}]},Z=()=>{D.value=[{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]},$=()=>{P.value=[],D.value=[]};return(u,o)=>{const p=h("pro-form"),i=h("pro-code"),N=h("pro-link"),nn=h("el-upload"),f=h("el-button");return T(),U("div",ln,[pn,l(i,null,{code:s(()=>[cn]),default:s(()=>[l(p,{modelValue:e(r),"onUpdate:modelValue":o[0]||(o[0]=a=>k(r)?r.value=a:r=a),columns:e(j),"label-width":"100px",onSubmit:e(d)},null,8,["modelValue","columns","onSubmit"])]),_:1}),un,n("p",null,[kn,rn,dn,mn,gn,fn,hn,yn,bn,l(N,{to:"https://v3.vuejs.org/guide/render-function.html"},{default:s(()=>[xn]),_:1}),vn,wn,_n,qn]),l(i,null,{code:s(()=>[Fn]),default:s(()=>[l(p,{modelValue:e(b),"onUpdate:modelValue":o[1]||(o[1]=a=>k(b)?b.value=a:b=a),columns:e(W),"label-width":"100px"},null,8,["modelValue","columns"])]),_:1}),Vn,jn,l(i,null,{description:s(()=>[Sn]),code:s(()=>[Dn]),default:s(()=>[l(p,{modelValue:e(x),"onUpdate:modelValue":o[2]||(o[2]=a=>k(x)?x.value=a:x=a),columns:e(z),gutter:20,"label-width":"100px",onSubmit:e(d)},null,8,["modelValue","columns","onSubmit"])]),_:1}),Pn,Nn,l(i,null,{code:s(()=>[Tn]),default:s(()=>[l(p,{modelValue:e(v),"onUpdate:modelValue":o[3]||(o[3]=a=>k(v)?v.value=a:v=a),columns:e(A),"label-width":"100px"},{"slot-label":s(()=>[Un,Cn]),slot:s(({value:a,setValue:tn})=>[l(nn,{class:"avatar-uploader",action:"","show-file-list":!1,"before-upload":sn=>I(sn,tn)},{default:s(()=>[a?(T(),U("img",{key:0,src:a,class:"avatar"},null,8,Ln)):(T(),U("i",Rn))]),_:2},1032,["before-upload"])]),_:1},8,["modelValue","columns"])]),_:1}),Wn,zn,n("p",null,[An,l(N,{to:"/en-US/guide/#global-config"},{default:s(()=>[In]),_:1}),Mn,l(N,{to:"/en-US/guide/i18n"},{default:s(()=>[En]),_:1})]),l(i,null,{code:s(()=>[Gn]),default:s(()=>[l(p,{modelValue:e(r),"onUpdate:modelValue":o[4]||(o[4]=a=>k(r)?r.value=a:r=a),columns:e(j),menu:e(M),"label-width":"100px"},null,8,["modelValue","columns","menu"])]),_:1}),On,Jn,l(i,null,{code:s(()=>[Bn]),default:s(()=>[l(p,{modelValue:e(w),"onUpdate:modelValue":o[5]||(o[5]=a=>k(w)?w.value=a:w=a),columns:e(E),"label-width":"100px"},null,8,["modelValue","columns"])]),_:1}),Hn,Qn,l(i,null,{code:s(()=>[Xn]),default:s(()=>[l(p,{modelValue:e(_),"onUpdate:modelValue":o[6]||(o[6]=a=>k(_)?_.value=a:_=a),columns:e(O),rules:e(G),"label-width":"100px",onSubmit:J,onReset:B},null,8,["modelValue","columns","rules"])]),_:1}),Kn,Yn,l(i,null,{code:s(()=>[Zn]),default:s(()=>[l(p,{modelValue:e(q),"onUpdate:modelValue":o[7]||(o[7]=a=>k(q)?q.value=a:q=a),columns:e(m),menu:e(H),"label-width":"100px"},{"menu-left":s(()=>[C(l(f,{onClick:Q},{default:s(()=>[$n]),_:1},512),[[L,e(m).length<5]])]),"menu-right":s(()=>[C(l(f,{onClick:X},{default:s(()=>[nt]),_:1},512),[[L,e(m).length]])]),_:1},8,["modelValue","columns","menu"])]),_:1}),tt,l(i,null,{code:s(()=>[st]),default:s(()=>[l(p,{modelValue:e(F),"onUpdate:modelValue":o[8]||(o[8]=a=>k(F)?F.value=a:F=a),columns:e(K),gutter:20,"label-width":"100px",onSubmit:e(d)},null,8,["modelValue","columns","onSubmit"])]),_:1}),at,et,l(i,null,{code:s(()=>[ot]),default:s(()=>[n("div",lt,[l(f,{type:"primary",onClick:e(Y)},{default:s(()=>[pt]),_:1},8,["onClick"]),l(f,{type:"info",onClick:e(Z)},{default:s(()=>[ct]),_:1},8,["onClick"]),l(f,{type:"danger",onClick:e($)},{default:s(()=>[ut]),_:1},8,["onClick"])]),l(p,{modelValue:e(V),"onUpdate:modelValue":o[9]||(o[9]=a=>k(V)?V.value=a:V=a),columns:e(P),"label-width":"100px",onSubmit:e(d)},null,8,["modelValue","columns","onSubmit"])]),_:1}),it,kt,rt,dt,mt])}}};export{vt as default};
