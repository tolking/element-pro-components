---
title: Table
meta:
  - name: description
    content: 封装表格组件实现通过配置动态生成列
---

# Table

> 封装表格组件实现通过配置动态生成列

## 使用

### 基础用法

当 columns 绑定的是一个具有响应式的数组时，数组的变动会影响表格变动（及动态表格）。如果不需要动态表格推荐绑定一个普通数组

::: demo
@/demo/Table/base.vue
:::

### 智能提示

通过辅助函数 `defineTableColumns` `defineTableMenuColumns` `defineTableSelectionColumns` `defineTableIndexColumns` `defineTableExpandColumns` 提供智能提示

::: demo
@/demo/Table/define.vue
:::

### 获取嵌套键值

支持直接对具有嵌套结构的对象或数组进行取值，仅需要配置 `prop`

::: demo
@/demo/Table/nested.vue
:::

### 索引表格

通过配置 `index` 显示索引列，支持 columns 的参数

::: demo
@/demo/Table/index.vue
:::

### 多选表格

通过配置 `selection` 显示多选框，支持 columns 的参数

::: demo
@/demo/Table/selection.vue
:::

### 可展开表格

通过 #expand 插槽定制显示可展开内容，通过 `expand` 可进行相关配置，支持 columns 的参数

::: demo
@/demo/Table/expand.vue
:::

### 定义操作按钮

通过 #menu 插槽定制显示操作按钮内容，通过 `menu` 可进行相关配置，支持 columns 的参数

::: demo
@/demo/Table/menu.vue
:::

### 插槽

::: tip 提示
从 `1.2.0` 起，`[prop]` 相关插槽需要增加前缀 `table-` 使用
:::

在 `columns` 中配置 `render` 可以使用简单的[渲染函数](https://v3.cn.vuejs.org/guide/render-function.html)。或者直接在模版中增加带 `table-[prop]` 相关的插槽

::: demo
@/demo/Table/slots.vue
:::

### 显示分页

当传入 `total` 数据时，将自动显示分页。可以通过 `v-model:current-page` 绑定当前页数、通过 `v-model:page-size` 绑定每页显示条目个数、通过 `load` 事件监听分页变动

::: demo
@/demo/Table/pagination.vue
:::

### 多级表头

通过 columns 的 `children` 配置多级表头

::: demo
@/demo/Table/group.vue
:::

### 异步表格

想要实现异步表格 columns 必须绑定一个动态数组

::: demo
@/demo/Table/async.vue
:::

### TypeScript

`defineTableColumns` 支持传入一个泛型用来推断 `prop` 值

::: demo
@/demo/Table/typescript.vue
:::

### 配置

| 参数                    | 说明                                                                                                                         | 类型                                                    | 可选值                                                                   | 默认值                                               |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------ | :----------------------------------------------------------------------- | :--------------------------------------------------- |
| data                    | 显示的数据                                                                                                                   | array                                                   | -                                                                        | -                                                    |
| columns                 | 自动生成表单的参数，参考下面 columns                                                                                         | array                                                   | -                                                                        | -                                                    |
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

#### columns

| 参数                | 说明                                                                  | 类型                                    | 可选值                                                                                                                          | 默认值                            |
| :------------------ | :-------------------------------------------------------------------- | :-------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------- |
| prop                | 对应 data 的字段名 (**必填，需要是唯一值**)                           | string                                  | -                                                                                                                               | -                                 |
| label               | 显示的标题                                                            | string                                  | -                                                                                                                               | -                                 |
| render              | 通过渲染函数实现简单的插槽功能                                        | function(row)                           | -                                                                                                                               | -                                 |
| hide                | 是否在表格中隐藏                                                      | boolean                                 | -                                                                                                                               | false                             |
| children            | 实现多级表头                                                          | array                                   | -                                                                                                                               | -                                 |
| columnKey           | 当前项的 key，使用 filter-change 事件时需要                           | string                                  | -                                                                                                                               | -                                 |
| width               | 对应列的宽度                                                          | string                                  | -                                                                                                                               | -                                 |
| minWidth            | 对应列的最小宽度                                                      | string                                  | -                                                                                                                               | -                                 |
| fixed               | 列是否固定，true 表示固定在左侧                                       | string / boolean                        | true / left / right                                                                                                             | -                                 |
| renderHeader        | 列标题 Label 区域渲染使用的 Function                                  | Function({ column, $index })            | -                                                                                                                               | -                                 |
| sortable            | 对应列是否可以排序                                                    | boolean / string                        | true / false / 'custom'                                                                                                         | false                             |
| sortMethod          | 对数据进行排序的时候使用的方法                                        | Function(a, b)                          | -                                                                                                                               | -                                 |
| sortBy              | 指定数据按照哪个属性进行排序                                          | string / array / Function(row, index)   | -                                                                                                                               | -                                 |
| sortOrders          | 数据在排序时所使用排序策略的轮转顺序                                  | array                                   | `ascending` 表示升序，`descending` 表示降序，`null` 表示还原为原始顺序                                                          | ['ascending', 'descending', null] |
| resizable           | 对应列是否可以通过拖动改变宽度，配合 border 使用                      | boolean                                 | -                                                                                                                               | true                              |
| formatter           | 用来格式化内容                                                        | Function(row, column, cellValue, index) | -                                                                                                                               | -                                 |
| showOverflowTooltip | 当内容过长被隐藏时显示 tooltip                                        | Boolean                                 | -                                                                                                                               | false                             |
| align               | 对齐方式                                                              | string                                  | left / center / right                                                                                                           | left                              |
| headerAlign         | 表头对齐方式                                                          | string                                  | left / center / right                                                                                                           | 同 align                          |
| className           | 列的 className                                                        | string                                  | -                                                                                                                               | -                                 |
| labelClassName      | 当前列标题的自定义类名                                                | string                                  | -                                                                                                                               | -                                 |
| filters             | 数据过滤的选项                                                        | Array[{ text, value }]                  | -                                                                                                                               | -                                 |
| filterPlacement     | 过滤弹出框的定位                                                      | string                                  | top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end | -                                 |
| filterMultiple      | 数据过滤的选项是否多选                                                | boolean                                 | -                                                                                                                               | true                              |
| filterMethod        | 数据过滤使用的方法                                                    | Function(value, row, column)            | -                                                                                                                               | -                                 |
| filteredValue       | 选中的数据过滤项                                                      | array                                   | -                                                                                                                               | -                                 |
| index               | 自定义索引，只能够在 index 中配置                                     | Function(index) / number                | -                                                                                                                               | -                                 |
| selectable          | 这一行的 CheckBox 是否可以勾选，只能够在 selection 中配置             | Function(row, index)                    | -                                                                                                                               | -                                 |
| reserveSelection    | 是否保留之前选中的数据（需指定 `row-key`），只能够在 selection 中配置 | boolean                                 | -                                                                                                                               | false                             |

### 事件

| 事件名             | 说明                                                                                                                                         | 参数                              |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| load               | pageSize 和 currentPage 改变时会触发                                                                                                         | -                                 |
| select             | 当用户手动勾选数据行的 Checkbox 时触发的事件                                                                                                 | selection, row                    |
| select-all         | 当用户手动勾选全选 Checkbox 时触发的事件                                                                                                     | selection                         |
| selection-change   | 当选择项发生变化时会触发该事件                                                                                                               | selection                         |
| cell-mouse-enter   | 当单元格 hover 进入时会触发该事件                                                                                                            | row, column, cell, event          |
| cell-mouse-leave   | 当单元格 hover 退出时会触发该事件                                                                                                            | row, column, cell, event          |
| cell-click         | 当某个单元格被点击时会触发该事件                                                                                                             | row, column, cell, event          |
| cell-dblclick      | 当某个单元格被双击击时会触发该事件                                                                                                           | row, column, cell, event          |
| row-click          | 当某一行被点击时会触发该事件                                                                                                                 | row, column, event                |
| row-contextmenu    | 当某一行被鼠标右键点击时会触发该事件                                                                                                         | row, column, event                |
| row-dblclick       | 当某一行被双击时会触发该事件                                                                                                                 | row, column, event                |
| header-click       | 当某一列的表头被点击时会触发该事件                                                                                                           | column, event                     |
| header-contextmenu | 当某一列的表头被鼠标右键点击时触发该事件                                                                                                     | column, event                     |
| sort-change        | 当表格的排序条件发生变化的时候会触发该事件                                                                                                   | { column, prop, order }           |
| filter-change      | 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。 | filters                           |
| current-change     | 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性                                          | currentRow, oldCurrentRow         |
| header-dragend     | 当拖动表头改变了列的宽度的时候会触发该事件                                                                                                   | newWidth, oldWidth, column, event |
| expand-change      | 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）                     | row, (expandedRows \| expanded)   |

### 方法

| 方法名             | 说明                                                                                                                    | 参数                        |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| clearSelection     | 用于多选表格，清空用户的选择                                                                                            | -                           |
| toggleRowSelection | 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）             | row, selected               |
| toggleAllSelection | 用于多选表格，切换全选和全不选                                                                                          | -                           |
| toggleRowExpansion | 用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开） | row, expanded               |
| setCurrentRow      | 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。                                    | row                         |
| clearSort          | 用于清空排序条件，数据会恢复成未排序的状态                                                                              | -                           |
| clearFilter        | 不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由 columnKey 组成的数组以清除指定列的过滤条件       | columnKey                   |
| doLayout           | 对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法                                      | -                           |
| sort               | 手动对 Table 进行排序。参数`prop`属性指定排序列，`order`指定排序顺序。                                                  | prop: string, order: string |

### 插槽

| 名称                | 说明                                                     |
| :------------------ | :------------------------------------------------------- |
| -                   | 在右侧菜单前插入的任意内容                               |
| menu                | 表格右侧自定义按钮，参数为 { size, row, column, $index } |
| expand              | 当前这列展开显示的内容，参数为 { row, column, $index }   |
| append              | 插入至表格最后一行之后的内容                             |
| table-[prop]        | 当前这列的内容，参数为 { size, row, column, $index }     |
| table-[prop]-header | 当前这列表头的内容，参数为 { size, column, $index }      |

::: tip 提示
[prop] 为 columns 中定义的 prop
:::
