import { defineComponent, h, toRefs, VNode, provide, mergeProps } from 'vue'
import { ElTable, ElTableColumn, ElPagination, useAttrs } from 'element-plus'
import { useSplitReactive } from '../composables/index'
import {
  useTableBind,
  useTableDefaultBind,
  useTableMethods,
  usePagination,
} from './useTable'
import { tableProps, tableEmits, paginationKeys, tableKeys } from './props'
import ProTableItem from './TableItem'
import type { StringObject } from '../types/index'
import type {
  ITableSelectionColumns,
  ITableExpandColumns,
  ITableIndexColumns,
  ITableMenuColumns,
} from './type'

export default defineComponent({
  name: 'ProTable',
  props: tableProps,
  emits: tableEmits,
  setup(props, { slots, emit, expose }) {
    const { selection, expand, index, menu } = toRefs(props)
    const attrs = useAttrs()

    const defaultBind = useTableDefaultBind(props)
    const bindSelection = useTableBind<ITableSelectionColumns>(
      selection,
      defaultBind,
    )
    const bindExpand = useTableBind<ITableExpandColumns>(expand, defaultBind)
    const bindIndex = useTableBind<ITableIndexColumns>(index, defaultBind)
    const bindMenu = useTableBind<ITableMenuColumns>(menu, defaultBind)
    const { sizeChange, currentChange, handleLoad } = usePagination(emit)
    const { tableRef, tableExpose } = useTableMethods()

    const [tableConfig, paginationConfig] = useSplitReactive(
      props,
      tableKeys,
      paginationKeys,
    )

    provide('defaultBind', defaultBind)

    expose(tableExpose)

    function createColumn() {
      let list: Array<VNode | null> = []

      if (selection.value) {
        list.push(
          h(
            ElTableColumn,
            mergeProps(bindSelection.value, { type: 'selection' }),
          ),
        )
      }
      if (expand.value !== false && slots.expand) {
        list.push(
          h(ElTableColumn, mergeProps(bindExpand.value, { type: 'expand' }), {
            default: (scope: unknown) => slots.expand && slots.expand(scope),
          }),
        )
      }
      if (index.value) {
        list.push(
          h(ElTableColumn, mergeProps(bindIndex.value, { type: 'index' })),
        )
      }
      if (props.columns) {
        const tableItem = props.columns.map((item) => {
          if (item.hide) return null
          return h(
            ProTableItem,
            { item, key: item.prop, size: props.size },
            slots,
          )
        })

        list = list.concat(tableItem)
      }
      if (slots.default) {
        list = list.concat(slots.default())
      }
      if (menu.value !== false && slots.menu) {
        list.push(
          h(ElTableColumn, mergeProps(bindMenu.value, { type: 'menu' }), {
            default: (scope: StringObject) =>
              slots.menu && slots.menu({ ...scope, size: props.size }),
          }),
        )
      }

      return list
    }

    function createDefault() {
      const tableNode = h(
        ElTable,
        mergeProps(tableConfig, attrs.value, { ref: tableRef }),
        {
          default: () => createColumn(),
          append: slots.append,
        },
      )
      const paginationNode = h(
        ElPagination,
        mergeProps(paginationConfig, {
          'onUpdate:pageSize': sizeChange,
          'onUpdate:currentPage': currentChange,
          onChange: handleLoad,
        }),
      )

      return [tableNode, props.total ? paginationNode : null]
    }

    return () => h('div', { class: 'pro-table' }, createDefault())
  },
})
