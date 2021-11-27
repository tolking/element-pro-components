<template>
  <pro-select
    v-model="select"
    :data="data"
    :config="config"
  >
    <template #default="{ data: item }">
      <span>{{ item.label }}</span>
      <span style="float: right">{{ item.value }}</span>
    </template>
  </pro-select>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const select = ref('')
    const config = ref({ value: 'label', label: 'value' })
    const data = ref([
      { value: 'Go', label: 'go' },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])

    return {
      select,
      config,
      data,
    }
  },
})
</script>
