<template>
  <pro-array-form
    v-model="form"
    :columns="columns"
    label-width="100px"
    @submit="submit"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { defineFormColumns, defineFormSubmit } from 'element-pro-components'

interface Form {
  name?: string
  address?: string
}

const form = ref<Form[]>()
const columns = defineFormColumns<Form>([
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
  ElMessage(`submit: ${isValid}`)
  console.log(form.value, isValid, invalidFields)
  setTimeout(() => {
    done()
  }, 1000)
})
</script>
