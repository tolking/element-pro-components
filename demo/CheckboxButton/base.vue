<template>
  <pro-checkbox-button
    v-model="checkboxbutton"
    :data="data"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const checkboxbutton = ref([])
    const data = ref([
      { value: 'Go', label: 'go' },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])

    return {
      checkboxbutton,
      data,
    }
  },
})
</script>
