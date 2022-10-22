<template>
  <pro-form
    v-model="form"
    :columns="columns"
    :max="3"
    type="array"
    label-width="100px"
    @submit="submit"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'

export default defineComponent({
  setup() {
    const form = ref()
    const columns = [
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
    ]
    const submit = (done, isValid, invalidFields) => {
      ElMessage(`submit: ${isValid}`)
      console.log(form.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    }

    return {
      form,
      columns,
      submit,
    }
  },
})
</script>
