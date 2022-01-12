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
import { createSharedComposable, useWindowSize } from '@vueuse/core'
import { config } from '../utils/config'
import { getScreenSize, objectDeepMerge } from '../utils/index'
import type { InstallOptions, MaybeRef } from '../types/index'

/** get the global config */
export const useProOptions = createSharedComposable(() => {
  const vm = getCurrentInstance()
  const proxy = (vm?.proxy || {}) as { $PROOPTIONS: InstallOptions }

  return '$PROOPTIONS' in proxy
    ? objectDeepMerge(config, proxy.$PROOPTIONS)
    : config
})

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

/** Gets the responsive breakpoint of the current screen */
export const useScreenSize = createSharedComposable(() => {
  const { width } = useWindowSize()

  return computed(() => {
    return getScreenSize(width.value)
  })
})

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
