import { ComputedRef, computed, ref, unref, Ref, nextTick } from 'vue'
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
  IFormSubmit,
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
  menuColumns: ComputedRef<ICrudMenuColumns | false>
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

  return {
    searchColumns,
    tableColumns,
    menuColumns,
  }
}

export function useCrudForm(
  props: Readonly<{
    columns?: ICrudColumns
    addColumns?: IFormColumns
    editColumns?: IFormColumns
    formColumns?: IFormColumns
    beforeOpen?: ICrudBeforeOpen
  }>,
  emit: (event: 'submit', ...args: unknown[]) => void,
  resetForm: () => void
): {
  dialogVisible: Ref<boolean>
  formType: Ref<ICrudFormType>
  formColumns: ComputedRef<IFormColumns | undefined>
  openForm: (type: ICrudFormType, row?: UnknownObject) => void
  submitForm: IFormSubmit
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
  const _formColumns = computed(() => {
    return props.formColumns
      ? props.formColumns
      : props.columns
      ? filterDeep<IFormColumns>(props.columns, 'form')
      : undefined
  })
  const formColumns = computed(() => {
    return _formColumns.value && _formColumns.value.length
      ? _formColumns.value
      : formType.value === 'add'
      ? addColumns.value
      : editColumns.value
  })
  const submitForm: IFormSubmit = (done, isValid, invalidFields) => {
    function close() {
      dialogVisible.value = false
      nextTick(() => {
        done()
        resetForm()
      })
    }

    emit('submit', formType.value, close, done, isValid, invalidFields)
  }

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

  return {
    dialogVisible,
    formType,
    formColumns,
    openForm,
    submitForm,
  }
}

export function useCrudSearchForm(
  emit: (event: 'update:search' | 'search', ...args: unknown[]) => void,
  menuColumns?: ICrudMenuColumns | ComputedRef<ICrudMenuColumns | false>
): {
  searchMenu: ComputedRef<IFormMenuColumns | undefined>
  searchForm: IFormSubmit
  upSearchData: (value: unknown) => void
} {
  const searchMenu = computed<IFormMenuColumns | undefined>(() => {
    const _menuColumns = unref(menuColumns)

    return _menuColumns
      ? {
          submit: _menuColumns.search,
          submitText: _menuColumns.searchText,
          submitProps: _menuColumns.searchProps,
          reset: _menuColumns.searchReset,
          resetText: _menuColumns.searchResetText,
          resetProps: _menuColumns.searchResetProps,
        }
      : undefined
  })

  const searchForm: IFormSubmit = (done, isValid, invalidFields) => {
    emit('search', done, isValid, invalidFields)
  }

  function upSearchData(value: unknown) {
    emit('update:search', value)
  }

  return {
    searchMenu,
    searchForm,
    upSearchData,
  }
}

export function useCrudAttrs(
  formType: ICrudFormType | Ref<ICrudFormType>,
  resetForm: () => void,
  menuColumns?: ICrudMenuColumns | ComputedRef<ICrudMenuColumns | false>
): {
  attrs: Ref<UnknownObject>
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
    const _beforeClose = bindDialog['before-close']

    function beforeClose(done: () => void) {
      function callback() {
        done()
        resetForm()
      }

      isFunction(_beforeClose) ? _beforeClose(callback) : callback()
    }

    bindDialog.title = bindDialog.title ?? title
    bindDialog['custom-class'] = bindDialog['custom-class'] ?? 'pro-crud-dialog'
    bindDialog['before-close'] = beforeClose

    return bindDialog
  })

  return {
    attrs,
    bindDialog,
  }
}
