<template>
  <pro-card shadow="never">
    <pro-search
      v-model="form"
      :columns="columns"
      label-width="100px"
      @submit="submit"
    />
    <p>{{ form }}</p>
  </pro-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { defineSearchColumns, defineSearchSubmit } from 'element-pro-components'

const form = ref({})
const columns = defineSearchColumns([
  {
    label: 'Goods',
    prop: 'name',
    component: 'el-input',
  },
  {
    label: 'Weight',
    prop: 'weight',
    component: 'el-input',
  },
  {
    label: 'Count',
    prop: 'count',
    component: 'el-input',
  },
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
  {
    label: 'Price',
    prop: 'price',
    component: 'el-input',
  },
  {
    label: 'MarketPrice',
    prop: 'marketPrice',
    component: 'el-input',
  },
])

const submit = defineSearchSubmit((done, isValid, invalidFields) => {
  ElMessage(`submit: ${isValid}`)
  console.log(form.value, isValid, invalidFields)
  setTimeout(() => {
    done()
  }, 1000)
})
</script>
