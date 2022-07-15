<template>
  <pro-menu
    :routes="routes"
    :router="false"
    mode="horizontal"
    class="docs-menu"
    @select="handleSelect"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { isURL } from 'element-pro-components'

export default defineComponent({
  setup() {
    const router = useRouter()
    const routes = [
      {
        path: '/en-US/components/layout',
        meta: { title: 'Layout' },
      },
      {
        path: 'https://github.com/tolking/element-pro-components',
        meta: { title: 'Github' },
      },
      {
        path: 'https://github.com/tolking/element-admin-template',
        meta: { title: 'Template' },
      },
    ]

    function handleSelect(value) {
      isURL(value) ? window.open(value) : router.push(value)
    }

    return {
      routes,
      handleSelect,
    }
  },
})
</script>
