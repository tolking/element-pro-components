import { ComputedRef, computed, ref, unref, useSlots, Ref, Slot } from 'vue'
import { useLocaleInject } from 'element-plus'
import { useProOptions } from './index'
import {
  isFunction,
  isObject,
  filterDeep,
  objectDeepMerge,
} from '../utils/index'
import type { UnknownObject, MaybeComputedRef } from '../types/index'
import type { ICrudProps, ICrudFormType, ICrudMenuColumns } from '../Crud/index'
import type { IFormColumns, IFormMenuColumns, IFormSubmit } from '../Form/index'
import type { ITableColumns } from '../Table/index'

function useCrudMenu(): ComputedRef<ICrudMenuColumns> {
  const localeMenu = computed(() => {
    const { t } = useLocaleInject()
    const menu: ICrudMenuColumns = {}
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
      if (t(`pro.crud.${item}`)) {
        menu[`${item}Text`] = t(`pro.crud.${item}`)
      }
    })

    return menu
  })

  return computed(() => {
    const options = useProOptions()
    return objectDeepMerge<ICrudMenuColumns>(options.menu, localeMenu.value)
  })
}

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
    const defaultMenu = useCrudMenu()
    return isObject(props.menu)
      ? objectDeepMerge<ICrudMenuColumns>(defaultMenu.value, props.menu)
      : defaultMenu.value
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
    const defaultMenu = useCrudMenu()
    const menu = _menuColumns ? _menuColumns : defaultMenu.value

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
