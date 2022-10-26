<template>
  <pro-menu
    :routes="routes"
    class="docs-menu"
  />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const routes = [
      {
        path: '/one',
        component: { template: 'one page' },
        meta: { title: 'one', group: true },
        children: [
          {
            path: '/one/index',
            component: { template: 'one index page' },
            meta: { title: 'oneIndex' },
          },
          {
            path: '/one/info',
            component: { template: 'one info page' },
            meta: { title: 'oneInfo' },
          },
        ],
      },
      {
        path: '/two',
        component: { template: 'two page' },
        meta: { title: 'two', group: true },
        children: [
          {
            path: '/two/index',
            component: { template: 'two page' },
            meta: { title: 'twoIndex' },
          },
          {
            path: '/two/info',
            component: { template: 'two page' },
            meta: { title: 'twoInfo' },
          },
        ],
      },
    ]

    return { routes }
  },
})
</script>
