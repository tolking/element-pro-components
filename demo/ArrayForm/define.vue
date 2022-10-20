<template>
  <pro-array-form
    v-model="form"
    :columns="columns"
    :menu="menu"
    label-width="100px"
    @submit="submit"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import {
  defineFormColumns,
  defineFormMenuColumns,
  defineFormSubmit,
} from 'element-pro-components'

export default defineComponent({
  setup() {
    const menu = defineFormMenuColumns({
      submitText: 'Create',
      reset: false,
    })
    const form = ref([])
    const columns = defineFormColumns([
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
    const submit = defineFormSubmit((done, isValid, invalidFields) => {
      ElMessage(`submit: ${isValid}`)
      console.log(form.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    })

    return {
      menu,
      form,
      columns,
      submit,
    }
  },
})
</script>
