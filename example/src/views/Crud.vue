<template>
  <pro-crud
    ref="crud"
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
import { onMounted, ref } from 'vue'
import type {
  ICrudBeforeOpen,
  ICrudColumns,
  ICrudMenuColumns,
  ICrudExpose,
} from '/@src/index'

interface DataItem {
  date: string
  name: string
  address: string
}

type SerachForm = Pick<DataItem, 'date'>
type CrudForm = Pick<DataItem, 'date' | 'name'>

const crud = ref<ICrudExpose<DataItem>>({} as ICrudExpose<DataItem>)
const form = ref<CrudForm>({} as CrudForm)
const serachForm = ref<SerachForm>({} as SerachForm)
const menu = ref<ICrudMenuColumns<DataItem>>({
  addProps: { icon: 'el-icon-plus' },
  label: 'Menu',
  edit: (row) => row.date !== '2016-05-02',
})
const columns: ICrudColumns<DataItem> = [
  {
    label: 'Date',
    prop: 'date',
    component: 'el-input',
    add: true,
    edit: true,
    search: true,
    rules: {
      required: true,
      message: 'please input name',
      trigger: 'blur',
    },
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

const beforeOpen: ICrudBeforeOpen<DataItem> = (next, type, row) => {
  console.log('beforeOpen', type, row)
  setTimeout(() => {
    next()
  }, 500)
}

onMounted(() => {
  console.log(crud.value)
})

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
