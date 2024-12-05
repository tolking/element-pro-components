<template>
  <pro-crud
    v-model:search="searchForm"
    :columns="columns"
    :search-columns="searchColumns"
    :search-props="{ gutter: 40 }"
    @search="search"
    @search-reset="reset"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import {
  defineCrudColumns,
  defineCrudSearch,
  defineSearchColumns,
} from 'element-pro-components'

export default defineComponent({
  setup() {
    const searchForm = ref({})
    const columns = defineCrudColumns([
      {
        label: 'Date',
        prop: 'date',
      },
      {
        label: 'Name',
        prop: 'name',
      },
      {
        label: 'Address',
        prop: 'address',
      },
    ])
    const searchColumns = defineSearchColumns([
      {
        label: 'Name',
        prop: 'name',
        component: 'el-input',
      },
      {
        label: 'Date',
        prop: 'date',
        component: 'el-date-picker',
        props: {
          type: 'datetimerange',
          rangeSeparator: '-',
          startPlaceholder: 'start',
          endPlaceholder: 'end',
        },
      },
    ])

    const search = defineCrudSearch((done, isValid, invalidFields) => {
      ElMessage(`search: ${isValid}`)
      console.log('search', searchForm.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    })

    const reset = () => {
      ElMessage('reset search')
      console.log('reset search')
    }

    return {
      searchForm,
      columns,
      searchColumns,
      search,
      reset,
    }
  },
})
</script>
