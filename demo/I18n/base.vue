<template>
  <el-button type="primary" style="margin-bottom: 20px" @click="toggleLocale">
    Switch lang
  </el-button>
  <el-config-provider :locale="toggle ? en : zhCN">
    <pro-search
      v-model="searchForm"
      :columns="searchColumns"
      label-width="100px"
      @submit="submit"
    />
    <pro-form
      v-model="form"
      :columns="formColumns"
      label-width="100px"
      @submit="submit"
    />
    <div style="height: 40px" />
    <pro-crud
      v-model="form"
      v-model:search="searchForm"
      :columns="columns"
      :form-columns="formColumns"
      :menu="{ label: 'Operations' }"
      :search-props="{ labelWidth: '100px' }"
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
  defineSearchColumns,
} from 'element-pro-components'
import en from 'element-pro-components/lib/locale/en'
import zhCN from 'element-pro-components/lib/locale/zh-cn'

export default defineComponent({
  setup() {
    const form = ref({})
    const searchForm = ref({})
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
    const searchColumns = defineSearchColumns([
      {
        label: 'Date',
        prop: 'date',
        component: 'el-input',
      },
      {
        label: 'Name',
        prop: 'name',
        component: 'el-input',
      },
      {
        label: 'Address',
        prop: 'address',
        component: 'el-input',
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
      searchForm,
      detail,
      columns,
      formColumns,
      searchColumns,
      toggle,
      en,
      zhCN,
      data,
      beforeOpen,
      submit,
      toggleLocale,
    }
  },
})
</script>
