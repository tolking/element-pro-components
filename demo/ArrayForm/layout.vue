<template>
  <pro-array-form
    v-model="form"
    :columns="columns"
    :gutter="20"
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
    const form = ref([{}])
    const columns = defineFormColumns([
      {
        label: 'Goods',
        prop: 'name',
        component: 'el-input',
        span: 24,
      },
      {
        label: 'Weight',
        prop: 'weight',
        component: 'el-input',
        xs: 24,
        md: 12,
      },
      {
        label: 'Count',
        prop: 'count',
        component: 'el-input',
        xs: 24,
        md: 12,
      },
      {
        label: 'Length',
        prop: 'length',
        component: 'el-input',
        xs: 24,
        md: 8,
      },
      {
        label: 'Width',
        prop: 'width',
        component: 'el-input',
        xs: 24,
        md: 8,
      },
      {
        label: 'Height',
        prop: 'height',
        component: 'el-input',
        xs: 24,
        md: 8,
      },
      {
        label: 'Price',
        prop: 'price',
        component: 'el-input',
        xs: 24,
        md: 12,
      },
      {
        label: 'MarketPrice',
        prop: 'marketPrice',
        component: 'el-input',
        xs: 24,
        md: 12,
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
