<template>
  <pro-crud
    v-model="form"
    v-model:search="serachForm"
    :columns="columns"
    :table-columns="tableColumns"
    :menu="{ label: 'Operations' }"
    :data="data"
    @search="search"
    @submit="submit"
    @delete="deleteRow"
  >
    <template #action>
      <pro-column-setting
        v-model="tableColumns"
        trigger="click"
      />
    </template>
  </pro-crud>
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
        add: true,
        edit: true,
        search: true,
      },
      {
        label: 'Name',
        prop: 'name',
        component: 'el-input',
        add: true,
        search: true,
      },
      {
        label: 'Address',
        prop: 'address',
        component: 'el-input',
        add: true,
        edit: true,
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

    const search = (done, isValid, invalidFields) => {
      console.log('search', serachForm.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    }

    const submit = (close, done, formType, isValid, invalidFields) => {
      console.log('submit', form.value, formType, isValid, invalidFields)
      setTimeout(() => {
        isValid ? close() : done()
      }, 1000)
    }

    const deleteRow = (row) => {
      console.log('deleteRow', row)
    }

    return {
      form,
      serachForm,
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
