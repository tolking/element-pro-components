<template>
  <el-button
    type="primary"
    style="margin-bottom: 20px"
    @click="toggleLocale"
  >
    Switch lang
  </el-button>
  <el-config-provider :locale="toggle ? locale1 : locale2">
    <pro-form
      v-model="form"
      :columns="formColumns"
      label-width="100px"
      @submit="submit"
    />
    <div style="height: 40px" />
    <pro-crud
      v-model="form"
      v-model:search="serachForm"
      :columns="columns"
      :form-columns="formColumns"
      :menu="{ label: 'Operations' }"
      :data="data"
      :detail="detail"
      :before-open="beforeOpen"
      label-width="100px"
    />
  </el-config-provider>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import {
  defineFormColumns,
  defineFormSubmit,
  defineCrudColumns,
  defineCrudBeforeOpen,
} from 'element-pro-components'

export default defineComponent({
  setup() {
    const locale1 = {
      name: 'en',
      pro: {
        form: {
          submit: 'Submit',
          reset: 'Reset',
          prev: 'Prev',
          next: 'Next',
        },
        crud: {
          add: 'Add',
          edit: 'Edit',
          detail: 'Detail',
          del: 'Delete',
          submit: 'Submit',
          reset: 'Reset',
          prev: 'Prev',
          next: 'Next',
          search: 'Search',
          searchReset: 'Reset',
        },
      },
    }
    const locale2 = {
      name: 'zh-cn',
      pro: {
        form: {
          submit: '提交',
          reset: '重置',
          prev: '上一步',
          next: '下一步',
        },
        crud: {
          add: '新增',
          edit: '编辑',
          detail: '查看',
          del: '删除',
          submit: '提交',
          reset: '重置',
          prev: '上一步',
          next: '下一步',
          search: '搜索',
          searchReset: '重置',
        },
      },
    }

    const form = ref({})
    const serachForm = ref({})
    const detail = ref({})
    const toggle = ref(true)

    const formColumns = defineFormColumns([
      {
        label: 'Name',
        type: 'steps',
        children: [
          {
            label: 'First Name',
            prop: 'firstName',
            component: 'el-input',
            rules: { required: true, message: 'Please input', trigger: 'blur' },
          },
          {
            label: 'Last Name',
            prop: 'lastName',
            component: 'el-input',
            rules: { required: true, message: 'Please input', trigger: 'blur' },
          },
        ],
      },
      {
        label: 'Address',
        type: 'steps',
        children: [
          {
            label: 'City',
            prop: 'city',
            component: 'el-input',
            rules: { required: true, message: 'Please input', trigger: 'blur' },
          },
          {
            label: 'Address',
            prop: 'address',
            component: 'el-input',
            rules: { required: true, message: 'Please input', trigger: 'blur' },
          },
        ],
      },
    ])
    const columns = defineCrudColumns([
      {
        label: 'Date',
        prop: 'date',
        component: 'el-input',
        search: true,
        detail: true,
      },
      {
        label: 'Name',
        prop: 'name',
        component: 'el-input',
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
    const beforeOpen = defineCrudBeforeOpen((done, type, row) => {
      if (type === 'edit') {
        form.value = row || {}
      } else if (type === 'detail') {
        detail.value = row || {}
      }
      done()
    })
    const submit = defineFormSubmit((done, isValid, invalidFields) => {
      ElMessage(`submit: ${isValid}`)
      console.log(form.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    })
    const toggleLocale = () => {
      toggle.value = !toggle.value
    }

    const data = [
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
    ]

    return {
      form,
      serachForm,
      detail,
      columns,
      formColumns,
      toggle,
      locale1,
      locale2,
      data,
      beforeOpen,
      submit,
      toggleLocale,
    }
  },
})
</script>
