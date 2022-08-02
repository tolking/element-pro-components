<template>
  <pro-radio-button
    v-model="type"
    :data="data"
    style="margin-bottom: 16px"
  />
  <pro-tabs
    ref="childTabs"
    :type="type"
  />
</template>

<script>
import { defineComponent, inject, onMounted, ref, shallowRef } from 'vue'

export default defineComponent({
  setup() {
    const tabs = inject('tabs', undefined) // Get top-level `Tabs` inject
    const childTabs = shallowRef({})
    const type = ref('')
    const data = [
      { value: '', label: 'Default' },
      { value: 'card', label: 'Card' },
      { value: 'border-card', label: 'BorderCard' },
    ]

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
      type,
      data,
    }
  },
})
</script>
