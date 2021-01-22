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
  currentBind: Record<string, unknown> | Ref<Record<string, unknown>>
): ComputedRef<Record<string, unknown>> {
  const _currentBind = unref(currentBind)
  const _option = isObject(_currentBind) ? { ..._currentBind } : {}

  if (_option) {
    _option.slot = undefined
    _option.component = undefined
    _option.max = undefined
    _option.props = undefined
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

type ModelChildValue = Record<string, Record<string, unknown>[]>

export function useFormChild(
  props: Readonly<{
    item: Record<string, unknown> & { prop: string }
    modelValue: Record<string, unknown>
  }>,
  emit: (event: 'update:modelValue', ...args: unknown[]) => void
): {
  add: () => void
  del: (index: number) => void
  upChildData: (value: Record<string, unknown>, index: number) => void
} {
  function add() {
    const _model = { ...props.modelValue } as ModelChildValue
    if (props.modelValue[props.item.prop]) {
      _model[props.item.prop].push({})
    } else {
      _model[props.item.prop] = [{}]
    }
    emit('update:modelValue', _model)
  }

  function del(index: number) {
    const _model = { ...props.modelValue } as ModelChildValue
    _model[props.item.prop].splice(index, 1)
    emit('update:modelValue', _model)
  }

  function upChildData(value: Record<string, unknown>, index: number) {
    const _model = { ...props.modelValue } as ModelChildValue
    _model[props.item.prop][index] = value
    emit('update:modelValue', _model)
  }

  return {
    add,
    del,
    upChildData,
  }
}
