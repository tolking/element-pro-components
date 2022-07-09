import { Ref, ref, reactive, watchEffect, computed } from 'vue'
import { useRouter, RouteRecordRaw } from 'vue-router'
import { createSharedComposable } from '@vueuse/core'
import { useProp } from 'element-plus'

/** Gets the routes from `vue-router` */
export const useSharedRoutes = createSharedComposable(() => {
  const router = useRouter()
  const routes = ref([]) as Ref<RouteRecordRaw[]>

  router.options.routes = reactive(router.options.routes)

  watchEffect(() => {
    routes.value = router.options.routes as RouteRecordRaw[]
  })

  return routes
})

/** routes with no value will get `vue-router` routes */
export function useCurrentRoutes(): Ref<RouteRecordRaw[]> {
  const routes = useProp<RouteRecordRaw[]>('routes')

  return computed(() => {
    return routes.value ? routes.value : useSharedRoutes().value
  })
}
