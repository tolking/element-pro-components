<template>
  <pro-input-tag
    v-for="item in sizeList"
    :key="item"
    v-model="inputTags"
    :size="item"
    placeholder="Please click the space button after input"
    class="input-tag-size"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const inputTags = ref([])
    const sizeList = ['large', 'default', 'small']

    return {
      inputTags,
      sizeList,
    }
  },
})
</script>

<style>
.input-tag-size {
  margin-bottom: 10px;
}
.input-tag-size:last-child {
  margin-bottom: 0;
}
</style>
