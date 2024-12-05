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

export default defineComponent({
  setup() {
    const form = ref({})
    const searchForm = ref({})
    const detail = ref({})
    const columns = [
      {
        label: 'Date',
        prop: 'date',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
      },
      {
        label: 'Name',
        prop: 'name',
        component: 'el-input',
        add: true,
        search: true,
        detail: true,
      },
      {
        label: 'Address',
        prop: 'address',
        component: 'el-input',
        add: true,
        edit: true,
        detail: true,
      },
    ]
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

    const beforeOpen = (done, type, row) => {
      if (type === 'edit') {
        form.value = row || {}
      } else if (type === 'detail') {
        detail.value = row || {}
      }
      done()
    }

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
      detail,
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
