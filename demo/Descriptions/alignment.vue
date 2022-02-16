<template>
  <pro-form
    v-model="form"
    :columns="formColumns"
    :menu="menu"
    label-width="100px"
  />
  <pro-descriptions
    :columns="columns"
    :detail="detail"
    :border="form.border"
    :align="form.align"
    :label-align="form.labelAlign"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import {
  defineFormColumns,
  defineFormMenuColumns,
  defineDescriptionsColumns,
} from 'element-pro-components'

export default defineComponent({
  setup() {
    const form = ref({
      border: true,
      align: 'right',
      labelAlign: 'left',
    })
    const alignment = [
      { value: 'left', label: 'left' },
      { value: 'center', label: 'center' },
      { value: 'right', label: 'right' },
    ]
    const formColumns = defineFormColumns([
      {
        label: 'border',
        prop: 'border',
        component: 'el-switch',
      },
      {
        label: 'align',
        prop: 'align',
        component: 'pro-radio-button',
        props: { data: alignment },
      },
      {
        label: 'label-align',
        prop: 'labelAlign',
        component: 'pro-radio-button',
        props: { data: alignment },
      },
    ])
    const menu = defineFormMenuColumns({
      submit: false,
      reset: false,
    })
    const columns = defineDescriptionsColumns([
      { label: 'Date', prop: 'date' },
      { label: 'Name', prop: 'name' },
      { label: 'Address', prop: 'address' },
    ])
    const detail = {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    }

    return {
      form,
      formColumns,
      menu,
      columns,
      detail,
    }
  },
})
</script>
