import { computed, ref, useSlots, Ref, Slot, reactive, onMounted } from 'vue'
import { useLocale } from '../composables/index'
import { isFunction, isObject, filterDeep } from '../utils/index'
import { formMenu, useFormInjectEmits, useFormMethods } from '../Form/index'
import type { UnknownObject } from '../types/index'
import type {
  IFormColumns,
  IFormEmits,
  IFormMenuColumns,
  IFormSubmit,
  UseFormInjectEmitsCallback,
} from '../Form/index'
import { useTableMethods, type ITableColumns } from '../Table/index'
import type { IDescriptionsColumns } from '../Descriptions/index'
import type {
  ICrudProps,
  ICrudEmits,
  ICrudDialogType,
  ICrudMenuColumns,
} from './index'

type CrudColumns =
  | 'columns'
  | 'searchColumns'
  | 'tableColumns'
  | 'addColumns'
  | 'editColumns'
  | 'formColumns'
  | 'detailColumns'

export function useCrudMenu(
  props: Readonly<{ menu?: ICrudMenuColumns | boolean }>,
): Ref<ICrudMenuColumns> {
  const { t } = useLocale()

  return computed(() => {
    const menu: ICrudMenuColumns = {
      ...formMenu,
      add: true,
      addProps: { type: 'primary' },
      edit: true,
      editProps: { link: true, type: 'primary' },
      detail: true,
      detailProps: { link: true, type: 'info' },
      del: true,
      delProps: { link: true, type: 'danger' },
      search: true,
      searchProps: { type: 'primary' },
      searchReset: true,
      addText: t('pro.crud.add'),
      editText: t('pro.crud.edit'),
      detailText: t('pro.crud.detail'),
      delText: t('pro.crud.del'),
      submitText: t('pro.crud.submit'),
      resetText: t('pro.crud.reset'),
      prevText: t('pro.crud.prev'),
      nextText: t('pro.crud.next'),
      searchText: t('pro.crud.search'),
      searchResetText: t('pro.crud.reset'),
      searchPrevText: t('pro.crud.prev'),
      searchNextText: t('pro.crud.next'),
    }

    return isObject(props.menu) ? Object.assign({}, menu, props.menu) : menu
  })
}

export function useCrudColumns(
  props: Readonly<Pick<ICrudProps, CrudColumns>>,
): {
  searchColumns: Ref<IFormColumns | undefined>
  tableColumns: Ref<ITableColumns | undefined>
  addColumns: Ref<IFormColumns | undefined>
  editColumns: Ref<IFormColumns | undefined>
  formColumns: Ref<IFormColumns | undefined>
  detailColumns: Ref<IDescriptionsColumns | undefined>
} {
  const searchColumns = computed(() => {
    return props.searchColumns
      ? props.searchColumns
      : props.columns
        ? filterDeep(props.columns, 'search')
        : undefined
  })
  const tableColumns = computed(() => {
    return props.tableColumns || props.columns
  })
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
  const formColumns = computed(() => {
    return props.formColumns
      ? props.formColumns
      : props.columns
        ? filterDeep(props.columns, 'form')
        : undefined
  })
  const detailColumns = computed(() => {
    return props.detailColumns
      ? props.detailColumns
      : props.columns
        ? filterDeep(props.columns, 'detail', true, (item) => ({
            ...item,
            span: item.detailSpan,
          }))
        : undefined
  })

  return {
    searchColumns,
    tableColumns,
    addColumns,
    editColumns,
    formColumns,
    detailColumns,
  }
}

export function useCrudMethods({
  emit,
  openDialog,
  closeDialog,
}: {
  emit: ICrudEmits
  openDialog: (type: ICrudDialogType, row?: UnknownObject) => void
  closeDialog: () => void
}) {
  const searchRef = ref()
  const { tableRef, tableExpose } = useTableMethods()
  const { formRef, update, resetForm } = useFormMethods(
    emit as unknown as IFormEmits,
  )
  const crudExpose = reactive({
    searchRef,
    formRef,
    openDialog,
    closeDialog,
  })

  onMounted(() => {
    Object.assign(crudExpose, tableExpose)
  })

  return {
    searchRef,
    tableRef,
    formRef,
    update,
    resetForm,
    crudExpose,
  }
}

export function useCrudForm(
  props: Readonly<Pick<ICrudProps, CrudColumns | 'beforeOpen'>>,
  emit: ICrudEmits,
  resetForm: (reset?: boolean) => void,
): {
  showDialog: Ref<boolean>
  type: Ref<ICrudDialogType>
  formColumns: Ref<IFormColumns | undefined>
  openDialog: (type: ICrudDialogType, row?: UnknownObject) => void
  closeDialog: () => void
  submitForm: IFormSubmit
} & UseFormInjectEmitsCallback {
  const { addColumns, editColumns, formColumns } = useCrudColumns(props)
  const injectEmits = useFormInjectEmits(emit as unknown as IFormEmits)

  const showDialog = ref(false)
  const type = ref<ICrudDialogType>('add')
  const currentFormColumns = computed(() => {
    return formColumns.value && formColumns.value.length
      ? formColumns.value
      : type.value === 'add'
        ? addColumns.value
        : editColumns.value
  })
  const submitForm: IFormSubmit = (done, isValid, invalidFields) => {
    function close() {
      done()
      resetForm(true)
      showDialog.value = false
    }

    emit('submit', close, done, type.value, isValid, invalidFields)
  }

  function openDialog(dialogType: ICrudDialogType, row?: UnknownObject) {
    function done() {
      type.value = dialogType
      showDialog.value = true
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    emit(dialogType, row)
    isFunction(props.beforeOpen)
      ? props.beforeOpen(done, dialogType, row)
      : done()
  }

  function closeDialog() {
    showDialog.value = false
  }

  return {
    ...injectEmits,
    showDialog,
    type,
    formColumns: currentFormColumns,
    openDialog,
    closeDialog,
    submitForm,
  }
}

export function useCrudSearchMenu(
  menuColumns: Ref<ICrudMenuColumns>,
): Ref<IFormMenuColumns> {
  return computed<IFormMenuColumns>(() => ({
    submit: menuColumns.value.search,
    submitText: menuColumns.value.searchText,
    submitProps: menuColumns.value.searchProps,
    reset: menuColumns.value.searchReset,
    resetText: menuColumns.value.searchResetText,
    resetProps: menuColumns.value.searchResetProps,
    prevText: menuColumns.value.searchPrevText,
    prevProps: menuColumns.value.searchPrevProps,
    nextText: menuColumns.value.searchNextText,
    nextProps: menuColumns.value.searchNextProps,
  }))
}

export function useCrudSearchForm(emit: ICrudEmits): {
  searchForm: IFormSubmit
  searchReset: () => void
  upSearchData: (value: UnknownObject) => void
} {
  const searchForm: IFormSubmit = (done, isValid, invalidFields) => {
    emit('search', done, isValid, invalidFields)
  }

  function searchReset() {
    emit('searchReset')
  }

  function upSearchData(value: UnknownObject) {
    emit('update:search', value)
  }

  return {
    searchForm,
    searchReset,
    upSearchData,
  }
}

export function useCrudSlots(): {
  searchSlots: Record<string, Slot | undefined>
  tableSlots: Record<string, Slot | undefined>
  formSlots: Record<string, Slot | undefined>
  detailSlots: Record<string, Slot | undefined>
} {
  const slots = useSlots()
  const searchSlots: Record<string, Slot | undefined> = {}
  const tableSlots: Record<string, Slot | undefined> = {}
  const formSlots: Record<string, Slot | undefined> = {}
  const detailSlots: Record<string, Slot | undefined> = {}
  const searchKey = ['search', 'search-menu-left', 'search-menu-right']
  const tableKey = ['table', 'table-expand', 'table-append']
  const formKey = ['form', 'form-menu-left', 'form-menu-right']
  const detailKey = ['detail', 'detail-title', 'detail-extra']

  for (const key in slots) {
    const item = slots[key]

    if (/^search/.test(key)) {
      const _key = searchKey.includes(key)
        ? key.replace(/^search-?/, '') || 'default'
        : key
      searchSlots[_key] = item
    } else if (/^table/.test(key)) {
      const _key = tableKey.includes(key)
        ? key.replace(/^table-?/, '') || 'default'
        : key
      tableSlots[_key] = item
    } else if (/^form/.test(key)) {
      const _key = formKey.includes(key)
        ? key.replace(/^form-?/, '') || 'default'
        : key
      formSlots[_key] = item
    } else if (/^detail/.test(key)) {
      const _key = detailKey.includes(key)
        ? key.replace(/^detail-?/, '') || 'default'
        : key
      detailSlots[_key] = item
    }
  }

  return {
    searchSlots,
    tableSlots,
    formSlots,
    detailSlots,
  }
}
