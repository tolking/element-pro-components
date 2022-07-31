<template>
  <pro-card shadow="never">
    <pro-table
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :data="data"
      :columns="columns"
      :total="total"
      :index="index"
      :menu="menu"
      selection
      small
      align="center"
      size="small"
      @cell-click="test"
      @load="test"
    >
      <template #expand="{ row }">
        {{ row }}
      </template>
      <template #table-date-header="{ column }">
        <i class="el-icon-time" />
        <span>{{ column.label }}</span>
      </template>
      <template #table-date="{ row }">
        - {{ row.date }} -
      </template>
      <template #menu="{ size, row }">
        <el-button
          :size="size"
          text
          @click="test(row)"
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
      <template #table-name="{ row }">
        - {{ row.name }} -
      </template>
    </pro-table>
  </pro-card>
</template>

<script setup lang="ts">
import { h, ref } from 'vue'
import type {
  ITableColumns,
  ITableIndexColumns,
  ITableMenuColumns,
} from 'element-pro-components'

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
const total = ref(50)
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
