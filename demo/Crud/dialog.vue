<template>
  <pro-crud
    v-model="form"
    :columns="columns"
    :menu="{ label: 'Operations' }"
    :data="data"
    :before-open="beforeOpen"
    :before-close="beforeClose"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const form = ref({})
    const columns = ref([
      {
        label: 'Date',
        prop: 'date',
        component: 'el-input',
        form: true,
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

    function beforeOpen(done, type, row) {
      console.log('beforeOpen', type, row)
      setTimeout(() => {
        done()
      }, 1000)
    }

    function beforeClose(done) {
      console.log('beforeClose')
      setTimeout(() => {
        done()
      }, 1000)
    }

    return {
      form,
      columns,
      data,
      beforeOpen,
      beforeClose,
    }
  },
})
</script>
