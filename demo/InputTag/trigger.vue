<template>
  <pro-input-tag
    v-model="inputTags"
    trigger="enter"
    placeholder="Please click the enter button after input"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const inputTags = ref([])

    return {
      inputTags,
    }
  },
})
</script>
