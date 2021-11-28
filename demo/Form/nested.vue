<template>
  <p>{{ form }}</p>
  <pro-form
    v-model="form"
    :columns="columns"
    label-width="100px"
    @submit="submit"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const form = ref({ 'a.b': undefined })
    const columns = [
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
    ]
    const submit = (done, isValid, invalidFields) => {
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
