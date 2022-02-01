import { defineComponent, h, toRefs, VNode, provide } from 'vue'
import { ElTable, ElTableColumn, ElPagination, useAttrs } from 'element-plus'
import {
  useTableColumns,
  useTableBind,
  useTableDefaultBind,
  useTableMethods,
  usePagination,
} from '../composables'
import props from './props'
import emits from './emits'
import ProTableItem from './TableItem'
import type { StringObject } from '../types/index'
import type {
  ITableProps,
  ITableSelectionColumns,
  ITableExpandColumns,
  ITableIndexColumns,
  ITableMenuColumns,
} from './index'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createTableProps(props: ITableProps) {
  return {
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
    size: props.size,
  }
}

export default defineComponent({
  name: 'ProTable',
  props,
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
    const {
      pagination,
      sizeChange,
      currentChange,
      prevClick,
      nextClick,
    } = usePagination(props, emit)
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
          h(ElTableColumn, { type: 'selection', ...bindSelection.value })
        )
      }
      if (expand.value !== false && slots.expand) {
        list.push(
          h(
            ElTableColumn,
            { type: 'expand', ...bindExpand.value },
            {
              default: (scope: unknown) => slots.expand && slots.expand(scope),
            }
          )
        )
      }
      if (index.value) {
        list.push(h(ElTableColumn, { type: 'index', ...bindIndex.value }))
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
          h(
            ElTableColumn,
            { type: 'menu', ...bindMenu.value },
            {
              default: (scope: StringObject) =>
                slots.menu && slots.menu({ ...scope, size: props.size }),
            }
          )
        )
      }

      return list
    }

    function createDefault() {
      const config = createTableProps(props)
      const tableNode = h(
        ElTable,
        Object.assign({ ref: table }, config, attrs.value),
        {
          default: () => createColumn(),
          append: slots.append,
        }
      )
      const paginationNode = h(ElPagination, {
        ...pagination.value,
        currentPage: props.currentPage,
        pageSize: props.pageSize,
        total: props.total,
        'onUpdate:pageSize': sizeChange,
        'onUpdate:currentPage': currentChange,
        onPrevClick: prevClick,
        onNextClick: nextClick,
      })

      return [tableNode, props.total ? paginationNode : null]
    }

    return () => h('div', { class: 'pro-table' }, createDefault())
  },
})
