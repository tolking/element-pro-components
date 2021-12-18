<template>
  <pro-crud
    v-model="form"
    v-model:search="serachForm"
    :columns="columns"
    :menu="menu"
    :data="data"
    :before-open="beforeOpen"
    label-width="100px"
    @search="search"
    @searchReset="reset"
    @submit="submit"
    @reset="reset"
    @delete="deleteRow"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import {
  defineCrudColumns,
  defineCrudMenuColumns,
  defineCrudSubmit,
  defineCrudSearch,
  defineCrudBeforeOpen,
} from 'element-pro-components'

export default defineComponent({
  setup() {
    const menu = defineCrudMenuColumns({
      label: 'Operations',
      addText: 'New',
      editText: 'Edit Row',
      delText: 'Clean',
      searchText: 'Search',
      searchResetText: 'Reset Search',
      submitText: 'Create',
      resetText: 'Reset Form',
      edit: (row) => row.date !== '2016-05-02',
      del: (row) => row.date !== '2016-05-04',
      searchReset: false,
      editProps: { type: 'default', plain: true },
      delProps: { type: 'danger', plain: true },
    })
    const form = ref({})
    const serachForm = ref({})
    const columns = defineCrudColumns([
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
        form: true,
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

    const beforeOpen = defineCrudBeforeOpen((done, type, row) => {
      if (type === 'edit') {
        form.value = row || {}
      }
      done()
    })

    const search = defineCrudSearch((done, isValid, invalidFields) => {
      console.log('search', serachForm.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    })

    const submit = defineCrudSubmit(
      (close, done, formType, isValid, invalidFields) => {
        console.log('submit', form.value, formType, isValid, invalidFields)
        setTimeout(() => {
          isValid ? close() : done()
        }, 1000)
      }
    )

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
      menu,
      data,
      beforeOpen,
      search,
      submit,
      reset,
      deleteRow,
    }
  },
})
</script>
