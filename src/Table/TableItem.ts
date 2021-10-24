import { defineComponent, h, inject, toRefs, PropType, Slot, VNode } from 'vue'
import { ElTableColumn } from 'element-plus'
import { useTableBind } from '../composables'
import { isFunction } from '../utils/index'
import ProTableItem from './TableItem'
import type { IComponentSize } from '../types/index'
import type { TableColumn, ITableColumns, TableColumnsProps } from './type'

interface ColumnScope {
  row: Record<string, unknown>
}

export default defineComponent({
  name: 'ProTableItem',
  props: {
    item: {
      type: Object as PropType<TableColumn>,
      required: true,
    },
    size: {
      type: String as PropType<IComponentSize>,
      default: undefined,
    },
  },
  setup(props, { slots }) {
    const { item } = toRefs(props)
    const defaultBind = inject<TableColumnsProps>('defaultBind')
    const bindColumn = useTableBind<TableColumn>(item, defaultBind)

    function createHeader(scope: ColumnScope) {
      if (slots[item.value.prop + '-header']) {
        return (slots[item.value.prop + '-header'] as Slot)({
          ...scope,
          size: props.size,
        })
      } else {
        return item.value.label
      }
    }

    function createDefault(scope: ColumnScope) {
      const list: Array<VNode | VNode[] | string> = []

      if (item.value.children && item.value.children.length) {
        const child = (item.value.children as ITableColumns).map((item) => {
          return h(ProTableItem, { item, size: props.size }, slots)
        })
        list.push(child)
      } else if (slots[item.value.prop]) {
        list.push(
          (slots[item.value.prop] as Slot)({ ...scope, size: props.size })
        )
      } else if (item.value.render) {
        list.push(
          isFunction(item.value.render)
            ? item.value.render(scope.row)
            : String(item.value.render)
        )
      } else {
        list.push(scope.row[item.value.prop] as string)
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
