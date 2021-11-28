<template>
  <pro-descriptions
    :columns="columns"
    :detail="detail"
    border
    size="small"
  >
    <template #title>
      <span>title</span>
    </template>
    <template #extra="{ size }">
      <el-button :size="size">
        extra
      </el-button>
    </template>
    <template #name="{ detail: item, size }">
      <el-tag :size="size">
        {{ item.name }}
      </el-tag>
    </template>
    <template #name-label="{ item }">
      <span>{{ item.label }}:</span>
    </template>
  </pro-descriptions>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const columns = [
      { label: 'Date', prop: 'date' },
      { label: 'Name', prop: 'name' },
      { label: 'Address', prop: 'address' },
    ]
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
