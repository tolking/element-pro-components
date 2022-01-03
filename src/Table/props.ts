import type { PropType, CSSProperties } from 'vue'
import type {
  TableProps,
  DefaultRow,
} from 'element-plus/es/components/table/src/table/defaults'
import type { ComponentSize } from 'element-plus/lib/utils/types'
import type {
  ITableSelectionColumns,
  ITableExpandColumns,
  ITableIndexColumns,
  ITableMenuColumns,
  ITableColumns,
  IPagination,
} from '../types/index'

export default {
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
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    default: () => ({}),
  },
  className: {
    type: String,
    default: '',
  },
  total: {
    type: Number,
    default: 0,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  pagination: {
    type: Object as PropType<IPagination>,
    default: undefined,
  },
  showOverflowTooltip: {
    type: Boolean,
    default: false,
  },
  align: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: undefined,
  },
  headerAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: undefined,
  },
  size: {
    type: String as PropType<ComponentSize>,
    default: undefined,
  },
}
