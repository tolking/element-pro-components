<template>
  <pro-radio-button
    v-model="mode"
    :data="data"
  />
  <pro-menu
    :mode="mode"
    class="docs-menu"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const mode = ref('horizontal')
    const data = [
      { value: 'vertical', label: 'Vertical' },
      { value: 'horizontal', label: 'Horizontal' },
    ]

    return {
      mode,
      data,
    }
  },
})
</script>
