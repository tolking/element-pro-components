<template>
  <pro-form
    v-model="form"
    :columns="columns"
    :menu="menu"
    label-width="100px"
    @submit="submit"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { IFormColumns, IFormMenuColumns, IFormSubmit } from '/@src/index'

interface Form {
  name?: string
  address?: string
}

const form = ref<Form>({})
const menu: IFormMenuColumns = {
  submitText: 'Create',
  reset: false,
}
const columns: IFormColumns<Form> = [
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
]
const submit: IFormSubmit = (done, isValid, invalidFields) => {
  console.log(form.value, isValid, invalidFields)
  setTimeout(() => {
    done()
  }, 1000)
}
</script>
