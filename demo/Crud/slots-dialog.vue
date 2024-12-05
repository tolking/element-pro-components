<template>
  <pro-crud
    v-model="form"
    v-model:search="searchForm"
    :columns="columns"
    :menu="{ label: 'Operations' }"
    :search-props="{ labelWidth: '80px' }"
    :data="data"
    :detail="detail"
    :column="1"
    :before-open="beforeOpen"
    selection
    label-width="100px"
    @search="search"
    @submit="submit"
    @delete="deleteRow"
  >
    <template #crud-dialog="{ type, props, createDescriptions, createForm }">
      <el-drawer v-bind="props">
        <component
          :is="type === 'detail' ? createDescriptions() : createForm()"
        />
      </el-drawer>
    </template>
  </pro-crud>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Refresh } from '@element-plus/icons-vue'
import {
  defineCrudColumns,
  defineCrudSubmit,
  defineCrudSearch,
  defineCrudBeforeOpen,
} from 'element-pro-components'

export default defineComponent({
  setup() {
    const form = ref({})
    const searchForm = ref({})
    const detail = ref({})
    const columns = ref(
      defineCrudColumns([
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
        },
      ]),
    )
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
      Refresh,
      form,
      columns,
      searchForm,
      data,
      detail,
      beforeOpen,
      search,
      submit,
      deleteRow,
    }
  },
})
</script>

<style>
.el-input__icon {
  width: 14px;
}
</style>
