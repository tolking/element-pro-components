<template>
  <pro-tree-select v-model="select" :data="data" multiple default-expand-all />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const select = ref([])
    const data = ref([
      {
        label: '1',
        value: 1,
        disabled: true,
        children: [
          {
            value: 11,
            label: '1-1',
            children: [{ value: 111, label: '1-1-1' }],
          },
        ],
      },
      {
        value: 2,
        label: '2',
        children: [
          {
            value: 21,
            label: '2-1',
            disabled: true,
            children: [{ value: 211, label: '2-1-1' }],
          },
          {
            value: 22,
            label: '2-2',
            children: [{ value: 221, label: '2-2-1', disabled: true }],
          },
        ],
      },
      {
        value: 3,
        label: '3',
        children: [
          {
            value: 31,
            label: '3-1',
            children: [{ value: 311, label: '3-1-1' }],
          },
          {
            value: 32,
            label: '3-2',
            children: [{ value: 321, label: '3-2-1', disabled: true }],
          },
        ],
      },
    ])

    return {
      select,
      data,
    }
  },
})
</script>
