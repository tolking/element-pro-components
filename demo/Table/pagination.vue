<template>
  <pro-table
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :data="data"
    :columns="columns"
    :total="total"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const currentPage = ref(1)
    const pageSize = ref(10)
    const total = ref(50)
    const columns = [
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
    ]
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
      currentPage,
      pageSize,
      total,
      data,
      columns,
    }
  },
})
</script>
