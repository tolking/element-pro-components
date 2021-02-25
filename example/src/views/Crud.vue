<template>
  <pro-crud
    v-model="form"
    v-model:search="serachForm"
    :columns="columns"
    :data="data"
    :menu="menu"
    :before-open="beforeOpen"
    selection
    border
    @serach="serach"
    @submit="submit"
    @delete="deleteRow"
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
  addProps: { icon: 'el-icon-plus' },
  label: 'Menu',
  edit: (row) => row.date !== '2016-05-02',
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

function beforeOpen(next: () => void, type: 'add' | 'edit', row?: DataItem) {
  console.log('beforeOpen', type, row)
  setTimeout(() => {
    next()
  }, 500)
}

function serach(state: boolean, err: unknown) {
  console.log('serach', state, err)
}

function submit(type: 'add' | 'edit', state: boolean, err: unknown) {
  console.log('submit', type, state, err)
}

function deleteRow(row: DataItem) {
  console.log('deleteRow', row)
}
</script>
