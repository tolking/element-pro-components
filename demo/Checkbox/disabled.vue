<template>
  <pro-checkbox
    v-model="checkbox"
    :data="list"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const checkbox = ref([])
    const list = ref([
      { value: 'Go', label: 'go', disabled: true },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])

    return {
      checkbox,
      list,
    }
  },
})
</script>
