---
title: ColumnSetting
meta:
  - name: description
    content: 控制表格内部列的排序及显隐，配合 Table 或 Crud 使用
---

# ColumnSetting

> 控制表格内部列的排序及显隐，配合 Table 或 Crud 使用

## 使用

### 基础用法

通过 `v-model` 绑定数据，默认点击多选框切换列的显隐，直接拖动实现切换排序

::: demo
@/demo/ColumnSetting/base.vue
:::

### 插槽

通过默认插槽可以配置触发按钮

::: demo
@/demo/ColumnSetting/slots.vue
:::

### 配合 Table

配合 Table 或 Crud 使用才能够发挥其作用

::: demo
@/demo/ColumnSetting/table.vue
:::

### 配合 Crud

推荐通过 `action` 插槽使用，可以绑定 `Crud` 的 `columns` 和 `table-columns`

::: demo
@/demo/ColumnSetting/crud.vue
:::

::: tip 提示
如果 `ColumnSetting` 直接绑定 `Crud` 的 `columns`，排序变动会影响表单组件和搜索组件。通过绑定 `table-columns` 可以单独绑定表格进而避免影响表单组件和搜索组件。
:::

### 点击触发弹窗

通过 `trigger` 控制触发方式，支持 `hover` `click` `contextmenu`-鼠标右键

::: demo
@/demo/ColumnSetting/trigger.vue
:::

### 支持多级表头

支持对多级表头的操作，可以将列拖入或拖出子表头

::: demo
@/demo/ColumnSetting/group.vue
:::

### 配置

| 参数                 | 说明                                                                                                                                       | 类型                                   | 可选值                                                         | 默认值     |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------- | :------------------------------------------------------------- | :--------- |
| v-model              | 绑定 `columns` 值                                                                                                                          | array                                  | -                                                              | -          |
| size                 | 按钮尺寸                                                                                                                                   | string                                 | large / default /small                                         | -          |
| placement            | 菜单弹出位置                                                                                                                               | string                                 | top / top-start / top-end / bottom / bottom-start / bottom-end | bottom-end |
| trigger              | 触发下拉的行为                                                                                                                             | string                                 | hover / click / contextmenu                                    | hover      |
| empty-text           | 内容为空的时候展示的文本                                                                                                                   | string                                 | -                                                              | -          |
| render-after-expand  | 是否在第一次展开某个树节点后才渲染其子节点                                                                                                 | boolean                                | -                                                              | true       |
| highlight-current    | 是否高亮当前选中节点                                                                                                                       | boolean                                | -                                                              | false      |
| default-expand-all   | 是否默认展开所有节点                                                                                                                       | boolean                                | -                                                              | false      |
| expand-on-click-node | 是否在点击节点的时候展开或者收缩节点                                                                                                       | boolean                                | -                                                              | true       |
| check-on-click-node  | 是否在点击节点的时候选中节点                                                                                                               | boolean                                | -                                                              | false      |
| auto-expand-parent   | 展开子节点的时候是否自动展开父节点                                                                                                         | boolean                                | -                                                              | true       |
| filter-node-method   | 对树节点进行筛选时执行的方法，返回 boolean                                                                                                 | Function(value, data, node)            | -                                                              | -          |
| accordion            | 是否每次只打开一个同级树节点展开                                                                                                           | boolean                                | -                                                              | false      |
| indent               | 相邻级节点间的水平缩进，单位为像素                                                                                                         | number                                 | -                                                              | 16         |
| icon                 | 自定义 tree 节点图标组件                                                                                                                   | string /Component                      | -                                                              | -          |
| allow-drag           | 判断节点能否被拖拽                                                                                                                         | Function(node)                         | -                                                              | -          |
| allow-drop           | 拖拽时判定目标节点能否被放置。`type` 参数有三种情况：`prev`、`inner` 和 `next`，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后 | Function(draggingNode, dropNode, type) | -                                                              | -          |

### 插槽

| 插槽名  | 说明                            |
| :------ | :------------------------------ |
| default | 自定义触发按钮，参数为 { size } |
