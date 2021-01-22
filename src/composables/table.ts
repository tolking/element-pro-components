import { ComputedRef, computed, Ref, toRefs, unref, inject } from 'vue'
import { isObject } from '@vue/shared'
import { config } from '../utils/config'
import { filterSlotDeep } from '../utils/index'
import type { ProColumns, ProColumnsDefaultBind } from '../types/index'

export function useColumnsSlotList(
  columns: ProColumns | Ref<ProColumns>
): ComputedRef<ProColumns> {
  const _columns = unref(columns)

  return computed(() => {
    return filterSlotDeep(_columns).map((item) => {
      item.header = item.prop + '-header'
      return item
    })
  })
}

export function useColumnsDefaultBind(
  props: Readonly<ProColumnsDefaultBind>
): ComputedRef<ProColumnsDefaultBind> {
  const { showOverflowTooltip, align, headerAlign } = toRefs(props)

  return computed(() => ({
    showOverflowTooltip: showOverflowTooltip.value,
    align: align?.value,
    headerAlign: headerAlign?.value,
  }))
}

export function useColumnsBind(
  currentBind:
    | boolean
    | Record<string, unknown>
    | Ref<boolean | Record<string, unknown>>,
  defaultBind?: ProColumnsDefaultBind | Ref<ProColumnsDefaultBind>
): ComputedRef<Record<string, unknown>> {
  const _currentBind = unref(currentBind)
  const _defaultBind = unref(defaultBind)
  const _option = isObject(_currentBind) ? { ..._currentBind } : undefined

  if (_option) {
    _option.slot = undefined
    delete _option.children
  }

  return computed(() => Object.assign({}, _defaultBind, _option))
}

export function usePaginationBind(
  pagination:
    | undefined
    | Record<string, unknown>
    | Ref<undefined | Record<string, unknown>>
): ComputedRef<Record<string, unknown>> {
  return computed(() => {
    const _pagination = unref(pagination)

    if (_pagination) {
      return _pagination
    } else {
      const options = inject<{
        pagination: Record<string, unknown>
      }>('ProOptions')

      if (options) {
        return options.pagination
      } else {
        const tableOptions = inject<{
          pagination: Record<string, unknown>
        }>('ProTableOptions')

        return tableOptions ? tableOptions.pagination : config.pagination
      }
    }
  })
}

export function usePaginationEmit(
  emit: (
    event:
      | 'update:currentPage'
      | 'update:pageSize'
      | 'size-change'
      | 'current-change'
      | 'prev-click'
      | 'next-click',
    ...args: unknown[]
  ) => void
): {
  sizeChange: (size: number) => void
  currentChange: (current: number) => void
  prevClick: (current: number) => void
  nextClick: (current: number) => void
} {
  function sizeChange(size: number) {
    emit('update:pageSize', size)
    emit('size-change', size)
  }
  function currentChange(current: number) {
    emit('update:currentPage', current)
    emit('current-change', current)
  }
  function prevClick(current: number) {
    emit('current-change', current)
  }
  function nextClick(current: number) {
    emit('current-change', current)
  }

  return {
    sizeChange,
    currentChange,
    prevClick,
    nextClick,
  }
}
