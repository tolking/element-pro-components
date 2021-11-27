<template>
  <pro-input-tag
    v-model="inputTags"
    :max="3"
    placeholder="Enter up to 3 tags"
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
