import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { ProRouteRecordRaw } from '../types/index'

export function useShow(state?: boolean) {
  const show = ref(state ?? false)

  function toggleShow() {
    show.value = !show.value
  }

  return {
    show,
    toggleShow,
  }
}

export function useCurrentRoutes(routes?: ProRouteRecordRaw[]) {
  return computed(() => {
    if (routes && routes.length) {
      return routes
    } else {
      const router = useRouter()

      return router.options.routes as ProRouteRecordRaw[]
    }
  })
}
