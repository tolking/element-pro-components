import { defineComponent, h, toRefs, VNode, provide, mergeProps } from 'vue'
import { reactiveOmit, reactivePick } from '@vueuse/core'
import { ElTable, ElTableColumn, ElPagination, useAttrs } from 'element-plus'
import {
  useTableColumns,
  useTableBind,
  useTableDefaultBind,
  useTableMethods,
  usePagination,
} from './useTable'
import { tableProps, paginationKeys } from './props'
import emits from './emits'
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
  emits,
  setup(props, { slots, emit, expose }) {
    const { selection, expand, index, menu } = toRefs(props)
    const attrs = useAttrs()
    const columns = useTableColumns(props)
    const defaultBind = useTableDefaultBind(props)
    const bindSelection = useTableBind<ITableSelectionColumns>(
      selection,
      defaultBind
    )
    const bindExpand = useTableBind<ITableExpandColumns>(expand, defaultBind)
    const bindIndex = useTableBind<ITableIndexColumns>(index, defaultBind)
    const bindMenu = useTableBind<ITableMenuColumns>(menu, defaultBind)
    const { sizeChange, currentChange } = usePagination(emit)
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
    const tableConfig = reactiveOmit(
      props,
      ...paginationKeys,
      'showOverflowTooltip',
      'align',
      'headerAlign'
    )
    const paginationConfig = reactivePick(props, ...paginationKeys)

    provide('defaultBind', defaultBind)

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
    })

    function createColumn() {
      let list: VNode[] = []

      if (selection.value) {
        list.push(
          h(
            ElTableColumn,
            mergeProps(bindSelection.value, { type: 'selection' })
          )
        )
      }
      if (expand.value !== false && slots.expand) {
        list.push(
          h(ElTableColumn, mergeProps(bindExpand.value, { type: 'expand' }), {
            default: (scope: unknown) => slots.expand && slots.expand(scope),
          })
        )
      }
      if (index.value) {
        list.push(
          h(ElTableColumn, mergeProps(bindIndex.value, { type: 'index' }))
        )
      }
      if (columns.value) {
        const tableItem = columns.value.map((item) => {
          return h(ProTableItem, { item, size: props.size }, slots)
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
          })
        )
      }

      return list
    }

    function createDefault() {
      const tableNode = h(
        ElTable,
        mergeProps(tableConfig, attrs.value, { ref: table }),
        {
          default: () => createColumn(),
          append: slots.append,
        }
      )
      const paginationNode = h(
        ElPagination,
        mergeProps(paginationConfig, {
          'onUpdate:pageSize': sizeChange,
          'onUpdate:currentPage': currentChange,
        })
      )

      return [tableNode, props.total ? paginationNode : null]
    }

    return () => h('div', { class: 'pro-table' }, createDefault())
  },
})
