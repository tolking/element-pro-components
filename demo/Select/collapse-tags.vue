<template>
  <div>
    <span>collapse-tags: </span>
    <pro-select
      v-model="select"
      :data="data"
      multiple
      collapse-tags
    />
  </div>
  <div>
    <span>collapse-tags-tooltip: </span>
    <pro-select
      v-model="select"
      :data="data"
      multiple
      collapse-tags
      collapse-tags-tooltip
    />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const select = ref([])
    const data = ref([
      { value: 'Go', label: 'go' },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])

    return {
      select,
      data,
    }
  },
})
</script>
