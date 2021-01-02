---
title: Table
--- 

# Table

> 封装表格组件实现通过配置动态生成列

## 使用

1. 普通表格

::: demo 通过传入 columns 实现生成表单
<template>
  <pro-table
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :data="data"
    :columns="columns"
    :total="50"
    :index="{ label: '#' }"
    :menu="{ label: 'Menu' }"
    selection
    expand
    align="center"
    size="small"
  >
    <template #expand="{ row }">
      {{ row }}
    </template>
    <template #date-header="{ column }">
      <i class="el-icon-time" />
      <span>{{ column.label }}</span>
    </template>
    <template #date="{ row }">
      - {{ row.date }} -
    </template>
    <template #menu="{ size }">
      <el-button
        :size="size"
        type="text"
      >
        test{{ size }}
      </el-button>
    </template>
  </pro-table>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      data: [
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
      ],
      columns: [
        {
          label: 'Date',
          prop: 'date',
          slot: true,
          sortable: true,
        },
        {
          label: 'Name',
          prop: 'name',
        },
        {
          label: 'Address',
          prop: 'address',
        },
      ]
    }
  }
}
</script>
:::

2. 多级表头

::: demo 通过配置 columns 的 children 配置多级表头
<template>
  <pro-table
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :data="data"
    :columns="columns1"
    :total="total"
  >
    <template #name="{ row }">
      - {{ row.name }} -
    </template>
  </pro-table>
</template>

<script setup>
import { ref } from 'vue'

const columns1 = [
  {
    label: 'Date',
    prop: 'date',
  },
  {
    label: 'User',
    children: [
      {
        label: 'Name',
        prop: 'name',
        slot: true,
      },
      {
        label: 'Address',
        prop: 'address',
      },
    ],
  },
]
const total = 50
const currentPage = ref(1)
const pageSize = ref(10)
const data = [
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
]
</script>
:::

## 配置 TODO:

### columns

自动生成表单的参数，由下面字段组成的数组

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| slot | 是否开启自定义插槽功能 | boolean | false |
| children | 实现多级表头 | array | - |


### 其它配置

同 [ElTable](https://element-plus.gitee.io/#/zh-CN/component/table)

## 插槽

| name | 说明 |
| :-- | :-- |
| - | 在右侧菜单前插入的任意内容 |
| menu | 表格右侧自定义按钮 |
| expand | 当 expand 为 true 时，配置展开显示的内容，参数为 { row, column, $index } |
| append | 插入至表格最后一行之后的内容 |
| [prop] | 当前这列的内容，参数为 { row, column, $index } |
| [prop]-header | 当前这列表头的内容，参数为 { column, $index } |

::: tip 提示
[prop] 为 columns中定义的prop
:::
