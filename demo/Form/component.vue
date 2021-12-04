<template>
  <pro-form
    v-model="form"
    :columns="columns"
    label-width="100px"
  />
</template>

<script>
import { defineComponent, h, ref } from 'vue'

export default defineComponent({
  setup() {
    const form = ref({})
    const list = ref([
      { value: 'Go', label: 'go' },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])
    const columns = [
      {
        label: 'input',
        prop: 'input',
        component: 'el-input',
        props: {
          clearable: true,
          placeholder: 'Please input',
          slots: {
            prefix: () =>
              h('i', { className: 'el-input__icon el-icon-search' }),
            append: () => 'Search',
          },
        },
      },
      {
        label: 'input-tag',
        prop: 'inputTag',
        component: 'pro-input-tag',
        props: {
          placeholder: 'Please click the space button after input',
        },
      },
      {
        label: 'radio',
        prop: 'radio',
        component: 'pro-radio',
        props: {
          data: list.value,
        },
      },
      {
        label: 'checkbox',
        prop: 'checkbox',
        component: 'pro-checkbox',
        props: {
          data: list.value,
        },
      },
      {
        label: 'select',
        prop: 'select',
        component: 'pro-select',
        props: {
          data: list.value,
        },
      },
    ]

    return {
      form,
      columns,
    }
  },
})
</script>
