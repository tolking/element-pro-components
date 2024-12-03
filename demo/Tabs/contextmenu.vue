<template>
  <pro-tabs
    ref="childTabs"
    contextmenu
    refresh-path="/dev/refresh"
  />
</template>

<script>
import { defineComponent, inject, onMounted, shallowRef } from 'vue'

export default defineComponent({
  setup() {
    const tabs = inject('tabs', undefined) // Get top-level `Tabs` inject
    const childTabs = shallowRef({})

    onMounted(() => {
      asyncList()
    })

    function asyncList() {
      if (tabs) {
        childTabs.value.list = tabs.value.list
      }
    }

    return {
      childTabs,
    }
  },
})
</script>
