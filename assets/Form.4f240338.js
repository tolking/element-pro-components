import{u}from"./index.e5437f2a.js";import{F as k,a as i,b as r,c as d,d as g,e as m,f,g as y,h as x,i as h,j as b,_ as v}from"./typescript.2451e913.js";import{H as c,o as _,B as w,a,M as s,L as n,aw as e,a4 as t}from"./modules-vue.3dfb25a8.js";import"./modules-element-plus.b561c7ee.js";const E={class:"markdown-body"},F=e('<h1 id="form" tabindex="-1">Form <a class="header-anchor" href="#form" aria-hidden="true">#</a></h1><blockquote><p>\u5C01\u88C5\u8868\u5355\u7EC4\u4EF6\u5B9E\u73B0\u901A\u8FC7\u914D\u7F6E\u52A8\u6001\u751F\u6210\u8868\u5355</p></blockquote><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u9002\u7528\u4E8E\u53EF\u4EE5\u901A\u8FC7 <code>v-model</code> \u7ED1\u5B9A\u503C\u7684\u4EFB\u610F\u7EC4\u4EF6\uFF0C\u4F8B\u5982\uFF1A</p><ul><li>\u652F\u6301 <code>el-input</code> <code>el-switch</code> \u2026</li><li>\u4E0D\u652F\u6301 <code>el-upload</code> \u2026 (\u9700\u8981\u5C06\u76F8\u5173\u7EC4\u4EF6\u91CD\u65B0\u5C01\u88C5\u4E3A\u652F\u6301 <code>v-model</code> \u7684\u7EC4\u4EF6)</li></ul></div><h2 id="%E4%BD%BF%E7%94%A8" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#%E4%BD%BF%E7%94%A8" aria-hidden="true">#</a></h2><h3 id="%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" aria-hidden="true">#</a></h3><p>\u5F53 columns \u7ED1\u5B9A\u7684\u662F\u4E00\u4E2A\u5177\u6709\u54CD\u5E94\u5F0F\u7684\u6570\u7EC4\u65F6\uFF0C\u6570\u7EC4\u7684\u53D8\u52A8\u4F1A\u5F71\u54CD\u8868\u5355\u53D8\u52A8\uFF08\u53CA\u52A8\u6001\u8868\u5355\uFF09\u3002\u5982\u679C\u4E0D\u9700\u8981\u52A8\u6001\u8868\u5355\u63A8\u8350\u7ED1\u5B9A\u4E00\u4E2A\u666E\u901A\u6570\u7EC4</p>',6),A=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])],-1),B=n("p",null,"@/demo/Form/base.vue",-1),q=n("h3",{id:"%E5%B5%8C%E5%A5%97%E9%94%AE%E5%80%BC",tabindex:"-1"},[t("\u5D4C\u5957\u952E\u503C "),n("a",{class:"header-anchor",href:"#%E5%B5%8C%E5%A5%97%E9%94%AE%E5%80%BC","aria-hidden":"true"},"#")],-1),C=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])],-1),D=n("p",null,"@/demo/Form/nested.vue",-1),j=n("h3",{id:"%E6%8C%87%E5%AE%9A%E5%AF%B9%E5%BA%94%E7%9A%84%E7%BB%84%E4%BB%B6",tabindex:"-1"},[t("\u6307\u5B9A\u5BF9\u5E94\u7684\u7EC4\u4EF6 "),n("a",{class:"header-anchor",href:"#%E6%8C%87%E5%AE%9A%E5%AF%B9%E5%BA%94%E7%9A%84%E7%BB%84%E4%BB%B6","aria-hidden":"true"},"#")],-1),V=t("\u901A\u8FC7 columns \u7684 "),P=n("code",null,"component",-1),S=t(" \u5B9A\u4E49\u8BE5\u9879\u751F\u6210\u4EC0\u4E48\u7EC4\u4EF6\uFF0C\u8981\u6C42\u5BF9\u5E94\u7EC4\u4EF6\u53EF\u4EE5\u901A\u8FC7 "),N=n("code",null,"v-model",-1),T=t(" \u7ED1\u5B9A\u503C\u3002\u901A\u8FC7 "),R=n("code",null,"props",-1),L=t(" \u53EF\u4EE5\u5411\u7EC4\u4EF6\u4E2D\u4F20\u503C\uFF0C\u901A\u8FC7 "),I=n("code",null,"props",-1),M=t(" \u91CC\u9762\u7684 "),z=n("code",null,"slots",-1),G=t(" \u53EF\u4EE5\u5411\u7EC4\u4EF6\u4F20\u9012\u7B80\u5355\u7684 "),U=t("\u6E32\u67D3\u51FD\u6570"),W=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])],-1),H=n("p",null,"@/demo/Form/component.vue",-1),$=n("h3",{id:"%E4%BD%BF%E7%94%A8%E5%B1%80%E9%83%A8%E7%BB%84%E4%BB%B6",tabindex:"-1"},[t("\u4F7F\u7528\u5C40\u90E8\u7EC4\u4EF6 "),n("a",{class:"header-anchor",href:"#%E4%BD%BF%E7%94%A8%E5%B1%80%E9%83%A8%E7%BB%84%E4%BB%B6","aria-hidden":"true"},"#")],-1),J=n("p",null,[t("\u901A\u8FC7 "),n("code",null,"component"),t(" \u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F20\u5165\u5C40\u90E8\u7EC4\u4EF6 (\u8BF7\u4F7F\u7528 "),n("code",null,"markRaw"),t(" \u6807\u8BB0)")],-1),O=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])],-1),K=n("p",null,"@/demo/Form/local.vue",-1),Q=n("h3",{id:"%E4%BD%BF%E7%94%A8%E6%8F%92%E6%A7%BD",tabindex:"-1"},[t("\u4F7F\u7528\u63D2\u69FD "),n("a",{class:"header-anchor",href:"#%E4%BD%BF%E7%94%A8%E6%8F%92%E6%A7%BD","aria-hidden":"true"},"#")],-1),X=n("p",null,[t("\u76F4\u63A5\u5728\u6A21\u7248\u4E2D\u589E\u52A0\u5E26 "),n("code",null,"[prop]"),t(" \u76F8\u5173\u7684\u63D2\u69FD\u5373\u53EF\u4F7F\u7528\u63D2\u69FD\u3002\u867D\u7136\u5728\u542F\u7528\u63D2\u69FD\u540E\u53EF\u4EE5\u901A\u8FC7 "),n("code",null,'v-model="form.slot"'),t(" \u8FD9\u79CD\u65B9\u5F0F\u7ED1\u5B9A\u503C\uFF0C\u4F46\u66F4\u63A8\u8350\u4F7F\u7528 "),n("code",null,"value"),t(" \u4E0E "),n("code",null,"setValue")],-1),Y=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Plus"),n("span",{class:"token punctuation"},","),t(" PictureRounded "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@element-plus/icons'"),t(`

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
`)])],-1),Z=n("p",null,"@/demo/Form/slots.vue",-1),nn=n("h3",{id:"%E9%85%8D%E7%BD%AE%E6%8C%89%E9%92%AE",tabindex:"-1"},[t("\u914D\u7F6E\u6309\u94AE "),n("a",{class:"header-anchor",href:"#%E9%85%8D%E7%BD%AE%E6%8C%89%E9%92%AE","aria-hidden":"true"},"#")],-1),tn=n("p",null,"\u901A\u8FC7 menu \u914D\u7F6E\u6309\u94AE\u663E\u793A\u3001\u6587\u5B57\u3001\u53C2\u6570",-1),sn=t("\u6309\u94AE\u4E5F\u53EF\u4EE5\u901A\u8FC7 "),an=t("\u5168\u5C40\u914D\u7F6E"),on=t(" \u6216\u8005 "),en=t("\u56FD\u9645\u5316"),pn=t(" \u6765\u914D\u7F6E"),cn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])],-1),ln=n("p",null,"@/demo/Form/menu.vue",-1),un=n("h3",{id:"%E9%85%8D%E7%BD%AE%E5%AD%90%E8%A1%A8%E5%8D%95",tabindex:"-1"},[t("\u914D\u7F6E\u5B50\u8868\u5355 "),n("a",{class:"header-anchor",href:"#%E9%85%8D%E7%BD%AE%E5%AD%90%E8%A1%A8%E5%8D%95","aria-hidden":"true"},"#")],-1),kn=n("p",null,[t("\u901A\u8FC7 columns \u7684 "),n("code",null,"children"),t(" \u914D\u7F6E\u5B50\u8868\u5355\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u914D\u7F6E\u591A\u5C42\u7684 "),n("code",null,"children"),t(" \u7ED3\u6784\u5B9E\u73B0\u53CD\u590D\u5957\u5A03")],-1),rn=n("p",null,[t("\u901A\u8FC7 "),n("code",null,"max"),t(" \u9650\u5236\u5B50\u8868\u5355\u7684\u6700\u5927\u6570\u91CF")],-1),dn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])],-1),gn=n("p",null,"@/demo/Form/sub.vue",-1),mn=n("h3",{id:"%E8%A1%A8%E5%8D%95%E9%AA%8C%E8%AF%81",tabindex:"-1"},[t("\u8868\u5355\u9A8C\u8BC1 "),n("a",{class:"header-anchor",href:"#%E8%A1%A8%E5%8D%95%E9%AA%8C%E8%AF%81","aria-hidden":"true"},"#")],-1),fn=n("p",null,[t("\u50CF el-form \u4E00\u6837\u53EF\u4EE5\u901A\u8FC7 "),n("code",null,"rules"),t(" \u914D\u7F6E\u8868\u5355\u9A8C\u8BC1\u3002\u5BF9\u4E8E\u5B50\u8868\u5355\u66F4\u63A8\u8350\u4F7F\u7528 columns \u91CC\u9762\u7684 "),n("code",null,"rules"),t(" \u5B57\u6BB5\u5B9E\u73B0\u9A8C\u8BC1\u3002\u5426\u5219\u4F60\u9700\u8981\u901A\u8FC7 "),n("code",null,"${\u7236\u7EA7\u7684 prop}.${\u5F53\u524D\u9879\u7684 index}.${\u5F53\u524D\u7684 prop}"),t(" \u8FD9\u79CD\u65B9\u5F0F\u914D\u7F6E\u5B50\u8868\u5355\u7684\u9A8C\u8BC1")],-1),yn=n("p",null,"submit \u65B9\u6CD5\u7B2C\u4E8C\u4E2A\u53C2\u6570\u8868\u793A\u662F\u5426\u901A\u8FC7\u8868\u5355\u9A8C\u8BC1",-1),xn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])],-1),hn=n("p",null,"@/demo/Form/rules.vue",-1),bn=n("h3",{id:"%E5%8A%A8%E6%80%81%E8%A1%A8%E5%8D%95",tabindex:"-1"},[t("\u52A8\u6001\u8868\u5355 "),n("a",{class:"header-anchor",href:"#%E5%8A%A8%E6%80%81%E8%A1%A8%E5%8D%95","aria-hidden":"true"},"#")],-1),vn=n("p",null,[t("\u5982\u679C\u4F20\u5165\u7684 "),n("code",null,"columns"),t(" \u662F\u4E00\u4E2A\u54CD\u5E94\u6027\u6570\u636E\uFF0C\u52A8\u6001\u7684\u4FEE\u6539 columns \u8868\u5355\u4E5F\u4F1A\u968F\u4E4B\u6539\u53D8")],-1),_n=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])],-1),wn=n("p",null,"@/demo/Form/dynamically.vue",-1),En=e('<h3 id="%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80" tabindex="-1">\u6805\u683C\u5E03\u5C40 <a class="header-anchor" href="#%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80" aria-hidden="true">#</a></h3><p>\u4E0E\u4F7F\u7528 <code>el-row</code> \u548C <code>el-col</code> \u7EC4\u4EF6\u76F8\u540C (<code>el-row</code> \u5BF9\u5E94 <code>pro-form</code>\uFF1B<code>el-col</code> \u5BF9\u5E94 <code>columns</code>)\uFF0C\u901A\u8FC7\u76F8\u5173\u914D\u7F6E\u53EF\u4EE5\u81EA\u7531\u5730\u7EC4\u5408\u5E03\u5C40\u3002<strong>\u5F53 <code>inline</code> \u4E3A <code>true</code> \u65F6\u65E0\u6548</strong></p>',2),Fn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])],-1),An=n("p",null,"@/demo/Form/layout.vue",-1),Bn=n("h3",{id:"%E5%BC%82%E6%AD%A5%E8%A1%A8%E5%8D%95",tabindex:"-1"},[t("\u5F02\u6B65\u8868\u5355 "),n("a",{class:"header-anchor",href:"#%E5%BC%82%E6%AD%A5%E8%A1%A8%E5%8D%95","aria-hidden":"true"},"#")],-1),qn=n("p",null,"\u60F3\u8981\u5B9E\u73B0\u5F02\u6B65\u8868\u5355 columns \u5FC5\u987B\u7ED1\u5B9A\u4E00\u4E2A\u52A8\u6001\u6570\u7EC4",-1),Cn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])],-1),Dn=n("p",null,"@/demo/Form/async.vue",-1),jn=n("h3",{id:"typescript",tabindex:"-1"},[t("TypeScript "),n("a",{class:"header-anchor",href:"#typescript","aria-hidden":"true"},"#")],-1),Vn=n("p",null,[t("\u4ECE\u7EC4\u4EF6\u5E93\u4E2D\u5F15\u7528\u7C7B\u578B IFormColumns \u7528\u6765\u8F85\u52A9\u7F16\u8F91 columns\uFF0C\u652F\u6301\u4F20\u5165\u4E00\u4E2A\u6CDB\u578B\u7528\u6765\u63A8\u65AD "),n("code",null,"prop"),t(" \u503C")],-1),Pn=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])],-1),Sn=n("p",null,"@/demo/Form/typescript.vue",-1),Nn=e('<h3 id="%E9%85%8D%E7%BD%AE" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#%E9%85%8D%E7%BD%AE" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u53EF\u9009\u503C</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">\u7ED1\u5B9A\u503C</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">\u8868\u5355\u914D\u7F6E\u53C2\u8003\u4E0B\u9762 <code>columns</code></td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">menu</td><td style="text-align:left;">\u6309\u94AE\u914D\u7F6E\u53C2\u8003\u4E0B\u9762 <code>menu</code></td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">rules</td><td style="text-align:left;">\u8868\u5355\u9A8C\u8BC1\u89C4\u5219</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">inline</td><td style="text-align:left;">\u884C\u5185\u8868\u5355\u6A21\u5F0F</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">label-position</td><td style="text-align:left;">\u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E\uFF0C\u5982\u679C\u503C\u4E3A left \u6216\u8005 right \u65F6\uFF0C\u5219\u9700\u8981\u8BBE\u7F6E <code>label-width</code></td><td style="text-align:left;">string</td><td style="text-align:left;">right / left / top</td><td style="text-align:left;">right</td></tr><tr><td style="text-align:left;">label-width</td><td style="text-align:left;">\u8868\u5355\u57DF\u6807\u7B7E\u7684\u5BBD\u5EA6\uFF0C\u4F8B\u5982 \u201850px\u2019 \u6216 \u2018auto\u2019</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">label-suffix</td><td style="text-align:left;">\u8868\u5355\u57DF\u6807\u7B7E\u7684\u540E\u7F00</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">hide-required-asterisk</td><td style="text-align:left;">\u662F\u5426\u663E\u793A\u5FC5\u586B\u5B57\u6BB5\u7684\u6807\u7B7E\u65C1\u8FB9\u7684\u7EA2\u8272\u661F\u53F7</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">show-message</td><td style="text-align:left;">\u662F\u5426\u663E\u793A\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">inline-message</td><td style="text-align:left;">\u662F\u5426\u4EE5\u884C\u5185\u5F62\u5F0F\u5C55\u793A\u6821\u9A8C\u4FE1\u606F</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">status-icon</td><td style="text-align:left;">\u662F\u5426\u5728\u8F93\u5165\u6846\u4E2D\u663E\u793A\u6821\u9A8C\u7ED3\u679C\u53CD\u9988\u56FE\u6807</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">validate-on-rule-change</td><td style="text-align:left;">\u662F\u5426\u5728 <code>rules</code> \u5C5E\u6027\u6539\u53D8\u540E\u7ACB\u5373\u89E6\u53D1\u4E00\u6B21\u9A8C\u8BC1</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">\u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u5185\u7EC4\u4EF6\u7684\u5C3A\u5BF8</td><td style="text-align:left;">string</td><td style="text-align:left;">medium / small / mini</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">\u662F\u5426\u7981\u7528\u8BE5\u8868\u5355\u5185\u7684\u6240\u6709\u7EC4\u4EF6</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">gutter</td><td style="text-align:left;">\u6805\u683C\u95F4\u9694</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">justify</td><td style="text-align:left;">flex \u5E03\u5C40\u4E0B\u7684\u6C34\u5E73\u6392\u5217\u65B9\u5F0F</td><td style="text-align:left;">string</td><td style="text-align:left;">start / end / center / space-around / space-between</td><td style="text-align:left;">start</td></tr><tr><td style="text-align:left;">align</td><td style="text-align:left;">flex \u5E03\u5C40\u4E0B\u7684\u5782\u76F4\u6392\u5217\u65B9\u5F0F</td><td style="text-align:left;">string</td><td style="text-align:left;">top / middle / bottom</td><td style="text-align:left;">top</td></tr></tbody></table><h4 id="columns-%E7%9A%84%E5%8F%82%E6%95%B0" tabindex="-1">columns \u7684\u53C2\u6570 <a class="header-anchor" href="#columns-%E7%9A%84%E5%8F%82%E6%95%B0" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u53EF\u9009\u503C</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">prop</td><td style="text-align:left;">v-model \u7ED1\u5B9A\u7684\u5B57\u6BB5\u540D (<strong>\u5FC5\u586B\uFF0C\u9700\u8981\u662F\u552F\u4E00\u503C</strong>)</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">label</td><td style="text-align:left;">\u6807\u7B7E\u6587\u672C</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">component</td><td style="text-align:left;">\u5F53\u524D\u9879\u5BF9\u5E94\u7684\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F20\u5165\u5C40\u90E8\u7EC4\u4EF6</td><td style="text-align:left;">string / Component</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">props</td><td style="text-align:left;">\u4F20\u9012\u7684\u5BF9\u5E94\u7684\u7EC4\u4EF6\u7684\u53C2\u6570</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">children</td><td style="text-align:left;">\u5B9E\u73B0\u5B50\u8868\u5355</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">max</td><td style="text-align:left;">\u4E0E children \u4E00\u8D77\u4F7F\u7528\uFF0C\u9650\u5236\u5B50\u8868\u5355\u7684\u6700\u5927\u6570\u91CF</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">labelWidth</td><td style="text-align:left;">\u8868\u5355\u57DF\u6807\u7B7E\u7684\u5BBD\u5EA6\uFF0C\u4F8B\u5982 \u201850px\u2019 \u6216 \u2018auto\u2019</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">required</td><td style="text-align:left;">\u662F\u5426\u5FC5\u586B\uFF0C\u5982\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4F1A\u6839\u636E\u6821\u9A8C\u89C4\u5219\u81EA\u52A8\u751F\u6210</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">rules</td><td style="text-align:left;">\u8868\u5355\u9A8C\u8BC1\u89C4\u5219</td><td style="text-align:left;">object / array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">error</td><td style="text-align:left;">\u8868\u5355\u57DF\u9A8C\u8BC1\u9519\u8BEF\u4FE1\u606F, \u8BBE\u7F6E\u8BE5\u503C\u4F1A\u4F7F\u8868\u5355\u9A8C\u8BC1\u72B6\u6001\u53D8\u4E3A<code>error</code>\uFF0C\u5E76\u663E\u793A\u8BE5\u9519\u8BEF\u4FE1\u606F</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">showMessage</td><td style="text-align:left;">\u662F\u5426\u663E\u793A\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">inlineMessage</td><td style="text-align:left;">\u4EE5\u884C\u5185\u5F62\u5F0F\u5C55\u793A\u6821\u9A8C\u4FE1\u606F</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">\u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u57DF\u4E0B\u7EC4\u4EF6\u7684\u5C3A\u5BF8</td><td style="text-align:left;">string</td><td style="text-align:left;">medium / small / mini</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">span</td><td style="text-align:left;">\u6805\u683C\u5360\u636E\u7684\u5217\u6570</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">24</td></tr><tr><td style="text-align:left;">offset</td><td style="text-align:left;">\u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">push</td><td style="text-align:left;">\u6805\u683C\u5411\u53F3\u79FB\u52A8\u683C\u6570</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">pull</td><td style="text-align:left;">\u6805\u683C\u5411\u5DE6\u79FB\u52A8\u683C\u6570</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">xs</td><td style="text-align:left;"><code>&lt;768px</code> \u54CD\u5E94\u5F0F\u6805\u683C\u6570\u6216\u8005\u6805\u683C\u5C5E\u6027\u5BF9\u8C61</td><td style="text-align:left;">number / object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">sm</td><td style="text-align:left;"><code>\u2265768px</code> \u54CD\u5E94\u5F0F\u6805\u683C\u6570\u6216\u8005\u6805\u683C\u5C5E\u6027\u5BF9\u8C61</td><td style="text-align:left;">number / object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">md</td><td style="text-align:left;"><code>\u2265992px</code> \u54CD\u5E94\u5F0F\u6805\u683C\u6570\u6216\u8005\u6805\u683C\u5C5E\u6027\u5BF9\u8C61</td><td style="text-align:left;">number / object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">lg</td><td style="text-align:left;"><code>\u22651200px</code> \u54CD\u5E94\u5F0F\u6805\u683C\u6570\u6216\u8005\u6805\u683C\u5C5E\u6027\u5BF9\u8C61</td><td style="text-align:left;">number / object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">xl</td><td style="text-align:left;"><code>\u22651920px</code> \u54CD\u5E94\u5F0F\u6805\u683C\u6570\u6216\u8005\u6805\u683C\u5C5E\u6027\u5BF9\u8C61</td><td style="text-align:left;">number / object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr></tbody></table>',4),Tn=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"\u5173\u4E8E props"),n("p",null,"props \u7684\u5C5E\u6027\u5C06\u5168\u90E8\u4F20\u9012\u7ED9 component \u6307\u5B9A\u7684\u7EC4\u4EF6"),n("ul",null,[n("li",null,"\u5BF9\u4E8E\u5B58\u5728\u8FDE\u5B57\u7B26\u7684\u5C5E\u6027\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5B57\u7B26\u4E32\u5305\u88F9\u6216\u8005\u8F6C\u6362\u4E3A\u9A7C\u5CF0\u7ED3\u6784"),n("li",null,[t("\u901A\u8FC7 "),n("code",null,"slots"),t(" \u53EF\u4EE5\u5411\u7EC4\u4EF6\u4F20\u9012\u7B80\u5355\u7684"),n("a",{href:"https://v3.cn.vuejs.org/guide/render-function.html"},"\u6E32\u67D3\u51FD\u6570")]),n("li",null,[n("strong",null,[t("\u5BF9\u4E8E\u4E8B\u4EF6\u9700\u8981\u901A\u8FC7 "),n("code",null,"on[Event]"),t(" \u9A7C\u5CF0\u8FD9\u79CD\u5F62\u5F0F\u7ED1\u5B9A\u3002\u5982\uFF1A"),n("code",null,"change"),t(" -> "),n("code",null,"onChange"),t(", "),n("code",null,"input"),t(" -> "),n("code",null,"onInput")])])]),n("div",{class:"language-js"},[n("pre",null,[n("code",{"v-pre":""},[t("props"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
  clearable`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token string"},"'prefix-icon'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-icon-search'"),n("span",{class:"token punctuation"},","),t(`
  suffixIcon`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-icon-date'"),n("span",{class:"token punctuation"},","),t(`
  slots`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function-variable function"},"prefix"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'i'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(" className"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'el-input__icon el-icon-search'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token function-variable function"},"append"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token string"},"'\u641C\u7D22'"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function-variable function"},"onChange"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token parameter"},"e"),t(),n("span",{class:"token operator"},"=>"),t(" console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])])])],-1),Rn=e('<h4 id="menu-%E7%9A%84%E5%8F%82%E6%95%B0" tabindex="-1">menu \u7684\u53C2\u6570 <a class="header-anchor" href="#menu-%E7%9A%84%E5%8F%82%E6%95%B0" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u53EF\u9009\u503C</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">submit</td><td style="text-align:left;">\u662F\u5426\u663E\u793A submit \u6309\u94AE</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">submitText</td><td style="text-align:left;">submit \u6309\u94AE\u663E\u793A\u7684\u6587\u5B57</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">Submit</td></tr><tr><td style="text-align:left;">submitProps</td><td style="text-align:left;">submit \u6309\u94AE\u7684\u914D\u7F6E\uFF0C\u53C2\u8003 el-button</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">{ type: \u2018primary\u2019 }</td></tr><tr><td style="text-align:left;">reset</td><td style="text-align:left;">\u662F\u5426\u663E\u793A reset \u6309\u94AE</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">resetText</td><td style="text-align:left;">\u662F\u5426\u663E\u793A reset \u6309\u94AE\u663E\u793A\u7684\u6587\u5B57</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">Reset</td></tr><tr><td style="text-align:left;">resetProps</td><td style="text-align:left;">reset \u6309\u94AE\u7684\u914D\u7F6E\uFF0C\u53C2\u8003 el-button</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr></tbody></table><h3 id="%E4%BA%8B%E4%BB%B6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#%E4%BA%8B%E4%BB%B6" aria-hidden="true">#</a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>submit</td><td>submit \u88AB\u70B9\u51FB\u540E\u89E6\u53D1</td><td>done, isValid, invalidFields</td></tr><tr><td>reset</td><td>reset \u6309\u94AE\u88AB\u70B9\u51FB\u540E\u89E6\u53D1</td><td>-</td></tr><tr><td>validate</td><td>\u4EFB\u4E00\u8868\u5355\u9879\u88AB\u6821\u9A8C\u540E\u89E6\u53D1</td><td>\u88AB\u6821\u9A8C\u7684\u8868\u5355\u9879 prop \u503C, isValid, invalidFields</td></tr></tbody></table><h3 id="%E6%96%B9%E6%B3%95" tabindex="-1">\u65B9\u6CD5 <a class="header-anchor" href="#%E6%96%B9%E6%B3%95" aria-hidden="true">#</a></h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>validate</td><td>\u5BF9\u6574\u4E2A\u8868\u5355\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5\uFF0C\u53C2\u6570\u4E3A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002\u8BE5\u56DE\u8C03\u51FD\u6570\u4F1A\u5728\u6821\u9A8C\u7ED3\u675F\u540E\u88AB\u8C03\u7528\uFF0C\u5E76\u4F20\u5165\u4E24\u4E2A\u53C2\u6570\uFF1A\u662F\u5426\u6821\u9A8C\u6210\u529F\u548C\u672A\u901A\u8FC7\u6821\u9A8C\u7684\u5B57\u6BB5\u3002\u82E5\u4E0D\u4F20\u5165\u56DE\u8C03\u51FD\u6570\uFF0C\u5219\u4F1A\u8FD4\u56DE\u4E00\u4E2A promise</td><td>Function(callback: Function(boolean, object))</td></tr><tr><td>validateField</td><td>\u5BF9\u90E8\u5206\u8868\u5355\u5B57\u6BB5\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5</td><td>Function(props: array | string, callback: Function(errorMessage: string))</td></tr><tr><td>resetFields</td><td>\u5BF9\u6574\u4E2A\u8868\u5355\u8FDB\u884C\u91CD\u7F6E\uFF0C\u5C06\u6240\u6709\u5B57\u6BB5\u503C\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C\u5E76\u79FB\u9664\u6821\u9A8C\u7ED3\u679C</td><td>-</td></tr><tr><td>clearValidate</td><td>\u79FB\u9664\u8868\u5355\u9879\u7684\u6821\u9A8C\u7ED3\u679C\u3002\u4F20\u5165\u5F85\u79FB\u9664\u7684\u8868\u5355\u9879\u7684 prop \u5C5E\u6027\u6216\u8005 prop \u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u5982\u4E0D\u4F20\u5219\u79FB\u9664\u6574\u4E2A\u8868\u5355\u7684\u6821\u9A8C\u7ED3\u679C</td><td>Function(props: array | string)</td></tr></tbody></table><h3 id="%E6%8F%92%E6%A7%BD" tabindex="-1">\u63D2\u69FD <a class="header-anchor" href="#%E6%8F%92%E6%A7%BD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">name</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">-</td><td style="text-align:left;">\u5728\u5E95\u90E8\u83DC\u5355\u524D\u63D2\u5165\u7684\u4EFB\u610F\u5185\u5BB9</td></tr><tr><td style="text-align:left;">menu-left</td><td style="text-align:left;">\u8868\u5355\u5E95\u90E8\u6309\u94AE\u5DE6\u4FA7\uFF0C\u53C2\u6570\u4E3A { loading }</td></tr><tr><td style="text-align:left;">menu-right</td><td style="text-align:left;">\u8868\u5355\u5E95\u90E8\u6309\u94AE\u53F3\u4FA7\uFF0C\u53C2\u6570\u4E3A { loading }</td></tr><tr><td style="text-align:left;">[prop]</td><td style="text-align:left;">\u5F53\u524D\u8FD9\u9879\u7684 Form Item \u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { item, value, setValue }</td></tr><tr><td style="text-align:left;">[prop]-label</td><td style="text-align:left;">\u5F53\u524D\u8FD9\u9879\u7684\u6807\u7B7E\u6587\u672C\u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { item }</td></tr><tr><td style="text-align:left;">[prop]-error</td><td style="text-align:left;">\u5F53\u524D\u8FD9\u9879\u7684\u81EA\u5B9A\u4E49\u8868\u5355\u6821\u9A8C\u4FE1\u606F\u7684\u663E\u793A\u65B9\u5F0F\uFF0C\u53C2\u6570\u4E3A { error, item }</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>[prop] \u4E3A columns \u4E2D\u5B9A\u4E49\u7684 prop</p></div>',9),Jn={setup(Ln,{expose:l}){return l({frontmatter:{title:"Form",meta:[{name:"description",content:"\u5C01\u88C5\u8868\u5355\u7EC4\u4EF6\u5B9E\u73B0\u901A\u8FC7\u914D\u7F6E\u52A8\u6001\u751F\u6210\u8868\u5355"},{property:"og:title",content:"Form"}]}}),u({title:"Form",meta:[{name:"description",content:"\u5C01\u88C5\u8868\u5355\u7EC4\u4EF6\u5B9E\u73B0\u901A\u8FC7\u914D\u7F6E\u52A8\u6001\u751F\u6210\u8868\u5355"},{property:"og:title",content:"Form"}]}),(zn,Gn)=>{const o=c("pro-code"),p=c("pro-link");return _(),w("div",E,[F,a(o,null,{source:s(()=>[a(k)]),code:s(()=>[A]),default:s(()=>[B]),_:1}),q,a(o,null,{source:s(()=>[a(i)]),code:s(()=>[C]),default:s(()=>[D]),_:1}),j,n("p",null,[V,P,S,N,T,R,L,I,M,z,G,a(p,{to:"https://v3.cn.vuejs.org/guide/render-function.html"},{default:s(()=>[U]),_:1})]),a(o,null,{source:s(()=>[a(r)]),code:s(()=>[W]),default:s(()=>[H]),_:1}),$,J,a(o,null,{source:s(()=>[a(d)]),code:s(()=>[O]),default:s(()=>[K]),_:1}),Q,X,a(o,null,{source:s(()=>[a(g)]),code:s(()=>[Y]),default:s(()=>[Z]),_:1}),nn,tn,n("p",null,[sn,a(p,{to:"/zh-CN/guide/#\u5168\u5C40\u914D\u7F6E"},{default:s(()=>[an]),_:1}),on,a(p,{to:"/zh-CN/guide/i18n"},{default:s(()=>[en]),_:1}),pn]),a(o,null,{source:s(()=>[a(m)]),code:s(()=>[cn]),default:s(()=>[ln]),_:1}),un,kn,a(o,null,{source:s(()=>[a(f)]),description:s(()=>[rn]),code:s(()=>[dn]),default:s(()=>[gn]),_:1}),mn,fn,a(o,null,{source:s(()=>[a(y)]),description:s(()=>[yn]),code:s(()=>[xn]),default:s(()=>[hn]),_:1}),bn,vn,a(o,null,{source:s(()=>[a(x)]),code:s(()=>[_n]),default:s(()=>[wn]),_:1}),En,a(o,null,{source:s(()=>[a(h)]),code:s(()=>[Fn]),default:s(()=>[An]),_:1}),Bn,qn,a(o,null,{source:s(()=>[a(b)]),code:s(()=>[Cn]),default:s(()=>[Dn]),_:1}),jn,Vn,a(o,null,{source:s(()=>[a(v)]),code:s(()=>[Pn]),default:s(()=>[Sn]),_:1}),Nn,Tn,Rn])}}};export{Jn as default};
