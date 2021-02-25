import { ComputedRef, computed, ref, unref, Ref } from 'vue'
import {
  isFunction,
  isObject,
  filterDeep,
  objectDeepMerge,
} from '../utils/index'
import { useProOptions } from './index'
import type {
  ProCrudColumns,
  ProCrudMenuColumns,
  ProFormColumns,
  ProFormMenuColumns,
  ProTableColumns,
  UnknownObject,
} from '../types/index'

export function useCrudColumns(
  props: Readonly<{
    columns?: ProCrudColumns
    searchColumns?: ProFormColumns
    tableColumns?: ProTableColumns
    menu: boolean | ProCrudMenuColumns
  }>
): {
  searchColumns: ComputedRef<ProFormColumns | undefined>
  tableColumns: ComputedRef<ProTableColumns | undefined>
  menuColumns: ComputedRef<ProCrudMenuColumns | boolean>
  serachMenu: ComputedRef<ProFormMenuColumns | undefined>
} {
  const searchColumns = computed(() => {
    return props.searchColumns
      ? props.searchColumns
      : props.columns
      ? filterDeep<ProFormColumns>(props.columns, 'search')
      : undefined
  })
  const tableColumns = computed(() => {
    return props.tableColumns
      ? props.tableColumns
      : props.columns
      ? filterDeep<ProTableColumns>(props.columns, 'hide', false)
      : undefined
  })
  const menuColumns = computed(() => {
    const options = useProOptions()
    const menu = props.menu

    if (isObject(menu)) {
      const _menu = objectDeepMerge<ProCrudMenuColumns>(options.menu, menu)
      _menu.showEdit = isFunction(_menu.edit)
        ? _menu.edit
        : (row: UnknownObject) => !!_menu.edit
      _menu.showDel = isFunction(_menu.del)
        ? _menu.del
        : (row: UnknownObject) => !!_menu.del
      return _menu
    } else {
      return menu ? options.menu : menu
    }
  })
  const serachMenu = computed<ProFormMenuColumns | undefined>(() => {
    return menuColumns.value
      ? {
          submit: menuColumns.value.search,
          submitText: menuColumns.value.searchText,
          submitProps: menuColumns.value.searchProps,
          reset: menuColumns.value.searchReset,
          resetText: menuColumns.value.searchResetText,
          resetProps: menuColumns.value.searchResetProps,
        }
      : undefined
  })

  return {
    searchColumns,
    tableColumns,
    menuColumns,
    serachMenu,
  }
}

type FormType = 'add' | 'edit'

export function useCrudForm(
  props: Readonly<{
    columns?: ProCrudColumns
    addColumns?: ProFormColumns
    editColumns?: ProFormColumns
    beforeOpen?: (next: () => void, type: FormType, row?: UnknownObject) => void
  }>,
  emit: (
    event: 'update:modelValue' | 'update:search' | 'submit' | 'serach',
    ...args: unknown[]
  ) => void,
  menuColumns?: ProCrudMenuColumns | ComputedRef<ProCrudMenuColumns | boolean>
): {
  dialogVisible: Ref<boolean>
  formType: Ref<FormType>
  formColumns: ComputedRef<ProFormColumns | undefined>
  dialogTitle: ComputedRef<string | undefined>
  openForm: (type: FormType, row?: UnknownObject) => void
  serachForm: (state: boolean, err: UnknownObject) => void
  submitForm: (state: boolean, err: UnknownObject) => void
  upSearchData: (value: unknown) => void
  upFormData: (value: unknown) => void
} {
  const dialogVisible = ref(false)
  const formType = ref<FormType>('add')
  const addColumns = computed(() => {
    return props.addColumns
      ? props.addColumns
      : props.columns
      ? filterDeep<ProFormColumns>(props.columns, 'add')
      : undefined
  })
  const editColumns = computed(() => {
    return props.editColumns
      ? props.editColumns
      : props.columns
      ? filterDeep<ProFormColumns>(props.columns, 'edit')
      : undefined
  })
  const formColumns = computed(() => {
    return formType.value === 'add' ? addColumns.value : editColumns.value
  })
  const dialogTitle = computed(() => {
    const _menuColumns = unref(menuColumns)
    return isObject(_menuColumns)
      ? formType.value === 'add'
        ? _menuColumns.addText
        : _menuColumns.editText
      : formType.value
  })

  function openForm(type: FormType, row?: UnknownObject) {
    function next() {
      formType.value = type
      dialogVisible.value = true
    }

    if (props.beforeOpen && isFunction(props.beforeOpen)) {
      props.beforeOpen(next, type, row)
    } else {
      next()
    }
  }

  function serachForm(state: boolean, err: UnknownObject) {
    emit('serach', state, err)
  }

  function submitForm(state: boolean, err: UnknownObject) {
    emit('submit', formType.value, state, err)
  }

  function upSearchData(value: unknown) {
    emit('update:search', value)
  }

  function upFormData(value: unknown) {
    emit('update:modelValue', value)
  }

  return {
    dialogVisible,
    formType,
    formColumns,
    dialogTitle,
    openForm,
    serachForm,
    submitForm,
    upSearchData,
    upFormData,
  }
}
