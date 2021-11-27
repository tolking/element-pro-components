<template>
  <pro-checkbox
    v-model="checkbox"
    :data="data"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const checkbox = ref([])
    const data = ref([
      { value: 'Go', label: 'go' },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])

    return {
      checkbox,
      data,
    }
  },
})
</script>
