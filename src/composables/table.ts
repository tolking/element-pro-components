import { ComputedRef, computed, Ref, toRefs, unref, inject, ref } from 'vue'
import { isObject } from '@vue/shared'
import { config } from '../utils/config'
import { filterSlotDeep } from '../utils/index'
import type {
  ProTableColumns,
  ProTableColumnsProps,
  ProTableExpose,
  ProPagination,
  UnknownObject,
} from '../types/index'

export function useColumnsSlotList(
  columns: ProTableColumns | Ref<ProTableColumns>
): ComputedRef<ProTableColumns> {
  const _columns = unref(columns)

  return computed(() => {
    return filterSlotDeep<ProTableColumns>(_columns).map((item) => {
      item.header = item.prop + '-header'
      return item
    })
  })
}

export function useColumnsDefaultBind(
  props: Readonly<ProTableColumnsProps>
): ComputedRef<ProTableColumnsProps> {
  const { showOverflowTooltip, align, headerAlign } = toRefs(props)

  return computed(() => ({
    showOverflowTooltip: showOverflowTooltip?.value || false,
    align: align?.value,
    headerAlign: headerAlign?.value,
  }))
}

interface ColumnsBind {
  slot?: boolean
  children?: unknown
  [key: string]: unknown
}
export function useColumnsBind<T extends ColumnsBind>(
  currentBind: boolean | T | Ref<boolean | T>,
  defaultBind?: ProTableColumnsProps | Ref<ProTableColumnsProps>
): ComputedRef<T> {
  const _currentBind = unref(currentBind)
  const _defaultBind = unref(defaultBind)
  const _option = isObject(_currentBind) ? { ..._currentBind } : undefined

  if (_option) {
    _option.slot && (_option.slot = undefined)
    _option.children && delete _option.children
  }

  return computed(() => Object.assign({} as T, _defaultBind, _option))
}

export function useTableMethods(): {
  table: Ref<ProTableExpose>
} & ProTableExpose {
  const table = ref<ProTableExpose>({} as ProTableExpose)

  function clearSelection() {
    table.value.clearSelection()
  }

  function toggleRowSelection(row: UnknownObject, selected?: boolean) {
    table.value.toggleRowSelection(row, selected)
  }

  function toggleAllSelection() {
    table.value.toggleAllSelection()
  }

  function toggleRowExpansion(row: UnknownObject, expanded?: boolean) {
    table.value.toggleRowExpansion(row, expanded)
  }

  function setCurrentRow(row?: UnknownObject) {
    table.value.setCurrentRow(row)
  }

  function clearSort() {
    table.value.clearSort()
  }

  function clearFilter(columnKeys?: string[]) {
    table.value.clearFilter(columnKeys)
  }

  function doLayout() {
    table.value.doLayout()
  }

  function sort(prop: string, order: string) {
    table.value.sort(prop, order)
  }

  return {
    table,
    clearSelection,
    toggleRowSelection,
    toggleAllSelection,
    toggleRowExpansion,
    setCurrentRow,
    clearSort,
    clearFilter,
    doLayout,
    sort,
  }
}

export function usePaginationBind(
  pagination: undefined | ProPagination | Ref<undefined | ProPagination>
): ComputedRef<ProPagination> {
  return computed(() => {
    const _pagination = unref(pagination)

    if (_pagination) {
      return _pagination
    } else {
      const options = inject<{ pagination: ProPagination }>('ProOptions')

      if (options) {
        return options.pagination
      } else {
        const tableOptions = inject<{ pagination: ProPagination }>(
          'ProTableOptions'
        )

        return tableOptions?.pagination || config.pagination
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
