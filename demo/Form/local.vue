<template>
  <pro-form
    v-model="form"
    :columns="columns"
    :gutter="20"
    label-width="100px"
    @submit="submit"
  />
</template>

<script>
import { defineComponent, ref, markRaw } from 'vue'
import { ElSwitch, ElMessage } from 'element-plus'
import { defineFormColumns, defineFormSubmit } from 'element-pro-components'

export default defineComponent({
  setup() {
    const list = ref([
      { value: 'Go', label: 'go' },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])
    const form = ref({})
    const columns = ref(
      defineFormColumns([
        {
          label: 'radio',
          prop: 'radio',
          component: 'pro-radio',
          props: {
            data: list,
          },
        },
        {
          label: 'switch',
          prop: 'switch',
          component: markRaw(ElSwitch),
        },
      ]),
    )
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
