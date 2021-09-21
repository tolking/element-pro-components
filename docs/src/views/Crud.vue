<template>
  <pro-crud
    ref="crud"
    v-model="form"
    v-model:search="serachForm"
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :columns="columns"
    :data="data"
    :total="total"
    :menu="menu"
    :size="size"
    :before-open="beforeOpen"
    :before-close="beforeClose"
    selection
    expand
    border
    label-width="100px"
    append-to-body
    class="ffff"
    @search="search"
    @searchReset="reset"
    @submit="submit"
    @reset="reset"
    @delete="deleteRow"
  >
    <template #expand="{ row }">
      {{ row }}
    </template>
    <template #action>
      <pro-column-setting
        v-model="columns"
        :size="size"
        trigger="click"
      />
    </template>
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
    <template #menu>
      <el-button type="text">
        Detail
      </el-button>
    </template>
    <template #search-date-label>
      <span>search slot</span>
    </template>
    <template #search-menu-right>
      <el-button>Export</el-button>
    </template>
    <template #form-name>
      <span>test form slot</span>
    </template>
    <template #table-name="{ row, size }">
      <el-tag :size="size">
        {{ row.name }}
      </el-tag>
    </template>
    <template #form-menu-left>
      <el-button>Prev</el-button>
    </template>
    <template #form-menu-right>
      <el-button>Next</el-button>
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
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(50)
const columns = ref<ICrudColumns<DataItem>>([
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
])
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

const beforeOpen: ICrudBeforeOpen<CrudForm | undefined> = (done, type, row) => {
  console.log('beforeOpen', type, row)
  if (type === 'edit') {
    form.value = row || ({} as CrudForm)
  }
  done()
}

const search: ICrudSearch = (done, isValid, invalidFields) => {
  console.log('search', isValid, invalidFields)
  setTimeout(() => {
    done()
  }, 1000)
}

const submit: ICrudSubmit = (close, done, formType, isValid, invalidFields) => {
  console.log('submit', formType, isValid, invalidFields)
  setTimeout(() => {
    isValid ? close() : done()
  }, 1000)
}

onMounted(() => {
  console.log(crud.value)
})

function beforeClose(done: () => void) {
  console.log('beforeClose')
  done()
}

function reset() {
  console.log('reset')
}

function deleteRow(row: DataItem) {
  console.log('deleteRow', row)
}

function changeSize() {
  size.value = size.value === 'mini' ? 'medium' : 'mini'
}
</script>
