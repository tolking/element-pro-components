---
title: TreeSelect
meta:
  - name: description
    content: When there are deep of options, use tree selectors is more suitable than ordinary select
---

# TreeSelect

> When there are deep of options, use tree selectors is more suitable than ordinary select

## Use

### Basic Use

::: demo Set `data` attribute will automatic generate options (same like Select Group)

<template>
  <pro-tree-select
    v-model="select"
    :data="data"
    clearable
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const select = ref('')
    const data = ref([{
      label: '1',
      value: 1,
      children: [{
        value: 11,
        label: '1-1',
        children: [
          { value: 111, label: '1-1-1' },
        ],
      }],
    }, {
      value: 2,
      label: '2',
      children: [{
        value: 21,
        label: '2-1',
        children: [
          { value: 211, label: '2-1-1' },
        ],
      }, {
        value: 22,
        label: '2-2',
        children: [
          { value: 221, label: '2-2-1' },
        ],
      }],
    }, {
      value: 3,
      label: '3',
      children: [{
        value: 31,
        label: '3-1',
        children: [
          { value: 311, label: '3-1-1' },
        ],
      }, {
        value: 32,
        label: '3-2',
        children: [
          { value: 321, label: '3-2-1' },
        ],
      }],
    }])

    return {
      select,
      data,
    }
  }
}
</script>

:::

### Disabled State

::: demo Set the `disabled` attribute in prop `data`

<template>
  <pro-tree-select
    v-model="select1"
    :data="data1"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const select1 = ref('')
    const data1 = ref([{
      label: '1',
      value: 1,
      disabled: true,
      children: [{
        value: 11,
        label: '1-1',
        children: [
          { value: 111, label: '1-1-1' },
        ],
      }],
    }, {
      value: 2,
      label: '2',
      children: [{
        value: 21,
        label: '2-1',
        disabled: true,
        children: [
          { value: 211, label: '2-1-1' },
        ],
      }, {
        value: 22,
        label: '2-2',
        children: [
          { value: 221, label: '2-2-1', disabled: true },
        ],
      }],
    }, {
      value: 3,
      label: '3',
      children: [{
        value: 31,
        label: '3-1',
        children: [
          { value: 311, label: '3-1-1' },
        ],
      }, {
        value: 32,
        label: '3-2',
        children: [
          { value: 321, label: '3-2-1', disabled: true },
        ],
      }],
    }])

    return {
      select1,
      data1,
    }
  }
}
</script>

:::

### Configure binding data key

::: demo Set `config` attribute. `value`- v-model bind key; `label`- display key; `disabled`- Disabled key; `children`- children key

<template>
  <pro-tree-select
    v-model="select2"
    :data="data"
    :config="config"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const select2 = ref('')
    const config = ref({ value: 'label', label: 'value' })
    const data = ref([{
      label: '1',
      value: 1,
      children: [{
        value: 11,
        label: '1-1',
        children: [
          { value: 111, label: '1-1-1' },
        ],
      }],
    }, {
      value: 2,
      label: '2',
      children: [{
        value: 21,
        label: '2-1',
        children: [
          { value: 211, label: '2-1-1' },
        ],
      }, {
        value: 22,
        label: '2-2',
        children: [
          { value: 221, label: '2-2-1' },
        ],
      }],
    }, {
      value: 3,
      label: '3',
      children: [{
        value: 31,
        label: '3-1',
        children: [
          { value: 311, label: '3-1-1' },
        ],
      }, {
        value: 32,
        label: '3-2',
        children: [
          { value: 321, label: '3-2-1' },
        ],
      }],
    }])

    return {
      select2,
      data,
    }
  }
}
</script>

:::

### Basic multiple select

::: demo Set `multiple` attribute to enable multiple mode. In this case, the value of v-model will be an array of selected options

<template>
  <pro-tree-select
    v-model="select3"
    :data="data"
    multiple
    clearable
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const select3 = ref([])
    const data = ref([{
      label: '1',
      value: 1,
      children: [{
        value: 11,
        label: '1-1',
        children: [
          { value: 111, label: '1-1-1' },
        ],
      }],
    }, {
      value: 2,
      label: '2',
      children: [{
        value: 21,
        label: '2-1',
        children: [
          { value: 211, label: '2-1-1' },
        ],
      }, {
        value: 22,
        label: '2-2',
        children: [
          { value: 221, label: '2-2-1' },
        ],
      }],
    }, {
      value: 3,
      label: '3',
      children: [{
        value: 31,
        label: '3-1',
        children: [
          { value: 311, label: '3-1-1' },
        ],
      }, {
        value: 32,
        label: '3-2',
        children: [
          { value: 321, label: '3-2-1' },
        ],
      }],
    }])

    return {
      select3,
      data,
    }
  }
}
</script>

:::

### Disabled State on multiple select

::: demo Same like default select. Set the `disabled` attribute in prop `data`

<template>
  <pro-tree-select
    v-model="select4"
    :data="data1"
    multiple
    default-expand-all
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const select4 = ref([])
    const data1 = ref([{
      label: '1',
      value: 1,
      disabled: true,
      children: [{
        value: 11,
        label: '1-1',
        children: [
          { value: 111, label: '1-1-1' },
        ],
      }],
    }, {
      value: 2,
      label: '2',
      children: [{
        value: 21,
        label: '2-1',
        disabled: true,
        children: [
          { value: 211, label: '2-1-1' },
        ],
      }, {
        value: 22,
        label: '2-2',
        children: [
          { value: 221, label: '2-2-1', disabled: true },
        ],
      }],
    }, {
      value: 3,
      label: '3',
      children: [{
        value: 31,
        label: '3-1',
        children: [
          { value: 311, label: '3-1-1' },
        ],
      }, {
        value: 32,
        label: '3-2',
        children: [
          { value: 321, label: '3-2-1', disabled: true },
        ],
      }],
    }])

    return {
      select4,
      data1,
    }
  }
}
</script>

:::

### Check Strictly

::: demo Set `check-strictly` attribute to checked state of a node not affects its father and child nodes

<template>
  <pro-tree-select
    v-model="select5"
    :data="data"
    multiple
    check-strictly
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const select5 = ref([])
    const data = ref([{
      label: '1',
      value: 1,
      children: [{
        value: 11,
        label: '1-1',
        children: [
          { value: 111, label: '1-1-1' },
        ],
      }],
    }, {
      value: 2,
      label: '2',
      children: [{
        value: 21,
        label: '2-1',
        children: [
          { value: 211, label: '2-1-1' },
        ],
      }, {
        value: 22,
        label: '2-2',
        children: [
          { value: 221, label: '2-2-1' },
        ],
      }],
    }, {
      value: 3,
      label: '3',
      children: [{
        value: 31,
        label: '3-1',
        children: [
          { value: 311, label: '3-1-1' },
        ],
      }, {
        value: 32,
        label: '3-2',
        children: [
          { value: 321, label: '3-2-1' },
        ],
      }],
    }])

    return {
      select5,
      data,
    }
  }
}
</script>

:::

### Only Select Leaf

::: demo Set `only-select-leaf` attribute to only the data of child nodes will be selected

<template>
  <pro-tree-select
    v-model="select6"
    :data="data"
    multiple
    only-select-leaf
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const select6 = ref([])
    const data = ref([{
      label: '1',
      value: 1,
      children: [{
        value: 11,
        label: '1-1',
        children: [
          { value: 111, label: '1-1-1' },
        ],
      }],
    }, {
      value: 2,
      label: '2',
      children: [{
        value: 21,
        label: '2-1',
        children: [
          { value: 211, label: '2-1-1' },
        ],
      }, {
        value: 22,
        label: '2-2',
        children: [
          { value: 221, label: '2-2-1' },
        ],
      }],
    }, {
      value: 3,
      label: '3',
      children: [{
        value: 31,
        label: '3-1',
        children: [
          { value: 311, label: '3-1-1' },
        ],
      }, {
        value: 32,
        label: '3-2',
        children: [
          { value: 321, label: '3-2-1' },
        ],
      }],
    }])

    return {
      select6,
      data,
    }
  }
}
</script>

:::

### Custom node content

::: demo Use `default` slot to enable custom node content. **Note: In the single select mode, you need to refer to the following content to customize the class to achieve control disabled item styles**

<template>
  <pro-tree-select
    v-model="select7"
    :data="data1"
  >
    <template #default="{ node, data, multiple }">
      <p
        :class="node.disabled && !multiple ? 'is-disabled' : ''"
        class="custom-tree-node"
      >
        <span>{{ data.label }}</span>
        <em>{{ data.value }}</em>
      </p>
    </template>
  </pro-tree-select>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const select7 = ref('')
    const data1 = ref([{
      label: '1',
      value: 1,
      disabled: true,
      children: [{
        value: 11,
        label: '1-1',
        children: [
          { value: 111, label: '1-1-1' },
        ],
      }],
    }, {
      value: 2,
      label: '2',
      children: [{
        value: 21,
        label: '2-1',
        disabled: true,
        children: [
          { value: 211, label: '2-1-1' },
        ],
      }, {
        value: 22,
        label: '2-2',
        children: [
          { value: 221, label: '2-2-1', disabled: true },
        ],
      }],
    }, {
      value: 3,
      label: '3',
      children: [{
        value: 31,
        label: '3-1',
        children: [
          { value: 311, label: '3-1-1' },
        ],
      }, {
        value: 32,
        label: '3-2',
        children: [
          { value: 321, label: '3-2-1', disabled: true },
        ],
      }],
    }])

    return {
      select7,
      data1,
    }
  }
}
</script>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.custom-tree-node em {
  padding-right: 15px;
}
</style>

:::

### Tree node filtering

::: demo Set `filterable` attribute to enable node filtering. Enter text in the input, the content of the tree node will be filtered

<template>
  <pro-tree-select
    v-model="select8"
    :data="data"
    multiple
    filterable
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const select8 = ref([])
    const data = ref([{
      label: '1',
      value: 1,
      children: [{
        value: 11,
        label: '1-1',
        children: [
          { value: 111, label: '1-1-1' },
        ],
      }],
    }, {
      value: 2,
      label: '2',
      children: [{
        value: 21,
        label: '2-1',
        children: [
          { value: 211, label: '2-1-1' },
        ],
      }, {
        value: 22,
        label: '2-2',
        children: [
          { value: 221, label: '2-2-1' },
        ],
      }],
    }, {
      value: 3,
      label: '3',
      children: [{
        value: 31,
        label: '3-1',
        children: [
          { value: 311, label: '3-1-1' },
        ],
      }, {
        value: 32,
        label: '3-2',
        children: [
          { value: 321, label: '3-2-1' },
        ],
      }],
    }])

    return {
      select8,
      data,
    }
  }
}
</script>

:::

### Lazy Mode

::: demo Same like `ElTree`, set `lazy` and `load` attribute to enable lazy mode

<template>
  <pro-tree-select
    v-model="select9"
    :data="data2"
    :load="loadNode"
    lazy
    multiple
    filterable
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const select9 = ref([])
    const data2 = []

    function loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{
          label: 'region',
          value: 'region',
          isLeaf: true,
        }])
      }
      if (node.level > 2) return resolve([])

      setTimeout(() => {
        const data = [{
          label: 'leaf-' + node.level,
          value: 'leaf-' + node.level,
          isLeaf: node.level <= 2,
        }, {
          label: 'zone-' + node.level,
          value: 'zone-' + node.level,
        }]
        resolve(data)
      }, 500)
    }

    return {
      select9,
      data2,
      loadNode,
    }
  }
}
</script>

:::

### Props

| Name                  | Description                                                                                                                                                                                                                                                                                                                                                                 | Type                                   | Options               | Default                                                                        |
| :-------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------- | :-------------------- | :----------------------------------------------------------------------------- |
| v-model               | binding value                                                                                                                                                                                                                                                                                                                                                               | array                                  | -                     | -                                                                              |
| data                  | binding data                                                                                                                                                                                                                                                                                                                                                                | array                                  | -                     | -                                                                              |
| config                | config the key of data                                                                                                                                                                                                                                                                                                                                                      | object                                 | -                     | { value: 'value', label: 'label', disabled: 'disabled', children: 'children' } |
| multiple              | whether multiple-select is activated                                                                                                                                                                                                                                                                                                                                        | boolean                                | -                     | false                                                                          |
| disabled              | whether disabled                                                                                                                                                                                                                                                                                                                                                            | boolean                                | -                     | false                                                                          |
| size                  | component size                                                                                                                                                                                                                                                                                                                                                              | string                                 | medium / small / mini | -                                                                              |
| clearable             | whether clearable                                                                                                                                                                                                                                                                                                                                                           | boolean                                | -                     | false                                                                          |
| collapse-tags         | whether to collapse tags to a text when multiple selecting                                                                                                                                                                                                                                                                                                                  | boolean                                | -                     | false                                                                          |
| name                  | the name attribute of select input                                                                                                                                                                                                                                                                                                                                          | string                                 | -                     | -                                                                              |
| autocomplete          | the autocomplete attribute of select input                                                                                                                                                                                                                                                                                                                                  | string                                 | on / off              | off                                                                            |
| placeholder           | placeholder                                                                                                                                                                                                                                                                                                                                                                 | string                                 | -                     | Select                                                                         |
| only-select-leaf      | whether to select only child leaf                                                                                                                                                                                                                                                                                                                                           | boolean                                | -                     | false                                                                          |
| filterable            | whether Select is filterable                                                                                                                                                                                                                                                                                                                                                | boolean                                | -                     | false                                                                          |
| reserve-keyword       | when `multiple` and `filter` is true, whether to reserve current keyword after selecting an option                                                                                                                                                                                                                                                                          | boolean                                | -                     | false                                                                          |
| popper-append-to-body | whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false                                                                                                                                                                                                                                                 | boolean                                | -                     | false                                                                          |
| automatic-dropdown    | for non-filterable Select, this prop decides if the option menu pops up when the input is focused                                                                                                                                                                                                                                                                           | boolean                                | -                     | false                                                                          |
| clear-icon            | Custom clear icon class                                                                                                                                                                                                                                                                                                                                                     | string                                 | -                     | el-icon-circle-close                                                           |
| render-after-expand   | whether to render child nodes only after a parent node is expanded for the first time                                                                                                                                                                                                                                                                                       | boolean                                | —                     | true                                                                           |
| load                  | method for loading subtree data, only works when `lazy` is true                                                                                                                                                                                                                                                                                                             | function(node, resolve)                | —                     | —                                                                              |
| render-content        | render function for tree node                                                                                                                                                                                                                                                                                                                                               | Function(h, { node, data, store })     | —                     | —                                                                              |
| default-expand-all    | whether to expand all nodes by default                                                                                                                                                                                                                                                                                                                                      | boolean                                | —                     | false                                                                          |
| expand-on-click-node  | whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon.                                                                                                                                                                                                                                  | boolean                                | —                     | true                                                                           |
| check-on-click-node   | whether to check or uncheck node when clicking on the node, if false, the node can only be checked or unchecked by clicking on the checkbox.                                                                                                                                                                                                                                | boolean                                | —                     | false                                                                          |
| auto-expand-parent    | whether to expand father node when a child node is expanded                                                                                                                                                                                                                                                                                                                 | boolean                                | —                     | true                                                                           |
| default-expanded-keys | array of keys of initially expanded nodes                                                                                                                                                                                                                                                                                                                                   | array                                  | —                     | —                                                                              |
| check-strictly        | whether checked state of a node not affects its father and child nodes when `show-checkbox` is `true`                                                                                                                                                                                                                                                                       | boolean                                | —                     | false                                                                          |
| filter-node-method    | this function will be executed on each node when use filter method. if return `false`, tree node will be hidden.                                                                                                                                                                                                                                                            | Function(value, data, node)            | —                     | —                                                                              |
| accordion             | whether only one node among the same level can be expanded at one time                                                                                                                                                                                                                                                                                                      | boolean                                | —                     | false                                                                          |
| indent                | horizontal indentation of nodes in adjacent levels in pixels                                                                                                                                                                                                                                                                                                                | number                                 | —                     | 16                                                                             |
| icon-class            | custome tree node icon                                                                                                                                                                                                                                                                                                                                                      | string                                 | -                     | -                                                                              |
| lazy                  | whether to lazy load leaf node, used with `load` attribute                                                                                                                                                                                                                                                                                                                  | boolean                                | —                     | false                                                                          |
| draggable             | whether enable tree nodes drag and drop                                                                                                                                                                                                                                                                                                                                     | boolean                                | —                     | false                                                                          |
| allow-drag            | this function will be executed before dragging a node. If `false` is returned, the node can not be dragged                                                                                                                                                                                                                                                                  | Function(node)                         | —                     | —                                                                              |
| allow-drop            | this function will be executed before the dragging node is dropped. If `false` is returned, the dragging node can not be dropped at the target node. `type` has three possible values: 'prev' (inserting the dragging node before the target node), 'inner' (inserting the dragging node to the target node) and 'next' (inserting the dragging node after the target node) | Function(draggingNode, dropNode, type) | —                     | —                                                                              |

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
| -    | Custom content for tree nodes. The scope parameter is { node, data, multiple } |
