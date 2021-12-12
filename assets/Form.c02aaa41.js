import{u}from"./index.0e5880b7.js";import{F as i,a as k,b as r,c as d,d as g,e as m,f,g as y,h,i as b,j as x,_ as v}from"./typescript.7f87c518.js";import{H as c,o as w,c as _,P as a,M as s,a as n,aw as e,a4 as t}from"./modules-vue.13dc082f.js";import"./modules-element-plus.7e160cd2.js";const q={class:"markdown-body"},F=e('<h1 id="form" tabindex="-1">Form <a class="header-anchor" href="#form" aria-hidden="true">#</a></h1><blockquote><p>Form consists of <code>input</code>, <code>radio</code>, <code>select</code>, <code>checkbox</code> and so on. With form, you can collect, verify and submit data</p></blockquote><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>Applicable to any component that can bind value \u200B\u200Bthrough <code>v-model</code>. example:</p><ul><li>Support <code>el-input</code> <code>el-switch</code> \u2026</li><li>Not support <code>el-upload</code> \u2026 (The relevant components need to be rewritten to support <code>v-model</code> components)</li></ul></div><h2 id="use" tabindex="-1">Use <a class="header-anchor" href="#use" aria-hidden="true">#</a></h2><h3 id="basic-use" tabindex="-1">Basic Use <a class="header-anchor" href="#basic-use" aria-hidden="true">#</a></h3><p>When columns is bound to a reactive array, changes in the array will affect form changes (dynamic form). If you don\u2019t need a dynamic form, it is recommended to bind an ordinary array.</p>',6),j=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("submit"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
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
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("form"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      form`),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      submit`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),C=n("p",null,"@/demo/Form/base.vue",-1),V=n("h3",{id:"nested-value",tabindex:"-1"},[t("Nested value "),n("a",{class:"header-anchor",href:"#nested-value","aria-hidden":"true"},"#")],-1),S=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("{{ form }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("submit"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token string"},"'a.b'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"undefined"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Break'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'a.b'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Object'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'a.b.c'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Array'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'b[0]'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"submit"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("done"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("form"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      form`),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      submit`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),D=n("p",null,"@/demo/Form/nested.vue",-1),T=n("h3",{id:"custom-component",tabindex:"-1"},[t("Custom Component "),n("a",{class:"header-anchor",href:"#custom-component","aria-hidden":"true"},"#")],-1),N=t("Set "),P=n("code",null,"component",-1),R=t(" in "),I=n("code",null,"columns",-1),A=t(" attribute to dfine what component the item generates, that component should can bind value \u200B\u200Bthrough "),L=n("code",null,"v-model",-1),M=t(". props \u200B\u200Bcan be passed to the component through "),W=n("code",null,"props",-1),U=t(", "),z=t("render-function"),G=t(" can be passed to the component thrrough "),B=n("code",null,"slots",-1),O=t(" in "),E=n("code",null,"props",-1),H=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" h"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Go'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'go'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'JavaScript'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'javascript'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Python'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'python'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Dart'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'dart'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'V'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'v'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
        props`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          clearable`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
          placeholder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Please input'"),n("span",{class:"token punctuation"},","),t(`
          slots`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token function-variable function"},"prefix"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(`
              `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'i'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(" className"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input__icon el-icon-search'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function-variable function"},"append"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token string"},"'Search'"),n("span",{class:"token punctuation"},","),t(`
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
      form`),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),$=n("p",null,"@/demo/Form/component.vue",-1),J=n("h3",{id:"custom-local-registration-component",tabindex:"-1"},[t("Custom local registration component "),n("a",{class:"header-anchor",href:"#custom-local-registration-component","aria-hidden":"true"},"#")],-1),K=n("p",null,[t("Local component can be passed directly through "),n("code",null,"component"),t(" in "),n("code",null,"columns"),t(" attribute (marking the component with "),n("code",null,"markRaw"),t(")")],-1),Q=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":gutter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("20"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("submit"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" markRaw "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ElSwitch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'element-plus'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Go'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'go'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'JavaScript'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'javascript'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Python'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'python'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Dart'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'dart'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'V'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'v'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'radio'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'radio'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'pro-radio'"),n("span",{class:"token punctuation"},","),t(`
        props`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          data`),n("span",{class:"token operator"},":"),t(" list"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'switch'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'switch'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"markRaw"),n("span",{class:"token punctuation"},"("),t("ElSwitch"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"submit"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("done"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("form"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      form`),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      submit`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),X=n("p",null,"@/demo/Form/local.vue",-1),Y=n("h3",{id:"slots",tabindex:"-1"},[t("Slots "),n("a",{class:"header-anchor",href:"#slots","aria-hidden":"true"},"#")],-1),Z=n("p",null,[t("Directly add some slot with "),n("code",null,"[prop]"),t(" in the template")],-1),nn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#slot-label"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("picture-rounded")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("icon-picture"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("picture"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#slot"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ value, setValue }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-upload")]),t(`
        `),n("span",{class:"token attr-name"},":show-file-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(file) => beforeUpload(file, setValue)"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("avatar-uploader"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("img")]),t(`
          `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("avatar"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("plus")]),t(`
          `),n("span",{class:"token attr-name"},"v-else"),t(`
          `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("icon-uploader"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("el-upload")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("pro-form")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Plus"),n("span",{class:"token punctuation"},","),t(" PictureRounded "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@element-plus/icons-vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(" Plus"),n("span",{class:"token punctuation"},","),t(" PictureRounded "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'slot'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"beforeUpload"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("file"),n("span",{class:"token punctuation"},","),t(" setValue")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token comment"},"// Simulate uploading pictures"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" fileReader "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"FileReader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      fileReader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onloadend"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"setValue"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},"."),t("target"),n("span",{class:"token punctuation"},"."),t("result"),n("span",{class:"token punctuation"},")"),t(`
      fileReader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"readAsDataURL"),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"false"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      form`),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      beforeUpload`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".icon-picture"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 6px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".avatar-uploader .el-upload"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 178px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 178px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),t(" 1px dashed #d9d9d9"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),t(" 6px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" hidden"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),t(" 200px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".avatar-uploader .el-upload:hover"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"border-color"),n("span",{class:"token punctuation"},":"),t(" #409eff"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".avatar-uploader .icon-uploader"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 50px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 50px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #8c939d"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".avatar-uploader .avatar"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" block"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),tn=n("p",null,"@/demo/Form/slots.vue",-1),sn=n("h3",{id:"custom-menu",tabindex:"-1"},[t("Custom Menu "),n("a",{class:"header-anchor",href:"#custom-menu","aria-hidden":"true"},"#")],-1),an=n("p",null,[t("Set "),n("code",null,"menu"),t(" attribute to enable custom menu")],-1),on=t("Menu can also be configured through "),en=t("Global config"),pn=t(" or "),cn=t("Localization"),ln=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":menu"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("menu"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
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
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),un=n("p",null,"@/demo/Form/menu.vue",-1),kn=n("h3",{id:"custom-sub-forms",tabindex:"-1"},[t("Custom sub-forms "),n("a",{class:"header-anchor",href:"#custom-sub-forms","aria-hidden":"true"},"#")],-1),rn=n("p",null,[t("Set "),n("code",null,"children"),t(" in "),n("code",null,"columns"),t(" attribute to enable custom sub-forms")],-1),dn=n("p",null,[t("Use "),n("code",null,"max"),t(" to limit the maximum number of sub-forms")],-1),gn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
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
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      form`),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),mn=n("p",null,"@/demo/Form/sub.vue",-1),fn=n("h3",{id:"validation",tabindex:"-1"},[t("Validation "),n("a",{class:"header-anchor",href:"#validation","aria-hidden":"true"},"#")],-1),yn=n("p",null,[t("Set "),n("code",null,"rules"),t(" attribute to enable validation, or Set "),n("code",null,"rules"),t(" in "),n("code",null,"columns"),t(" attribute to enable validation, or reference "),n("code",null,"${parental prop}.${current index}.${current prop}")],-1),hn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("rules"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("submitForm"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@reset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("resetForm"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" rules "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      date`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(" required"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(" message"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Please input date'"),n("span",{class:"token punctuation"},","),t(" trigger"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'blur'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      user`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(" required"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(" message"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Please input user'"),n("span",{class:"token punctuation"},","),t(" trigger"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'blur'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
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
            rules`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              required`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
              message`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Please input Name'"),n("span",{class:"token punctuation"},","),t(`
              trigger`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'blur'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
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
      form`),n("span",{class:"token punctuation"},","),t(`
      rules`),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      submitForm`),n("span",{class:"token punctuation"},","),t(`
      resetForm`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),bn=n("p",null,"@/demo/Form/rules.vue",-1),xn=n("h3",{id:"dynamically-form",tabindex:"-1"},[t("Dynamically Form "),n("a",{class:"header-anchor",href:"#dynamically-form","aria-hidden":"true"},"#")],-1),vn=n("p",null,"If the columns with reactive, the dynamically modified columns form will also change accordingly",-1),wn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":menu"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("menu"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#menu-left"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-button")]),t(`
        `),n("span",{class:"token attr-name"},"v-show"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns.length < 5"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("add"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t(`
        Add One
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("el-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#menu-right"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-button")]),t(`
        `),n("span",{class:"token attr-name"},"v-show"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns.length"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("del"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t(`
        Delete One
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("el-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("pro-form")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" menu "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
      submit`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
      reset`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" count "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Label-0'"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'prop0'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      count`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token operator"},"++"),t(`
      columns`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Label-'"),t(),n("span",{class:"token operator"},"+"),t(" count"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(`
        prop`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'prop'"),t(),n("span",{class:"token operator"},"+"),t(" count"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"del"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" index "),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"*"),t(" columns"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},")"),t(`
      columns`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),t("index"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      menu`),n("span",{class:"token punctuation"},","),t(`
      form`),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      add`),n("span",{class:"token punctuation"},","),t(`
      del`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),_n=n("p",null,"@/demo/Form/dynamically.vue",-1),qn=e('<h3 id="layout" tabindex="-1">Layout <a class="header-anchor" href="#layout" aria-hidden="true">#</a></h3><p>Use the same way as <code>el-row</code> <code>el-col</code> (<code>el-row</code> corresponds to <code>pro-form</code>; <code>el-col</code> corresponds to <code>columns</code>) <strong>Invalid when <code>inline</code> is <code>true</code></strong></p>',2),Fn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":gutter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("20"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("submit"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
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
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("form"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      form`),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      submit`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),jn=n("p",null,"@/demo/Form/layout.vue",-1),Cn=n("h3",{id:"async-form",tabindex:"-1"},[t("Async Form "),n("a",{class:"header-anchor",href:"#async-form","aria-hidden":"true"},"#")],-1),Vn=n("p",null,"To implement Async Form, columns must be bound to a reactive array",-1),Sn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
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
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("submit"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" form "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"submit"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("done"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("form"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"createForm"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      columns`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
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
            data`),n("span",{class:"token operator"},":"),t(" list"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"createDict"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      list`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Go'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'go'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'JavaScript'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'javascript'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Python'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'python'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Dart'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'dart'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'V'"),n("span",{class:"token punctuation"},","),t(" label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'v'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"destroyForm"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      columns`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(`
      list`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      form`),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      submit`),n("span",{class:"token punctuation"},","),t(`
      createForm`),n("span",{class:"token punctuation"},","),t(`
      createDict`),n("span",{class:"token punctuation"},","),t(`
      destroyForm`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Dn=n("p",null,"@/demo/Form/async.vue",-1),Tn=n("h3",{id:"typescript",tabindex:"-1"},[t("TypeScript "),n("a",{class:"header-anchor",href:"#typescript","aria-hidden":"true"},"#")],-1),Nn=n("p",null,[t("import type IFormColumns from the component library is used to assist in editing columns, and a Generics type is supported to infer the value of "),n("code",null,"prop")],-1),Pn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pro-form")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("form"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":menu"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("menu"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("submit"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" IFormColumns"),n("span",{class:"token punctuation"},","),t(" IFormMenuColumns"),n("span",{class:"token punctuation"},","),t(" IFormSubmit "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'/@src/index'"),t(`

`),n("span",{class:"token keyword"},"interface"),t(),n("span",{class:"token class-name"},"Form"),t(),n("span",{class:"token punctuation"},"{"),t(`
  name`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),t(` string
  address`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),t(` string
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"const"),t(" form "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("Form"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(" menu"),n("span",{class:"token operator"},":"),t(" IFormMenuColumns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
  submitText`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Create'"),n("span",{class:"token punctuation"},","),t(`
  reset`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"const"),t(" columns"),n("span",{class:"token operator"},":"),t(" IFormColumns"),n("span",{class:"token operator"},"<"),t("Form"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
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
`),n("span",{class:"token keyword"},"const"),t(" submit"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function-variable function"},"IFormSubmit"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("done"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("form"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(" isValid"),n("span",{class:"token punctuation"},","),t(" invalidFields"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Rn=n("p",null,"@/demo/Form/typescript.vue",-1),In=e('<h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Options</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">binding value</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">to generate form components, reference <code>columns</code></td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">menu</td><td style="text-align:left;">config the menu content, reference <code>menu</code></td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">rules</td><td style="text-align:left;">validation rules of form</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">inline</td><td style="text-align:left;">whether the form is inline</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">label-position</td><td style="text-align:left;">position of label. If set to \u2018left\u2019 or \u2018right\u2019, <code>label-width</code> prop is also required</td><td style="text-align:left;">string</td><td style="text-align:left;">right / left / top</td><td style="text-align:left;">right</td></tr><tr><td style="text-align:left;">label-width</td><td style="text-align:left;">width of label, e.g. \u201850px\u2019. All its direct child form items will inherit this value. Width <code>auto</code> is supported.</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">label-suffix</td><td style="text-align:left;">suffix of the label</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">hide-required-asterisk</td><td style="text-align:left;">whether required fields should have a red asterisk (star) beside their labels</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">show-message</td><td style="text-align:left;">whether to show the error message</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">inline-message</td><td style="text-align:left;">whether to display the error message inline with the form item</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">status-icon</td><td style="text-align:left;">whether to display an icon indicating the validation result</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">validate-on-rule-change</td><td style="text-align:left;">whether to trigger validation when the <code>rules</code> prop is changed</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">control the size of components in this form</td><td style="text-align:left;">string</td><td style="text-align:left;">medium / small / mini</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">whether to disabled all components in this form. If set to true, it cannot be overridden by its inner components\u2019 <code>disabled</code> prop</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">gutter</td><td style="text-align:left;">grid spacing</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">justify</td><td style="text-align:left;">horizontal alignment of flex layout</td><td style="text-align:left;">string</td><td style="text-align:left;">start / end / center / space-around / space-between</td><td style="text-align:left;">start</td></tr><tr><td style="text-align:left;">align</td><td style="text-align:left;">vertical alignment of flex layout</td><td style="text-align:left;">string</td><td style="text-align:left;">top / middle / bottom</td><td style="text-align:left;">top</td></tr></tbody></table><h4 id="columns" tabindex="-1">columns <a class="header-anchor" href="#columns" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Options</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">prop</td><td style="text-align:left;">a key of <code>v-model</code></td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">label</td><td style="text-align:left;">label text</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">component</td><td style="text-align:left;">binding component</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">props</td><td style="text-align:left;">transfer <code>props</code> to the current component</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">children</td><td style="text-align:left;">sub-columns</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">max</td><td style="text-align:left;">limit the maximum number of sub-columns</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">labelWidth</td><td style="text-align:left;">width of label, e.g. \u201850px\u2019. Width <code>auto</code> is supported.</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">required</td><td style="text-align:left;">whether the field is required or not, will be determined by validation rules if omitted</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">rules</td><td style="text-align:left;">validation rules of form</td><td style="text-align:left;">object</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">error</td><td style="text-align:left;">field error message, set its value and the field will validate error and show this message immediately</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">showMessage</td><td style="text-align:left;">whether to show the error message</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">inlineMessage</td><td style="text-align:left;">inline style validate message</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">control the size of components in this form-item</td><td style="text-align:left;">string</td><td style="text-align:left;">medium / small / mini</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">span</td><td style="text-align:left;">number of column the grid spans</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">24</td></tr><tr><td style="text-align:left;">offset</td><td style="text-align:left;">number of spacing on the left side of the grid</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">push</td><td style="text-align:left;">number of columns that grid moves to the right</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">pull</td><td style="text-align:left;">number of columns that grid moves to the left</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">xs</td><td style="text-align:left;"><code>&lt;768px</code> Responsive columns or column props object</td><td style="text-align:left;">number / object (e.g. {span: 4, offset: 4})</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">sm</td><td style="text-align:left;"><code>\u2265768px</code> Responsive columns or column props object</td><td style="text-align:left;">number / object (e.g. {span: 4, offset: 4})</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">md</td><td style="text-align:left;"><code>\u2265992px</code> Responsive columns or column props object</td><td style="text-align:left;">number / object (e.g. {span: 4, offset: 4})</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">lg</td><td style="text-align:left;"><code>\u22651200px</code> Responsive columns or column props object</td><td style="text-align:left;">number / object (e.g. {span: 4, offset: 4})</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">xl</td><td style="text-align:left;"><code>\u22651920px</code> Responsive columns or column props object</td><td style="text-align:left;">number / object (e.g. {span: 4, offset: 4})</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr></tbody></table>',4),An=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"about props"),n("p",null,[t("The props attribute will all be passed to the component. "),n("strong",null,[t("For events need to be bound by "),n("code",null,"on[Event]"),t(". example: "),n("code",null,"change"),t(" -> "),n("code",null,"onChange"),t(", "),n("code",null,"input"),t(" -> "),n("code",null,"onInput")])]),n("div",{class:"language-js"},[n("pre",null,[n("code",{"v-pre":""},[t("props"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
  clearable`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token string"},"'prefix-icon'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-icon-search'"),n("span",{class:"token punctuation"},","),t(`
  suffixIcon`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-icon-date'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function-variable function"},"onChange"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token parameter"},"e"),t(),n("span",{class:"token operator"},"=>"),t(" console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])])])],-1),Ln=e('<h4 id="menu" tabindex="-1">menu <a class="header-anchor" href="#menu" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Options</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">submit</td><td style="text-align:left;">whether to display a submit button</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">submitText</td><td style="text-align:left;">the text of submit button</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">Submit</td></tr><tr><td style="text-align:left;">submitProps</td><td style="text-align:left;">the props of submit button, reference <code>el-button</code></td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">{ type: \u2018primary\u2019 }</td></tr><tr><td style="text-align:left;">reset</td><td style="text-align:left;">Whether to display a reset button</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">resetText</td><td style="text-align:left;">the text of reset button</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">Reset</td></tr><tr><td style="text-align:left;">resetProps</td><td style="text-align:left;">the props of reset button, reference <code>el-button</code></td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>submit</td><td>triggers when the submit click</td><td>done, isValid, invalidFields</td></tr><tr><td>reset</td><td>triggers when the reset click</td><td>-</td></tr><tr><td>validate</td><td>triggers after a form item is validated</td><td>prop name of the form item being validated, whether validation is passed and the error message if not</td></tr></tbody></table><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Name</th></tr></thead><tbody><tr><td>validate</td><td>validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted</td><td>Function(callback: Function(boolean, object))</td></tr><tr><td>validateField</td><td>validate one or several form items</td><td>Function(props: string | array, callback: Function(errorMessage: string))</td></tr><tr><td>resetFields</td><td>reset all the fields and remove validation result</td><td>\u2014</td></tr><tr><td>clearValidate</td><td>clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields\u2019 validation messages will be cleared</td><td>Function(props: string | array)</td></tr></tbody></table><h3 id="slots-1" tabindex="-1">Slots <a class="header-anchor" href="#slots-1" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">-</td><td style="text-align:left;">anything inserted before the menu</td></tr><tr><td style="text-align:left;">menu-left</td><td style="text-align:left;">control the menu left display content, parameters { loading }</td></tr><tr><td style="text-align:left;">menu-right</td><td style="text-align:left;">control the menu right display content, parameters { loading }</td></tr><tr><td style="text-align:left;">[prop]</td><td style="text-align:left;">control the <code>Item</code> display content, parameters { item, value, setValue }</td></tr><tr><td style="text-align:left;">[prop]-label</td><td style="text-align:left;">control the <code>Item</code> label display content, parameters { item }</td></tr><tr><td style="text-align:left;">[prop]-error</td><td style="text-align:left;">control the <code>Item</code> error display content, parameters { error, item }</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>[prop] the prop of columns</p></div>',9),$n={setup(Mn,{expose:l}){return l({frontmatter:{title:"Form",meta:[{name:"description",content:"Form consists of `input`, `radio`, `select`, `checkbox` and so on. With form, you can collect, verify and submit data"},{property:"og:title",content:"Form"}]}}),u({title:"Form",meta:[{name:"description",content:"Form consists of `input`, `radio`, `select`, `checkbox` and so on. With form, you can collect, verify and submit data"},{property:"og:title",content:"Form"}]}),(zn,Gn)=>{const o=c("pro-code"),p=c("pro-link");return w(),_("div",q,[F,a(o,null,{source:s(()=>[a(i)]),code:s(()=>[j]),default:s(()=>[C]),_:1}),V,a(o,null,{source:s(()=>[a(k)]),code:s(()=>[S]),default:s(()=>[D]),_:1}),T,n("p",null,[N,P,R,I,A,L,M,W,U,a(p,{to:"https://v3.vuejs.org/guide/render-function.html"},{default:s(()=>[z]),_:1}),G,B,O,E]),a(o,null,{source:s(()=>[a(r)]),code:s(()=>[H]),default:s(()=>[$]),_:1}),J,K,a(o,null,{source:s(()=>[a(d)]),code:s(()=>[Q]),default:s(()=>[X]),_:1}),Y,Z,a(o,null,{source:s(()=>[a(g)]),code:s(()=>[nn]),default:s(()=>[tn]),_:1}),sn,an,n("p",null,[on,a(p,{to:"/en-US/guide/#global-config"},{default:s(()=>[en]),_:1}),pn,a(p,{to:"/en-US/guide/i18n"},{default:s(()=>[cn]),_:1})]),a(o,null,{source:s(()=>[a(m)]),code:s(()=>[ln]),default:s(()=>[un]),_:1}),kn,rn,a(o,null,{source:s(()=>[a(f)]),description:s(()=>[dn]),code:s(()=>[gn]),default:s(()=>[mn]),_:1}),fn,yn,a(o,null,{source:s(()=>[a(y)]),code:s(()=>[hn]),default:s(()=>[bn]),_:1}),xn,vn,a(o,null,{source:s(()=>[a(h)]),code:s(()=>[wn]),default:s(()=>[_n]),_:1}),qn,a(o,null,{source:s(()=>[a(b)]),code:s(()=>[Fn]),default:s(()=>[jn]),_:1}),Cn,Vn,a(o,null,{source:s(()=>[a(x)]),code:s(()=>[Sn]),default:s(()=>[Dn]),_:1}),Tn,Nn,a(o,null,{source:s(()=>[a(v)]),code:s(()=>[Pn]),default:s(()=>[Rn]),_:1}),In,An,Ln])}}};export{$n as default};
