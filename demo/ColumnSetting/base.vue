<template>
  <p>{{ columns }}</p>
  <pro-column-setting v-model="columns" />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const columns = ref([
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

    return {
      columns,
    }
  },
})
</script>
