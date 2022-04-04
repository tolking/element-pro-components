<template>
  <pro-form
    v-model="form"
    :columns="columns"
    :menu="menu"
    inline
    @submit="submit"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import {
  defineFormColumns,
  defineFormMenuColumns,
  defineFormSubmit,
} from 'element-pro-components'

export default defineComponent({
  setup() {
    const menu = defineFormMenuColumns({
      submitText: 'Search',
      reset: false,
    })
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
    const submit = defineFormSubmit((done, isValid, invalidFields) => {
      console.log(form.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    })

    return {
      menu,
      form,
      columns,
      submit,
    }
  },
})
</script>
