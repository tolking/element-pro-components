<template>
  <pro-form
    ref="formRef"
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
    const formRef = ref()
    const formItemRef = ref()
    const inputRef = ref()

    const columns = defineFormColumns([
      {
        label: 'Name',
        prop: 'name',
        ref: formItemRef,
        component: 'el-input',
        props: { ref: inputRef },
      },
    ])
    const submit = defineFormSubmit((done, isValid, invalidFields) => {
      ElMessage(`submit: ${isValid}`)
      console.log(form.value, isValid, invalidFields)
      console.log('ref', {
        formRef: formRef.value,
        formItemRef: formItemRef.value,
        inputRef: inputRef.value,
      })

      setTimeout(() => {
        done()
      }, 1000)
    })

    return {
      form,
      formRef,
      formItemRef,
      inputRef,
      columns,
      submit,
    }
  },
})
</script>
