<template>
  <pro-radio-button v-model="mode" :data="data" style="margin-bottom: 16px" />
  <pro-layout :mode="mode" class="docs-layout">
    <template #logo="{ collapse }">
      <span style="line-height: 54px">
        {{ collapse ? 'L' : 'logo' }}
      </span>
    </template>
    <template #footer>
      <p>footer</p>
    </template>
    <template #collapse-button="{ collapse, toggleShow }">
      <el-icon :size="30" @click="toggleShow">
        <Expand v-if="collapse" />
        <Fold v-else />
      </el-icon>
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
    <template #default>
      <p>default</p>
    </template>
  </pro-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    Expand,
    Fold,
  },
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
