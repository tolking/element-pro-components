<template>
  <pro-crud
    v-model="form"
    :columns="columns"
    :form-columns="formColumns"
    :menu="true"
    :data="data"
    label-width="100px"
    @submit="submit"
    @reset="reset"
    @delete="deleteRow"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const form = ref({})
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
    const formColumns = ref([
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
    const data = ref([
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

    const submit = (close, done, formType, isValid, invalidFields) => {
      console.log('submit', formType, isValid, invalidFields)
      setTimeout(() => {
        isValid ? close() : done()
      }, 1000)
    }

    const reset = () => {
      console.log('reset')
    }

    const deleteRow = (row) => {
      console.log('deleteRow', row)
    }

    return {
      form,
      columns,
      formColumns,
      data,
      submit,
      reset,
      deleteRow,
    }
  },
})
</script>
