<template>
  <pro-card shadow="never">
    <pro-crud
      ref="crud"
      v-model="form"
      v-model:search="searchForm"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :columns="columns"
      :data="data"
      :detail="detail"
      :total="total"
      :menu="menu"
      :size="componentsSize"
      :search-props="{ labelWidth: '100px' }"
      :before-open="beforeOpen"
      :before-close="beforeClose"
      selection
      expand
      border
      label-width="100px"
      append-to-body
      class="ffff"
      @search="search"
      @search-reset="reset"
      @submit="submit"
      @reset="reset"
      @delete="deleteRow"
      @load="load"
    >
      <template #table-expand="{ row }">
        {{ row }}
      </template>
      <template #action="{ size }">
        <pro-column-setting
          v-model="columns"
          :size="size"
          trigger="click"
        />
      </template>
      <template #menu-right="{ size }">
        <el-button
          :size="size"
          @click="changeSize"
        >
          change size
        </el-button>
      </template>
      <template #menu="{ size, row }">
        <el-button
          :size="size"
          link
          @click="deleteRow(row)"
        >
          More
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
      <template #detail-name="{ item, size }">
        <el-tag :size="size">
          {{ item.name }}
        </el-tag>
      </template>
      <template #form-menu-left="{ loading }">
        <el-button :loading="loading">
          Prev
        </el-button>
      </template>
      <template #form-menu-right="{ loading }">
        <el-button :loading="loading">
          Next
        </el-button>
      </template>
    </pro-crud>
  </pro-card>
</template>

<script setup lang="ts">
import { markRaw, onMounted, ref } from 'vue'
import type { ComponentSize } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type {
  ICrudBeforeOpen,
  ICrudColumns,
  ICrudMenuColumns,
  ICrudExpose,
  ICrudSubmit,
  ICrudSearch,
} from 'element-pro-components'

interface DataItem {
  date: string
  name: string
  address: string
}

type SearchForm = Pick<DataItem, 'date'>
type CrudForm = Pick<DataItem, 'date' | 'name'>

const componentsSize = ref<ComponentSize>('large')
const crud = ref<ICrudExpose<DataItem>>({} as ICrudExpose<DataItem>)
const form = ref<CrudForm>({} as CrudForm)
const searchForm = ref<SearchForm>({} as SearchForm)
const detail = ref({})
const menu = ref<ICrudMenuColumns<DataItem>>({
  addProps: { icon: markRaw(Plus) },
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
    detail: true,
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
    edit: true,
    detail: true,
    search: true,
    // hide: true,
  },
  {
    label: 'Address',
    prop: 'address',
    component: 'el-input',
    search: true,
    detail: true,
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
  } else if (type === 'detail') {
    detail.value = row || {}
  }
  done()
}

const search: ICrudSearch = (done, isValid, invalidFields) => {
  console.log('search', searchForm.value, isValid, invalidFields)
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

onMounted(() => {
  console.log(crud.value)
})

function beforeClose(done: () => void) {
  console.log('beforeClose')
  done()
}

function load() {
  console.log('load', currentPage.value)
}

function reset() {
  console.log('reset')
}

function deleteRow(row: DataItem) {
  console.log('deleteRow', row)
}

function changeSize() {
  componentsSize.value = componentsSize.value === 'small' ? 'large' : 'small'
}
</script>
