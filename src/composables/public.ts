import {
  Ref,
  ref,
  unref,
  getCurrentInstance,
  reactive,
  watchEffect,
  computed,
  WritableComputedRef,
  ComputedRef,
} from 'vue'
import { useRouter, RouteRecordRaw } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
import { config } from '../utils/config'
import { getScreenSize, objectDeepMerge } from '../utils/index'
import type {
  IRouteRecordRaw,
  IScreenSize,
  UnknownObject,
  InstallOptions,
  MaybeRef,
} from '../types/index'

/** get the global config */
export function useProOptions(): Required<InstallOptions> {
  const vm = getCurrentInstance()
  const proxy = (vm?.proxy || {}) as { $PROOPTIONS: InstallOptions }

  return '$PROOPTIONS' in proxy
    ? objectDeepMerge<Required<InstallOptions>>(config, proxy.$PROOPTIONS)
    : config
}

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
export function useScreenSize(): ComputedRef<IScreenSize> {
  return computed(() => {
    const { width } = useWindowSize()
    return getScreenSize(width.value)
  })
}

/**
 * routes with no value will get `vue-router` routes
 * @param props components props
 */
export function useCurrentRoutes(
  props: Readonly<{
    routes?: IRouteRecordRaw[]
  }>
): Ref<IRouteRecordRaw[]> | ComputedRef<IRouteRecordRaw[]> {
  if (props.routes && props.routes.length) {
    return computed(() => props.routes as IRouteRecordRaw[])
  } else {
    const router = useRouter()
    router.options.routes = reactive<RouteRecordRaw[]>(
      router.options.routes
    ) as IRouteRecordRaw[]
    const routes = ref<IRouteRecordRaw[]>([] as IRouteRecordRaw[])

    watchEffect(() => {
      routes.value = router.options.routes
    })

    return routes as Ref<IRouteRecordRaw[]>
  }
}

/**
 * bind model value
 * @param props value props
 * @param key value key
 * @param defaultValue config the default value
 * @param emit update function
 */
export function useVModel<T>(
  props: Readonly<UnknownObject>,
  key = 'modelValue',
  defaultValue?: T,
  emit?: (name: string, ...args: unknown[]) => void
): WritableComputedRef<T | undefined> {
  const instance = getCurrentInstance()
  const _emit = emit || instance?.emit
  return computed<T | undefined>({
    get() {
      return (props[key] as T) || defaultValue
    },
    set(value) {
      _emit && _emit(`update:${key}`, value)
    },
  })
}
