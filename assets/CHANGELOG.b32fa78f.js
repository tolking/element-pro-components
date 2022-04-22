import{u as a}from"./index.224a7fc0.js";import{o as t,c as n,a as e,a2 as l,aw as i}from"./modules-vue.f3a2bd49.js";import"./modules-element-plus.412af1fa.js";const r={class:"markdown-body"},d=e("h1",{id:"changelog",tabindex:"-1"},[l("Changelog "),e("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#")],-1),s=e("h2",{id:"1.1.0",tabindex:"-1"},[l("1.1.0 "),e("a",{class:"header-anchor",href:"#1.1.0","aria-hidden":"true"},"#")],-1),c=e("p",null,"breaking changes",-1),u=e("ul",null,[e("li",null,"adjust the implementation of breakpoints"),e("li",null,"build: modify the built name element-pro-components to index"),e("li",null,"Crud: adjust slots name")],-1),p=e("div",{class:"language-"},[e("pre",null,[e("code",{"v-pre":""},`[prop]-header -> table-[prop]-header
append -> table-append
expand -> table-expand
[prop]-error -> form-[prop]-error
[prop]-label -> form-[prop]-label
`)])],-1),h=i('<p>feat</p><ul><li>Crud: add view detail through Descriptions</li><li>Crud: add slots <code>detail</code> <code>detail-title</code> <code>detail-extra</code> <code>detail-[prop]</code> <code>detail-[prop]-label</code> <code>dialog-top</code> <code>dialog-bottom</code></li><li>Crud: add emits <code>add</code> <code>edit</code> <code>detail</code></li><li>Descriptions: add the default slot</li></ul><p>fix</p><ul><li>docs: route jump error when with hash</li><li>InputTag \uFF5C AutocompleteTag: tag can close when form is disabled</li><li>sync the CSS var change</li></ul><h2 id="1.0.1" tabindex="-1">1.0.1 <a class="header-anchor" href="#1.0.1" aria-hidden="true">#</a></h2><p>feat</p><ul><li>Layout: when the breakpoint is xs, close the sidebar when the menu is clicked</li><li>InputTag|AutocompleteTag: add emits <code>input</code> <code>tag-add</code> <code>tag-remove</code></li><li>docs: extended demo capabilities <ul><li>Edit on StackBlitz</li><li>View on Github</li><li>Copy code</li></ul></li></ul><p>fix</p><ul><li>TreeSelect: some config \u200B\u200Bare not converted</li><li>styles: add width for Card</li><li>fix: exports error</li></ul><h2 id="1.0.0" tabindex="-1">1.0.0 <a class="header-anchor" href="#1.0.0" aria-hidden="true">#</a></h2><p>breaking changes</p><ul><li>Table|Crud|Form: remove global config</li><li>Layout: reimplement the KeepAlive</li><li>Layout: remove the props <code>fixed-main</code></li><li>Layout: remove the slots <code>main-top</code> <code>main-bottom</code></li><li>InputTag: change the trigger default value <code>space</code> to <code>enter</code></li><li>Select|TreeSelect|Descriptions: rename the slot parameter data to item</li><li>rename <code>useScreenSize</code> to <code>useSharedBreakpoint</code></li></ul><p>feat</p><ul><li>Card: add a new component Card</li><li>Descriptions: add <code>render</code> and <code>renderLabel</code> in columns</li><li>Checkbox|Radio|Select|TreeSelect: cancel the conversion of the data</li><li>Layout: support transition form RouteMeta</li><li>Layout: add default slot to custom RouterView</li><li>Select|TreeSelect: sync props change from element-plus</li><li>add composables function <code>useBreakpointWidth</code> to get reactive Dialog width</li><li>sync css var change from element-plus</li><li>sync ComponentSize change from element-plus</li><li>styles: add cjs form SSR</li><li>styles: compressed CSS by cssnano</li></ul><p>fix</p><ul><li>Form: style error when used gutter</li><li>Layout: the KeepAlive and Transition do not work</li></ul><h3 id="migration-guide" tabindex="-1">migration guide <a class="header-anchor" href="#migration-guide" aria-hidden="true">#</a></h3><p>Compare <a href="https://github.com/tolking/element-pro-components/compare/v0.18.3...v1.0.0">0.18.3\u2026v1.0.0</a></p><p>To support both Transition and KeepAlive, the Layout component had to be refactored. The original internal card-like has been removed.</p><ul><li>It is recommended to use the new Card component to wrap your pages.</li><li>If you don\u2019t care about KeepAlive, you can use default slots to override RouterView to implement global Card wrapping, <a href="https://github.com/tolking/element-pro-components/blob/main/demo/Layout/router-view.vue">demo</a>.</li></ul><p>The global configuration has been removed, it is recommended to use related components to pass parameters or internationalization.</p><h2 id="0.18.3" tabindex="-1">0.18.3 <a class="header-anchor" href="#0.18.3" aria-hidden="true">#</a></h2><p>feat</p><ul><li>sync css var change from element-plus</li></ul><p>other</p><ul><li>type: optimization type</li></ul><h2 id="0.18.2" tabindex="-1">0.18.2 <a class="header-anchor" href="#0.18.2" aria-hidden="true">#</a></h2><p>breaking changes</p><ul><li>rename checkUrl to isURL</li></ul><p>feat</p><ul><li>InputTag|AutocompleteTag: sync the style chang</li></ul><p>other</p><ul><li>refacto: rewite props</li></ul><h2 id="0.18.1" tabindex="-1">0.18.1 <a class="header-anchor" href="#0.18.1" aria-hidden="true">#</a></h2><p>fix</p><ul><li>Descriptions: the columns error</li></ul><p>feat</p><ul><li>Descriptions: add props align and labelAlign</li></ul><p>other</p><ul><li>sync ComponentSize change from element</li><li>Tabs|Breadcrumb|Menu|Radio: import props from element-plus</li></ul><h2 id="0.18.0" tabindex="-1">0.18.0 <a class="header-anchor" href="#0.18.0" aria-hidden="true">#</a></h2><p>breaking changes</p><ul><li>updata element-plus to v2</li><li>Table|Crud: flat the props of pagination</li><li>Table|Crud: remove the <code>size-change</code> <code>current-change</code> <code>prev-click</code> <code>next-click</code> event, use <code>load</code> replace</li><li>change <code>popperAppendToBody</code> to <code>teleported</code></li></ul><p>fix</p><ul><li>InputTag: styles error</li></ul><p>feat</p><ul><li>Table|Crud: add <code>load</code> event</li><li>Form|Crud: add <code>scrollToField</code> for Methods</li><li>sync the props change from element-plus v2</li></ul><p>other</p><ul><li>type: optimized the type of emits</li></ul><h2 id="0.17.1" tabindex="-1">0.17.1 <a class="header-anchor" href="#0.17.1" aria-hidden="true">#</a></h2><p>fix</p><ul><li>Menu: nested route slot error</li><li>Menu: style error when collapse</li><li>Layout: styles error when mode=\u201Chorizontal\u201D</li></ul><h2 id="0.17.0" tabindex="-1">0.17.0 <a class="header-anchor" href="#0.17.0" aria-hidden="true">#</a></h2><p>breaking changes</p><ul><li>global configuration injection via components is no longer supported</li><li>Form|Table|Crud: remove InstallOptions</li></ul><p>fix</p><ul><li>Menu: style error when collapse</li></ul><p>feat</p><ul><li>sync components size chang from element-plus</li><li>optimize composable function</li></ul><p>other</p><ul><li>import some types from element-plus</li><li>optimized build</li></ul><h2 id="0.16.4" tabindex="-1">0.16.4 <a class="header-anchor" href="#0.16.4" aria-hidden="true">#</a></h2><p>feat</p><ul><li>add defineOptions</li><li>Form: add define function (<code>defineFormColumns</code> <code>defineFormMenuColumns</code> <code>defineFormSubmit</code>)</li><li>Table: add define function (<code>defineTableColumns</code> <code>defineTableMenuColumns</code> <code>defineTableSelectionColumns</code> <code>defineTableIndexColumns</code> <code>defineTableExpandColumns</code>)</li><li>Crud: add define function (<code>defineCrudColumns</code> <code>defineCrudMenuColumns</code> <code>defineCrudBeforeOpen</code> <code>defineCrudBeforeClose</code> <code>defineCrudSearch</code> <code>defineCrudSubmit</code>)</li><li>Descriptions: add define function (<code>defineDescriptionsColumns</code>)</li></ul><p>other</p><ul><li>type: add IsAny to check any</li></ul><h2 id="0.16.3" tabindex="-1">0.16.3 <a class="header-anchor" href="#0.16.3" aria-hidden="true">#</a></h2><p>fix</p><ul><li>sync package name changes from @element-plus/icons-vue</li><li>sync css-variables name changes from Element</li><li>sync useLocale changes from Element</li></ul><p>other</p><ul><li>refactor some function</li></ul><h2 id="0.16.2" tabindex="-1">0.16.2 <a class="header-anchor" href="#0.16.2" aria-hidden="true">#</a></h2><p>fix</p><ul><li>sync css variable name changes from Element</li><li>sync hook name change from Element</li><li>Form|Layout: remove warning message</li></ul><p>other</p><ul><li>type: optimization type DeepKeyof</li></ul><h2 id="0.16.1" tabindex="-1">0.16.1 <a class="header-anchor" href="#0.16.1" aria-hidden="true">#</a></h2><p>fix</p><ul><li>Form: clear the default value</li></ul><p>feat</p><ul><li>Form: add loading for slots menu-left and menu-right</li><li>Crud: add loading for slots form-menu-left and form-menu-right</li></ul><h2 id="0.16.0" tabindex="-1">0.16.0 <a class="header-anchor" href="#0.16.0" aria-hidden="true">#</a></h2><p>fix</p><ul><li>Form: missing icon on plus^1.2.0</li></ul><p>feat</p><ul><li>Descriptions: support get nested value</li><li>Table: support get nested value</li><li>Form: support get and set nested value</li><li>Crud: support get and set nested value</li></ul><p>other</p><ul><li>type: optimization type DeepKeyof</li></ul><h2 id="0.15.0" tabindex="-1">0.15.0 <a class="header-anchor" href="#0.15.0" aria-hidden="true">#</a></h2><p>breaking changes</p><ul><li>remove function findRouterPath</li></ul><p>fix</p><ul><li>Menu: styles error</li><li>ColumnSetting: missing icon on plus^1.2.0</li></ul><p>feat</p><ul><li>Descriptions: add ProDescriptions</li><li>Breadcrumb: realized by route.matched</li><li>add components as icon in router</li></ul><h2 id="0.14.1" tabindex="-1">0.14.1 <a class="header-anchor" href="#0.14.1" aria-hidden="true">#</a></h2><p>fix</p><ul><li>Crud: loss props to Table</li><li>Layout: the header z-index too high</li><li>Form: missing item in label slots</li></ul><p>feat</p><ul><li>Select: add default slots</li></ul><h2 id="0.14.0" tabindex="-1">0.14.0 <a class="header-anchor" href="#0.14.0" aria-hidden="true">#</a></h2><p>breaking changes</p><ul><li>remove useVModel, use useVModel form vueuse replace</li><li>rename the GlobalComponents file element-pro-components to components</li><li>rename findRouterItemListByPath to findRouterPath</li></ul><p>fix</p><ul><li>Menu: error style on horizontal mode</li><li>Table: display undefined when no value</li><li>Select|TreeSelect|Radio|Checkbox: cannot choose value 0</li></ul><p>feat</p><ul><li>Layout: add prop fixed-header, fixed-main, mode and more</li><li>Tabs: close when leaving hidden router</li><li>Breadcrumb: add use router alias name to lookup</li><li>InputTag|AutocompleteTag: add max to limit the number of tag</li><li>Table: add root node</li></ul><p>other</p><ul><li>refactor(all components): optimize type by render</li><li>types: optimization type</li></ul><h2 id="0.13.2" tabindex="-1">0.13.2 <a class="header-anchor" href="#0.13.2" aria-hidden="true">#</a></h2><p>breaking changes</p><ul><li>use useWindowSize from vueuse replace resize-observer-polyfill</li><li>use useAttrs from element-plus replace old useAttrs</li></ul><p>fix</p><ul><li>Menu: missing style</li><li>Form: the default slot is not displayed</li><li>Crud: search slot error</li><li>Crud: show menuColumns when without slot</li></ul><p>feat</p><ul><li>Form: support i18n</li><li>Crud: support i18n</li></ul><p>other</p><ul><li>type: optimization type</li></ul><h2 id="0.13.1" tabindex="-1">0.13.1 <a class="header-anchor" href="#0.13.1" aria-hidden="true">#</a></h2><p>fix</p><ul><li>Table: missing size in slot parameter</li><li>Crud: slots error</li><li>Form: styles error on children form</li></ul><p>other</p><ul><li>type: optimization type</li></ul><h2 id="0.13.0" tabindex="-1">0.13.0 <a class="header-anchor" href="#0.13.0" aria-hidden="true">#</a></h2><p>breaking changes</p><ul><li>Table: remove useTableSlotList</li><li>Form: remove useFormSlotList</li><li>Crud: remove useCrudAttrs</li></ul><p>feat</p><ul><li>Table: Improve slot performance by render</li><li>Form: Improve slot performance by render</li><li>Crud: Improve slot performance by render</li><li>chore: synchronize changes in element row and col</li><li>type: add GlobalComponents (If you use VS Code with typescript to develop, You will need it)</li></ul>',128),m=e("div",{class:"language-diff"},[e("pre",null,[e("code",{"v-pre":""},[l(`// tsconfig.json
{
`),e("span",{class:"token unchanged"},[e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},` "include": [
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},`   "node_modules/element-pro-components/types/element-pro-components.d.ts"
`)]),e("span",{class:"token unchanged"},[e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},` ]
`)]),l(`}
`)])])],-1),f=i('<p>fix</p><ul><li>Menu: horizontal style error</li></ul><h2 id="0.12.0" tabindex="-1">0.12.0 <a class="header-anchor" href="#0.12.0" aria-hidden="true">#</a></h2><p>breaking changes</p><ul><li>It is recommended to use component icons instead of font icons. reference <a href="https://tolking.github.io/element-pro-components/en-US/guide/router#use-icon">use-icon</a></li><li>Use css-variables of element-plus to replace a lot of original css-variables. <a href="https://github.com/tolking/element-pro-components/commit/d22b10187403b37b83b34136e65d53ffc83076a1#diff-ca526a7b1a2c5b894cbb9a7a2dea0320aa294e4885e86ab038dd013c4c8336a6">Compare</a></li></ul><p>feat</p><ul><li>Link: add components ProLink</li><li>styles: add introduce styles through js</li></ul><p>fix</p><ul><li>types: type error when building</li></ul><h2 id="0.11.2" tabindex="-1">0.11.2 <a class="header-anchor" href="#0.11.2" aria-hidden="true">#</a></h2><p>fix</p><ul><li>styles: unconverted css-variables</li></ul><h2 id="0.11.1" tabindex="-1">0.11.1 <a class="header-anchor" href="#0.11.1" aria-hidden="true">#</a></h2><p>feat</p><ul><li>TreeSelect: add prop only-select-leaf</li><li>Layout: change the button of menu</li></ul><p>fix</p><ul><li>Menu: routes lose reactive</li></ul><p>other</p><ul><li>perf: use shallowRef replace ref</li></ul><h2 id="0.11.0" tabindex="-1">0.11.0 <a class="header-anchor" href="#0.11.0" aria-hidden="true">#</a></h2><p>feat</p><ul><li>TreeSelect: add ProTreeSelect</li></ul><p>fix</p><ul><li>styles: missing css style</li><li>Form: styles error</li></ul><h2 id="0.10.1" tabindex="-1">0.10.1 <a class="header-anchor" href="#0.10.1" aria-hidden="true">#</a></h2><p>feat</p><ul><li>Form: support load local component</li></ul><p>fix</p><ul><li>Menu: display error when use hidden</li><li>Crud: expand slot does not carry content</li><li>Form: grid layout style error on element-plus 1.0.2-beta.53</li></ul><h2 id="0.10.0" tabindex="-1">0.10.0 <a class="header-anchor" href="#0.10.0" aria-hidden="true">#</a></h2><p>breaking changes</p><ul><li>remove slots <code>left-header</code> <code>right-header</code> <code>bottom-header</code> in Layout</li><li>remove <code>style.css</code>, need to use <code>styles/index.css</code> instead</li></ul>',32),g=e("div",{class:"language-diff"},[e("pre",null,[e("code",{"v-pre":""},[e("span",{class:"token deleted-sign deleted"},[e("span",{class:"token prefix deleted"},"-"),e("span",{class:"token line"},` import 'element-pro-components/lib/style.css'
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},` import 'element-pro-components/lib/styles/index.css'
`)])])])],-1),b=i('<p>feat</p><ul><li>refactor styles: support imports styles on demand</li></ul><h2 id="0.9.4" tabindex="-1">0.9.4 <a class="header-anchor" href="#0.9.4" aria-hidden="true">#</a></h2><p>feat</p><ul><li>Form: bind the native component value</li></ul><p>fix</p><ul><li>Table: error when show Array in data</li></ul><h2 id="0.9.3" tabindex="-1">0.9.3 <a class="header-anchor" href="#0.9.3" aria-hidden="true">#</a></h2><p>breaking changes</p><ul><li>type: rename DeepTypeof to DeepKeyof</li></ul><p>fix</p><ul><li>Crud: reset form data when closed dialog</li></ul><h2 id="0.9.2" tabindex="-1">0.9.2 <a class="header-anchor" href="#0.9.2" aria-hidden="true">#</a></h2><p>feat</p><ul><li>Form: support use slots in columns by <code>props.slots</code></li><li>Form: optimization the children form styles</li><li>Form: support use component input and textarea</li><li>Table: add render in columns</li><li>Table: change the default styles of pagination</li><li>Select: add option group</li></ul><p>fix</p><ul><li>Crud: resetForm not work when close edit form</li><li>type: DeepTypeof error</li><li>Install config is not merged when on demand</li></ul><h2 id="0.9.1" tabindex="-1">0.9.1 <a class="header-anchor" href="#0.9.1" aria-hidden="true">#</a></h2><p>breaking changes</p><ul><li>remove funtion filterRouterByHidden</li></ul><p>feat</p><ul><li>Tabs: add expose function</li><li>optimize router</li></ul><h2 id="0.9.0" tabindex="-1">0.9.0 <a class="header-anchor" href="#0.9.0" aria-hidden="true">#</a></h2><p>breaking changes</p><ul><li>change the utils function filterSlotDeep to filterFlat</li></ul><p>feat</p><ul><li>ProColumnSetting: add ProColumnSetting to control the column of <code>Table</code> and <code>Crud</code></li><li>Crud: add action slot</li><li>Table: add hide for columns</li></ul><h2 id="0.8.3" tabindex="-1">0.8.3 <a class="header-anchor" href="#0.8.3" aria-hidden="true">#</a></h2><p>breaking changes</p><ul><li>Layout: will remove slots <code>left-header</code> <code>right-header</code> <code>bottom-header</code>, use <code>header-left</code> <code>header-right</code> <code>header-bottom</code> replace</li></ul><p>feat</p><ul><li>Layout: add slots <code>footer</code> <code>main-top</code> <code>main-bottom</code> <code>header-left</code> <code>header-right</code> <code>header-bottom</code></li></ul><h2 id="0.8.2" tabindex="-1">0.8.2 <a class="header-anchor" href="#0.8.2" aria-hidden="true">#</a></h2><p>feat</p><ul><li>Crud: auto width for dialog</li></ul><p>fix</p><ul><li>_self does not exist on vue 3.0.11</li><li>error tip on vue 3.0.11</li></ul><h2 id="0.8.1" tabindex="-1">0.8.1 <a class="header-anchor" href="#0.8.1" aria-hidden="true">#</a></h2><p>feat</p><ul><li>Form: add grid layout form Form</li></ul><h2 id="0.8.0" tabindex="-1">0.8.0 <a class="header-anchor" href="#0.8.0" aria-hidden="true">#</a></h2><p>breaking changes</p><ul><li>change the order of submit arg</li></ul>',43),y=e("div",{class:"language-diff"},[e("pre",null,[e("code",{"v-pre":""},[l(`export type ICrudSubmit = (
`),e("span",{class:"token deleted-sign deleted"},[e("span",{class:"token prefix deleted"},"-"),e("span",{class:"token line"},`  formType: ICrudFormType,
`)]),e("span",{class:"token unchanged"},[e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},` close: () => void,
`),e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},` done: () => void,
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},` formType: ICrudFormType,
`)]),e("span",{class:"token unchanged"},[e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},` isValid: boolean,
`),e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},` invalidFields?: UnknownObject
`)]),l(`) => void
`)])])],-1),x=i('<p>feat</p><ul><li>Crud: add event <code>searchReset</code></li></ul><p>fix</p><ul><li>Form: disabled reset button when click submit</li><li>Crud: miss ElButton</li><li>Crud: error when menu is true</li><li>Crud: miss search menu when menu is false</li><li>Crud: miss form menu</li></ul><p>other</p><ul><li>add Crud for vetur</li><li>refactor docs</li></ul><h2 id="0.7.0" tabindex="-1">0.7.0 <a class="header-anchor" href="#0.7.0" aria-hidden="true">#</a></h2><p>breaking changes</p><ul><li>Form: remove menu slot</li><li>adjustment type prefix (Pro to I)</li></ul><p>feat</p><ul><li>Crud: add ProCrud</li><li>Form: add default buttons</li><li>Form: add install options</li><li>Form: add loading for submit button</li><li>Form: add menu-left and menu-right slot</li><li>add global menu config</li><li>export components props type</li><li>export all composables and types</li></ul><p>fix</p><ul><li>Layout: routes is not work</li><li>Menu: the meta may be undefined</li><li>referencing functions directly from element-plus generates errors</li></ul><h2 id="0.6.1" tabindex="-1">0.6.1 <a class="header-anchor" href="#0.6.1" aria-hidden="true">#</a></h2><p>fix</p><ul><li>Form|Table: loss of reactivity</li></ul><h2 id="0.6.0" tabindex="-1">0.6.0 <a class="header-anchor" href="#0.6.0" aria-hidden="true">#</a></h2><p>breaking changes</p><ul><li>remove <code>index.min.css</code> <code>index.css</code>, need to use <code>style.css</code> instead</li><li>remove <code>useHover</code> <code>useScroll</code> <code>useResize</code></li><li>change <code>usrFilterAttrs</code> to <code>useAttrs</code></li></ul><p>fix</p><ul><li>Layput: Table widening causes width error</li><li>Form: display on phone when use inline</li><li>Table|Tabs: whitout install function</li></ul><p>other</p><ul><li>optimize export type</li></ul><h2 id="0.5.1" tabindex="-1">0.5.1 <a class="header-anchor" href="#0.5.1" aria-hidden="true">#</a></h2><p>fix</p><ul><li>fix exports error</li></ul><h2 id="0.5.0" tabindex="-1">0.5.0 <a class="header-anchor" href="#0.5.0" aria-hidden="true">#</a></h2><p>feat</p><ul><li>Layput: add prop for Menu, add transition animation</li><li>Table: ignore pagination when without <code>total</code>, expose Table meahods</li><li>Form: optimize the display on phone, expose form methods</li></ul><p>fix</p><ul><li>Form: rules not work on sub-form</li></ul><h2 id="0.4.0" tabindex="-1">0.4.0 <a class="header-anchor" href="#0.4.0" aria-hidden="true">#</a></h2><p>feat</p><ul><li>InputTag|AutocompleteTag: add <code>trigger</code> <code>type</code> <code>hit</code> <code>color</code> <code>effect</code> prop</li></ul><p>fix</p><ul><li><code>filterRouterByHidden</code> without check the deep children</li></ul><p>other</p><ul><li>InputTag|AutocompleteTag: remover <code>tag</code> prop</li><li>add tags and attributes components for vetur</li></ul><h2 id="0.3.0" tabindex="-1">0.3.0 <a class="header-anchor" href="#0.3.0" aria-hidden="true">#</a></h2><p>feat</p><ul><li>add ProAutocompleteTag</li><li>add ProCheckbox</li><li>add ProCheckboxButton</li><li>add ProRadio</li><li>add ProRadioButton</li><li>add ProSelect</li></ul><p>fix</p><ul><li>without types</li></ul><h2 id="0.2.0" tabindex="-1">0.2.0 <a class="header-anchor" href="#0.2.0" aria-hidden="true">#</a></h2><p>feat</p><ul><li>add ProTable</li><li>add ProForm</li></ul><h2 id="0.1.0" tabindex="-1">0.1.0 <a class="header-anchor" href="#0.1.0" aria-hidden="true">#</a></h2><p>rebuild</p><ul><li>vue2 -&gt; vue3</li><li>element-ui -&gt; element-plus</li><li>js -&gt; ts</li></ul>',49),v=[d,s,c,u,p,h,m,f,g,b,y,x],L={setup(k,{expose:o}){return o({frontmatter:{meta:[]}}),a({meta:[]}),(w,F)=>(t(),n("div",r,v))}};export{L as default};
