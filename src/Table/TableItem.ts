import { defineComponent, h, inject, toRefs, PropType, Slot, VNode } from 'vue'
import { ElTableColumn } from 'element-plus'
import { useTableBind } from '../composables'
import { isFunction } from '../utils/index'
import ProTableItem from './TableItem'
import type {
  TableColumn,
  ITableColumns,
  TableColumnsProps,
} from '../types/index'

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
  },
  setup(props, { slots }) {
    const { item } = toRefs(props)
    const defaultBind = inject<TableColumnsProps>('defaultBind')
    const bindColumn = useTableBind<TableColumn>(item, defaultBind)

    function createHeader(scope: unknown) {
      if (slots[item.value.prop + '-header']) {
        return (slots[item.value.prop + '-header'] as Slot)(scope)
      } else {
        return item.value.label
      }
    }

    function createDefault(scope: ColumnScope) {
      const list: Array<VNode | VNode[] | string> = []

      if (item.value.children && item.value.children.length) {
        const child = (item.value.children as ITableColumns).map((item) => {
          return h(ProTableItem, { item }, slots)
        })
        list.push(child)
      } else if (slots[item.value.prop]) {
        list.push((slots[item.value.prop] as Slot)(scope))
      } else if (item.value.render) {
        list.push(
          isFunction(item.value.render)
            ? item.value.render(scope.row)
            : String(item.value.render)
        )
      } else {
        list.push(String(scope.row[item.value.prop]))
      }

      return list
    }

    return () =>
      h(ElTableColumn, bindColumn.value, {
        header: (scope: unknown) => createHeader(scope),
        default: (scope: ColumnScope) => createDefault(scope),
      })
  },
})
