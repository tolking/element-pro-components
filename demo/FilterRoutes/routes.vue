<template>
  <pro-filter-routes :routes="routes" />
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const routes = computed(() => {
      const _routes = router.options.routes
      return (
        _routes.find((item) => {
          return item.path === '/en-US/components/'
        })?.children || _routes
      )
    })

    return {
      routes,
    }
  },
})
</script>
