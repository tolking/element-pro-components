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
        type: 'collapse',
        children: [
          {
            label: 'First Name',
            prop: 'firstName',
            component: 'el-input',
            md: 12,
          },
          {
            label: 'Last Name',
            prop: 'lastName',
            component: 'el-input',
            md: 12,
          },
        ],
      },
      {
        label: 'Address',
        type: 'collapse',
        children: [
          {
            label: 'City',
            prop: 'city',
            component: 'el-input',
            md: 12,
          },
          {
            label: 'Address',
            prop: 'address',
            component: 'el-input',
            md: 12,
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
