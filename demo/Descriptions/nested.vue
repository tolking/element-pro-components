<template>
  <pro-descriptions :columns="columns" :detail="detail" :column="1" />
</template>

<script>
import { defineComponent } from 'vue'
import { defineDescriptionsColumns } from 'element-pro-components'

export default defineComponent({
  setup() {
    const columns = defineDescriptionsColumns([
      { label: 'A', prop: 'a' },
      { label: 'B', prop: 'b.c' },
      { label: 'C', prop: 'b.d' },
      { label: 'D', prop: 'd[0].e' },
    ])
    const detail = {
      a: 'a value',
      'b.c': 'break nested value',
      b: {
        c: 'nested value c in b',
        d: 'nested value d in b',
      },
      d: [{ e: 'nested value in array' }],
    }

    return {
      columns,
      detail,
    }
  },
})
</script>
