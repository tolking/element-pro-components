<template>
  <pro-table
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :data="data"
    :columns="columns"
    :total="total"
    :index="index"
    :menu="menu"
    selection
    align="center"
    size="small"
    @cell-click="test"
    @current-change="test"
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

<script setup lang="ts">
import { h, ref } from 'vue'
import type {
  ITableColumns,
  ITableIndexColumns,
  ITableMenuColumns,
} from '/@src/index'

interface ListItem {
  date: string
  name: string
  address: string
  user: undefined
}

const index = ref<ITableIndexColumns>({
  label: '#',
  index: (index) => index + 10,
})
const menu = ref<ITableMenuColumns>({
  label: 'Menu',
  align: 'right',
})
const columns = ref<ITableColumns<ListItem>>([
  {
    label: 'Date',
    prop: 'date',
    sortable: true,
  },
  {
    label: 'Name',
    prop: 'name',
    render: (row) => h('b', null, '-' + row.name),
  },
  {
    label: 'Address',
    prop: 'address',
  },
])
const columns1 = ref<ITableColumns<ListItem>>([
  {
    label: 'Date',
    prop: 'date',
  },
  {
    label: 'User',
    prop: 'user',
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

function test(row: unknown) {
  console.log(row)
}
</script>
