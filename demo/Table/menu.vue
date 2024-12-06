<template>
  <pro-table :data="data" :columns="columns" :menu="menu">
    <template #menu="{ size }">
      <el-button :size="size" type="primary" link> Detail </el-button>
    </template>
  </pro-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
import {
  defineTableColumns,
  defineTableMenuColumns,
} from 'element-pro-components'

export default defineComponent({
  setup() {
    const menu = defineTableMenuColumns({
      label: 'Operations',
      align: 'center',
    })
    const columns = defineTableColumns([
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
      menu,
      data,
      columns,
    }
  },
})
</script>
