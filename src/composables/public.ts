import {
  Ref,
  ref,
  unref,
  getCurrentInstance,
  reactive,
  watchEffect,
  computed,
} from 'vue'
import { useRouter, RouteRecordRaw } from 'vue-router'
import {
  createSharedComposable,
  useBreakpoints,
  useWindowSize,
} from '@vueuse/core'
import { getScreenSize } from '../utils/index'
import type { MaybeRef, IScreenSize } from '../types/index'

/**
 * toggle show
 * @param state init value (default `false`)
 */
export function useShow(
  state: MaybeRef<boolean> = false
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

/**
 * @deprecated Use `useCurrentBreakpoint` replace this.
 *
 * Gets the responsive breakpoint of the current screen
 */
export const useSharedBreakpoint = createSharedComposable(() => {
  const { width } = useWindowSize()

  return computed(() => {
    return getScreenSize(width.value)
  })
})

/**
 * Reactive viewport breakpoints
 *
 * `sm`: 768, `md`: 992, `lg`: 1200, `xl`: 1920
 */
export const useSharedBreakpoints = createSharedComposable(() => {
  return useBreakpoints({
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1920,
  })
})

/**
 * The breakpoint at which the current media query is located
 *
 * `xl`: > 1920, `lg`: > 1200, `md`: > 992, `sm`: > 768, `xs`: < 768
 */
export function useCurrentBreakpoint(): Ref<IScreenSize> {
  const breakpoints = useSharedBreakpoints()
  const xl = breakpoints.greater('xl')
  const lg = breakpoints.greater('lg')
  const md = breakpoints.greater('md')
  const sm = breakpoints.greater('sm')

  return computed(() => {
    if (xl.value) {
      return 'xl'
    } else if (lg.value) {
      return 'lg'
    } else if (md.value) {
      return 'md'
    } else if (sm.value) {
      return 'sm'
    } else {
      return 'xs'
    }
  })
}

/**
 * Get the width of the responsive breakpoint
 * @param config the config of width
 */
export function useBreakpointWidth(
  config?: Partial<Record<IScreenSize, string>>
): Ref<string> {
  const breakpoint = useCurrentBreakpoint()
  const sizeWidth = Object.assign(
    {
      xs: '90%',
      sm: '80%',
      md: '70%',
      lg: '60%',
      xl: '50%',
    },
    config || {}
  )

  return computed(() => sizeWidth[breakpoint.value])
}

/** Gets the routes from `vue-router` */
export const useSharedRoutes = createSharedComposable(() => {
  const router = useRouter()
  const routes = ref([]) as Ref<RouteRecordRaw[]>

  router.options.routes = reactive(router.options.routes)

  watchEffect(() => {
    routes.value = router.options.routes
  })

  return routes
})

/**
 * routes with no value will get `vue-router` routes
 * @param props components props
 */
export function useCurrentRoutes(
  props: Readonly<{
    routes?: RouteRecordRaw[]
  }>
): Ref<RouteRecordRaw[]> {
  if (props.routes && props.routes.length) {
    return computed(() => props.routes as RouteRecordRaw[])
  } else {
    return useSharedRoutes()
  }
}

/**
 * emit value to parent
 * @param key value key
 * @param emit update function
 */
export function useEmitValue(
  key = 'modelValue',
  emit?: (name: string, ...args: unknown[]) => void
): (value: unknown) => void {
  const instance = getCurrentInstance()
  const _emit = emit || instance?.emit

  function emitValue(value: unknown) {
    _emit && _emit(`update:${key}`, value)
  }

  return emitValue
}
