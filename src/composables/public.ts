import {
  ComputedRef,
  computed,
  getCurrentInstance,
  onMounted,
  Ref,
  ref,
  onUnmounted,
  unref,
} from 'vue'
import { useRouter } from 'vue-router'
import { filterRouterByHidden } from '../utils/index'
import type { ProRouteRecordRaw, UnknownObject } from '../types/index'

/**
 * toggle show
 * @param state init value (default `false`)
 */
export function useShow(
  state: boolean | Ref<boolean> = false
): {
  show: Ref<boolean>
  toggleShow: () => void
} {
  const _state = unref(state)
  const show = ref(_state)

  function toggleShow() {
    show.value = !show.value
  }

  return {
    show,
    toggleShow,
  }
}

export function useHover(): {
  isHover: Ref<boolean>
  enter: () => void
  leave: () => void
} {
  const isHover = ref(false)

  function enter() {
    isHover.value = true
  }

  function leave() {
    isHover.value = false
  }

  return {
    isHover,
    enter,
    leave,
  }
}

/**
 * Monitor window scroll changes
 * @param callback callback function
 */
export function useScroll(callback: () => void): void {
  onMounted(() => {
    window.addEventListener('scroll', callback)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', callback)
  })
}

/**
 * Monitor window size changes
 * @param callback callback function
 */
export function useResize(callback: () => void): void {
  onMounted(() => {
    callback()
    window.addEventListener('resize', callback)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', callback)
  })
}

type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/** Gets the responsive breakpoint of the current screen */
export function useScreenSize(): Ref<ScreenSize> {
  const size = ref<ScreenSize>('xl')

  useResize(getScreenSize)

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
 * @param props components props
 */
export function useCurrentRoutes(
  props: Readonly<{
    routes?: ProRouteRecordRaw[]
  }>
): ComputedRef<ProRouteRecordRaw[]> {
  return computed(() => {
    if (props.routes && props.routes.length) {
      return props.routes
    } else {
      const router = useRouter()
      const _routes = router.options.routes as ProRouteRecordRaw[]

      return filterRouterByHidden(_routes)
    }
  })
}

/**
 * exclusion `class` `style` for attrs
 * @param excludeKeys Additional exclusion value
 */
export function usrFilterAttrs(
  excludeKeys: string[] = []
): ComputedRef<UnknownObject> {
  const instance = getCurrentInstance() || { attrs: {} }
  const exclude = excludeKeys.concat(['class', 'style'])

  return computed(() => {
    const attrs = { ...instance.attrs }

    exclude.forEach((item: string) => {
      if (item in attrs) {
        attrs[item] = undefined
      }
    })

    return attrs
  })
}
