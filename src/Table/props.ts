import type { PropType } from 'vue'
import type {
  ITableSelectionColumns,
  ITableExpandColumns,
  ITableIndexColumns,
  ITableMenuColumns,
  ITableColumns,
  IPagination,
  IComponentSize,
  StringObject,
} from '../types/index'

export default {
  selection: {
    type: [Boolean, Object] as PropType<boolean | ITableSelectionColumns>,
    default: false,
  },
  expand: {
    type: [Boolean, Object] as PropType<boolean | ITableExpandColumns>,
    default: false,
  },
  index: {
    type: [Boolean, Object] as PropType<boolean | ITableIndexColumns>,
    default: false,
  },
  menu: {
    type: [Boolean, Object] as PropType<boolean | ITableMenuColumns>,
    default: false,
  },
  columns: {
    type: Array as PropType<ITableColumns<StringObject>>,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    default: () => [] as ITableColumns,
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
    type: String as PropType<IComponentSize>,
    default: undefined,
  },
}
