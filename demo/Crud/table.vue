<template>
  <pro-crud
    v-model="form"
    v-model:search="serachForm"
    :columns="columns"
    :table-columns="tableColumns"
    :menu="{ label: 'Operations' }"
    :data="data"
    :detail="detail"
    :before-open="beforeOpen"
    label-width="100px"
    @submit="submit"
    @reset="reset"
    @delete="deleteRow"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import {
  defineCrudColumns,
  defineCrudSubmit,
  defineTableColumns,
  defineCrudBeforeOpen,
} from 'element-pro-components'

export default defineComponent({
  setup() {
    const form = ref({})
    const serachForm = ref({})
    const detail = ref({})
    const columns = defineCrudColumns([
      {
        label: 'Date',
        prop: 'date',
        component: 'el-input',
        form: true,
        detail: true,
      },
      {
        label: 'Name',
        prop: 'name',
        component: 'el-input',
        form: true,
        search: true,
        detail: true,
      },
      {
        label: 'Address',
        prop: 'address',
        component: 'el-input',
        detail: true,
      },
    ])
    const tableColumns = defineTableColumns([
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
    ])

    const beforeOpen = defineCrudBeforeOpen((done, type, row) => {
      if (type === 'edit') {
        form.value = row || {}
      } else if (type === 'detail') {
        detail.value = row || {}
      }
      done()
    })

    const submit = defineCrudSubmit(
      (close, done, type, isValid, invalidFields) => {
        ElMessage(`submit: ${type}, ${isValid}`)
        console.log('submit', form.value, type, isValid, invalidFields)
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
      tableColumns,
      data,
      detail,
      beforeOpen,
      submit,
      reset,
      deleteRow,
    }
  },
})
</script>
