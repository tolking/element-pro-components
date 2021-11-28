<template>
  <pro-tree-select
    v-model="select"
    :data="data"
    :load="loadNode"
    lazy
    multiple
    filterable
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const select = ref([])
    const data = []

    function loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([
          {
            label: 'region',
            value: 'region',
            isLeaf: true,
          },
        ])
      }
      if (node.level > 2) return resolve([])

      setTimeout(() => {
        const data = [
          {
            label: 'leaf-' + node.level,
            value: 'leaf-' + node.level,
            isLeaf: node.level <= 2,
          },
          {
            label: 'zone-' + node.level,
            value: 'zone-' + node.level,
          },
        ]
        resolve(data)
      }, 500)
    }

    return {
      select,
      data,
      loadNode,
    }
  },
})
</script>
