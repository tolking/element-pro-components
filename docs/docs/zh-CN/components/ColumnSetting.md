---
title: ColumnSetting
meta:
  - name: description
    content: 控制表格内部列的排序及显隐，配合 Table 或 Crud 使用
---

# ColumnSetting

> 控制表格内部列的排序及显隐，配合 Table 或 Crud 使用

## 使用

### 配合 Table

::: demo 通过 `v-model` 绑定数据，默认点击多选框切换列的显隐，直接拖动实现切换排序

<template>
  <pro-column-setting
    v-model="columns"
    style="float:right;margin-bottom:10px"
  />
  <pro-table
    :data="data"
    :columns="columns"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const columns = ref([
      {
        label: '日期',
        prop: 'date',
      },
      {
        label: '姓名',
        prop: 'name',
      },
      {
        label: '地址',
        prop: 'address',
      },
    ])
    const data = ref([
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])

    return {
      data,
      columns,
    }
  }
}
</script>

:::

### 配合 Crud

::: demo 推荐通过 `action` 插槽使用，可以绑定 `Crud` 的 `columns` 和 `table-columns`

<template>
  <pro-crud
    v-model="form"
    v-model:search="serachForm"
    :columns="columns1"
    :menu="{ label: '操作' }"
    :data="data"
    @search="search"
    @submit="submit"
    @delete="deleteRow"
  >
    <template #action>
      <pro-column-setting v-model="columns1" />
    </template>
  </pro-crud>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const form = ref({})
    const serachForm = ref({})
    const columns1 = ref([
      {
        label: '日期',
        prop: 'date',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
      },
      {
        label: '姓名',
        prop: 'name',
        component: 'el-input',
        add: true,
        search: true,
      },
      {
        label: '地址',
        prop: 'address',
        component: 'el-input',
        add: true,
        edit: true,
      },
    ])
    const data = ref([
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])

    const search = (done, isValid, invalidFields) => {
      console.log('search', isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    }

    const submit = (close, done, formType, isValid, invalidFields) => {
      console.log('submit', formType, isValid, invalidFields)
      setTimeout(() => {
        isValid ? close() : done()
      }, 1000)
    }

    const deleteRow = (row) => {
      console.log('deleteRow', row)
    }

    return {
      form,
      serachForm,
      data,
      columns1,
      search,
      submit,
      deleteRow,
    }
  }
}
</script>

:::

::: tip 提示
如果 `ColumnSetting` 直接绑定 `Crud` 的 `columns`，排序变动会影响表单组件和搜索组件。通过绑定 `table-columns` 可以单独绑定表格进而避免影响表单组件和搜索组件。
:::

### 点击触发弹窗

::: demo 通过 `trigger` 控制触发方式，支持 `hover` `click` `contextmenu`-鼠标右键

<template>
  <pro-crud
    v-model="form"
    v-model:search="serachForm"
    :columns="columns2"
    :table-columns="tableColumns"
    :menu="{ label: '操作' }"
    :data="data"
    @search="search"
    @submit="submit"
    @delete="deleteRow"
  >
    <template #action>
      <pro-column-setting v-model="tableColumns" trigger="click" />
    </template>
  </pro-crud>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const form = ref({})
    const serachForm = ref({})
    const columns2 = ref([
      {
        label: '日期',
        prop: 'date',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
      },
      {
        label: '姓名',
        prop: 'name',
        component: 'el-input',
        add: true,
        search: true,
      },
      {
        label: '地址',
        prop: 'address',
        component: 'el-input',
        add: true,
        edit: true,
      },
    ])
    const tableColumns = ref(JSON.parse(JSON.stringify(columns2.value)))
    const data = ref([
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])

    const search = (done, isValid, invalidFields) => {
      console.log('search', isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    }

    const submit = (close, done, formType, isValid, invalidFields) => {
      console.log('submit', formType, isValid, invalidFields)
      setTimeout(() => {
        isValid ? close() : done()
      }, 1000)
    }

    const deleteRow = (row) => {
      console.log('deleteRow', row)
    }

    return {
      form,
      serachForm,
      data,
      columns2,
      tableColumns,
      search,
      submit,
      deleteRow,
    }
  }
}
</script>

:::

### 支持多级表头

::: demo 支持对多级表头的操作，可以将列拖入或拖出子表头

<template>
  <pro-column-setting
    v-model="columns3"
    default-expand-all
    style="float:right;margin-bottom:10px"
  />
  <pro-table
    :data="data"
    :columns="columns3"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const columns3 = ref([
      {
        label: '日期',
        prop: 'date',
      },
      {
        label: '用户',
        prop: 'user',
        children: [
          {
            label: '姓名',
            prop: 'name',
          },
          {
            label: '地址',
            prop: 'address',
          },
        ],
      },
    ])
    const data = ref([
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])

    return {
      data,
      columns3,
    }
  }
}
</script>

:::

### 配置

| 参数                 | 说明                                                                                                                                       | 类型                                   | 可选值                                                         | 默认值     |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------- | :------------------------------------------------------------- | :--------- |
| v-model              | 绑定 `columns` 值                                                                                                                          | array                                  | -                                                              | -          |
| size                 | 按钮尺寸                                                                                                                                   | string                                 | medium / small / mini                                          | -          |
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
| icon-class           | 自定义树节点的图标                                                                                                                         | string                                 | -                                                              | -          |
| allow-drag           | 判断节点能否被拖拽                                                                                                                         | Function(node)                         | -                                                              | -          |
| allow-drop           | 拖拽时判定目标节点能否被放置。`type` 参数有三种情况：`prev`、`inner` 和 `next`，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后 | Function(draggingNode, dropNode, type) | -                                                              | -          |
