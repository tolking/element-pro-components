<template>
  <el-switch v-model="ghost" />
  <pro-card :ghost="ghost"> Content </pro-card>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const ghost = ref(true)

    return { ghost }
  },
})
</script>
