<template>
  <p>{{ columns }}</p>
  <pro-column-setting v-model="columns">
    <el-button>Setting</el-button>
  </pro-column-setting>
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
