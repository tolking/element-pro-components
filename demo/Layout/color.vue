<template>
  <pro-radio-button
    v-model="mode"
    :data="data"
    style="margin-bottom: 16px"
  />
  <pro-layout
    :mode="mode"
    class="docs-layout"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const mode = ref('vertical')
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

<style scoped>
.docs-layout {
  --el-menu-active-color: #646cfd;
  --el-menu-bg-color: #37383f;
  --el-menu-hover-bg-color: #454654;
  --el-bg-color-overlay: var(--el-menu-hover-bg-color);
  --el-menu-text-color: #fff;
  --el-menu-hover-text-color: var(--el-menu-active-color);
}
</style>
