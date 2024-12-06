<template>
  <pro-select v-model="select" :data="data" />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const select = ref('')
    const data = ref([
      {
        label: 'Popular cities',
        children: [
          {
            value: 'Shanghai',
            label: 'Shanghai',
          },
          {
            value: 'Beijing',
            label: 'Beijing',
          },
        ],
      },
      {
        label: 'City name',
        children: [
          {
            value: 'Chengdu',
            label: 'Chengdu',
          },
          {
            value: 'Shenzhen',
            label: 'Shenzhen',
          },
          {
            value: 'Guangzhou',
            label: 'Guangzhou',
          },
          {
            value: 'Dalian',
            label: 'Dalian',
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
