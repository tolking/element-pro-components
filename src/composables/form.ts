import { ComputedRef, computed, Ref, unref } from 'vue'
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

  return computed(() => _option)
}
