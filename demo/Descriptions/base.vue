<template>
  <pro-descriptions :columns="columns" :detail="detail" />
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
