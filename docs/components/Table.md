# Table

> 封装表格组件实现通过配置动态生成列

## 使用

::: demo 通过传入 columns 实现生成表单；通过配置 columns 的 children 配置多级表头

<template>
  <p>1. 普通表格</p>
  <pro-table
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :data="data"
    :columns="columns"
    :total="total"
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
  <p>2. 多级表头</p>
  <pro-table
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :data="data"
    :columns="columns1"
    :total="total"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const currentPage = ref(1)
    const pageSize = ref(10)
    const total = ref(50)
    const columns = ref([
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
    ])
    const columns1 = ref([
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
          },
          {
            label: 'Address',
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
      currentPage,
      pageSize,
      total,
      data,
      columns,
      columns1,
    }
  }
}
</script>

:::

## 配置

| 参数                  | 说明                                                  | 类型              | 默认值                                  |
| :-------------------- | :---------------------------------------------------- | :---------------- | :-------------------------------------- |
| columns               | 自动生成表单的参数，参考下面 columns                  | array             | -                                       |
| selection             | 显示多选框，支持 ElTableColumn 的配置                 | boolean / object  | false                                   |
| index                 | 显示该行的索引，支持 ElTableColumn 的配置             | boolean / object  | false                                   |
| expand                | 开启展开插槽，支持 ElTableColumn 的配置               | boolean / object  | false                                   |
| menu                  | 开启操作按钮插槽，支持 ElTableColumn 的配置           | boolean / object  | false                                   |
| show-overflow-tooltip | 当内容过长被隐藏时显示 tooltip                        | boolean           | false                                   |
| align                 | 对齐方式                                              | left/center/right | left                                    |
| headerAlign           | 表头对齐方式                                          | left/center/right | 同 align                                |
| total                 | 总条目数                                              | number            | -                                       |
| current-page          | 当前页数，可以通过 `v-model:current-page` 绑定值      | number            | -                                       |
| page-size             | 每页显示条目个数，可以通过 `v-model:page-size` 绑定值 | number            | -                                       |
| pagination            | pagination 的配置                                     | object            | [参考全局配置](../guide/index#全局配置) |

#### 其它配置

同 [ElTable](https://element-plus.gitee.io/#/zh-CN/component/table)

### columns

| 参数     | 说明                   | 类型    | 默认值 |
| :------- | :--------------------- | :------ | :----- |
| slot     | 是否开启自定义插槽功能 | boolean | false  |
| children | 实现多级表头           | array   | -      |

以及 ElTableColumn 的配置

## 插槽

| name          | 说明                                                                     |
| :------------ | :----------------------------------------------------------------------- |
| -             | 在右侧菜单前插入的任意内容                                               |
| menu          | 表格右侧自定义按钮，参数为 { size, row, column, $index }                 |
| expand        | 当 expand 为 true 时，配置展开显示的内容，参数为 { row, column, $index } |
| append        | 插入至表格最后一行之后的内容                                             |
| [prop]        | 当前这列的内容，参数为 { row, column, $index }                           |
| [prop]-header | 当前这列表头的内容，参数为 { column, $index }                            |

::: tip 提示
[prop] 为 columns 中定义的 prop
:::
