<template>
  <pro-menu
    :routes="routes"
    class="docs-menu"
  >
    <template #default="item">
      <pro-link :to="item.path">
        <i
          v-if="item.meta?.icon"
          :class="item.meta.icon"
        />
        <span v-if="item.meta?.title">
          {{ item.meta.title }}
        </span>
      </pro-link>
    </template>
  </pro-menu>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const routes = [
      {
        path: '/en-US/components/menu',
        meta: { title: 'FontIcon', icon: 'el-icon-potato-strips' },
      },
      {
        path: '/en-US/components/menu',
        meta: { title: 'Development', icon: 'el-icon-cpu' },
      },
    ]

    return {
      routes,
    }
  },
})
</script>
