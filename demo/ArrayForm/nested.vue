<template>
  <p>{{ form }}</p>
  <pro-array-form
    v-model="form"
    :columns="columns"
    label-width="100px"
    @submit="submit"
    @add="changeValue"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { defineFormColumns, defineFormSubmit } from 'element-pro-components'

export default defineComponent({
  setup() {
    const form = ref([{ 'a.b': undefined }])
    const columns = defineFormColumns([
      {
        label: 'Break',
        prop: 'a.b',
        component: 'el-input',
      },
      {
        label: 'Object',
        prop: 'a.b.c',
        component: 'el-input',
      },
      {
        label: 'Array',
        prop: 'b[0]',
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
    const changeValue = () => {
      form.value[form.value.length - 1] = { 'a.b': undefined }
    }

    return {
      form,
      columns,
      submit,
      changeValue,
    }
  },
})
</script>
