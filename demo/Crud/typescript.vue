<template>
  <pro-crud
    v-model="form"
    v-model:search="serachForm"
    :columns="columns"
    :menu="menu"
    :data="data"
    :before-open="beforeOpen"
    label-width="100px"
    @search="search"
    @submit="submit"
    @delete="deleteRow"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type {
  ICrudColumns,
  ICrudMenuColumns,
  ICrudBeforeOpen,
  ICrudSearch,
  ICrudSubmit,
} from '/@src/index'

interface DataItem {
  date: string
  name: string
  address: string
}

const form = ref({})
const serachForm = ref({})
const menu: ICrudMenuColumns<DataItem> = {
  label: 'Operations',
  edit: (row) => row.date !== '2016-05-02',
  del: (row) => row.date !== '2016-05-04',
  searchReset: false,
}
const columns: ICrudColumns<DataItem> = [
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
    search: true,
  },
  {
    label: 'Address',
    prop: 'address',
    component: 'el-input',
    add: true,
    edit: true,
  },
]
const data = ref<DataItem[]>([
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

const beforeOpen: ICrudBeforeOpen = (done, type, row) => {
  if (type === 'edit') {
    form.value = row || {}
  }
  done()
}

const search: ICrudSearch = (done, isValid, invalidFields) => {
  console.log('search', serachForm.value, isValid, invalidFields)
  setTimeout(() => {
    done()
  }, 1000)
}

const submit: ICrudSubmit = (close, done, formType, isValid, invalidFields) => {
  console.log('submit', form.value, formType, isValid, invalidFields)
  setTimeout(() => {
    isValid ? close() : done()
  }, 1000)
}

const deleteRow = (row: DataItem) => {
  console.log('deleteRow', row)
}
</script>
