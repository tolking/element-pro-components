<template>
  <pro-form
    v-model="form"
    :columns="columns"
    :rules="rules"
    label-width="100px"
    @submit="submit"
    @reset="resetForm"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import { defineFormColumns, defineFormSubmit } from 'element-pro-components'

export default defineComponent({
  setup() {
    const form = ref({})
    const rules = ref({
      date: { required: true, message: 'Please input date', trigger: 'blur' },
      user: { required: true, message: 'Please input user', trigger: 'blur' },
    })
    const columns = defineFormColumns([
      {
        label: 'Date',
        prop: 'date',
        component: 'el-input',
      },
      {
        label: 'User',
        prop: 'user',
        max: 3,
        size: 'small',
        children: [
          {
            label: 'Name',
            prop: 'name',
            component: 'el-input',
            rules: {
              required: true,
              message: 'Please input Name',
              trigger: 'blur',
            },
          },
          {
            label: 'Address',
            prop: 'address',
            component: 'el-input',
          },
        ],
      },
    ])
    const submit = defineFormSubmit((done, isValid, invalidFields) => {
      console.log(form.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    })

    function resetForm() {
      console.log('reset form')
    }

    return {
      form,
      rules,
      columns,
      submit,
      resetForm,
    }
  },
})
</script>
