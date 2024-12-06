<template>
  <pro-tabs ref="childTabs" :before-leave="beforeLeave" />
</template>

<script>
import { defineComponent, inject, onMounted, shallowRef } from 'vue'
import { ElNotification } from 'element-plus'

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

    function beforeLeave(activeName, oldActiveName) {
      console.log({ activeName, oldActiveName })
      ElNotification({
        type: 'success',
        title: 'Success',
        message: 'Come from before-leave',
      })
      return false
    }

    return {
      childTabs,
      beforeLeave,
    }
  },
})
</script>
