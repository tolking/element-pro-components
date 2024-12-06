<template>
  <pro-crud
    v-model="form"
    :columns="columns"
    :form-columns="formColumns"
    :menu="true"
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
  defineFormColumns,
  defineCrudBeforeOpen,
} from 'element-pro-components'

export default defineComponent({
  setup() {
    const form = ref({})
    const detail = ref({})
    const columns = defineCrudColumns([
      {
        label: 'Date',
        prop: 'date',
        detail: true,
      },
      {
        label: 'Name',
        prop: 'name',
        detail: true,
      },
      {
        label: 'Address',
        prop: 'address',
        detail: true,
      },
    ])
    const formColumns = defineFormColumns([
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
    ])

    const beforeOpen = defineCrudBeforeOpen((done, type, row) => {
      if (type === 'edit') {
        form.value = {
          name: row.name,
          date: [],
        }
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
      },
    )

    const reset = () => {
      ElMessage('reset')
      console.log('reset')
    }

    const deleteRow = (row) => {
      ElMessage('deleteRow')
      console.log('deleteRow', row)
    }

    return {
      form,
      columns,
      formColumns,
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
