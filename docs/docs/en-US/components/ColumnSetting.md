---
title: ColumnSetting
meta:
  - name: description
    content: Control the sorting and display of columns in the table, use whit Table or Crud
---

# ColumnSetting

> Control the sorting and display of columns in the table, use whit Table or Crud

## Use

### Use with Table

::: demo Bind data through `v-model`, click the multi-select box to togglen display and hide, and drag it directly to togglen sort
@/demo/ColumnSetting/table.vue
:::

### Use with Crud

::: demo It is recommended to use the `action` slot, bind `columns` or `table-columns` of Crud
@/demo/ColumnSetting/crud.vue
:::

::: tip Tip
If `ColumnSetting` is directly bind `columns` of `Crud`, the sort change will affect the Form and the Search. avoid this problem by bind `table-columns`
:::

### How to trigger

::: demo Use the attribute trigger. By default, it is `hover`. support `hover` `click` `contextmenu`
@/demo/ColumnSetting/trigger.vue
:::

### Grouping table head

::: demo Supports operations on grouping table head, and columns can be dragged into or out of the grouping table head
@/demo/ColumnSetting/group.vue
:::

### Props

| Name                 | Description                                                                                                                                                                                                                                                                                                                                                                 | Type                                   | Options                                                        | Default    |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------- | :------------------------------------------------------------- | :--------- |
| v-model              | binding value of `columns`                                                                                                                                                                                                                                                                                                                                                  | array                                  | -                                                              | -          |
| size                 | button size                                                                                                                                                                                                                                                                                                                                                                 | string                                 | medium / small / mini                                          | -          |
| placement            | placement of pop menu                                                                                                                                                                                                                                                                                                                                                       | string                                 | top / top-start / top-end / bottom / bottom-start / bottom-end | bottom-end |
| trigger              | how to trigger                                                                                                                                                                                                                                                                                                                                                              | string                                 | hover / click / contextmenu                                    | hover      |
| empty-text           | text displayed when data is void                                                                                                                                                                                                                                                                                                                                            | string                                 | -                                                              | -          |
| render-after-expand  | whether to render child nodes only after a parent node is expanded for the first time                                                                                                                                                                                                                                                                                       | boolean                                | -                                                              | true       |
| highlight-current    | whether current node is highlighted                                                                                                                                                                                                                                                                                                                                         | boolean                                | -                                                              | false      |
| default-expand-all   | whether to expand all nodes by default                                                                                                                                                                                                                                                                                                                                      | boolean                                | -                                                              | false      |
| expand-on-click-node | whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon.                                                                                                                                                                                                                                  | boolean                                | -                                                              | true       |
| check-on-click-node  | whether to check or uncheck node when clicking on the node, if false, the node can only be checked or unchecked by clicking on the checkbox.                                                                                                                                                                                                                                | boolean                                | -                                                              | false      |
| auto-expand-parent   | whether to expand father node when a child node is expanded                                                                                                                                                                                                                                                                                                                 | boolean                                | -                                                              | true       |
| filter-node-method   | this function will be executed on each node when use filter method. if return `false`, tree node will be hidden.                                                                                                                                                                                                                                                            | Function(value, data, node)            | -                                                              | -          |
| accordion            | whether only one node among the same level can be expanded at one time                                                                                                                                                                                                                                                                                                      | boolean                                | -                                                              | false      |
| indent               | horizontal indentation of nodes in adjacent levels in pixels                                                                                                                                                                                                                                                                                                                | number                                 | -                                                              | 16         |
| icon-class           | custome tree node icon                                                                                                                                                                                                                                                                                                                                                      | string                                 | -                                                              | -          |
| allow-drag           | this function will be executed before dragging a node. If `false` is returned, the node can not be dragged                                                                                                                                                                                                                                                                  | Function(node)                         | -                                                              | -          |
| allow-drop           | this function will be executed before the dragging node is dropped. If `false` is returned, the dragging node can not be dropped at the target node. `type` has three possible values: 'prev' (inserting the dragging node before the target node), 'inner' (inserting the dragging node to the target node) and 'next' (inserting the dragging node after the target node) | Function(draggingNode, dropNode, type) | -                                                              | -          |
