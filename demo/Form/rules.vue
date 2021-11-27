<template>
  <pro-form
    v-model="form"
    :columns="columns"
    :rules="rules"
    label-width="100px"
    @submit="submitForm"
    @reset="resetForm"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const form = ref({})
    const rules = ref({
      date: { required: true, message: 'Please input date', trigger: 'blur' },
      user: { required: true, message: 'Please input user', trigger: 'blur' },
    })
    const columns = ref([
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

    function submitForm(done, isValid, invalidFields) {
      if (isValid) {
        alert('submit!')
      } else {
        console.log('error submit!!')
      }
      done()
    }

    function resetForm() {
      console.log('reset form')
    }

    return {
      form,
      rules,
      columns,
      submitForm,
      resetForm,
    }
  },
})
</script>
