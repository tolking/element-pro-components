<template>
  <pro-form
    v-model="form"
    :columns="columns"
    label-width="100px"
    @submit="submit"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { defineFormColumns, defineFormSubmit } from 'element-pro-components'

export default defineComponent({
  setup() {
    const form = ref({})
    const columns = defineFormColumns([
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
    const submit = defineFormSubmit((done, isValid, invalidFields) => {
      ElMessage(`submit: ${isValid}`)
      console.log(form.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    })

    return {
      form,
      columns,
      submit,
    }
  },
})
</script>
