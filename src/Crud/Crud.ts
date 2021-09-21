import { computed, defineComponent, h, VNode, Slot } from 'vue'
import { ElDialog, ElButton, useAttrs } from 'element-plus'
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
import props from './props'
import ProForm from '../Form/index'
import ProTable from '../Table/index'
import type {
  IComponentSize,
  StringObject,
  UnknownObject,
} from '../types/index'

interface TableMenuScope {
  row: StringObject
  size: IComponentSize
}

export default defineComponent({
  name: 'ProCrud',
  props,
  emits: [
    'update:modelValue',
    'update:search',
    'submit',
    'reset',
    'delete',
    'search',
    'searchReset',
    'update:currentPage',
    'update:pageSize',
    'size-change',
    'current-change',
    'prev-click',
    'next-click',
  ],
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
    const {
      pagination,
      sizeChange,
      currentChange,
      prevClick,
      nextClick,
    } = usePagination(props, emit)
    const {
      form,
      validate,
      resetFields,
      clearValidate,
      validateField,
      upFormData,
      resetForm,
    } = useFormMethods(emit)
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
        width: props.width ?? sizeWidth[screenSize.value],
        customClass: props.customClass ?? 'pro-crud-dialog',
      }
    })

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
      clearValidate,
      validateField,
    })

    function createSearch() {
      return searchColumns.value?.length
        ? h(
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
        : null
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
          slots.action ? slots.action() : undefined
        ),
      ])
    }

    function createTable() {
      return h(
        ProTable,
        {
          ...attrs.value,
          ...pagination.value,
          ref: table,
          columns: tableColumns.value,
          menu: menuColumns.value,
          size: props.size,
          data: props.data,
          height: props.height,
          maxHeight: props.maxHeight,
          fit: props.fit,
          stripe: props.stripe,
          border: props.border,
          rowKey: props.rowKey,
          showHeader: props.showHeader,
          showSummary: props.showSummary,
          sumText: props.sumText,
          summaryMethod: props.summaryMethod,
          rowClassName: props.rowClassName,
          rowStyle: props.rowStyle,
          cellClassName: props.cellClassName,
          cellStyle: props.cellStyle,
          headerRowClassName: props.headerRowClassName,
          headerRowStyle: props.headerRowStyle,
          headerCellClassName: props.headerCellClassName,
          headerCellStyle: props.headerCellStyle,
          highlightCurrentRow: props.highlightCurrentRow,
          currentRowKey: props.currentRowKey,
          emptyText: props.emptyText,
          expandRowKeys: props.expandRowKeys,
          defaultExpandAll: props.defaultExpandAll,
          defaultSort: props.defaultSort,
          tooltipEffect: props.tooltipEffect,
          spanMethod: props.spanMethod,
          selectOnIndeterminate: props.selectOnIndeterminate,
          indent: props.indent,
          treeProps: props.treeProps,
          lazy: props.lazy,
          load: props.load,
          style: props.style,
          className: props.className,
          currentPage: props.currentPage,
          pageSize: props.pageSize,
          total: props.total,
          class: 'pro-crud-table pro-table',
          'onUpdate:pageSize': sizeChange,
          'onUpdate:currentPage': currentChange,
          onPrevClick: prevClick,
          onNextClick: nextClick,
        },
        {
          ...tableSlots,
          menu: (scope: TableMenuScope) => createTableMenu(scope),
        }
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
        list = list.concat((slots.menu as Slot)({ size: props.size }))
      }

      return list
    }

    function createForm() {
      return formColumns.value?.length
        ? h(
            ElDialog,
            {
              ...bindDialog.value,
              modelValue: dialogVisible.value,
              appendToBody: props.appendToBody,
              destroyOnClose: props.destroyOnClose,
              center: props.center,
              closeOnClickModal: props.closeOnClickModal,
              closeOnPressEscape: props.closeOnPressEscape,
              fullscreen: props.fullscreen,
              lockScroll: props.lockScroll,
              modal: props.modal,
              showClose: props.showClose,
              openDelay: props.openDelay,
              closeDelay: props.closeDelay,
              top: props.top,
              modalClass: props.modalClass,
              zIndex: props.zIndex,
            },
            () =>
              dialogVisible.value
                ? h(
                    ProForm,
                    {
                      ...attrs.value,
                      ref: form,
                      modelValue: props.modelValue,
                      columns: formColumns.value,
                      menu: menuColumns.value,
                      size: props.size,
                      rules: props.rules,
                      inline: props.inline,
                      labelPosition: props.labelPosition,
                      labelWidth: props.labelWidth,
                      labelSuffix: props.labelSuffix,
                      hideRequiredAsterisk: props.hideRequiredAsterisk,
                      showMessage: props.showMessage,
                      inlineMessage: props.inlineMessage,
                      statusIcon: props.statusIcon,
                      validateOnRuleChange: props.validateOnRuleChange,
                      disabled: props.disabled,
                      scrollToError: props.scrollToError,
                      class: 'pro-crud-form',
                      'onUpdate:modelValue': upFormData,
                      onSubmit: submitForm,
                      onReset: resetForm,
                    },
                    formSlots
                  )
                : null
          )
        : null
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
