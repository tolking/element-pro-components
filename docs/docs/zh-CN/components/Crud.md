---
title: Crud
meta:
  - name: description
    content: 封装表格组件和表单组件实现通过配置动态生成Crud页面，支持表格和表单组件的全部属性
---

# Crud

> 封装表格组件和表单组件实现通过配置动态生成 Crud 页面，支持表格和表单组件的全部属性

::: tip 提示
Crud 组件是 <pro-link to="/zh-CN/components/table">Table</pro-link> <pro-link to="/zh-CN/components/form">Form</pro-link> <pro-link to="/zh-CN/components/descriptions">Descriptions</pro-link> 的合并，在使用前最好先熟悉这些组件使用
:::

## 使用

### 基础用法

当 columns 绑定的是一个具有响应式的数组时，数组的变动会影响 Crud 变动（及动态 Crud）。如果不需要动态 Crud 推荐绑定一个普通数组

::: demo 根据 `add` `edit` `form` `hide` `search` `detail` 自动生成多功能表格
@/demo/Crud/base.vue
:::

### 智能提示

通过辅助函数 `defineCrudColumns` `defineCrudMenuColumns` `defineCrudBeforeOpen` `defineCrudBeforeClose` `defineCrudSearch` `defineCrudSubmit` 提供智能提示

::: demo
@/demo/Crud/define.vue
:::

### 嵌套键值

支持直接对具有嵌套结构的对象或数组进行取值或赋值，仅需要配置 `prop`

::: demo
@/demo/Crud/nested.vue
:::

### 配置按钮

默认不显示新增、编辑、删除按钮，需要配置 menu 或者启用 menu 插槽时才会显示

按钮也可以通过 <pro-link to="/zh-CN/guide/i18n">国际化</pro-link> 来配置

::: demo
@/demo/Crud/menu.vue
:::

### 指定搜索表单

通过 `search-columns` 传入的配置直接作用于搜索表单，类型同 <pro-link to="/zh-CN/components/form#columns">Form columns</pro-link>

::: demo
@/demo/Crud/search.vue
:::

### 指定新增表单

通过 `add-columns` 传入的配置直接作用于新增表单，类型同 <pro-link to="/zh-CN/components/form#columns">Form columns</pro-link>

::: demo
@/demo/Crud/add.vue
:::

### 指定编辑表单

通过 `edit-columns` 传入的配置直接作用于新增表单，类型同 <pro-link to="/zh-CN/components/form#columns">Form columns</pro-link>

::: demo
@/demo/Crud/edit.vue
:::

### 指定表单

通过 `form-columns` 传入的配置直接作用于新增和编辑表单，类型同 <pro-link to="/zh-CN/components/form#columns">Form columns</pro-link>

::: demo
@/demo/Crud/form.vue
:::

### 指定详情

通过 `detail-columns` 传入的配置直接作用于详情，类型同 <pro-link to="/zh-CN/components/descriptions#columns">Descriptions columns</pro-link>

::: demo
@/demo/Crud/detail.vue
:::

### 指定表格

通过 `table-columns` 传入的配置直接作用于表格，类型同 <pro-link to="/zh-CN/components/table#columns">Table columns</pro-link>

::: demo
@/demo/Crud/table.vue
:::

### 弹窗前后

通过 `before-open` `before-close` 指定弹窗开启前与弹窗关闭前执行的操作

::: demo
@/demo/Crud/dialog.vue
:::

### 插槽

在 `columns` 中配置 `render` 可以使用简单的 <pro-link to="https://staging-cn.vuejs.org/guide/render-function.html">渲染函数</pro-link>。或者直接在模版中增加带 `[prop]` 相关的插槽

::: demo
@/demo/Crud/slots.vue
:::

### TypeScript

`defineCrudColumns` 支持传入一个泛型用来推断 `prop` 值

::: demo
@/demo/Crud/typescript.vue
:::

### 配置

| 参数                    | 说明                                                                                                                         | 类型                                                    | 可选值                                                                   | 默认值                                               |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------ | :----------------------------------------------------------------------- | :--------------------------------------------------- |
| v-model                 | 表单绑定值                                                                                                                   | object                                                  | -                                                                        | -                                                    |
| v-model:search          | 搜索表单绑定值                                                                                                               | object                                                  | -                                                                        | -                                                    |
| columns                 | 自动生成 Crud 的参数，参考下面 columns                                                                                       | array                                                   | -                                                                        | -                                                    |
| add-columns             | 自动生成新增表单的参数，参考 Form columns                                                                                    | array                                                   | -                                                                        | 从 `columns` 中获取                                  |
| edit-columns            | 自动生成编辑表单的参数，参考 Form columns                                                                                    | array                                                   | -                                                                        | 从 `columns` 中获取                                  |
| form-columns            | 自动生成表单的参数，参考 Form columns                                                                                        | array                                                   | -                                                                        | 从 `columns` 中获取                                  |
| search-columns          | 自动生成搜索表单的参数，参考 Form columns                                                                                    | array                                                   | -                                                                        | 从 `columns` 中获取                                  |
| table-columns           | 自动生成表格的参数，参考 Table columns                                                                                       | array                                                   | -                                                                        | 从 `columns` 中获取                                  |
| detail-columns          | 自动生成描述详情的参数，参考 Descriptions columns                                                                            | array                                                   | -                                                                        | 从 `columns` 中获取                                  |
| menu                    | 按钮配置参考下面 `menu`                                                                                                      | object                                                  | -                                                                        | -                                                    |
| search-rules            | 搜索表单验证规则                                                                                                             | object                                                  | -                                                                        | -                                                    |
| data                    | 显示的数据                                                                                                                   | array                                                   | -                                                                        | -                                                    |
| selection               | 显示多选框，支持 columns 的配置                                                                                              | boolean / object                                        | -                                                                        | false                                                |
| index                   | 显示索引，支持 columns 的配置                                                                                                | boolean / object                                        | -                                                                        | false                                                |
| expand                  | 开启展开插槽，支持 columns 的配置                                                                                            | boolean / object                                        | -                                                                        | false                                                |
| menu                    | 开启操作按钮插槽，支持 columns 的配置                                                                                        | boolean / object                                        | -                                                                        | false                                                |
| show-overflow-tooltip   | 当内容过长被隐藏时显示 tooltip                                                                                               | boolean                                                 | -                                                                        | false                                                |
| align                   | 对齐方式                                                                                                                     | string                                                  | left / center / right                                                    | left                                                 |
| header-align            | 表头对齐方式                                                                                                                 | string                                                  | left / center / right                                                    | 同 align                                             |
| height                  | Table 的高度                                                                                                                 | string / number                                         | -                                                                        | 自动高度                                             |
| max-height              | Table 的最大高度                                                                                                             | string / number                                         | -                                                                        | -                                                    |
| stripe                  | 是否为斑马纹 table                                                                                                           | boolean                                                 | -                                                                        | false                                                |
| border                  | 是否带有纵向边框                                                                                                             | boolean                                                 | -                                                                        | false                                                |
| size                    | Table 的尺寸                                                                                                                 | string                                                  | large / default /small                                                   | -                                                    |
| fit                     | 列的宽度是否自撑开                                                                                                           | boolean                                                 | -                                                                        | true                                                 |
| show-header             | 是否显示表头                                                                                                                 | boolean                                                 | -                                                                        | true                                                 |
| highlight-current-row   | 是否要高亮当前行                                                                                                             | boolean                                                 | -                                                                        | false                                                |
| current-row-key         | 当前行的 key，只写属性                                                                                                       | string / number                                         | -                                                                        | -                                                    |
| row-class-name          | 为行增加 className                                                                                                           | Function({row, rowIndex}) / string                      | -                                                                        | -                                                    |
| row-style               | 为行增加 style                                                                                                               | Function({row, rowIndex}) / object                      | -                                                                        | -                                                    |
| cell-class-name         | 为单元格增加 className                                                                                                       | Function({row, column, rowIndex, columnIndex}) / string | -                                                                        | -                                                    |
| cell-style              | 为单元格增加 style                                                                                                           | Function({row, column, rowIndex, columnIndex}) / object | -                                                                        | -                                                    |
| header-row-class-name   | 为表头行增加 className                                                                                                       | Function({row, rowIndex}) / string                      | -                                                                        | -                                                    |
| header-row-style        | 为表头行增加 style                                                                                                           | Function({row, rowIndex}) / object                      | -                                                                        | -                                                    |
| header-cell-class-name  | 为表头单元格增加 className                                                                                                   | Function({row, column, rowIndex, columnIndex}) / string | -                                                                        | -                                                    |
| header-cell-style       | 为表头单元格增加 style                                                                                                       | Function({row, column, rowIndex, columnIndex}) / object | -                                                                        | -                                                    |
| row-key                 | 行数据的 Key，使用 reserveSelection 功能时必填                                                                               | Function(row) / string                                  | -                                                                        | -                                                    |
| empty-text              | 空数据时显示的文本内容                                                                                                       | string                                                  | -                                                                        | 暂无数据                                             |
| default-expand-all      | 是否默认展开所有行                                                                                                           | boolean                                                 | -                                                                        | false                                                |
| expand-row-keys         | Table 目前的展开行，与 row-key 配合使用                                                                                      | array                                                   | -                                                                        | -                                                    |
| default-sort            | 默认的排序列的 prop 和顺序                                                                                                   | Object                                                  | `order`: ascending, descending                                           | ascending                                            |
| tooltip-effect          | tooltip `effect` 属性                                                                                                        | String                                                  | dark / light                                                             | -                                                    |
| show-summary            | 是否在表尾显示合计行                                                                                                         | Boolean                                                 | -                                                                        | false                                                |
| sum-text                | 合计行第一列的文本                                                                                                           | String                                                  | -                                                                        | 合计                                                 |
| summary-method          | 自定义的合计计算方法                                                                                                         | Function({ columns, data })                             | -                                                                        | -                                                    |
| span-method             | 合并行或列的计算方法                                                                                                         | Function({ row, column, rowIndex, columnIndex })        | -                                                                        | -                                                    |
| select-on-indeterminate | 当仅有部分行被选中时，点击表头的多选框时的行为，配合 selection 使用                                                          | boolean                                                 | -                                                                        | true                                                 |
| indent                  | 展示树形数据时，树节点的缩进                                                                                                 | number                                                  | -                                                                        | 16                                                   |
| lazy                    | 是否懒加载子节点数据                                                                                                         | boolean                                                 | -                                                                        | -                                                    |
| load                    | 加载子节点数据的函数，lazy 为 true 时生效                                                                                    | Function(row, treeNode, resolve)                        | -                                                                        | -                                                    |
| tree-props              | 渲染嵌套数据的配置选项                                                                                                       | Object                                                  | -                                                                        | { hasChildren: 'hasChildren', children: 'children' } |
| table-layout            | 设置表格单元、行和列的布局方式                                                                                               | string                                                  | fixed / auto                                                             | fixed                                                |
| scrollbar-always-on     | 总是显示滚动条                                                                                                               | boolean                                                 | —                                                                        | false                                                |
| flexible                | 确保主轴的最小尺寸                                                                                                           | boolean                                                 | —                                                                        | false                                                |
| v-model:current-page    | 当前页数                                                                                                                     | number                                                  | -                                                                        | -                                                    |
| v-model:page-size       | 每页显示条目个数                                                                                                             | number                                                  | -                                                                        | -                                                    |
| total                   | 总条目数                                                                                                                     | number                                                  | -                                                                        | -                                                    |
| page-count              | 总页数 `total` 和 `page-count` 设置任意一个就可以达到显示页码的功能；如果要支持 `page-sizes` 的更改，则需要使用 `total` 属性 | number                                                  | -                                                                        | -                                                    |
| small                   | 是否使用小型分页样式                                                                                                         | boolean                                                 | -                                                                        | false                                                |
| background              | 是否为分页按钮添加背景色                                                                                                     | boolean                                                 | -                                                                        | false                                                |
| default-page-size       | 每页显示条目数的初始值                                                                                                       | number                                                  | -                                                                        | -                                                    |
| pager-count             | 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠                                                                | number                                                  | 5 ≤ x ≤ 21 的奇数                                                        | 7                                                    |
| default-current-page    | 当前页数的初始值                                                                                                             | number                                                  | -                                                                        | -                                                    |
| layout                  | 组件布局，子组件名用逗号分隔                                                                                                 | string                                                  | `sizes` / `prev` / `pager` / `next` / `jumper` / `->` / `total` / `slot` | 'prev, pager, next, jumper, ->, total'               |
| page-sizes              | 每页显示个数选择器的选项设置                                                                                                 | number[]                                                | -                                                                        | [10, 20, 30, 40, 50, 100]                            |
| popper-class            | 每页显示个数选择器的下拉框类名                                                                                               | string                                                  | -                                                                        | -                                                    |
| prev-text               | 替代图标显示的上一页文字                                                                                                     | string                                                  | -                                                                        | -                                                    |
| next-text               | 替代图标显示的下一页文字                                                                                                     | string                                                  | -                                                                        | -                                                    |
| disabled                | 是否禁用分页                                                                                                                 | boolean                                                 | -                                                                        | false                                                |
| hide-on-single-page     | 只有一页时是否隐藏                                                                                                           | boolean                                                 | -                                                                        | -                                                    |
| rules                   | 表单验证规则                                                                                                                 | object                                                  | -                                                                        | -                                                    |
| inline                  | 行内表单模式                                                                                                                 | boolean                                                 | -                                                                        | false                                                |
| label-position          | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width`                                                      | string                                                  | right / left / top                                                       | right                                                |
| label-width             | 表单域标签的宽度，例如 '50px' 或 'auto'                                                                                      | string                                                  | -                                                                        | -                                                    |
| label-suffix            | 表单域标签的后缀                                                                                                             | string                                                  | -                                                                        | -                                                    |
| hide-required-asterisk  | 是否显示必填字段的标签旁边的红色星号                                                                                         | boolean                                                 | -                                                                        | false                                                |
| show-message            | 是否显示校验错误信息                                                                                                         | boolean                                                 | -                                                                        | true                                                 |
| inline-message          | 是否以行内形式展示校验信息                                                                                                   | boolean                                                 | -                                                                        | false                                                |
| status-icon             | 是否在输入框中显示校验结果反馈图标                                                                                           | boolean                                                 | -                                                                        | false                                                |
| validate-on-rule-change | 是否在 `rules` 属性改变后立即触发一次验证                                                                                    | boolean                                                 | -                                                                        | true                                                 |
| size                    | 用于控制该表单内组件的尺寸                                                                                                   | string                                                  | large / default /small                                                   | -                                                    |
| disabled                | 是否禁用该表单内的所有组件                                                                                                   | boolean                                                 | -                                                                        | false                                                |
| gutter                  | 栅格间隔                                                                                                                     | number                                                  | -                                                                        | 0                                                    |
| justify                 | flex 布局下的水平排列方式                                                                                                    | string                                                  | start / end / center / space-around / space-between / spacing-evenly     | start                                                |
| title                   | 弹窗的标题                                                                                                                   | string                                                  | -                                                                        | 从 menu 中获取                                       |
| width                   | 弹窗的宽度                                                                                                                   | string / number                                         | -                                                                        | 50%                                                  |
| fullscreen              | 是否为全屏弹窗                                                                                                               | boolean                                                 | -                                                                        | false                                                |
| top                     | 弹窗 CSS 中的 margin-top 值                                                                                                  | string                                                  | -                                                                        | 15vh                                                 |
| modal                   | 是否需要遮罩层                                                                                                               | boolean                                                 | -                                                                        | true                                                 |
| append-to-body          | 弹窗自身是否插入至 body 元素上                                                                                               | boolean                                                 | -                                                                        | false                                                |
| lock-scroll             | 是否在 弹窗出现时将 body 滚动锁定                                                                                            | boolean                                                 | -                                                                        | true                                                 |
| custom-class            | 弹窗的自定义类名                                                                                                             | string                                                  | -                                                                        | pro-crud-dialog                                      |
| open-delay              | 弹窗打开的延时时间，单位毫秒                                                                                                 | number                                                  | -                                                                        | 0                                                    |
| close-delay             | 弹窗关闭的延时时间，单位毫秒                                                                                                 | number                                                  | -                                                                        | 0                                                    |
| close-on-click-modal    | 是否可以通过点击 modal 关闭弹窗                                                                                              | boolean                                                 | -                                                                        | true                                                 |
| close-on-press-escape   | 是否可以通过按下 ESC 关闭弹窗                                                                                                | boolean                                                 | -                                                                        | true                                                 |
| show-close              | 是否显示关闭按钮                                                                                                             | boolean                                                 | -                                                                        | true                                                 |
| before-open             | 弹窗开启前的回调，会暂停弹窗的开启                                                                                           | Function(done, type, row)                               | -                                                                        | -                                                    |
| before-close            | 关闭前的回调，会暂停弹窗的关闭                                                                                               | Function(done)                                          | -                                                                        | -                                                    |
| center                  | 是否对头部和底部采用居中布局                                                                                                 | boolean                                                 | -                                                                        | false                                                |
| detail                  | 显示的详情数据                                                                                                               | object                                                  | -                                                                        | -                                                    |
| border                  | 是否带有边框                                                                                                                 | boolean                                                 | —                                                                        | false                                                |
| column                  | 一行显示的数量                                                                                                               | number                                                  | —                                                                        | 3                                                    |
| direction               | 排列的方向                                                                                                                   | string                                                  | vertical / horizontal                                                    | horizontal                                           |
| size                    | 列表的尺寸                                                                                                                   | string                                                  | large / default /small                                                   | —                                                    |
| extra                   | 操作区文本，显示在右上方                                                                                                     | string                                                  | —                                                                        | —                                                    |
| align                   | 列的内容对齐方式（如无 border，对标签和内容均生效）                                                                          | string                                                  | left / center / right                                                    | -                                                    |
| label-align             | 列的标签对齐方式，若不设置该项，则使用内容的对齐方式（如无 border，请使用 align 参数）                                       | string                                                  | left / center / right                                                    | —                                                    |

::: tip 提示
Crud 支持 <pro-link to="/zh-CN/components/table#配置">Table</pro-link> 和 <pro-link to="/zh-CN/components/form#配置">Form</pro-link> 的所有配置；支持 <pro-link to="/zh-CN/components/descriptions#配置">Descriptions</pro-link> 中除了 title 以外的事件属性，如果想要配置 title 请通过 descriptions-title 插槽实现；支持 <pro-link to="https://element-plus.gitee.io/zh-CN/component/dialog.html#dialog-%E5%B1%9E%E6%80%A7">ElDialog</pro-link> 除了 modelValue destroy-on-close 意外以外的属性，但不建议修改 title 和 width

部分属性名称相同，配置将传递给需要的组件
:::

#### columns

| 参数                | 说明                                                                                                                                                 | 类型                                    | 可选值                                                                                                                          | 默认值                            |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------- |
| add                 | 是否在新增表单中显示                                                                                                                                 | boolean                                 | -                                                                                                                               | false                             |
| edit                | 是否在编辑表单中显示                                                                                                                                 | boolean                                 | -                                                                                                                               | false                             |
| form                | 是否在表单中显示                                                                                                                                     | boolean                                 | -                                                                                                                               | false                             |
| search              | 是否在搜索表单中显示                                                                                                                                 | boolean                                 | -                                                                                                                               | false                             |
| detail              | 是否在描述详情中显示                                                                                                                                 | boolean                                 | -                                                                                                                               | false                             |
| hide                | 是否在表格中隐藏                                                                                                                                     | boolean                                 | -                                                                                                                               | false                             |
| prop                | 对应 data 的字段名 (**必填，需要是唯一值**)                                                                                                          | string                                  | -                                                                                                                               | -                                 |
| label               | 显示的标题                                                                                                                                           | string                                  | -                                                                                                                               | -                                 |
| slot                | 是否开启自定义插槽功能                                                                                                                               | boolean                                 | -                                                                                                                               | false                             |
| render              | 通过渲染函数对表格实现简单的插槽功能                                                                                                                 | string / function(row)                  | -                                                                                                                               | -                                 |
| children            | 实现多级表头                                                                                                                                         | array                                   | -                                                                                                                               | -                                 |
| columnKey           | 当前项的 key，使用 filter-change 事件时需要                                                                                                          | string                                  | -                                                                                                                               | -                                 |
| width               | 对应列的宽度                                                                                                                                         | string                                  | -                                                                                                                               | -                                 |
| minWidth            | 对应列的最小宽度                                                                                                                                     | string                                  | -                                                                                                                               | -                                 |
| fixed               | 列是否固定，true 表示固定在左侧                                                                                                                      | string / boolean                        | true / left / right                                                                                                             | -                                 |
| renderHeader        | 列标题 Label 区域渲染使用的 Function                                                                                                                 | Function(h, { column, $index })         | -                                                                                                                               | -                                 |
| sortable            | 对应列是否可以排序                                                                                                                                   | boolean / string                        | true / false / 'custom'                                                                                                         | false                             |
| sortMethod          | 对数据进行排序的时候使用的方法                                                                                                                       | Function(a, b)                          | -                                                                                                                               | -                                 |
| sortBy              | 指定数据按照哪个属性进行排序                                                                                                                         | string / array / Function(row, index)   | -                                                                                                                               | -                                 |
| sortOrders          | 数据在排序时所使用排序策略的轮转顺序                                                                                                                 | array                                   | `ascending` 表示升序，`descending` 表示降序，`null` 表示还原为原始顺序                                                          | ['ascending', 'descending', null] |
| resizable           | 对应列是否可以通过拖动改变宽度，配合 border 使用                                                                                                     | boolean                                 | -                                                                                                                               | true                              |
| formatter           | 用来格式化内容                                                                                                                                       | Function(row, column, cellValue, index) | -                                                                                                                               | -                                 |
| showOverflowTooltip | 当内容过长被隐藏时显示 tooltip                                                                                                                       | Boolean                                 | -                                                                                                                               | false                             |
| align               | 对齐方式                                                                                                                                             | string                                  | left / center / right                                                                                                           | left                              |
| headerAlign         | 表头对齐方式                                                                                                                                         | string                                  | left / center / right                                                                                                           | 同 align                          |
| className           | 列的 className                                                                                                                                       | string                                  | -                                                                                                                               | -                                 |
| labelClassName      | 当前列标题的自定义类名                                                                                                                               | string                                  | -                                                                                                                               | -                                 |
| filters             | 数据过滤的选项                                                                                                                                       | Array[{ text, value }]                  | -                                                                                                                               | -                                 |
| filterPlacement     | 过滤弹出框的定位                                                                                                                                     | string                                  | top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end | -                                 |
| filterMultiple      | 数据过滤的选项是否多选                                                                                                                               | boolean                                 | -                                                                                                                               | true                              |
| filterMethod        | 数据过滤使用的方法                                                                                                                                   | Function(value, row, column)            | -                                                                                                                               | -                                 |
| filteredValue       | 选中的数据过滤项                                                                                                                                     | array                                   | -                                                                                                                               | -                                 |
| index               | 自定义索引，只能够在 index 中配置                                                                                                                    | Function(index) / number                | -                                                                                                                               | -                                 |
| selectable          | 这一行的 CheckBox 是否可以勾选，只能够在 selection 中配置                                                                                            | Function(row, index)                    | -                                                                                                                               | -                                 |
| reserveSelection    | 是否保留之前选中的数据（需指定 `row-key`），只能够在 selection 中配置                                                                                | boolean                                 | -                                                                                                                               | false                             |
| max                 | 与 children 一起使用，限制子表单的最大数量                                                                                                           | number                                  | -                                                                                                                               | -                                 |
| labelWidth          | 表单域标签的宽度，例如 '50px' 或 'auto'                                                                                                              | string                                  | -                                                                                                                               | -                                 |
| required            | 是否必填，如不设置，则会根据校验规则自动生成                                                                                                         | boolean                                 | -                                                                                                                               | false                             |
| rules               | 表单验证规则                                                                                                                                         | object / array                          | -                                                                                                                               | -                                 |
| error               | 表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息                                                                            | string                                  | -                                                                                                                               | -                                 |
| showMessage         | 是否显示校验错误信息                                                                                                                                 | boolean                                 | -                                                                                                                               | true                              |
| inlineMessage       | 以行内形式展示校验信息                                                                                                                               | boolean                                 | -                                                                                                                               | false                             |
| size                | 用于控制该表单域下组件的尺寸                                                                                                                         | string                                  | large / default /small                                                                                                          | -                                 |
| span                | 栅格占据的列数                                                                                                                                       | number                                  | -                                                                                                                               | 24                                |
| offset              | 栅格左侧的间隔格数                                                                                                                                   | number                                  | -                                                                                                                               | 0                                 |
| push                | 栅格向右移动格数                                                                                                                                     | number                                  | -                                                                                                                               | 0                                 |
| pull                | 栅格向左移动格数                                                                                                                                     | number                                  | -                                                                                                                               | 0                                 |
| xs                  | `<768px` 响应式栅格数或者栅格属性对象                                                                                                                | number / object                         | -                                                                                                                               | -                                 |
| sm                  | `≥768px` 响应式栅格数或者栅格属性对象                                                                                                                | number / object                         | -                                                                                                                               | -                                 |
| md                  | `≥992px` 响应式栅格数或者栅格属性对象                                                                                                                | number / object                         | -                                                                                                                               | -                                 |
| lg                  | `≥1200px` 响应式栅格数或者栅格属性对象                                                                                                               | number / object                         | -                                                                                                                               | -                                 |
| xl                  | `≥1920px` 响应式栅格数或者栅格属性对象                                                                                                               | number / object                         | -                                                                                                                               | -                                 |
| detailSpan          | 描述详情中列的数量                                                                                                                                   | number                                  | -                                                                                                                               | 1                                 |
| width               | 描述详情中列的宽度，不同行相同列的宽度按最大值设定（如无 border ，宽度包含标签与内容）                                                               | string / number                         | —                                                                                                                               | —                                 |
| minWidth            | 描述详情中列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列（如无 border，宽度包含标签与内容） | string / number                         | —                                                                                                                               | —                                 |
| align               | 描述详情中列的内容对齐方式（如无 border，对标签和内容均生效）                                                                                        | string                                  | left / center / right                                                                                                           | left                              |
| labelAlign          | 描述详情中列的标签对齐方式，若不设置该项，则使用内容的对齐方式（如无 border，请使用 align 参数）                                                     | string                                  | left / center / right                                                                                                           | —                                 |
| className           | 描述详情中列的内容自定义类名                                                                                                                         | string                                  | —                                                                                                                               | —                                 |
| labelClassName      | 描述详情中列的标签自定义类名                                                                                                                         | string                                  | —                                                                                                                               | —                                 |
| render              | 描述详情中通过渲染函数实现简单的插槽功能                                                                                                             | function(detail)                        | -                                                                                                                               | -                                 |
| renderLabel         | 描述详情中通过渲染函数实现简单的 Label 插槽功能                                                                                                      | function(column)                        | -                                                                                                                               | -                                 |

::: tip 提示
Crud columns 支持 <pro-link to="/zh-CN/components/table#columns">Table columns</pro-link> 和 <pro-link to="/zh-CN/components/form#columns">Form columns</pro-link> 的所有配置；支持 <pro-link to="/zh-CN/components/descriptions#columns">Descriptions columns</pro-link> 中除了 span 以外的事件属性，**其中 `span` 需要改写成 `detailSpan` 使用**

部分属性名称相同，配置将传递给需要的组件
:::

#### menu

| 参数             | 说明                              | 类型                    | 可选值 | 默认值                          |
| :--------------- | :-------------------------------- | :---------------------- | :----- | :------------------------------ |
| add              | 是否显示 add 按钮                 | boolean                 | -      | true                            |
| addText          | add 按钮显示的文字                | string                  | -      | Add                             |
| addProps         | add 按钮的配置，参考 el-button    | object                  | -      | { type: 'primary' }             |
| edit             | 是否显示 edit 按钮                | boolean / Function(row) | -      | true                            |
| editText         | edit 按钮显示的文字               | string                  | -      | Edit                            |
| editProps        | edit 按钮的配置，参考 el-button   | object                  | -      | { link: true, type: 'primary' } |
| detail           | 是否显示 detail 按钮              | boolean / Function(row) | -      | true                            |
| detailText       | detail 按钮显示的文字             | string                  | -      | View                            |
| detailProps      | detail 按钮的配置，参考 el-button | object                  | -      | { link: true, type: 'info' }    |
| del              | 是否显示 del 按钮                 | boolean / Function(row) | -      | true                            |
| delText          | del 按钮显示的文字                | string                  | -      | Delete                          |
| delProps         | del 按钮的配置，参考 el-button    | object                  | -      | { link: true, type: 'danger' }  |
| submit           | 是否显示 submit 按钮              | boolean                 | -      | true                            |
| submitText       | submit 按钮显示的文字             | string                  | -      | Submit                          |
| submitProps      | submit 按钮的配置，参考 el-button | object                  | -      | { type: 'primary' }             |
| reset            | 是否显示 reset 按钮               | boolean                 | -      | true                            |
| resetText        | 是否显示 reset 按钮显示的文字     | string                  | -      | Reset                           |
| resetProps       | reset 按钮的配置，参考 el-button  | object                  | -      | -                               |
| search           | 是否显示 search 按钮              | boolean                 | -      | true                            |
| searchText       | search 按钮显示的文字             | string                  | -      | Search                          |
| searchProps      | search 按钮的配置，参考 el-button | object                  | -      | { type: 'primary' }             |
| searchReset      | 是否显示 reset 按钮               | boolean                 | -      | true                            |
| searchResetText  | 是否显示 reset 按钮显示的文字     | string                  | -      | Reset                           |
| searchResetProps | reset 按钮的配置，参考 el-button  | object                  | -      | -                               |

::: tip 提示
其它属性同 <pro-link to="/zh-CN/components/table#columns">Table columns</pro-link>
:::

### 事件

| 事件名             | 说明                                                                                                                                         | 参数                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| submit             | submit 被点击后触发                                                                                                                          | close, done, 'add'/'edit', isValid, invalidFields |
| reset              | reset 按钮被点击后触发                                                                                                                       | -                                                 |
| add                | add 按钮被点击后触发                                                                                                                         | -                                                 |
| edit               | edit 按钮被点击后触发                                                                                                                        | row                                               |
| detail             | detail 按钮被点击后触发                                                                                                                      | row                                               |
| delete             | delete 按钮被点击后触发                                                                                                                      | row                                               |
| search             | search 按钮被点击后触发                                                                                                                      | done, isValid, invalidFields                      |
| searchReset        | search reset 按钮被点击后触发                                                                                                                | -                                                 |
| load               | pageSize 和 currentPage 改变时会触发                                                                                                         | -                                                 |
| select             | 当用户手动勾选数据行的 Checkbox 时触发的事件                                                                                                 | selection, row                                    |
| select-all         | 当用户手动勾选全选 Checkbox 时触发的事件                                                                                                     | selection                                         |
| selection-change   | 当选择项发生变化时会触发该事件                                                                                                               | selection                                         |
| cell-mouse-enter   | 当单元格 hover 进入时会触发该事件                                                                                                            | row, column, cell, event                          |
| cell-mouse-leave   | 当单元格 hover 退出时会触发该事件                                                                                                            | row, column, cell, event                          |
| cell-click         | 当某个单元格被点击时会触发该事件                                                                                                             | row, column, cell, event                          |
| cell-dblclick      | 当某个单元格被双击击时会触发该事件                                                                                                           | row, column, cell, event                          |
| row-click          | 当某一行被点击时会触发该事件                                                                                                                 | row, column, event                                |
| row-contextmenu    | 当某一行被鼠标右键点击时会触发该事件                                                                                                         | row, column, event                                |
| row-dblclick       | 当某一行被双击时会触发该事件                                                                                                                 | row, column, event                                |
| header-click       | 当某一列的表头被点击时会触发该事件                                                                                                           | column, event                                     |
| header-contextmenu | 当某一列的表头被鼠标右键点击时触发该事件                                                                                                     | column, event                                     |
| sort-change        | 当表格的排序条件发生变化的时候会触发该事件                                                                                                   | { column, prop, order }                           |
| filter-change      | 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。 | filters                                           |
| current-change     | 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性                                          | currentRow, oldCurrentRow                         |
| header-dragend     | 当拖动表头改变了列的宽度的时候会触发该事件                                                                                                   | newWidth, oldWidth, column, event                 |
| expand-change      | 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）                     | row, (expandedRows \| expanded)                   |
| validate           | 任一表单项被校验后触发                                                                                                                       | 被校验的表单项 prop 值, isValid, invalidFields    |

### 方法

| 方法名             | 说明                                                                                                                                                                 | 参数                                                                       |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| clearSelection     | 用于多选表格，清空用户的选择                                                                                                                                         | -                                                                          |
| toggleRowSelection | 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）                                                          | row, selected                                                              |
| toggleAllSelection | 用于多选表格，切换全选和全不选                                                                                                                                       | -                                                                          |
| toggleRowExpansion | 用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true                                                       | row, expanded                                                              |
| setCurrentRow      | 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。                                                                                 | row                                                                        |
| clearSort          | 用于清空排序条件，数据会恢复成未排序的状态                                                                                                                           | -                                                                          |
| clearFilter        | 不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由 columnKey 组成的数组以清除指定列的过滤条件                                                    | columnKey                                                                  |
| doLayout           | 对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法                                                                                   | -                                                                          |
| sort               | 手动对 Table 进行排序。参数`prop`属性指定排序列，`order`指定排序顺序。                                                                                               | prop: string, order: string                                                |
| validate           | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object))                              |
| validateField      | 对部分表单字段进行校验的方法                                                                                                                                         | Function(props: array \| string, callback: Function(errorMessage: string)) |
| resetFields        | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果                                                                                                           | -                                                                          |
| scrollToField      | 滚动到指定表单字段                                                                                                                                                   | Function(prop: string)                                                     |
| clearValidate      | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果                                                             | Function(props: array \| string)                                           |

### 插槽

| 名称                | 说明                                                                     |
| :------------------ | :----------------------------------------------------------------------- |
| menu-left           | 新增按钮左侧，参数为 { size }                                            |
| menu-right          | 新增按钮右侧，参数为 { size }                                            |
| action              | 头部右侧操作栏，参数为 { size }                                          |
| menu                | 表格右侧自定义按钮，参数为 { size, row, column, $index }                 |
| dialog-top          | 弹窗顶部内容，参数为 { type }                                            |
| dialog-bottom       | 弹窗底部内容，参数为 { type }                                            |
| table               | 在表格右侧菜单前插入的任意内容                                           |
| table-expand        | 当 expand 为 true 时，配置展开显示的内容，参数为 { row, column, $index } |
| table-append        | 插入至表格最后一行之后的内容                                             |
| table-[prop]        | 当前这列的内容，参数为 { row, column, $index }                           |
| table-[prop]-header | 当前这列表头的内容，参数为 { column, $index }                            |
| form                | 在表单底部按钮前插入的任意内容                                           |
| form-menu-left      | 表单底部按钮左侧                                                         |
| form-menu-right     | 表单底部按钮右侧                                                         |
| form-[prop]         | 当前这项的 Form Item 的内容，参数为 { item, value, setValue }            |
| form-[prop]-label   | 当前这项的标签文本的内容，参数为 { item }                                |
| form-[prop]-error   | 当前这项的自定义表单校验信息的显示方式，参数为 { error, item }           |
| search              | 在搜索按钮菜单前插入的任意内容                                           |
| search-menu-left    | 搜索表单按钮左侧，参数为 { loading }                                     |
| search-menu-right   | 搜索表单按钮右侧，参数为 { loading }                                     |
| search-[prop]       | 当前这项的 Form Item 的内容，参数为 { item, value, setValue }            |
| search-[prop]-label | 当前这项的标签文本的内容，参数为 { item }                                |
| search-[prop]-error | 当前这项的自定义表单校验信息的显示方式，参数为 { error, item }           |
| detail              | 在查看描述尾部插入更多的描述信息                                         |
| detail-title        | 自定义描述标题文本，显示在左上方, 参数 { size }                          |
| detail-extra        | 自定义描述操作区文本，显示在右上方, 参数 { size }                        |
| detail-[prop]       | 当前描述这项的内容, 参数 { size, item }                                  |
| detail-[prop]-label | 当前描述这项的标签文本内容, 参数 { size, item }                          |

::: tip 提示
[prop] 为 columns 中定义的 prop
:::
