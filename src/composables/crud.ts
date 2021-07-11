import { ComputedRef, computed, ref, unref, Ref } from 'vue'
import { useProOptions, useAttrs, useScreenSize } from './index'
import {
  isFunction,
  isObject,
  filterDeep,
  objectDeepMerge,
  objectPick,
} from '../utils/index'
import type {
  ICrudProps,
  ICrudBeforeOpen,
  ICrudColumns,
  ICrudFormType,
  ICrudMenuColumns,
  IFormColumns,
  IFormMenuColumns,
  IFormSubmit,
  ITableColumns,
  UnknownObject,
  MaybeComputedRef,
} from '../types/index'

export function useCrudColumns(
  props: Readonly<ICrudProps>
): {
  searchColumns: ComputedRef<IFormColumns | undefined>
  tableColumns: ComputedRef<ITableColumns | undefined>
  menuColumns: ComputedRef<ICrudMenuColumns | undefined>
} {
  const searchColumns = computed(() => {
    return props.searchColumns
      ? props.searchColumns
      : props.columns
      ? filterDeep<IFormColumns>(props.columns, 'search')
      : undefined
  })
  const tableColumns = computed(() => {
    return props.tableColumns ? props.tableColumns : props.columns
  })
  const menuColumns = computed(() => {
    if (!props.menu) return undefined
    const options = useProOptions()
    return isObject(props.menu)
      ? objectDeepMerge<ICrudMenuColumns>(options.menu, props.menu)
      : options.menu
  })

  return {
    searchColumns,
    tableColumns,
    menuColumns,
  }
}

export function useCrudForm(
  props: Readonly<ICrudProps>,
  emit: (event: 'submit', ...args: unknown[]) => void,
  resetForm: (reset?: boolean) => void
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
      done()
      resetForm(true)
      dialogVisible.value = false
    }

    emit('submit', close, done, formType.value, isValid, invalidFields)
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
  emit: (
    event: 'update:search' | 'search' | 'searchReset',
    ...args: unknown[]
  ) => void,
  menuColumns?: MaybeComputedRef<ICrudMenuColumns | undefined>
): {
  searchMenu: ComputedRef<IFormMenuColumns>
  searchForm: IFormSubmit
  searchReset: () => void
  upSearchData: (value: unknown) => void
} {
  const searchMenu = computed<IFormMenuColumns>(() => {
    const _menuColumns = unref(menuColumns)
    const options = useProOptions()
    const menu = _menuColumns ? _menuColumns : options.menu

    return {
      submit: menu.search,
      submitText: menu.searchText,
      submitProps: menu.searchProps,
      reset: menu.searchReset,
      resetText: menu.searchResetText,
      resetProps: menu.searchResetProps,
    }
  })

  const searchForm: IFormSubmit = (done, isValid, invalidFields) => {
    emit('search', done, isValid, invalidFields)
  }

  function searchReset() {
    emit('searchReset')
  }

  function upSearchData(value: unknown) {
    emit('update:search', value)
  }

  return {
    searchMenu,
    searchForm,
    searchReset,
    upSearchData,
  }
}

export function useCrudAttrs(
  formType: ICrudFormType | Ref<ICrudFormType>,
  resetForm: (reset?: boolean) => void,
  menuColumns?: MaybeComputedRef<ICrudMenuColumns | undefined>
): {
  attrs: Ref<UnknownObject>
  bindDialog: ComputedRef<UnknownObject>
} {
  const attrs = useAttrs()
  const size = useScreenSize()
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
    const sizeWidth = { xs: '90%', sm: '80%', md: '70%', lg: '60%', xl: '50%' }

    function beforeClose(done: () => void) {
      function callback() {
        resetForm(true)
        done()
      }

      isFunction(_beforeClose) ? _beforeClose(callback) : callback()
    }

    bindDialog.title = bindDialog.title ?? title
    bindDialog['custom-class'] = bindDialog['custom-class'] ?? 'pro-crud-dialog'
    bindDialog['before-close'] = beforeClose
    bindDialog.width = bindDialog.width ?? sizeWidth[size.value]

    return bindDialog
  })

  return {
    attrs,
    bindDialog,
  }
}
