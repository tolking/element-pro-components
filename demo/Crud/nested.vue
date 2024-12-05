<template>
  <pro-crud
    v-model="form"
    v-model:search="searchForm"
    :columns="columns"
    :menu="{ label: 'Operations' }"
    :search-props="{ labelWidth: '80px' }"
    :data="data"
    :detail="detail"
    :before-open="beforeOpen"
    label-width="100px"
    @search="search"
    @submit="submit"
    @delete="deleteRow"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import {
  defineCrudColumns,
  defineCrudBeforeOpen,
  defineCrudSubmit,
  defineCrudSearch,
} from 'element-pro-components'

export default defineComponent({
  setup() {
    const form = ref({ 'a.b': undefined })
    const searchForm = ref({ 'a.b': undefined })
    const detail = ref({})
    const columns = defineCrudColumns([
      {
        label: 'Break',
        prop: 'a.b',
        component: 'el-input',
        form: true,
        search: true,
        detail: true,
      },
      {
        label: 'Object',
        prop: 'a.b.c',
        component: 'el-input',
        form: true,
        search: true,
        detail: true,
      },
      {
        label: 'Array',
        prop: 'b[0]',
        component: 'el-input',
        form: true,
        search: true,
        detail: true,
      },
    ])
    const data = [
      {
        'a.b': 'break nested value',
        a: { b: { c: 'nested value c' } },
        b: ['nested value in array'],
      },
    ]

    const beforeOpen = defineCrudBeforeOpen((done, type, row) => {
      if (type === 'edit') {
        form.value = row || {}
      } else if (type === 'detail') {
        detail.value = row || {}
      } else {
        form.value = { 'a.b': undefined }
      }
      done()
    })

    const search = defineCrudSearch((done, isValid, invalidFields) => {
      ElMessage(`search: ${isValid}`)
      console.log('search', searchForm.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
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

    const deleteRow = (row) => {
      ElMessage('deleteRow')
      console.log('deleteRow', row)
    }

    return {
      form,
      searchForm,
      data,
      detail,
      columns,
      beforeOpen,
      search,
      submit,
      deleteRow,
    }
  },
})
</script>
