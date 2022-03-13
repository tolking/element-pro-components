import { ComputedRef, computed, Ref, unref, shallowRef } from 'vue'
import { reactivePick } from '@vueuse/core'
import { useProOptions } from './index'
import { filterDeep, isObject, objectDeepMerge } from '../utils/index'
import { paginationKeys } from '../Table/props'
import type { PaginationProps } from 'element-plus'
import type {
  UnknownObject,
  StringObject,
  MaybeRef,
  MaybeArray,
  ExternalParam,
} from '../types/index'
import type {
  ITableProps,
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
  props: Readonly<ITableProps>,
  emit: ITableEmits
): {
  pagination: ComputedRef<PaginationProps>
  sizeChange: (size: number) => void
  currentChange: (current: number) => void
} {
  const options = useProOptions()
  const config = reactivePick(props, ...paginationKeys)
  const pagination = computed(() => {
    return objectDeepMerge(options.pagination, {
      ...config,
      pagerCount:
        props.pagerCount === 7 && options.pagination.pagerCount
          ? options.pagination.pagerCount
          : props.pagerCount,
      layout:
        props.layout === 'prev, pager, next, jumper, ->, total' &&
        options.pagination.layout
          ? options.pagination.layout
          : props.layout,
      pageSizes:
        props.pageSizes.toString() === '10,20,30,40,50,100' &&
        options.pagination.pageSizes
          ? options.pagination.pageSizes
          : props.pageSizes,
    })
  })

  function sizeChange(size: number) {
    emit('update:pageSize', size)
    emit('load')
  }

  function currentChange(current: number) {
    emit('update:currentPage', current)
    emit('load')
  }

  return {
    pagination,
    sizeChange,
    currentChange,
  }
}
