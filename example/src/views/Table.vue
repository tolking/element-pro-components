<template>
  <pro-table
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :data="data"
    :columns="columns"
    :total="total"
    selection
    expand
    index
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
import { ref } from 'vue'

const columns = [
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

function test(row: unknown) {
  console.log(row)
}
</script>
