<template>
  <pro-table
    :data="data"
    :columns="columns"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { defineTableColumns } from 'element-pro-components'

export default defineComponent({
  setup() {
    const columns = defineTableColumns([
      {
        label: 'Break',
        prop: 'b.c',
      },
      {
        label: 'Object',
        prop: 'b.d',
      },
      {
        label: 'Array',
        prop: 'd[0].e',
      },
    ])
    const data = [
      {
        'b.c': 'break nested value',
        b: {
          c: 'nested value c in b',
          d: 'nested value d in b',
        },
        d: [{ e: 'nested value in array' }],
      },
    ]

    return {
      data,
      columns,
    }
  },
})
</script>
