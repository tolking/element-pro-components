<template>
  <pro-crud
    v-model="form"
    v-model:search="serachForm"
    :columns="columns"
    :menu="{ label: 'Operations' }"
    :data="data"
    :before-open="beforeOpen"
    label-width="100px"
    @search="search"
    @submit="submit"
    @delete="deleteRow"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const form = ref({ 'a.b': undefined })
    const serachForm = ref({ 'a.b': undefined })
    const columns = [
      {
        label: 'Break',
        prop: 'a.b',
        component: 'el-input',
        form: true,
        search: true,
      },
      {
        label: 'Object',
        prop: 'a.b.c',
        component: 'el-input',
        form: true,
        search: true,
      },
      {
        label: 'Array',
        prop: 'b[0]',
        component: 'el-input',
        form: true,
        search: true,
      },
    ]
    const data = [
      {
        'a.b': 'break nested value',
        a: { b: { c: 'nested value c' } },
        b: ['nested value in array'],
      },
    ]

    const beforeOpen = (done, type, row) => {
      if (type === 'edit') {
        form.value = row || {}
      } else {
        form.value = { 'a.b': undefined }
      }
      done()
    }

    const search = (done, isValid, invalidFields) => {
      console.log('search', isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    }

    const submit = (close, done, formType, isValid, invalidFields) => {
      console.log('submit', formType, isValid, invalidFields)
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
      beforeOpen,
      search,
      submit,
      deleteRow,
    }
  },
})
</script>
