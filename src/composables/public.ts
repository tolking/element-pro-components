import {
  ComputedRef,
  computed,
  onMounted,
  Ref,
  ref,
  onUnmounted,
  unref,
  getCurrentInstance,
  reactive,
  watchEffect,
  shallowRef,
} from 'vue'
import { useRouter } from 'vue-router'
import { config } from '../utils/config'
import {
  filterRouterByHidden,
  getScreenSize,
  addResizeListener,
  removeResizeListener,
  ResizableElement,
} from '../utils/index'
import type {
  IRouteRecordRaw,
  IScreenSize,
  UnknownObject,
  InstallOptions,
} from '../types/index'

/**
 * get the global config
 */
export function useProOptions(): Required<InstallOptions> {
  const vm = getCurrentInstance()
  const proxy = (vm?.proxy || {}) as { $PROOPTIONS: Required<InstallOptions> }

  return '$PROOPTIONS' in proxy ? proxy.$PROOPTIONS : config
}

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
export function useScreenSize(): Ref<IScreenSize> {
  const size = ref<IScreenSize>('xl')
  const el = ref<ResizableElement>({} as ResizableElement)

  onMounted(() => {
    el.value = (document.getElementsByTagName(
      'body'
    )[0] as unknown) as ResizableElement
    addResizeListener(el.value, setSize)
    setSize()
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
    routes?: IRouteRecordRaw[]
  }>
): ComputedRef<IRouteRecordRaw[]> {
  return computed(() => {
    if (props.routes && props.routes.length) {
      return props.routes
    } else {
      const router = useRouter()
      const _routes = router.options.routes as IRouteRecordRaw[]

      return filterRouterByHidden(_routes)
    }
  })
}

/**
 * exclusion `class` `style` for attrs
 * @param excludeKeys Additional exclusion value
 */
export function useAttrs(excludeKeys: string[] = []): Ref<UnknownObject> {
  const instance = getCurrentInstance() || { attrs: {} }
  const attrs = shallowRef({})
  const exclude = excludeKeys.concat(['class', 'style'])

  instance.attrs = reactive(instance.attrs)

  watchEffect(() => {
    const _attrs = { ...instance.attrs }

    exclude.forEach((item: string) => {
      if (item in _attrs) {
        _attrs[item] = undefined
      }
    })

    attrs.value = _attrs
  })

  return attrs
}
