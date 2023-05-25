<template>
  <el-switch v-model="hide" />
  <pro-table
    :data="data"
    :columns="columns"
  />
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import { defineTableColumns } from 'element-pro-components'

export default defineComponent({
  setup() {
    const hide = ref(true)
    const columns = computed(() =>
      defineTableColumns([
        {
          label: 'Date',
          prop: 'date',
          hide: hide.value,
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
    )
    const data = [
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
    ]

    return {
      hide,
      data,
      columns,
    }
  },
})
</script>
