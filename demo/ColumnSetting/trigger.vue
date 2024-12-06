<template>
  <pro-crud
    v-model="form"
    v-model:search="searchForm"
    :columns="columns"
    :table-columns="tableColumns"
    :data="data"
    label-width="100px"
    @search="search"
    @submit="submit"
    @delete="deleteRow"
  >
    <template #action>
      <pro-column-setting v-model="tableColumns" trigger="click" />
    </template>
  </pro-crud>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'

export default defineComponent({
  setup() {
    const form = ref({})
    const searchForm = ref({})
    const columns = ref([
      {
        label: 'Date',
        prop: 'date',
        component: 'el-input',
        search: true,
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
    const tableColumns = ref(JSON.parse(JSON.stringify(columns.value)))
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
    ])

    const search = (done, isValid, invalidFields) => {
      ElMessage(`search: ${isValid}`)
      console.log('search', searchForm.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    }

    const submit = (close, done, type, isValid, invalidFields) => {
      ElMessage(`submit: ${type}, ${isValid}`)
      console.log('submit', form.value, type, isValid, invalidFields)
      setTimeout(() => {
        isValid ? close() : done()
      }, 1000)
    }

    const deleteRow = (row) => {
      ElMessage('deleteRow')
      console.log('deleteRow', row)
    }

    return {
      form,
      searchForm,
      data,
      columns,
      tableColumns,
      search,
      submit,
      deleteRow,
    }
  },
})
</script>
