import { ComputedRef, computed, Ref, unref, shallowRef } from 'vue'
import { filterDeep, isObject } from '../utils/index'
import type {
  UnknownObject,
  StringObject,
  MaybeRef,
  MaybeArray,
  ExternalParam,
} from '../types/index'
import type {
  ITableEmits,
  ITableColumns,
  TableColumnsProps,
  ITableExpose,
} from '../Table/index'

export function useTableColumns(
  props: Readonly<{ columns?: ITableColumns }>
): ComputedRef<ITableColumns> {
  return computed<ITableColumns>(() => {
    return filterDeep(props.columns || [], 'hide', false)
  })
}

export function useTableDefaultBind(
  props: Readonly<TableColumnsProps>
): ComputedRef<TableColumnsProps> {
  return computed(() => ({
    showOverflowTooltip: props.showOverflowTooltip || false,
    align: props.align,
    headerAlign: props.headerAlign,
  }))
}

export function useTableBind<T extends Record<string, ExternalParam>>(
  currentBind?: MaybeRef<boolean | undefined | T>,
  defaultBind?: MaybeRef<TableColumnsProps>
): ComputedRef<StringObject> {
  return computed(() => {
    const _currentBind = unref(currentBind)
    const _defaultBind = unref(defaultBind)
    const _option = isObject(_currentBind) ? { ..._currentBind } : undefined

    if (_option) {
      _option.slot && delete _option.slot
      _option.children && delete _option.children
    }

    return Object.assign({} as StringObject, _defaultBind, _option)
  })
}

export function useTableMethods<T = UnknownObject>(): {
  table: Ref<ITableExpose<T>>
} & ITableExpose<T> {
  const table = shallowRef<ITableExpose<T>>({} as ITableExpose<T>)

  function clearSelection() {
    table.value.clearSelection()
  }

  function toggleRowSelection(row: T, selected?: boolean) {
    table.value.toggleRowSelection(row, selected)
  }

  function toggleAllSelection() {
    table.value.toggleAllSelection()
  }

  function toggleRowExpansion(row: T, expanded?: boolean) {
    table.value.toggleRowExpansion(row, expanded)
  }

  function setCurrentRow(row?: T) {
    table.value.setCurrentRow(row)
  }

  function clearSort() {
    table.value.clearSort()
  }

  function clearFilter(columnKeys?: MaybeArray<string>) {
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

export function usePagination(
  emit: ITableEmits
): {
  sizeChange: (size: number) => void
  currentChange: (current: number) => void
} {
  function sizeChange(size: number) {
    emit('update:pageSize', size)
    emit('load')
  }

  function currentChange(current: number) {
    emit('update:currentPage', current)
    emit('load')
  }

  return {
    sizeChange,
    currentChange,
  }
}
