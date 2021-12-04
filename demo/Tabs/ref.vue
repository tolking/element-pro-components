<template>
  <pro-tabs
    ref="childTabs"
    style="margin-bottom: 15px"
  />
  <el-button @click="childTabs.close('/en-US/guide/')">
    Close homepage
  </el-button>
  <el-button @click="childTabs.closeOther">
    Close otherpage
  </el-button>
  <el-button @click="asyncList">
    async
  </el-button>
</template>

<script>
import { defineComponent, inject, onMounted, shallowRef } from 'vue'

export default defineComponent({
  setup() {
    const tabs = inject('tabs') // Get top-level `Tabs` inject
    const childTabs = shallowRef({})

    onMounted(() => {
      asyncList()
    })

    function asyncList() {
      childTabs.value.list = tabs.value.list
    }

    return {
      childTabs,
      asyncList,
    }
  },
})
</script>
