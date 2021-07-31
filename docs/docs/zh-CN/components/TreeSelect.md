---
title: TreeSelect
meta:
  - name: description
    content: 当选项的层级多深时，使用树形选择器比普通选择器更适合
---

# TreeSelect

> 当选项的层级多深时，使用树形选择器比普通选择器更适合

## 使用

### 基础用法

::: demo 传入 data 数据，生成树形结构 (格式同 Select 分组)

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

### 控制不可选项目

::: demo 将传入 data 数据中的某项设置为 `disabled: true` 即可

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

### 配置绑定数据键值

::: demo 通过 config 配置数据键值。`value`- v-model 绑定的键值、`label`-显示键值、`disabled`-控制不可选的键值、`children`-子节点的键值

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

### 开启多选

::: demo 当 `multiple` 为 `true` 时，启用多选。此时绑定的 model-value 为数组格式

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

### 多选控制不可选项目

::: demo 同单选只需将传入 data 数据中的某项设置为 `disabled: true` 即可

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

### 多选父子节点互不关联

::: demo 当 `check-strictly` 为 `true` 时，父子节点互不关联

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

### 只选取子节点

::: demo 当 `only-select-leaf` 为 `true` 时，只会选取子节点的数据

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

### 自定义节点显示

::: demo 通过 `default` 插槽可以定义内容。**注意：在单选模式下需要参考下面内容自定义 class 实现控制不可选项目样式**

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

### 选择节点过滤

::: demo 当 `filterable` 为 `true` 时，启用选择节点过滤。在选择框中输入文本，将过滤节点内容

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

### 懒加载

::: demo 与 `ElTree` 一样，配置 `lazy` `load` 即可使用懒加载数据

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

### 配置

| 参数                  | 说明                                                                                                                                       | 类型                                   | 可选值                | 默认值                                                                         |
| :-------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------- | :-------------------- | :----------------------------------------------------------------------------- |
| v-model               | 绑定值                                                                                                                                     | string / array                         | -                     | -                                                                              |
| data                  | 绑定数据                                                                                                                                   | array                                  | -                     | -                                                                              |
| config                | 配置绑定数据键值                                                                                                                           | object                                 | -                     | { value: 'value', label: 'label', disabled: 'disabled', children: 'children' } |
| multiple              | 是否多选                                                                                                                                   | boolean                                | -                     | false                                                                          |
| disabled              | 是否禁用                                                                                                                                   | boolean                                | -                     | false                                                                          |
| size                  | 尺寸                                                                                                                                       | string                                 | medium / small / mini | -                                                                              |
| clearable             | 是否可以清空选项                                                                                                                           | boolean                                | -                     | false                                                                          |
| collapse-tags         | 多选时是否将选中值按文字的形式展示                                                                                                         | boolean                                | -                     | false                                                                          |
| name                  | select input 的 name 属性                                                                                                                  | string                                 | -                     | -                                                                              |
| autocomplete          | select input 的 autocomplete 属性                                                                                                          | string                                 | on / off              | off                                                                            |
| placeholder           | 占位符                                                                                                                                     | string                                 | -                     | 请选择                                                                         |
| only-select-leaf      | 是否只选取子节点                                                                                                                           | boolean                                | -                     | false                                                                          |
| filterable            | 是否可过滤树形                                                                                                                             | boolean                                | -                     | false                                                                          |
| reserve-keyword       | 多选且可过滤时，是否在选中一个选项后保留当前的搜索关键词                                                                                   | boolean                                | -                     | false                                                                          |
| popper-append-to-body | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false                                                             | boolean                                | -                     | false                                                                          |
| automatic-dropdown    | 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单                                                                              | boolean                                | -                     | false                                                                          |
| clear-icon            | 自定义清空图标的类名                                                                                                                       | string                                 | -                     | el-icon-circle-close                                                           |
| render-after-expand   | 是否在第一次展开某个树节点后才渲染其子节点                                                                                                 | boolean                                | -                     | true                                                                           |
| load                  | 加载子树数据的方法，仅当 lazy 属性为 true 时生效                                                                                           | function(node, resolve)                | -                     | -                                                                              |
| render-content        | 树节点的内容区的渲染 Function                                                                                                              | Function(h, { node, data, store }      | -                     | -                                                                              |
| default-expand-all    | 是否默认展开所有节点                                                                                                                       | boolean                                | -                     | false                                                                          |
| expand-on-click-node  | 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。                           | boolean                                | -                     | true                                                                           |
| check-on-click-node   | 是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。                                                           | boolean                                | -                     | false                                                                          |
| auto-expand-parent    | 展开子节点的时候是否自动展开父节点                                                                                                         | boolean                                | -                     | true                                                                           |
| check-strictly        | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false                                                                     | boolean                                | -                     | false                                                                          |
| filter-node-method    | 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏                                            | Function(value, data, node)            | -                     | -                                                                              |
| accordion             | 是否每次只打开一个同级树节点展开                                                                                                           | boolean                                | -                     | false                                                                          |
| indent                | 相邻级节点间的水平缩进，单位为像素                                                                                                         | number                                 | -                     | 16                                                                             |
| icon-class            | 自定义树节点的图标                                                                                                                         | string                                 | -                     | -                                                                              |
| lazy                  | 是否懒加载子节点，需与 load 方法结合使用                                                                                                   | boolean                                | -                     | false                                                                          |
| draggable             | 是否开启拖拽节点功能                                                                                                                       | boolean                                | -                     | false                                                                          |
| allow-drag            | 判断节点能否被拖拽                                                                                                                         | Function(node)                         | -                     | -                                                                              |
| allow-drop            | 拖拽时判定目标节点能否被放置。`type` 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后 | Function(draggingNode, dropNode, type) | -                     | -                                                                              |

### 事件

| 名称             | 说明                                                  | 回调参数                                                                                                                                                           |
| ---------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| change           | 选中值发生变化时触发                                  | 目前的选中值                                                                                                                                                       |
| visible-change   | 下拉框出现/隐藏时触发                                 | 出现则为 true，隐藏则为 false                                                                                                                                      |
| remove-tag       | 多选模式下移除 tag 时触发                             | 移除的 tag 值                                                                                                                                                      |
| clear            | 可清空的单选模式下用户点击清空按钮时触发              | -                                                                                                                                                                  |
| blur             | 当 input 失去焦点时触发                               | (event: Event)                                                                                                                                                     |
| focus            | 当 input 获得焦点时触发                               | (event: Event)                                                                                                                                                     |
| node-click       | 节点被点击时的回调                                    | 共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。                                                                  |
| node-contextmenu | 当某一节点被鼠标右键点击时会触发该事件                | 共四个参数，依次为：event、传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。                                                           |
| check-change     | 节点选中状态发生变化时的回调                          | 共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点                                               |
| check            | 当复选框被点击的时候触发                              | 共两个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性 |
| current-change   | 当前选中节点变化时触发的事件                          | 共两个参数，依次为：当前节点的数据，当前节点的 Node 对象                                                                                                           |
| node-expand      | 节点被展开时触发的事件                                | 共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身                                                                    |
| node-collapse    | 节点被关闭时触发的事件                                | 共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身                                                                    |
| node-drag-start  | 节点开始拖拽时触发的事件                              | 共两个参数，依次为：被拖拽节点对应的 Node、event                                                                                                                   |
| node-drag-enter  | 拖拽进入其他节点时触发的事件                          | 共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event                                                                                            |
| node-drag-leave  | 拖拽离开某个节点时触发的事件                          | 共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event                                                                                            |
| node-drag-over   | 在拖拽节点时触发的事件（类似浏览器的 mouseover 事件） | 共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event                                                                                          |
| node-drag-end    | 拖拽结束时（可能未成功）触发的事件                    | 共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、after、inner）、event                               |
| node-drop        | 拖拽成功完成时触发的事件                              | 共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event                                           |

### 插槽

| 名称 | 说明                                                |
| ---- | --------------------------------------------------- |
| -    | 自定义树节点的内容，参数为 { node, data, multiple } |
