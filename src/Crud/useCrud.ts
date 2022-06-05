import { computed, ref, useSlots, Ref, Slot } from 'vue'
import { useLocale } from 'element-plus'
import { formMenu } from '../Form/useForm'
import { isFunction, isObject, filterDeep, throwWarn } from '../utils/index'
import type { UnknownObject, ExternalParam } from '../types/index'
import type { IFormColumns, IFormMenuColumns, IFormSubmit } from '../Form/index'
import type { ITableColumns } from '../Table/index'
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
  props: Readonly<{ menu?: ICrudMenuColumns | boolean }>
): Ref<ICrudMenuColumns> {
  return computed(() => {
    const { t } = useLocale()
    const menu: ICrudMenuColumns = {
      ...formMenu,
      add: true,
      addText: 'Add',
      addProps: { type: 'primary' },
      edit: true,
      editText: 'Edit',
      editProps: { link: true, type: 'primary' },
      detail: true,
      detailText: 'View',
      detailProps: { link: true, type: 'info' },
      del: true,
      delText: 'Delete',
      delProps: { link: true, type: 'danger' },
      search: true,
      searchText: 'Search',
      searchProps: { type: 'primary' },
      searchReset: true,
      searchResetText: 'Reset',
    }
    const menuList = [
      'add',
      'edit',
      'detail',
      'del',
      'submit',
      'reset',
      'search',
      'searchReset',
    ]

    menuList.forEach((item) => {
      const menuKey = `pro.crud.${item}`
      const menuText = t(menuKey)

      if (menuText && menuText !== menuKey) {
        const key = `${item}Text` as keyof ICrudMenuColumns
        menu[key] = menuText as ExternalParam
      }
    })

    return isObject(props.menu) ? Object.assign({}, menu, props.menu) : menu
  })
}

export function useCrudColumns(
  props: Readonly<Pick<ICrudProps, CrudColumns>>
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
      ? filterDeep<IFormColumns>(props.columns as IFormColumns, 'search')
      : undefined
  })
  const tableColumns = computed(() => {
    return props.tableColumns || props.columns
  })
  const addColumns = computed(() => {
    return props.addColumns
      ? props.addColumns
      : props.columns
      ? filterDeep<IFormColumns>(props.columns as IFormColumns, 'add')
      : undefined
  })
  const editColumns = computed(() => {
    return props.editColumns
      ? props.editColumns
      : props.columns
      ? filterDeep<IFormColumns>(props.columns as IFormColumns, 'edit')
      : undefined
  })
  const formColumns = computed(() => {
    return props.formColumns
      ? props.formColumns
      : props.columns
      ? filterDeep<IFormColumns>(props.columns as IFormColumns, 'form')
      : undefined
  })
  const detailColumns = computed(() => {
    return props.detailColumns
      ? props.detailColumns
      : props.columns
      ? filterDeep<IDescriptionsColumns>(
          props.columns,
          'detail',
          true,
          (item) => ({ ...item, span: undefined })
        )
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

export function useCrudForm(
  props: Readonly<Pick<ICrudProps, CrudColumns | 'beforeOpen'>>,
  emit: ICrudEmits,
  resetForm: (reset?: boolean) => void
): {
  showDialog: Ref<boolean>
  type: Ref<ICrudDialogType>
  formColumns: Ref<IFormColumns | undefined>
  openDialog: (type: ICrudDialogType, row?: UnknownObject) => void
  submitForm: IFormSubmit
} {
  const { addColumns, editColumns, formColumns } = useCrudColumns(props)
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

  return {
    showDialog,
    type,
    formColumns: currentFormColumns,
    openDialog,
    submitForm,
  }
}

export function useCrudSearchMenu(
  menuColumns: Ref<ICrudMenuColumns>
): Ref<IFormMenuColumns> {
  return computed<IFormMenuColumns>(() => ({
    submit: menuColumns.value.search,
    submitText: menuColumns.value.searchText,
    submitProps: menuColumns.value.searchProps,
    reset: menuColumns.value.searchReset,
    resetText: menuColumns.value.searchResetText,
    resetProps: menuColumns.value.searchResetProps,
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

  for (const key in slots) {
    const item = slots[key]

    // NOTE: Remove `/\w+-header$/` `/^append$/` `/^expand$/` `/\w+-error$/` `/\w+-label$/` on next major release
    if (/^search-/.test(key)) {
      const _key = key.replace(/^search-/, '')
      searchSlots[_key] = item
    } else if (/^search$/.test(key)) {
      searchSlots.default = item
    } else if (/^table-/.test(key)) {
      const _key = key.replace(/^table-/, '')
      tableSlots[_key] = item
    } else if (/^table$/.test(key)) {
      tableSlots.default = item
    } else if (/^form-/.test(key)) {
      const _key = key.replace(/^form-/, '')
      formSlots[_key] = item
    } else if (/^form$/.test(key)) {
      formSlots.default = item
    } else if (/^detail-/.test(key)) {
      const _key = key.replace(/^detail-/, '')
      detailSlots[_key] = item
    } else if (/^detail$/.test(key)) {
      detailSlots.default = item
    } else if (/\w+-header$/.test(key)) {
      throwWarn(
        `[ProCrud] the [prop]-header slot will to remove, use 'table-[prop]-header' replace ${key}`
      )
      tableSlots[key] = item
    } else if (/^append$/.test(key)) {
      throwWarn(
        `[ProCrud] the append slot will to remove, use 'table-append' replace ${key}`
      )
      tableSlots[key] = item
    } else if (/^expand$/.test(key)) {
      throwWarn(
        `[ProCrud] the expand slot will to remove, use 'table-expand' replace ${key}`
      )
      tableSlots[key] = item
    } else if (/\w+-error$/.test(key)) {
      throwWarn(
        `[ProCrud] the [prop]-error slot will to remove, use 'form-[prop]-error' replace ${key}`
      )
      formSlots[key] = item
    } else if (/\w+-label$/.test(key)) {
      throwWarn(
        `[ProCrud] the [prop]-label slot will to remove, use 'form-[prop]-label' replace ${key}`
      )
      formSlots[key] = item
    }
  }

  return {
    searchSlots,
    tableSlots,
    formSlots,
    detailSlots,
  }
}
