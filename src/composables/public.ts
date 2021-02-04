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
import {
  filterRouterByHidden,
  getScreenSize,
  addResizeListener,
  removeResizeListener,
} from '../utils/index'
import type {
  ProRouteRecordRaw,
  UnknownObject,
  ScreenSize,
} from '../types/index'

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

/** Gets the responsive breakpoint of the current screen */
export function useScreenSize(): Ref<ScreenSize> {
  const size = ref<ScreenSize>('xl')
  const el = ref<Element>()

  onMounted(() => {
    el.value = document.getElementsByTagName('body')[0]
    setSize()
    addResizeListener(el.value, setSize)
  })

  onUnmounted(() => {
    removeResizeListener(el.value, setSize)
  })

  function setSize() {
    if (!el.value) return
    size.value = getScreenSize(el.value.clientWidth)
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
