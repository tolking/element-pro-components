import {
  ComputedRef,
  computed,
  Ref,
  unref,
  inject,
  getCurrentInstance,
} from 'vue'
import { isObject } from '@vue/shared'
import { filterSlotDeep } from '../utils/index'
import type { ProColumns } from '../types/index'

export function useFormSlotList(
  columns: ProColumns | Ref<ProColumns>
): ComputedRef<ProColumns> {
  const _columns = unref(columns)

  return computed(() => {
    return filterSlotDeep(_columns).map((item) => {
      item.labelSlot = item.prop + '-label'
      item.errorSlot = item.prop + '-error'
      return item
    })
  })
}

export function useFormItemBind(
  currentBind:
    | boolean
    | Record<string, unknown>
    | Ref<boolean | Record<string, unknown>>
): ComputedRef<Record<string, unknown>> {
  const _currentBind = unref(currentBind)
  const _option = isObject(_currentBind) ? { ..._currentBind } : {}

  if (_option) {
    delete _option.slot
    delete _option.component
    delete _option.max
    delete _option.props
    delete _option.children
  }

  _option.size = _option.size || useFormSize().value

  return computed(() => _option)
}

type ComponentSize = 'medium' | 'small' | 'mini' | undefined
interface ElInstallOptions {
  size: ComponentSize
  zIndex: number
  locale?: unknown
}

function useGlobalConfig(): ElInstallOptions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const vm: any = getCurrentInstance()
  const proxy: { $ELEMENT: ElInstallOptions } = vm.proxy
  if ('$ELEMENT' in proxy) {
    return proxy.$ELEMENT
  }
  return {} as ElInstallOptions
}

export function useFormSize(
  props?: Readonly<{ size?: ComponentSize }>
): ComputedRef<ComponentSize> {
  const elForm = inject<{ size?: ComponentSize }>('elForm', {})
  const elFormItem = inject<{ size?: ComponentSize }>('elFormItem', {})
  const $ElEMENT = useGlobalConfig()

  return computed(() => {
    return props?.size || elFormItem.size || elForm.size || $ElEMENT.size
  })
}
