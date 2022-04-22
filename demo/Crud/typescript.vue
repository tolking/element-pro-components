<template>
  <pro-crud
    v-model="form"
    v-model:search="serachForm"
    :columns="columns"
    :menu="menu"
    :data="data"
    :detail="detail"
    :before-open="beforeOpen"
    label-width="100px"
    @search="search"
    @submit="submit"
    @delete="deleteRow"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import {
  defineCrudColumns,
  defineCrudMenuColumns,
  defineCrudSubmit,
  defineCrudSearch,
  defineCrudBeforeOpen,
} from 'element-pro-components'

interface DataItem {
  date: string
  name: string
  address: string
}

const form = ref({})
const serachForm = ref({})
const detail = ref({})
const menu = defineCrudMenuColumns<DataItem>({
  label: 'Operations',
  edit: (row) => row.date !== '2016-05-02',
  del: (row) => row.date !== '2016-05-04',
  searchReset: false,
})
const columns = defineCrudColumns<DataItem>([
  {
    label: 'Date',
    prop: 'date',
    component: 'el-input',
    add: true,
    edit: true,
    search: true,
    detail: true,
  },
  {
    label: 'Name',
    prop: 'name',
    component: 'el-input',
    add: true,
    search: true,
    detail: true,
  },
  {
    label: 'Address',
    prop: 'address',
    component: 'el-input',
    add: true,
    edit: true,
    detail: true,
  },
])
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
])

const beforeOpen = defineCrudBeforeOpen<DataItem>((done, type, row) => {
  if (type === 'edit') {
    form.value = row || {}
  } else if (type === 'detail') {
    detail.value = row || {}
  }
  done()
})

const search = defineCrudSearch((done, isValid, invalidFields) => {
  ElMessage(`search: ${isValid}`)
  console.log('search', serachForm.value, isValid, invalidFields)
  setTimeout(() => {
    done()
  }, 1000)
})

const submit = defineCrudSubmit((close, done, type, isValid, invalidFields) => {
  ElMessage(`submit: ${type}, ${isValid}`)
  console.log('submit', form.value, type, isValid, invalidFields)
  setTimeout(() => {
    isValid ? close() : done()
  }, 1000)
})

const deleteRow = (row: DataItem) => {
  ElMessage('deleteRow')
  console.log('deleteRow', row)
}
</script>
