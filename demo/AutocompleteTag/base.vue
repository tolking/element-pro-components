<template>
  <pro-autocomplete-tag
    v-model="inputTags"
    :fetch-suggestions="querySearch"
    placeholder="Please click the space button after input"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const inputTags = ref([])
    const list = [
      { value: 'Go', tag: 'go' },
      { value: 'JavaScript', tag: 'javascript' },
      { value: 'Python', tag: 'python' },
    ]

    function querySearch(queryString, cb) {
      cb(
        queryString
          ? list.filter((i) => {
              return i.value.indexOf(queryString.toLowerCase()) === 0
            })
          : list
      )
    }

    return {
      inputTags,
      querySearch,
    }
  },
})
</script>
