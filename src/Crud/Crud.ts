import { computed, defineComponent, h, VNode, Slot } from 'vue'
import { reactivePick } from '@vueuse/core'
import { ElDialog, ElButton, useAttrs, DialogProps } from 'element-plus'
import {
  useCrudColumns,
  useCrudForm,
  useCrudSearchForm,
  useTableMethods,
  useFormMethods,
  usePagination,
  useScreenSize,
  useCrudSlots,
} from '../composables/index'
import { isFunction, isObject } from '../utils/index'
import props, { formKeys, tableKeys, dialogKeys } from './props'
import emits from './emits'
import { ProForm } from '../Form/index'
import { ProTable } from '../Table/index'
import type { ComponentSize } from 'element-plus/lib/constants/index'
import type { StringObject, UnknownObject } from '../types/index'
import type { IFormProps, IFormEmits } from '../Form/index'

interface TableMenuScope {
  row: StringObject
  size: ComponentSize
}

export default defineComponent({
  name: 'ProCrud',
  props,
  emits,
  setup(props, { slots, emit, expose }) {
    const { searchColumns, tableColumns, menuColumns } = useCrudColumns(props)
    const {
      table,
      clearSelection,
      toggleRowSelection,
      toggleAllSelection,
      toggleRowExpansion,
      setCurrentRow,
      clearSort,
      clearFilter,
      doLayout,
      sort,
    } = useTableMethods()
    const { pagination, sizeChange, currentChange } = usePagination(props, emit)
    const {
      form,
      validate,
      resetFields,
      clearValidate,
      scrollToField,
      validateField,
      upFormData,
      resetForm,
    } = useFormMethods((emit as unknown) as IFormEmits)
    const {
      dialogVisible,
      formType,
      formColumns,
      openForm,
      submitForm,
    } = useCrudForm(props, emit, resetForm)
    const {
      searchMenu,
      searchForm,
      searchReset,
      upSearchData,
    } = useCrudSearchForm(emit, menuColumns)
    const attrs = useAttrs()
    const screenSize = useScreenSize()
    const { searchSlots, tableSlots, formSlots } = useCrudSlots()
    const bindDialog = computed(() => {
      const title =
        props.title ?? isObject(menuColumns.value)
          ? formType.value === 'add'
            ? menuColumns.value?.addText
            : menuColumns.value?.editText
          : formType.value
      const sizeWidth = {
        xs: '90%',
        sm: '80%',
        md: '70%',
        lg: '60%',
        xl: '50%',
      }

      function beforeClose(done: () => void) {
        function callback() {
          dialogVisible.value = false
          resetForm(true)
          done()
        }

        isFunction(props.beforeClose) ? props.beforeClose(callback) : callback()
      }

      return {
        title,
        beforeClose,
        destroyOnClose: true,
        width: props.width ?? sizeWidth[screenSize.value],
        customClass: props.customClass ?? 'pro-crud-dialog',
      }
    })
    const formProps = (reactivePick(
      props,
      ...formKeys
    ) as unknown) as IFormProps
    const tableProps = reactivePick(props, ...tableKeys)
    const dialogProps = reactivePick(props, ...dialogKeys)

    function checkEdit(row: StringObject) {
      return isFunction(menuColumns.value?.edit)
        ? menuColumns.value?.edit(row)
        : menuColumns.value?.edit
    }

    function checkDel(row: StringObject) {
      return isFunction(menuColumns.value?.del)
        ? menuColumns.value?.del(row)
        : menuColumns.value?.del
    }

    function delRow(row: UnknownObject) {
      emit('delete', row)
    }

    expose({
      clearSelection,
      toggleRowSelection,
      toggleAllSelection,
      toggleRowExpansion,
      setCurrentRow,
      clearSort,
      clearFilter,
      doLayout,
      sort,
      validate,
      resetFields,
      scrollToField,
      clearValidate,
      validateField,
    })

    function createSearch() {
      if (!searchColumns.value?.length) return null
      return h(
        ProForm,
        {
          modelValue: props.search,
          columns: searchColumns.value,
          menu: searchMenu.value,
          rules: props.searchRules,
          size: props.size,
          inline: true,
          class: 'pro-crud-search',
          'onUpdate:modelValue': upSearchData,
          onSubmit: searchForm,
          onReset: searchReset,
        },
        searchSlots
      )
    }

    function createMenu() {
      let list: VNode[] = []

      if (slots['menu-left']) {
        list = list.concat(slots['menu-left']({ size: props.size }))
      }
      if (menuColumns.value?.add) {
        list.push(
          h(
            ElButton,
            {
              ...menuColumns.value.addProps,
              size: props.size,
              onClick: () => openForm('add'),
            },
            () => menuColumns.value?.addText || ''
          )
        )
      }
      if (slots['menu-right']) {
        list = list.concat(slots['menu-right']({ size: props.size }))
      }

      return h('div', { class: 'pro-crud-menu' }, [
        h('div', { class: 'pro-menu-item' }, list),
        h(
          'div',
          { class: 'pro-menu-item' },
          slots.action ? slots.action({ size: props.size }) : undefined
        ),
      ])
    }

    function createTable() {
      const showMenu =
        menuColumns.value?.edit || menuColumns.value?.del || slots.menu
      const menuSlots = showMenu
        ? { menu: (scope: TableMenuScope) => createTableMenu(scope) }
        : {}

      return h(
        ProTable,
        {
          ...tableProps,
          ...pagination.value,
          ...attrs.value,
          ref: table,
          menu: menuColumns.value,
          columns: tableColumns.value,
          class: 'pro-crud-table pro-table',
          'onUpdate:pageSize': sizeChange,
          'onUpdate:currentPage': currentChange,
        },
        Object.assign({}, tableSlots, menuSlots)
      )
    }

    function createTableMenu(scope: TableMenuScope) {
      let list: VNode[] = []

      if (menuColumns.value && checkEdit(scope.row)) {
        list.push(
          h(
            ElButton,
            {
              ...menuColumns.value.editProps,
              size: props.size,
              onClick: () => openForm('edit', scope.row),
            },
            () => menuColumns.value?.editText || ''
          )
        )
      }
      if (menuColumns.value && checkDel(scope.row)) {
        list.push(
          h(
            ElButton,
            {
              ...menuColumns.value.delProps,
              size: props.size,
              onClick: () => delRow(scope.row),
            },
            () => menuColumns.value?.delText || ''
          )
        )
      }
      if (slots.menu) {
        list = list.concat((slots.menu as Slot)({ ...scope, size: props.size }))
      }

      return list
    }

    function createForm() {
      if (!formColumns.value?.length) return null
      return h(
        ElDialog,
        {
          ...dialogProps,
          ...bindDialog.value,
          modelValue: dialogVisible.value,
        } as DialogProps,
        () =>
          h(
            ProForm,
            {
              ...formProps,
              ...attrs.value,
              ref: form,
              columns: formColumns.value,
              menu: menuColumns.value,
              class: 'pro-crud-form',
              'onUpdate:modelValue': upFormData,
              onSubmit: submitForm,
              onReset: resetForm,
            },
            formSlots
          )
      )
    }

    return () =>
      h('section', { class: 'pro-crud' }, [
        createSearch(),
        createMenu(),
        createTable(),
        createForm(),
      ])
  },
})
