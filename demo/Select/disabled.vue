<template>
  <pro-select
    v-model="select"
    :data="list"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const select = ref('')
    const list = ref([
      { value: 'Go', label: 'go', disabled: true },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])

    return {
      select,
      list,
    }
  },
})
</script>
