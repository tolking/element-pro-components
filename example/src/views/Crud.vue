<template>
  <pro-crud
    v-model="form"
    v-model:search="serachForm"
    :columns="columns"
    :data="data"
    :menu="menu"
    selection
    border
  >
    <template #menu-right>
      <el-button
        icon="el-icon-delete"
        type="danger"
      />
    </template>
  </pro-crud>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ProCrudColumns, ProCrudMenuColumns } from '/@src/index'

interface DataItem {
  date: string
  name: string
  address: string
}

const form = ref<Record<string, unknown>>({})
const serachForm = ref<Record<string, unknown>>({})
const menu = ref<ProCrudMenuColumns<DataItem>>({
  label: 'Menu',
  type: 'text',
  edit: (row) => row.date !== '2016-05-02',
  del: true,
})
const columns: ProCrudColumns<DataItem> = [
  {
    label: 'Date',
    prop: 'date',
    component: 'el-input',
    add: true,
    edit: true,
    search: true,
  },
  {
    label: 'Name',
    prop: 'name',
    component: 'el-input',
    add: true,
    // hide: true,
  },
  {
    label: 'Address',
    prop: 'address',
    component: 'el-input',
  },
]
const data: DataItem[] = [
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
