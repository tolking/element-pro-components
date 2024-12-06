<template>
  <pro-table :data="data" :columns="columns" :index="index" />
</template>

<script>
import { defineComponent, ref } from 'vue'
import {
  defineTableColumns,
  defineTableIndexColumns,
} from 'element-pro-components'

export default defineComponent({
  setup() {
    const index = defineTableIndexColumns({
      label: '#',
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
      index,
      data,
      columns,
    }
  },
})
</script>
