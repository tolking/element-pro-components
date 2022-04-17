<template>
  <pro-form
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
    const columns = defineFormColumns([
      {
        label: 'Goods',
        prop: 'name',
        component: 'el-input',
      },
      {
        label: 'Spec',
        prop: 'spec',
        size: 'small',
        max: 3,
        children: [
          {
            label: 'Weight',
            prop: 'weight',
            component: 'el-input',
          },
          {
            label: 'Size',
            prop: 'size',
            max: 1,
            children: [
              {
                label: 'Length',
                prop: 'length',
                component: 'el-input',
              },
              {
                label: 'Width',
                prop: 'width',
                component: 'el-input',
              },
              {
                label: 'Height',
                prop: 'height',
                component: 'el-input',
              },
            ],
          },
        ],
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
