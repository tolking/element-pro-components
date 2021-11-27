<template>
  <pro-crud
    v-model="form"
    v-model:search="serachForm"
    :columns="columns"
    :table-columns="tableColumns"
    :menu="{ label: 'Operations' }"
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
    const serachForm = ref({})
    const columns = ref([
      {
        label: 'Date',
        prop: 'date',
        component: 'el-input',
        form: true,
      },
      {
        label: 'Name',
        prop: 'name',
        component: 'el-input',
        form: true,
        search: true,
      },
      {
        label: 'Address',
        prop: 'address',
        component: 'el-input',
      },
    ])
    const tableColumns = ref([
      {
        label: 'Date',
        prop: 'date',
      },
      {
        label: 'User',
        children: [
          {
            label: 'Name',
            prop: 'name',
          },
          {
            label: 'Address',
            prop: 'address',
          },
        ],
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
      serachForm,
      columns,
      tableColumns,
      data,
      submit,
      reset,
      deleteRow,
    }
  },
})
</script>
