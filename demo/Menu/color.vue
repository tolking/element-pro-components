<template>
  <pro-radio-button
    v-model="mode"
    :data="data"
    style="margin-bottom: 16px; margin-right: 16px"
  />
  <pro-radio-button
    v-model="collapse"
    :data="list"
    style="margin-bottom: 16px"
  />
  <pro-menu
    :mode="mode"
    :collapse="collapse"
    class="docs-menu"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const mode = ref('vertical')
    const collapse = ref(false)
    const data = [
      { value: 'vertical', label: 'Vertical' },
      { value: 'horizontal', label: 'Horizontal' },
    ]
    const list = [
      { value: true, label: 'Expand' },
      { value: false, label: 'Collapse' },
    ]

    return {
      mode,
      collapse,
      data,
      list,
    }
  },
})
</script>

<style scoped>
.docs-menu {
  --el-menu-active-color: #646cfd;
  --el-menu-bg-color: #37383f;
  --el-menu-hover-bg-color: #454654;
  --el-bg-color-overlay: var(--el-menu-hover-bg-color);
  --el-menu-text-color: #fff;
  --el-menu-hover-text-color: var(--el-menu-active-color);
}
</style>
