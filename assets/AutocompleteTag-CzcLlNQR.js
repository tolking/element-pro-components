import{u as i}from"./vue.8fc199ce-BMt5wyEV.js";import{A as p}from"./base-P0fKEjmy.js";import{r as c,o as r,a as u,f as l,e as s,w as a,b as t,d as e}from"./index-By7wvJ5L.js";const g={class:"markdown-body"},b="AutocompleteTag",v=[{name:"description",content:"基于 `ElTag` `ElAutocomplete` 的输入多个标签的输入框"},{property:"og:title",content:"AutocompleteTag"},{name:"twitter:title",content:"AutocompleteTag"}],C={__name:"AutocompleteTag",setup(f,{expose:o}){return o({frontmatter:{title:"AutocompleteTag",meta:[{name:"description",content:"基于 `ElTag` `ElAutocomplete` 的输入多个标签的输入框"},{property:"og:title",content:"AutocompleteTag"},{name:"twitter:title",content:"AutocompleteTag"}]}}),i({title:"AutocompleteTag",meta:[{name:"description",content:"基于 `ElTag` `ElAutocomplete` 的输入多个标签的输入框"},{property:"og:title",content:"AutocompleteTag"},{name:"twitter:title",content:"AutocompleteTag"}]}),(x,n)=>{const d=c("pro-code");return r(),u("div",g,[n[2]||(n[2]=l('<h1 id="autocompletetag" tabindex="-1">AutocompleteTag <a class="header-anchor md-link" href="#autocompletetag" aria-hidden="true">#</a></h1><blockquote><p>基于 <code>ElTag</code> <code>ElAutocomplete</code> 的输入多个标签的输入框</p></blockquote><h2 id="使用" tabindex="-1">使用 <a class="header-anchor md-link" href="#使用" aria-hidden="true">#</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor md-link" href="#基础用法" aria-hidden="true">#</a></h3><p><code>pro-autocomplete-tag</code> 提供输入建议，支持 autocomplete 的大部分配置</p>',5)),s(d,{link:"@/demo/AutocompleteTag/base.vue",content:"%3Ctemplate%3E%0A%20%20%3Cpro-autocomplete-tag%0A%20%20%20%20v-model%3D%22inputTags%22%0A%20%20%20%20%3Afetch-suggestions%3D%22querySearch%22%0A%20%20%20%20placeholder%3D%22Please%20click%20the%20space%20button%20after%20input%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20inputTags%20%3D%20ref(%5B%5D)%0A%20%20%20%20const%20list%20%3D%20%5B%0A%20%20%20%20%20%20%7B%20value%3A%20'Go'%2C%20tag%3A%20'go'%20%7D%2C%0A%20%20%20%20%20%20%7B%20value%3A%20'JavaScript'%2C%20tag%3A%20'javascript'%20%7D%2C%0A%20%20%20%20%20%20%7B%20value%3A%20'Python'%2C%20tag%3A%20'python'%20%7D%2C%0A%20%20%20%20%5D%0A%0A%20%20%20%20function%20querySearch(queryString%2C%20cb)%20%7B%0A%20%20%20%20%20%20cb(%0A%20%20%20%20%20%20%20%20queryString%0A%20%20%20%20%20%20%20%20%20%20%3F%20list.filter((i)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20i.value.indexOf(queryString.toLowerCase())%20%3D%3D%3D%200%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%20%20%3A%20list%2C%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20inputTags%2C%0A%20%20%20%20%20%20querySearch%2C%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A"},{source:a(()=>[s(p)]),code:a(()=>n[0]||(n[0]=[t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("pro-autocomplete-tag")]),e(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("inputTags"),t("span",{class:"token punctuation"},'"')]),e(`
    `),t("span",{class:"token attr-name"},":fetch-suggestions"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("querySearch"),t("span",{class:"token punctuation"},'"')]),e(`
    `),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("Please click the space button after input"),t("span",{class:"token punctuation"},'"')]),e(`
  `),t("span",{class:"token punctuation"},"/>")]),e(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[e(`
`),t("span",{class:"token keyword"},"import"),e(),t("span",{class:"token punctuation"},"{"),e(" defineComponent"),t("span",{class:"token punctuation"},","),e(" ref "),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"from"),e(),t("span",{class:"token string"},"'vue'"),e(`

`),t("span",{class:"token keyword"},"export"),e(),t("span",{class:"token keyword"},"default"),e(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token keyword"},"const"),e(" inputTags "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),e(`
    `),t("span",{class:"token keyword"},"const"),e(" list "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"["),e(`
      `),t("span",{class:"token punctuation"},"{"),e(),t("span",{class:"token literal-property property"},"value"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"'Go'"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token literal-property property"},"tag"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"'go'"),e(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
      `),t("span",{class:"token punctuation"},"{"),e(),t("span",{class:"token literal-property property"},"value"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"'JavaScript'"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token literal-property property"},"tag"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"'javascript'"),e(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
      `),t("span",{class:"token punctuation"},"{"),e(),t("span",{class:"token literal-property property"},"value"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"'Python'"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token literal-property property"},"tag"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"'python'"),e(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token punctuation"},"]"),e(`

    `),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token function"},"querySearch"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[e("queryString"),t("span",{class:"token punctuation"},","),e(" cb")]),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
      `),t("span",{class:"token function"},"cb"),t("span",{class:"token punctuation"},"("),e(`
        queryString
          `),t("span",{class:"token operator"},"?"),e(" list"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"filter"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"i"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"=>"),e(),t("span",{class:"token punctuation"},"{"),e(`
              `),t("span",{class:"token keyword"},"return"),e(" i"),t("span",{class:"token punctuation"},"."),e("value"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"indexOf"),t("span",{class:"token punctuation"},"("),e("queryString"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"toLowerCase"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"==="),e(),t("span",{class:"token number"},"0"),e(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),e(`
          `),t("span",{class:"token operator"},":"),e(" list"),t("span",{class:"token punctuation"},","),e(`
      `),t("span",{class:"token punctuation"},")"),e(`
    `),t("span",{class:"token punctuation"},"}"),e(`

    `),t("span",{class:"token keyword"},"return"),e(),t("span",{class:"token punctuation"},"{"),e(`
      inputTags`),t("span",{class:"token punctuation"},","),e(`
      querySearch`),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token punctuation"},"}"),e(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),e(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("script")]),t("span",{class:"token punctuation"},">")]),e(`
`)])],-1)])),default:a(()=>[n[1]||(n[1]=t("p",null,"@/demo/AutocompleteTag/base.vue",-1))]),_:1}),n[3]||(n[3]=l('<h3 id="配置" tabindex="-1">配置 <a class="header-anchor md-link" href="#配置" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">可选值</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">绑定值</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">trigger</td><td style="text-align:left;">触发输入按键</td><td style="text-align:left;">string</td><td style="text-align:left;">space / enter</td><td style="text-align:left;">enter</td></tr><tr><td style="text-align:left;">max</td><td style="text-align:left;">可输入的最大数量</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">尺寸</td><td style="text-align:left;">string</td><td style="text-align:left;">large / default /small</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">tag 类型</td><td style="text-align:left;">string</td><td style="text-align:left;">success / info / warning / danger</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">hit</td><td style="text-align:left;">tag 是否有边框描边</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">color</td><td style="text-align:left;">tag 背景色</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">effect</td><td style="text-align:left;">tag 主题</td><td style="text-align:left;">string</td><td style="text-align:left;">dark / light / plain</td><td style="text-align:left;">light</td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;">输入框占位文本</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">禁用</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">value-key</td><td style="text-align:left;">输入建议对象中用于显示的键名</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">value</td></tr><tr><td style="text-align:left;">debounce</td><td style="text-align:left;">获取输入建议的去抖延时</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">300</td></tr><tr><td style="text-align:left;">placement</td><td style="text-align:left;">菜单弹出位置</td><td style="text-align:left;">string</td><td style="text-align:left;">top / top-start / top-end / bottom / bottom-start / bottom-end</td><td style="text-align:left;">bottom-start</td></tr><tr><td style="text-align:left;">fetch-suggestions</td><td style="text-align:left;">返回输入建议的方法</td><td style="text-align:left;">Function(queryString, callback)</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">popper-class</td><td style="text-align:left;">Autocomplete 下拉列表的类名</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">trigger-on-focus</td><td style="text-align:left;">是否在输入框 focus 时显示建议列表</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;">原生属性</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">select-when-unmatched</td><td style="text-align:left;">按下回车是否触发 <code>select</code> 事件</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">label</td><td style="text-align:left;">输入框关联的 label 文字</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">prefix-icon</td><td style="text-align:left;">输入框头部图标</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">suffix-icon</td><td style="text-align:left;">输入框尾部图标</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">hide-loading</td><td style="text-align:left;">是否隐藏远程加载时的加载图标</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">teleported</td><td style="text-align:left;">是否将下拉列表插入至 body 元素</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">highlight-first-item</td><td style="text-align:left;">是否默认突出显示远程搜索建议中的第一项</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">fit-input-width</td><td style="text-align:left;">下拉框的宽度是否与输入框相同</td><td style="text-align:left;">boolean</td><td style="text-align:left;">—</td><td style="text-align:left;">false</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor md-link" href="#事件" aria-hidden="true">#</a></h3><table><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>input</td><td>Input 值改变时触发</td><td>(value: string) =&gt; void</td></tr><tr><td>tag-add</td><td>新增 tag 时触发</td><td>(value: string) =&gt; void</td></tr><tr><td>tag-remove</td><td>关闭 tag 时触发</td><td>(value: string) =&gt; void</td></tr></tbody></table>',4))])}}};export{C as default,v as meta,b as title};