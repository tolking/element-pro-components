<template>
  <pro-table
    :data="data"
    :columns="columns"
  >
    <template #table-name-header="{ column }">
      <s>{{ column.label }}</s>
    </template>
    <template #table-name="{ row, size }">
      <el-tag :size="size">
        {{ row?.name }}
      </el-tag>
    </template>
  </pro-table>
</template>

<script>
import { defineComponent, h, ref } from 'vue'
import { defineTableColumns } from 'element-pro-components'

export default defineComponent({
  setup() {
    const columns = defineTableColumns([
      {
        label: 'Date',
        prop: 'date',
        render: '--',
      },
      {
        label: 'Name',
        prop: 'name',
      },
      {
        label: 'Address',
        prop: 'address',
        render: (row) => h('em', null, row.address),
      },
    ])
    const data = ref([
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])

    return {
      data,
      columns,
    }
  },
})
</script>
