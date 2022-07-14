---
title: TreeSelect
meta:
  - name: description
    content: When there are deep of options, use tree selectors is more suitable than ordinary select
---

# TreeSelect

> When there are deep of options, use tree selectors is more suitable than ordinary select

::: tip Tip
You can choose ElTreeSelect instead of this component
:::

## Use

### Basic Use

Set `data` attribute will automatic generate options (same like Select Group)

::: demo
@/demo/TreeSelect/base.vue
:::

### Disabled State

Set the `disabled` attribute in prop `data`

::: demo
@/demo/TreeSelect/disabled.vue
:::

### Configure binding data key

Set `config` attribute. `value`- v-model bind key; `label`- display key; `disabled`- Disabled key; `children`- children key

::: demo
@/demo/TreeSelect/config.vue
:::

### Basic multiple select

Set `multiple` attribute to enable multiple mode. In this case, the value of v-model will be an array of selected options

::: demo
@/demo/TreeSelect/multiple.vue
:::

### Hide extra tags

You can collapse tags to a text by using `collapse-tags` attribute. You can check them when mouse hover collapse text by using `collapse-tags-tooltip` attribute.

::: demo
@/demo/TreeSelect/collapse-tags.vue
:::

### Disabled State on multiple select

Same like default select. Set the `disabled` attribute in prop `data`

::: demo
@/demo/TreeSelect/multiple-disabled.vue
:::

### Check Strictly

Set `check-strictly` attribute to checked state of a node not affects its father and child nodes

::: demo
@/demo/TreeSelect/check-strictly.vue
:::

### Only Select Leaf

Set `only-select-leaf` attribute to only the data of child nodes will be selected

::: demo
@/demo/TreeSelect/only-select-leaf.vue
:::

### Custom node content

Use `default` slot to enable custom node content. **Note: In the single select mode, you need to refer to the following content to customize the class to achieve control disabled item styles**

::: demo
@/demo/TreeSelect/slots.vue
:::

### Tree node filtering

Set `filterable` attribute to enable node filtering. Enter text in the input, the content of the tree node will be filtered

::: demo
@/demo/TreeSelect/filterable.vue
:::

### Lazy Mode

Same like `ElTree`, set `lazy` and `load` attribute to enable lazy mode

::: demo
@/demo/TreeSelect/lazy.vue
:::

### Props

| Name                  | Description                                                                                                                                                                                                                                                                                                                                                                 | Type                                   | Options                           | Default                                                                        |
| :-------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------- | :-------------------------------- | :----------------------------------------------------------------------------- |
| v-model               | binding value                                                                                                                                                                                                                                                                                                                                                               | array                                  | -                                 | -                                                                              |
| data                  | binding data                                                                                                                                                                                                                                                                                                                                                                | array                                  | -                                 | -                                                                              |
| config                | config the key of data                                                                                                                                                                                                                                                                                                                                                      | object                                 | -                                 | { value: 'value', label: 'label', disabled: 'disabled', children: 'children' } |
| multiple              | whether multiple-select is activated                                                                                                                                                                                                                                                                                                                                        | boolean                                | -                                 | false                                                                          |
| disabled              | whether disabled                                                                                                                                                                                                                                                                                                                                                            | boolean                                | -                                 | false                                                                          |
| size                  | component size                                                                                                                                                                                                                                                                                                                                                              | string                                 | large / default /small            | -                                                                              |
| clearable             | whether clearable                                                                                                                                                                                                                                                                                                                                                           | boolean                                | -                                 | false                                                                          |
| collapse-tags         | whether to collapse tags to a text when multiple selecting                                                                                                                                                                                                                                                                                                                  | boolean                                | -                                 | false                                                                          |
| collapse-tags-tooltip | whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true                                                                                                                                                                                                                                                            | boolean                                | -                                 | false                                                                          |
| name                  | the name attribute of select input                                                                                                                                                                                                                                                                                                                                          | string                                 | -                                 | -                                                                              |
| autocomplete          | the autocomplete attribute of select input                                                                                                                                                                                                                                                                                                                                  | string                                 | on / off                          | off                                                                            |
| placeholder           | placeholder                                                                                                                                                                                                                                                                                                                                                                 | string                                 | -                                 | Select                                                                         |
| only-select-leaf      | whether to select only child leaf                                                                                                                                                                                                                                                                                                                                           | boolean                                | -                                 | false                                                                          |
| filterable            | whether Select is filterable                                                                                                                                                                                                                                                                                                                                                | boolean                                | -                                 | false                                                                          |
| reserve-keyword       | when `multiple` and `filter` is true, whether to reserve current keyword after selecting an option                                                                                                                                                                                                                                                                          | boolean                                | -                                 | false                                                                          |
| teleported            | whether select dropdown is teleported to the body                                                                                                                                                                                                                                                                                                                           | boolean                                | -                                 | true                                                                           |
| automatic-dropdown    | for non-filterable Select, this prop decides if the option menu pops up when the input is focused                                                                                                                                                                                                                                                                           | boolean                                | -                                 | false                                                                          |
| clear-icon            | Custom clear icon class                                                                                                                                                                                                                                                                                                                                                     | string / Component                     | -                                 | CircleClose                                                                    |
| fit-input-width       | whether the width of the dropdown is the same as the input                                                                                                                                                                                                                                                                                                                  | boolean                                | —                                 | false                                                                          |
| suffix-icon           | Custom suffix icon component                                                                                                                                                                                                                                                                                                                                                | string / Component                     | —                                 | ArrowUp                                                                        |
| tag-type              | tag type                                                                                                                                                                                                                                                                                                                                                                    | string                                 | success / info / warning / danger | info                                                                           |
| render-after-expand   | whether to render child nodes only after a parent node is expanded for the first time                                                                                                                                                                                                                                                                                       | boolean                                | —                                 | true                                                                           |
| load                  | method for loading subtree data, only works when `lazy` is true                                                                                                                                                                                                                                                                                                             | function(node, resolve)                | —                                 | —                                                                              |
| render-content        | render function for tree node                                                                                                                                                                                                                                                                                                                                               | Function(h, { node, data, store })     | —                                 | —                                                                              |
| default-expand-all    | whether to expand all nodes by default                                                                                                                                                                                                                                                                                                                                      | boolean                                | —                                 | false                                                                          |
| expand-on-click-node  | whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon.                                                                                                                                                                                                                                  | boolean                                | —                                 | true                                                                           |
| check-on-click-node   | whether to check or uncheck node when clicking on the node, if false, the node can only be checked or unchecked by clicking on the checkbox.                                                                                                                                                                                                                                | boolean                                | —                                 | false                                                                          |
| auto-expand-parent    | whether to expand father node when a child node is expanded                                                                                                                                                                                                                                                                                                                 | boolean                                | —                                 | true                                                                           |
| default-expanded-keys | array of keys of initially expanded nodes                                                                                                                                                                                                                                                                                                                                   | array                                  | —                                 | —                                                                              |
| check-strictly        | whether checked state of a node not affects its father and child nodes when `show-checkbox` is `true`                                                                                                                                                                                                                                                                       | boolean                                | —                                 | false                                                                          |
| filter-node-method    | this function will be executed on each node when use filter method. if return `false`, tree node will be hidden.                                                                                                                                                                                                                                                            | Function(value, data, node)            | —                                 | —                                                                              |
| accordion             | whether only one node among the same level can be expanded at one time                                                                                                                                                                                                                                                                                                      | boolean                                | —                                 | false                                                                          |
| indent                | horizontal indentation of nodes in adjacent levels in pixels                                                                                                                                                                                                                                                                                                                | number                                 | —                                 | 16                                                                             |
| icon-class            | custome tree node icon                                                                                                                                                                                                                                                                                                                                                      | string                                 | -                                 | -                                                                              |
| lazy                  | whether to lazy load leaf node, used with `load` attribute                                                                                                                                                                                                                                                                                                                  | boolean                                | —                                 | false                                                                          |
| draggable             | whether enable tree nodes drag and drop                                                                                                                                                                                                                                                                                                                                     | boolean                                | —                                 | false                                                                          |
| allow-drag            | this function will be executed before dragging a node. If `false` is returned, the node can not be dragged                                                                                                                                                                                                                                                                  | Function(node)                         | —                                 | —                                                                              |
| allow-drop            | this function will be executed before the dragging node is dropped. If `false` is returned, the dragging node can not be dropped at the target node. `type` has three possible values: 'prev' (inserting the dragging node before the target node), 'inner' (inserting the dragging node to the target node) and 'next' (inserting the dragging node after the target node) | Function(draggingNode, dropNode, type) | —                                 | —                                                                              |
| validate-event        | whether to trigger form validation                                                                                                                                                                                                                                                                                                                                          | boolean                                | -                                 | true                                                                           |

### Events

| Name             | Description                                                   | Parameters                                                                                                                                                                                       |
| ---------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| change           | triggers when the selected value changes                      | current selected value                                                                                                                                                                           |
| visible-change   | triggers when the dropdown appears/disappears                 | true when it appears, and false otherwise                                                                                                                                                        |
| remove-tag       | triggers when a tag is removed in multiple mode               | removed tag value                                                                                                                                                                                |
| clear            | triggers when the clear icon is clicked in a clearable Select | —                                                                                                                                                                                                |
| blur             | triggers when Input blurs                                     | (event: Event)                                                                                                                                                                                   |
| focus            | triggers when Input focuses                                   | (event: Event)                                                                                                                                                                                   |
| node-click       | triggers when a node is clicked                               | three parameters: node object corresponding to the node clicked, `node` property of TreeNode, TreeNode itself                                                                                    |
| node-contextmenu | triggers when a node is clicked by right button               | four parameters: event, node object corresponding to the node clicked, `node` property of TreeNode, TreeNode itself                                                                              |
| check-change     | triggers when the selected state of the node changes          | three parameters: node object corresponding to the node whose selected state is changed, whether the node is selected, whether node's subtree has selected nodes                                 |
| check            | triggers after clicking the checkbox of a node                | two parameters: node object corresponding to the node that is checked / unchecked, tree checked status object which has four props: checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys |
| current-change   | triggers when current node changes                            | two parameters: node object corresponding to the current node, `node` property of TreeNode                                                                                                       |
| node-expand      | triggers when current node open                               | three parameters: node object corresponding to the node opened, `node` property of TreeNode, TreeNode itself                                                                                     |
| node-collapse    | triggers when current node close                              | three parameters: node object corresponding to the node closed, `node` property of TreeNode, TreeNode itself                                                                                     |
| node-drag-start  | triggers when dragging starts                                 | two parameters: node object corresponding to the dragging node, event.                                                                                                                           |
| node-drag-enter  | triggers when the dragging node enters another node           | three parameters: node object corresponding to the dragging node, node object corresponding to the entering node, event.                                                                         |
| node-drag-leave  | triggers when the dragging node leaves a node                 | three parameters: node object corresponding to the dragging node, node object corresponding to the leaving node, event.                                                                          |
| node-drag-over   | triggers when dragging over a node (like mouseover event)     | three parameters: node object corresponding to the dragging node, node object corresponding to the dragging over node, event.                                                                    |
| node-drag-end    | triggers when dragging ends                                   | four parameters: node object corresponding to the dragging node, node object corresponding to the dragging end node (may be `undefined`), node drop type (before / after / inner), event.        |
| node-drop        | triggers after the dragging node is dropped                   | four parameters: node object corresponding to the dragging node, node object corresponding to the dropped node, node drop type (before / after / inner), event.                                  |

### Slots

| Name | Description                                                                    |
| ---- | ------------------------------------------------------------------------------ |
| -    | Custom content for tree nodes. The scope parameter is { node, item, multiple } |
