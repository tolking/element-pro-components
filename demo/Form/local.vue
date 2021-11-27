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
import { ElSwitch } from 'element-plus'

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
    const columns = ref([
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
    ])
    const submit = (done, isValid, invalidFields) => {
      console.log(isValid, invalidFields)
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
