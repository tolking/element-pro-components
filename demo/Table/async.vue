<template>
  <div style="margin-bottom: 20px">
    <el-button
      type="primary"
      @click="createTable"
    >
      Load Table
    </el-button>
    <el-button
      type="info"
      @click="createDict"
    >
      Load Dict
    </el-button>
    <el-button
      type="danger"
      @click="destroyTable"
    >
      Destroy
    </el-button>
  </div>
  <pro-table
    :data="data"
    :columns="columns"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import { defineTableColumns } from 'element-pro-components'

export default defineComponent({
  setup() {
    const data = ref([])
    const columns = ref(defineTableColumns([]))
    const createTable = () => {
      columns.value = defineTableColumns([
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
    }
    const createDict = () => {
      data.value = [
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
    }
    const destroyTable = () => {
      columns.value = []
      data.value = []
    }

    return {
      data,
      columns,
      createTable,
      createDict,
      destroyTable,
    }
  },
})
</script>
