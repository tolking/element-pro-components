import { computed, defineComponent, h, VNode, Slot, mergeProps } from 'vue'
import { ElDialog, ElButton, useAttrs, DialogProps } from 'element-plus'
import { useBreakpointWidth, useSplitReactive } from '../composables/index'
import {
  useCrudColumns,
  useCrudMenu,
  useCrudForm,
  useCrudSearchMenu,
  useCrudSearchForm,
  useCrudSlots,
  useCrudMethods,
} from './useCrud'
import { usePagination } from '../Table/useTable'
import { isFunction, throwWarn } from '../utils/index'
import {
  crudProps,
  crudEmits,
  formKeys,
  tableKeys,
  dialogKeys,
  descriptionsKeys,
} from './props'
import { ProSearch } from '../Search/index'
import { ProForm } from '../Form/index'
import { ProTable } from '../Table/index'
import { ProDescriptions } from '../Descriptions/index'
import type { ComponentSize } from 'element-plus'
import type { StringObject, UnknownObject } from '../types/index'

interface TableMenuScope {
  row: StringObject
  size: ComponentSize
}

export default defineComponent({
  name: 'ProCrud',
  props: crudProps,
  emits: crudEmits,
  setup(props, { slots, emit, expose }) {
    const [formProps, tableProps, descriptionsProps, dialogProps] =
      useSplitReactive(props, formKeys, tableKeys, descriptionsKeys, dialogKeys)
    const { searchColumns, tableColumns, detailColumns } = useCrudColumns(props)
    const menuColumns = useCrudMenu(props)
    const { searchRef, tableRef, formRef, update, resetForm, crudExpose } =
      useCrudMethods({
        emit,
        openDialog: (...arg) => openDialog(...arg),
        closeDialog: () => closeDialog(),
      })
    const { sizeChange, currentChange, handleLoad } = usePagination(emit)
    const {
      showDialog,
      type,
      formColumns,
      openDialog,
      closeDialog,
      submitForm,
      addItem,
      removeItem,
      tabsChange,
      collapseChange,
      stepChange,
    } = useCrudForm(props, emit, resetForm)
    const searchMenu = useCrudSearchMenu(menuColumns)
    const { searchForm, searchReset, upSearchData } = useCrudSearchForm(emit)
    const { searchSlots, tableSlots, formSlots, detailSlots } = useCrudSlots()

    const attrs = useAttrs()
    const dialogWidth = useBreakpointWidth()

    const bindDialog = computed(() => {
      const title =
        props.title ||
        (props.menu
          ? type.value === 'detail'
            ? menuColumns.value.detailText
            : type.value === 'add'
              ? menuColumns.value.addText
              : menuColumns.value.editText
          : type.value)

      function beforeClose(done: () => void) {
        function callback() {
          showDialog.value = false
          type.value !== 'detail' &&
            formColumns.value?.length &&
            formRef.value &&
            resetForm(true)
          done()
        }

        isFunction(props.beforeClose) ? props.beforeClose(callback) : callback()
      }

      return {
        title,
        beforeClose,
        destroyOnClose: true,
        width: props.width ?? dialogWidth.value,
        class: 'pro-crud-dialog',
      }
    })

    expose(crudExpose)

    function checkDetail(row: StringObject) {
      return isFunction(menuColumns.value.detail)
        ? menuColumns.value.detail(row)
        : menuColumns.value.detail
    }

    function checkEdit(row: StringObject) {
      return isFunction(menuColumns.value.edit)
        ? menuColumns.value.edit(row)
        : menuColumns.value.edit
    }

    function checkDel(row: StringObject) {
      return isFunction(menuColumns.value.del)
        ? menuColumns.value.del(row)
        : menuColumns.value.del
    }

    function delRow(event: Event, row: UnknownObject) {
      event.stopPropagation()
      emit('delete', row)
    }

    function createSearch() {
      if (props.searchRules) {
        throwWarn(
          '[ProCrud] The `searchRules` attribute will be removed in the next major version, please use `searchProps` instead',
        )
      }

      const _props = {
        ref: searchRef,
        rules: props.searchRules,
        ...props.searchProps,
        modelValue: props.search,
        columns: searchColumns.value,
        menu: searchMenu.value,
        size: props.size,
        class: 'pro-crud-search',
        'onUpdate:modelValue': upSearchData,
        'onAdd-item': addItem,
        'onRemove-item': removeItem,
        'onTab-change': tabsChange,
        'onCollapse-change': collapseChange,
        'onStep-change': stepChange,
        onSubmit: searchForm,
        onReset: searchReset,
      }

      if (slots['crud-search'])
        return slots['crud-search']({
          props: _props,
          columns: searchColumns.value,
          menu: searchMenu.value,
        })
      if (!searchColumns.value?.length) return null

      return h(ProSearch, _props, searchSlots)
    }

    function createMenu() {
      let list: VNode[] = []

      if (slots['menu-left']) {
        list = list.concat(slots['menu-left']({ size: props.size }))
      }
      if (props.menu && menuColumns.value.add) {
        list.push(
          h(
            ElButton,
            mergeProps({ size: props.size }, menuColumns.value.addProps || {}, {
              onClick: () => openDialog('add'),
            }),
            () => menuColumns.value?.addText || '',
          ),
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
          slots.action ? slots.action({ size: props.size }) : undefined,
        ),
      ])
    }

    function createTable() {
      const showMenu =
        props.menu &&
        (menuColumns.value.edit ||
          menuColumns.value.detail ||
          menuColumns.value.del ||
          slots.menu)
      const menuSlots = showMenu
        ? { menu: (scope: TableMenuScope) => createTableMenu(scope) }
        : {}
      const _props = mergeProps(tableProps, attrs.value, {
        ref: tableRef,
        menu: menuColumns.value,
        columns: tableColumns.value,
        class: 'pro-crud-table',
        'onUpdate:pageSize': sizeChange,
        'onUpdate:currentPage': currentChange,
        onLoad: handleLoad,
      })

      if (slots['crud-table']) {
        return slots['crud-table']({
          props: _props,
          size: props.size,
          columns: tableColumns.value,
          menu: menuColumns.value,
          showMenu,
          createTableMenu,
        })
      }

      return h(ProTable, _props, Object.assign({}, tableSlots, menuSlots))
    }

    function createTableMenu(scope: TableMenuScope) {
      let list: VNode[] = []

      if (props.menu && checkEdit(scope.row)) {
        list.push(
          h(
            ElButton,
            mergeProps(
              { size: props.size },
              menuColumns.value.editProps || {},
              {
                onClick: (event: Event) => {
                  event.stopPropagation()
                  openDialog('edit', scope.row)
                },
              },
            ),
            () => menuColumns.value?.editText || '',
          ),
        )
      }
      if (props.menu && checkDetail(scope.row)) {
        list.push(
          h(
            ElButton,
            mergeProps(
              { size: props.size },
              menuColumns.value.detailProps || {},
              {
                onClick: (event: Event) => {
                  event.stopPropagation()
                  openDialog('detail', scope.row)
                },
              },
            ),
            () => menuColumns.value?.detailText || '',
          ),
        )
      }
      if (props.menu && checkDel(scope.row)) {
        list.push(
          h(
            ElButton,
            mergeProps({ size: props.size }, menuColumns.value.delProps || {}, {
              onClick: (event: Event) => delRow(event, scope.row),
            }),
            () => menuColumns.value?.delText || '',
          ),
        )
      }
      if (slots.menu) {
        list = list.concat((slots.menu as Slot)({ ...scope, size: props.size }))
      }

      return list
    }

    function createForm() {
      Object.assign(crudExpose, formRef.value)

      const _props = mergeProps(formProps, attrs.value, {
        ref: formRef,
        columns: formColumns.value,
        menu: menuColumns.value,
        class: 'pro-crud-form',
        'onUpdate:modelValue': update,
        'onAdd-item': addItem,
        'onRemove-item': removeItem,
        'onTab-change': tabsChange,
        'onCollapse-change': collapseChange,
        'onStep-change': stepChange,
        onSubmit: submitForm,
        onReset: resetForm,
      })

      if (slots['crud-form']) {
        return slots['crud-form']({
          props: _props,
          columns: formColumns.value,
          menu: menuColumns.value,
        })
      }
      if (!formColumns.value?.length) return null

      return h(ProForm, _props, formSlots)
    }

    function createDescriptions() {
      const _props = mergeProps(descriptionsProps, {
        columns: detailColumns.value,
        class: 'pro-crud-detail',
      })

      if (slots['crud-detail']) {
        return slots['crud-detail']({
          props: _props,
          size: props.size,
          columns: detailColumns.value,
        })
      }
      if (!detailColumns.value?.length) return null

      return h(ProDescriptions, _props, detailSlots)
    }

    function createDialog() {
      const _props = mergeProps(dialogProps, bindDialog.value, {
        modelValue: showDialog.value,
      }) as DialogProps

      if (slots['crud-dialog']) {
        return slots['crud-dialog']({
          props: _props,
          type: type.value,
          createDescriptions,
          createForm,
        })
      }

      return h(ElDialog, _props, () => [
        slots['dialog-top'] && slots['dialog-top']({ type: type.value }),
        type.value === 'detail' ? createDescriptions() : createForm(),
        slots['dialog-bottom'] && slots['dialog-bottom']({ type: type.value }),
      ])
    }

    return () =>
      h('section', { class: 'pro-crud' }, [
        createSearch(),
        createMenu(),
        createTable(),
        createDialog(),
      ])
  },
})
