<template>
  <pro-crud
    v-model:search="serachForm"
    :columns="columns"
    :search-columns="searchColumns"
    @search="search"
    @searchReset="reset"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const serachForm = ref({})
    const columns = ref([
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
    const searchColumns = ref([
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

    const search = (done, isValid, invalidFields) => {
      console.log('search', serachForm.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    }

    const reset = () => {
      console.log('reset search')
    }

    return {
      serachForm,
      columns,
      searchColumns,
      search,
      reset,
    }
  },
})
</script>
