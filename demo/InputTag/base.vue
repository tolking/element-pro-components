<template>
  <pro-input-tag
    v-model="inputTags"
    placeholder="Please click the space button after input"
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
