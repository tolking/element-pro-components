<template>
  <pro-radio-button
    v-model="mode"
    :data="data"
  />
  <pro-layout
    :mode="mode"
    class="docs-layout"
  >
    <template #logo="{ collapse }">
      <span style="line-height: 54px">
        {{ collapse ? 'L' : 'logo' }}
      </span>
    </template>
    <template #footer>
      <p>footer</p>
    </template>
    <template #header-left>
      <span>header-left</span>
    </template>
    <template #header-right>
      <span>header-right</span>
    </template>
    <template #header-bottom>
      <span>header-bottom</span>
    </template>
    <template #main-top>
      <p>main-top</p>
    </template>
    <template #main-bottom>
      <p>main-bottom</p>
    </template>
  </pro-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const mode = ref('vertical')
    const data = [
      { value: 'vertical', label: 'Menu vertical' },
      { value: 'horizontal', label: 'Menu horizontal' },
    ]

    return {
      mode,
      data,
    }
  },
})
</script>
