<template>
  <pro-radio-button
    v-model="labelPosition"
    :data="data"
    style="margin-bottom: 18px"
  />
  <pro-form
    v-model="form"
    :columns="columns"
    :label-position="labelPosition"
    label-width="100px"
    @submit="submit"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import { defineFormColumns, defineFormSubmit } from 'element-pro-components'

export default defineComponent({
  setup() {
    const labelPosition = ref(undefined)
    const form = ref({})
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
    const data = [
      { label: 'Default', value: undefined },
      { label: 'Left', value: 'left' },
      { label: 'Right', value: 'right' },
      { label: 'Top', value: 'top' },
    ]
    const submit = defineFormSubmit((done, isValid, invalidFields) => {
      console.log(form.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    })

    return {
      labelPosition,
      data,
      form,
      columns,
      submit,
    }
  },
})
</script>
