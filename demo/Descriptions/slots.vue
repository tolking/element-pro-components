<template>
  <pro-descriptions :columns="columns" :detail="detail" border size="small">
    <template #title>
      <span>title</span>
    </template>
    <template #extra="{ size }">
      <el-button :size="size"> extra </el-button>
    </template>
    <template #detail-name="{ item, size }">
      <el-tag :size="size">
        {{ item.name }}
      </el-tag>
    </template>
    <template #detail-name-label="{ item }">
      <span>{{ item.label }}:</span>
    </template>
  </pro-descriptions>
</template>

<script>
import { defineComponent, h } from 'vue'
import { defineDescriptionsColumns } from 'element-pro-components'

export default defineComponent({
  setup() {
    const columns = defineDescriptionsColumns([
      {
        label: 'Date',
        prop: 'date',
        render: (row) => h('em', row.date),
        renderLabel: (item) => h('em', item.label),
      },
      { label: 'Name', prop: 'name' },
      { label: 'Address', prop: 'address' },
    ])
    const detail = {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    }

    return {
      columns,
      detail,
    }
  },
})
</script>
