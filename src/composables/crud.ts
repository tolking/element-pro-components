import { ComputedRef, computed, ref, unref, Ref } from 'vue'
import { useProOptions, useAttrs } from './index'
import {
  isFunction,
  isObject,
  filterDeep,
  objectDeepMerge,
  objectPick,
} from '../utils/index'
import type {
  ICrudBeforeOpen,
  ICrudColumns,
  ICrudFormType,
  ICrudMenuColumns,
  IFormColumns,
  IFormMenuColumns,
  ITableColumns,
  UnknownObject,
} from '../types/index'

export function useCrudColumns(
  props: Readonly<{
    columns?: ICrudColumns
    searchColumns?: IFormColumns
    tableColumns?: ITableColumns
    menu: boolean | ICrudMenuColumns
  }>
): {
  searchColumns: ComputedRef<IFormColumns | undefined>
  tableColumns: ComputedRef<ITableColumns | undefined>
  menuColumns: ComputedRef<ICrudMenuColumns | boolean>
  searchMenu: ComputedRef<IFormMenuColumns | undefined>
} {
  const searchColumns = computed(() => {
    return props.searchColumns
      ? props.searchColumns
      : props.columns
      ? filterDeep<IFormColumns>(props.columns, 'search')
      : undefined
  })
  const tableColumns = computed(() => {
    return props.tableColumns
      ? props.tableColumns
      : props.columns
      ? filterDeep<ITableColumns>(props.columns, 'hide', false)
      : undefined
  })
  const menuColumns = computed(() => {
    const options = useProOptions('ProCrudOptions')
    const menu = props.menu

    if (isObject(menu)) {
      const _menu = objectDeepMerge<ICrudMenuColumns>(options.menu, menu)
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
  const searchMenu = computed<IFormMenuColumns | undefined>(() => {
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
    searchMenu,
  }
}

export function useCrudForm(
  props: Readonly<{
    columns?: ICrudColumns
    addColumns?: IFormColumns
    editColumns?: IFormColumns
    beforeOpen?: ICrudBeforeOpen
  }>,
  emit: (
    event: 'update:modelValue' | 'update:search' | 'submit' | 'serach',
    ...args: unknown[]
  ) => void
): {
  dialogVisible: Ref<boolean>
  formType: Ref<ICrudFormType>
  formColumns: ComputedRef<IFormColumns | undefined>
  openForm: (type: ICrudFormType, row?: UnknownObject) => void
  serachForm: (state: boolean, err: UnknownObject) => void
  submitForm: (state: boolean, err: UnknownObject) => void
  upSearchData: (value: unknown) => void
} {
  const dialogVisible = ref(false)
  const formType = ref<ICrudFormType>('add')
  const addColumns = computed(() => {
    return props.addColumns
      ? props.addColumns
      : props.columns
      ? filterDeep<IFormColumns>(props.columns, 'add')
      : undefined
  })
  const editColumns = computed(() => {
    return props.editColumns
      ? props.editColumns
      : props.columns
      ? filterDeep<IFormColumns>(props.columns, 'edit')
      : undefined
  })
  const formColumns = computed(() => {
    return formType.value === 'add' ? addColumns.value : editColumns.value
  })

  function openForm(type: ICrudFormType, row?: UnknownObject) {
    function done() {
      formType.value = type
      dialogVisible.value = true
    }

    if (props.beforeOpen && isFunction(props.beforeOpen)) {
      props.beforeOpen(done, type, row)
    } else {
      done()
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

  return {
    dialogVisible,
    formType,
    formColumns,
    openForm,
    serachForm,
    submitForm,
    upSearchData,
  }
}

export function useCrudAttrs(
  formType: ICrudFormType | Ref<ICrudFormType>,
  resetForm: () => void,
  menuColumns?: ICrudMenuColumns | ComputedRef<ICrudMenuColumns | boolean>
): {
  attrs: ComputedRef<UnknownObject>
  bindDialog: ComputedRef<UnknownObject>
} {
  const attrs = useAttrs()
  const bindDialog = computed(() => {
    const _menuColumns = unref(menuColumns)
    const _formType = unref(formType)
    const title = isObject(_menuColumns)
      ? _formType === 'add'
        ? _menuColumns.addText
        : _menuColumns.editText
      : _formType
    const beforeClose = (done: () => void) => {
      resetForm()
      done()
    }
    const keys = [
      'title',
      'width',
      'fullscreen',
      'top',
      'modal',
      'append-to-body',
      'lock-scroll',
      'custom-class',
      'open-delay',
      'close-delay',
      'close-on-click-modal',
      'close-on-press-escape',
      'show-close',
      'before-close',
      'center',
      'destroy-on-close',
    ]
    const bindDialog = objectPick<UnknownObject, UnknownObject>(
      attrs.value,
      keys
    )

    bindDialog.title = bindDialog.title ?? title
    bindDialog['custom-class'] = bindDialog['custom-class'] ?? 'pro-crud-dialog'
    bindDialog['before-close'] = bindDialog['before-close'] ?? beforeClose

    return bindDialog
  })

  return {
    attrs,
    bindDialog,
  }
}
