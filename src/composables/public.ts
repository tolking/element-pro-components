import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { ProRouteRecordRaw } from '../types/index'

/**
 * toggle show
 * @param state init value (default `false`)
 */
export function useShow(state: boolean = false) {
  const show = ref(state)

  function toggleShow() {
    show.value = !show.value
  }

  return {
    show,
    toggleShow,
  }
}

/** Gets the responsive breakpoint of the current screen */
export function useScreenSize() {
  const size = ref<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('xl')

  onMounted(() => {
    getScreenSize()
    window.onresize = () => {
      setTimeout(getScreenSize, 0)
    }
  })

  function getScreenSize() {
    const width = document.body.clientWidth

    if (width >= 1920) {
      size.value = 'xl'
    } else if (width >= 1200) {
      size.value = 'lg'
    } else if (width >= 992) {
      size.value = 'md'
    } else if (width >= 768) {
      size.value = 'sm'
    } else {
      size.value = 'xs'
    }
  }

  return size
}

/**
 * routes with no value will get `vue-router` routes
 * @param routes router list
 */
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
