<template>
  <pro-crud
    ref="crud"
    v-model="form"
    v-model:search="serachForm"
    :columns="columns"
    :data="data"
    :menu="menu"
    :size="size"
    :before-open="beforeOpen"
    :before-close="beforeClose"
    selection
    border
    label-width="100px"
    append-to-body
    class="ffff"
    @search="search"
    @submit="submit"
    @delete="deleteRow"
  >
    <template #menu-right="{ size }">
      <el-button
        :size="size"
        icon="el-icon-delete"
        type="danger"
      />
      <el-button
        :size="size"
        @click="changeSize"
      >
        change size
      </el-button>
    </template>
    <template #form-name>
      <span>test form slot</span>
    </template>
    <template #table-name="{ row, size }">
      <el-tag :size="size">
        {{ row.name }}
      </el-tag>
    </template>
  </pro-crud>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import type {
  ICrudBeforeOpen,
  ICrudColumns,
  ICrudMenuColumns,
  ICrudExpose,
  ICrudSubmit,
  ICrudSearch,
  IComponentSize,
} from '/@src/index'

interface DataItem {
  date: string
  name: string
  address: string
}

type SerachForm = Pick<DataItem, 'date'>
type CrudForm = Pick<DataItem, 'date' | 'name'>

const size = ref<IComponentSize>('medium')
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
    slot: true,
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

const beforeOpen: ICrudBeforeOpen<DataItem> = (done, type, row) => {
  console.log('beforeOpen', type, row)
  setTimeout(() => {
    done()
  }, 500)
}

const search: ICrudSearch = (done, isValid, invalidFields) => {
  console.log('search', isValid, invalidFields)
  setTimeout(() => {
    done()
  }, 1000)
}

const submit: ICrudSubmit = (formType, close, done, isValid, invalidFields) => {
  console.log('submit', formType, isValid, invalidFields)
  setTimeout(() => {
    isValid ? close() : done()
  }, 1000)
}

onMounted(() => {
  console.log(crud.value)
})

function beforeClose(done: () => void) {
  ElMessageBox.confirm('Close the current window', 'tip')
    .then(() => {
      done()
    })
    .catch(() => {
      console.log('cancel')
    })
}

function deleteRow(row: DataItem) {
  console.log('deleteRow', row)
}

function changeSize() {
  size.value = size.value === 'mini' ? 'medium' : 'mini'
}
</script>
