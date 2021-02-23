import { ComputedRef, computed } from 'vue'
import { isFunction, isObject, filterDeep } from '../utils/index'
import type {
  ProCrudColumns,
  ProCrudMenuColumns,
  ProFormColumns,
  ProTableColumns,
  UnknownObject,
} from '../types/index'

export function useCrudColumns(
  props: Readonly<{
    columns?: ProCrudColumns
    addColumns?: ProFormColumns
    editColumns?: ProFormColumns
    searchColumns?: ProFormColumns
    tableColumns?: ProTableColumns
    menu: boolean | ProCrudMenuColumns
  }>
): {
  addColumns: ComputedRef<ProFormColumns | undefined>
  editColumns: ComputedRef<ProFormColumns | undefined>
  searchColumns: ComputedRef<ProFormColumns | undefined>
  tableColumns: ComputedRef<ProTableColumns | undefined>
  menuColumns: ComputedRef<ProCrudMenuColumns | boolean>
} {
  const addColumns = computed(() => {
    return props.addColumns
      ? props.addColumns
      : props.columns
      ? filterDeep(props.columns, 'add')
      : undefined
  })
  const editColumns = computed(() => {
    return props.editColumns
      ? props.editColumns
      : props.columns
      ? filterDeep(props.columns, 'edit')
      : undefined
  })
  const searchColumns = computed(() => {
    return props.searchColumns
      ? props.searchColumns
      : props.columns
      ? filterDeep(props.columns, 'search')
      : undefined
  })
  const tableColumns = computed(() => {
    return props.tableColumns
      ? props.tableColumns
      : props.columns
      ? filterDeep(props.columns, 'hide', false)
      : undefined
  })
  const menuColumns = computed(() => {
    const _menu = props.menu

    if (isObject(_menu)) {
      _menu.showEdit = isFunction(_menu.edit)
        ? _menu.edit
        : (row: UnknownObject) =>
            _menu.edit === undefined ? editColumns.value?.length : !!_menu.edit
      _menu.showDel = isFunction(_menu.del)
        ? _menu.del
        : (row: UnknownObject) => !!_menu.del
      return _menu
    } else {
      return _menu
    }
  })

  return {
    addColumns,
    editColumns,
    searchColumns,
    tableColumns,
    menuColumns,
  }
}
