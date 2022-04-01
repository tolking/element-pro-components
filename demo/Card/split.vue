<template>
  <el-switch v-model="split" />
  <pro-card :split="split">
    <pro-card
      :span="8"
      shadow="never"
    >
      span-8
    </pro-card>
    <pro-card
      :split="split"
      shadow="never"
      direction="column"
    >
      <pro-card shadow="never">
        top
      </pro-card>
      <pro-card shadow="never">
        bottom
      </pro-card>
    </pro-card>
  </pro-card>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const split = ref(true)

    return { split }
  },
})
</script>
