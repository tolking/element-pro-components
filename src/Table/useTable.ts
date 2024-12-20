import {
  ComputedRef,
  computed,
  Ref,
  unref,
  shallowRef,
  reactive,
  onMounted,
} from 'vue'
import { pick } from 'lodash-unified'
import { isObject } from '../utils/index'
import type {
  UnknownObject,
  StringObject,
  MaybeRef,
  ExternalParam,
} from '../types/index'
import type { ITableEmits, TableColumnsProps, ITableExpose } from './index'

export function useTableDefaultBind(
  props: Readonly<TableColumnsProps>,
): ComputedRef<TableColumnsProps> {
  return computed(() => ({
    showOverflowTooltip: props.showOverflowTooltip || false,
    align: props.align,
    headerAlign: props.headerAlign,
  }))
}

export function useTableBind<T extends Record<string, ExternalParam>>(
  currentBind?: MaybeRef<boolean | undefined | T>,
  defaultBind?: MaybeRef<TableColumnsProps>,
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
  tableRef: Ref<ITableExpose<T>>
  tableExpose: ITableExpose<T>
} {
  const tableRef = shallowRef<ITableExpose<T>>({} as ITableExpose<T>)
  const tableExpose = reactive<ITableExpose<T>>({} as ITableExpose<T>)
  // table methods
  const keys = [
    'clearSelection',
    'getSelectionRows',
    'toggleRowSelection',
    'toggleAllSelection',
    'toggleRowExpansion',
    'setCurrentRow',
    'clearSort',
    'clearFilter',
    'doLayout',
    'sort',
    'scrollTo',
    'setScrollTop',
    'setScrollLeft',
    'columns',
    'updateKeyChildren',
  ]

  onMounted(() => {
    Object.assign(tableExpose, pick(tableRef.value, keys))
  })

  return {
    tableRef,
    tableExpose,
  }
}

export function usePagination(emit: ITableEmits): {
  sizeChange: (size: number) => void
  currentChange: (current: number) => void
  handleLoad: () => void
} {
  function sizeChange(size: number) {
    emit('update:pageSize', size)
  }

  function currentChange(current: number) {
    emit('update:currentPage', current)
  }

  function handleLoad() {
    emit('load')
  }

  return {
    sizeChange,
    currentChange,
    handleLoad,
  }
}
