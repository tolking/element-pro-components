import { paginationProps } from 'element-plus'
import { isNumber } from '../utils/index'
import type { PropType, CSSProperties } from 'vue'
import type { ComponentSize } from 'element-plus'
import type {
  TableProps,
  DefaultRow,
} from 'element-plus/es/components/table/src/table/defaults'
import type {
  ITableSelectionColumns,
  ITableExpandColumns,
  ITableIndexColumns,
  ITableMenuColumns,
  ITableColumns,
  TableColumn,
} from './type'

type PaginationKeys = Array<keyof typeof paginationProps>

export const paginationKeys = Object.keys(paginationProps) as PaginationKeys

export const tableProps = {
  ...paginationProps,
  selection: {
    type: [Boolean, Object] as PropType<boolean | ITableSelectionColumns>,
    default: false,
  },
  expand: {
    type: [Boolean, Object] as PropType<boolean | ITableExpandColumns>,
    default: undefined,
  },
  index: {
    type: [Boolean, Object] as PropType<boolean | ITableIndexColumns>,
    default: false,
  },
  menu: {
    type: [Boolean, Object] as PropType<boolean | ITableMenuColumns>,
    default: undefined,
  },
  columns: {
    type: Array as PropType<ITableColumns>,
    default: undefined,
  },
  data: {
    type: Array as PropType<DefaultRow[]>,
    default: () => [],
  },
  height: [String, Number],
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: true,
  },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function] as PropType<TableProps<DefaultRow>['rowKey']>,
  showHeader: {
    type: Boolean,
    default: true,
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function as PropType<TableProps<DefaultRow>['summaryMethod']>,
  rowClassName: [String, Function] as PropType<
    TableProps<DefaultRow>['rowClassName']
  >,
  rowStyle: [Object, Function] as PropType<TableProps<DefaultRow>['rowStyle']>,
  cellClassName: [String, Function] as PropType<
    TableProps<DefaultRow>['cellClassName']
  >,
  cellStyle: [Object, Function] as PropType<
    TableProps<DefaultRow>['cellStyle']
  >,
  headerRowClassName: [String, Function] as PropType<
    TableProps<DefaultRow>['headerRowClassName']
  >,
  headerRowStyle: [Object, Function] as PropType<
    TableProps<DefaultRow>['headerRowStyle']
  >,
  headerCellClassName: [String, Function] as PropType<
    TableProps<DefaultRow>['headerCellClassName']
  >,
  headerCellStyle: [Object, Function] as PropType<
    TableProps<DefaultRow>['headerCellStyle']
  >,
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array as PropType<TableProps<DefaultRow>['expandRowKeys']>,
  defaultExpandAll: Boolean,
  defaultSort: Object as PropType<TableProps<DefaultRow>['defaultSort']>,
  tooltipEffect: String,
  spanMethod: Function as PropType<TableProps<DefaultRow>['spanMethod']>,
  selectOnIndeterminate: {
    type: Boolean,
    default: true,
  },
  indent: {
    type: Number,
    default: 16,
  },
  treeProps: {
    type: Object as PropType<TableProps<DefaultRow>['treeProps']>,
    default: () => {
      return {
        hasChildren: 'hasChildren',
        children: 'children',
      }
    },
  },
  lazy: Boolean,
  load: Function as PropType<TableProps<DefaultRow>['load']>,
  style: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
  },
  className: {
    type: String,
    default: '',
  },
  tableLayout: {
    type: String as PropType<'fixed' | 'auto'>,
    default: 'fixed',
  },
  scrollbarAlwaysOn: Boolean,
  flexible: Boolean,
  showOverflowTooltip: Boolean,
  align: String as PropType<'left' | 'center' | 'right'>,
  headerAlign: String as PropType<'left' | 'center' | 'right'>,
  size: String as PropType<ComponentSize>,
}

export const tableItemProps = {
  item: {
    type: Object as PropType<TableColumn>,
    required: true,
    default: () => ({}),
  },
  size: String as PropType<ComponentSize>,
}

export const tableEmits = {
  'update:currentPage': (current: number) => isNumber(current),
  'update:pageSize': (size: number) => isNumber(size),
  load: () => true,
}
