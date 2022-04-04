import { computed, ref, useSlots, Ref, Slot } from 'vue'
import { useLocale } from 'element-plus'
import {
  isFunction,
  isObject,
  filterDeep,
  objectDeepMerge,
} from '../utils/index'
import type { UnknownObject, ExternalParam } from '../types/index'
import type { IFormColumns, IFormMenuColumns, IFormSubmit } from '../Form/index'
import type { ITableColumns } from '../Table/index'
import type {
  ICrudProps,
  ICrudEmits,
  ICrudFormType,
  ICrudMenuColumns,
} from '../Crud/index'

export function useCrudMenu(
  props: Readonly<{ menu?: ICrudMenuColumns | boolean }>
): Ref<ICrudMenuColumns> {
  return computed(() => {
    const { t } = useLocale()
    const menu: ICrudMenuColumns = {
      add: true,
      addText: 'Add',
      addProps: { type: 'primary' },
      edit: true,
      editText: 'Edit',
      editProps: { type: 'text' },
      del: true,
      delText: 'Delete',
      delProps: { type: 'text' },
      submit: true,
      submitText: 'Submit',
      submitProps: { type: 'primary' },
      reset: true,
      resetText: 'Reset',
      search: true,
      searchText: 'Search',
      searchProps: { type: 'primary' },
      searchReset: true,
      searchResetText: 'Reset',
    }
    const menuList = [
      'add',
      'edit',
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

    return isObject(props.menu) ? objectDeepMerge(menu, props.menu) : menu
  })
}

export function useCrudColumns(
  props: Readonly<ICrudProps>
): {
  searchColumns: Ref<IFormColumns | undefined>
  tableColumns: Ref<ITableColumns | undefined>
  addColumns: Ref<IFormColumns | undefined>
  editColumns: Ref<IFormColumns | undefined>
  formColumns: Ref<IFormColumns | undefined>
} {
  const searchColumns = computed(() => {
    return props.searchColumns
      ? props.searchColumns
      : props.columns
      ? filterDeep<IFormColumns>(props.columns, 'search')
      : undefined
  })
  const tableColumns = computed(() => {
    return props.tableColumns || props.columns
  })
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
    return props.formColumns
      ? props.formColumns
      : props.columns
      ? filterDeep<IFormColumns>(props.columns, 'form')
      : undefined
  })

  return {
    searchColumns,
    tableColumns,
    addColumns,
    editColumns,
    formColumns,
  }
}

export function useCrudForm(
  props: Readonly<ICrudProps>,
  emit: ICrudEmits,
  resetForm: (reset?: boolean) => void
): {
  dialogVisible: Ref<boolean>
  formType: Ref<ICrudFormType>
  formColumns: Ref<IFormColumns | undefined>
  openForm: (type: ICrudFormType, row?: UnknownObject) => void
  submitForm: IFormSubmit
} {
  const { addColumns, editColumns, formColumns } = useCrudColumns(props)
  const dialogVisible = ref(false)
  const formType = ref<ICrudFormType>('add')
  const currentFormColumns = computed(() => {
    return formColumns.value && formColumns.value.length
      ? formColumns.value
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

    isFunction(props.beforeOpen) ? props.beforeOpen(done, type, row) : done()
  }

  return {
    dialogVisible,
    formType,
    formColumns: currentFormColumns,
    openForm,
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

export function useCrudSearchForm(
  emit: ICrudEmits
): {
  searchForm: IFormSubmit
  searchReset: () => void
  upSearchData: (value: unknown) => void
} {
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
    searchForm,
    searchReset,
    upSearchData,
  }
}

export function useCrudSlots(): {
  searchSlots: Record<string, Slot | undefined>
  tableSlots: Record<string, Slot | undefined>
  formSlots: Record<string, Slot | undefined>
} {
  const slots = useSlots()
  const searchSlots: Record<string, Slot | undefined> = {}
  const tableSlots: Record<string, Slot | undefined> = {}
  const formSlots: Record<string, Slot | undefined> = {}

  for (const key in slots) {
    const item = slots[key]

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
    } else if (/\w+-header$/.test(key)) {
      tableSlots[key] = item
    } else if (/^append$/.test(key)) {
      tableSlots[key] = item
    } else if (/^expand$/.test(key)) {
      tableSlots[key] = item
    } else if (/^form-/.test(key)) {
      const _key = key.replace(/^form-/, '')
      formSlots[_key] = item
    } else if (/\w+-error$/.test(key)) {
      formSlots[key] = item
    } else if (/\w+-label$/.test(key)) {
      formSlots[key] = item
    } else if (/^form$/.test(key)) {
      formSlots.default = item
    }
  }

  return {
    searchSlots,
    tableSlots,
    formSlots,
  }
}
