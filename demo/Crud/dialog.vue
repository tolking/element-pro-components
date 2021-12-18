<template>
  <pro-crud
    v-model="form"
    :columns="columns"
    :menu="{ label: 'Operations' }"
    :data="data"
    :before-open="beforeOpen"
    :before-close="beforeClose"
    label-width="100px"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import {
  defineCrudColumns,
  defineCrudBeforeOpen,
  defineCrudBeforeClose,
} from 'element-pro-components'

export default defineComponent({
  setup() {
    const form = ref({})
    const columns = defineCrudColumns([
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
    const beforeOpen = defineCrudBeforeOpen((done, type, row) => {
      console.log('beforeOpen', type, row)
      setTimeout(() => {
        done()
      }, 1000)
    })
    const beforeClose = defineCrudBeforeClose((done) => {
      console.log('beforeClose')
      setTimeout(() => {
        done()
      }, 1000)
    })

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
