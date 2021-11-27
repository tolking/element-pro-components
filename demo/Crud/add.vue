<template>
  <pro-crud
    v-model="form"
    :columns="columns"
    :add-columns="addColumns"
    :menu="true"
    label-width="100px"
    @submit="submit"
    @reset="reset"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const form = ref({})
    const columns = ref([
      {
        label: 'Date',
        prop: 'date',
      },
      {
        label: 'Name',
        prop: 'name',
      },
      {
        label: 'Address',
        prop: 'address',
      },
    ])
    const addColumns = ref([
      {
        label: 'Name',
        prop: 'name',
        component: 'el-input',
      },
      {
        label: 'Date',
        prop: 'date',
        component: 'el-date-picker',
        props: {
          type: 'datetimerange',
          rangeSeparator: '-',
          startPlaceholder: 'start',
          endPlaceholder: 'end',
        },
      },
    ])

    const submit = (close, done, formType, isValid, invalidFields) => {
      console.log('submit', formType, isValid, invalidFields)
      setTimeout(() => {
        isValid ? close() : done()
      }, 1000)
    }

    const reset = () => {
      console.log('reset')
    }

    return {
      form,
      columns,
      addColumns,
      submit,
      reset,
    }
  },
})
</script>
