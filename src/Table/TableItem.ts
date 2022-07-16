import { defineComponent, h, inject, Slot, VNode } from 'vue'
import { ElTableColumn } from 'element-plus'
import { useTableBind } from './useTable'
import { get, isFunction, throwWarn } from '../utils/index'
import { tableItemProps } from './props'
import ProTableItem from './TableItem'
import type { TableColumn, ITableColumns, TableColumnsProps } from './type'

interface ColumnScope {
  row: Record<string, unknown>
}

export default defineComponent({
  name: 'ProTableItem',
  props: tableItemProps,
  setup(props, { slots }) {
    const defaultBind = inject<TableColumnsProps>('defaultBind')
    const bindColumn = useTableBind<TableColumn>(props.item, defaultBind)

    function createHeader(scope: ColumnScope) {
      if (slots[`table-${props.item.prop}-header`]) {
        return (slots[`table-${props.item.prop}-header`] as Slot)({
          ...scope,
          size: props.size,
        })
      } else if (slots[`${props.item.prop}-header`]) {
        // NOTE: Remove this on next major release
        throwWarn(
          `[ProTable] the [prop]-header slot will to remove, use 'table-[prop]-header' replace ${props.item.prop}-header`
        )
        return (slots[`${props.item.prop}-header`] as Slot)({
          ...scope,
          size: props.size,
        })
      } else {
        return props.item.label
      }
    }

    function createDefault(scope: ColumnScope) {
      const list: Array<VNode | VNode[] | string> = []

      if (props.item.children && props.item.children.length) {
        const child = (props.item.children as ITableColumns).map((item) => {
          return h(ProTableItem, { item, size: props.size }, slots)
        })
        list.push(child)
      } else if (slots[`table-${props.item.prop}`]) {
        list.push(
          (slots[`table-${props.item.prop}`] as Slot)({
            ...scope,
            size: props.size,
          })
        )
      } else if (slots[props.item.prop]) {
        // NOTE: Remove this on next major release
        throwWarn(
          `[ProTable] the [prop] slot will to remove, use 'table-[prop]' replace ${props.item.prop}`
        )
        list.push(
          (slots[props.item.prop] as Slot)({ ...scope, size: props.size })
        )
      } else if (props.item.render) {
        list.push(
          isFunction(props.item.render)
            ? props.item.render(scope.row)
            : String(props.item.render)
        )
      } else {
        list.push(get(scope.row, props.item.prop, '') as string)
      }

      return list
    }

    return () =>
      h(ElTableColumn, bindColumn.value, {
        header: (scope: ColumnScope) => createHeader(scope),
        default: (scope: ColumnScope) => createDefault(scope),
      })
  },
})
