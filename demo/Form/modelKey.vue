<template>
  <div>
    <span class="el-form-item__label">Use outside the ProForm</span>
    <my-input v-model:value="form.value" />
  </div>
  <pro-form v-model="form" :columns="columns" inline @submit="submit" />
</template>

<script>
import { defineComponent, h, markRaw, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { defineFormColumns, defineFormSubmit } from 'element-pro-components'

const MyInput = {
  name: 'MyInput',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    return () =>
      h('input', {
        value: props.value,
        onInput: (e) => emit('update:value', e.target.value),
      })
  },
}

export default defineComponent({
  components: { MyInput },
  setup() {
    const form = ref({})
    const columns = defineFormColumns([
      {
        label: 'Use in the ProForm',
        prop: 'value',
        component: markRaw(MyInput),
        modelKey: 'value', // or ['value', 'onUpdate:value']
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
