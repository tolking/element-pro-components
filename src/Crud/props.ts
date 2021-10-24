import form from '../Form/props'
import table from '../Table/props'
import type { PropType } from 'vue'
import type { FormRulesMap } from 'element-plus/lib/components/form/src/form.type'
import type { IFormColumns } from '../Form/index'
import type { ITableColumns } from '../Table/index'
import type {
  ICrudColumns,
  ICrudMenuColumns,
  ICrudBeforeOpen,
  ICrudBeforeClose,
} from './type'

export default {
  ...form,
  ...table,
  columns: {
    type: Array as PropType<ICrudColumns>,
    default: undefined,
  },
  addColumns: {
    type: Array as PropType<IFormColumns>,
    default: undefined,
  },
  editColumns: {
    type: Array as PropType<IFormColumns>,
    default: undefined,
  },
  formColumns: {
    type: Array as PropType<IFormColumns>,
    default: undefined,
  },
  searchColumns: {
    type: Array as PropType<IFormColumns>,
    default: undefined,
  },
  tableColumns: {
    type: Array as PropType<ITableColumns>,
    default: undefined,
  },
  menu: {
    type: [Boolean, Object] as PropType<boolean | ICrudMenuColumns>,
    default: undefined,
  },
  search: {
    type: Object,
    default: undefined,
  },
  searchRules: {
    type: Object as PropType<FormRulesMap>,
    default: undefined,
  },
  beforeOpen: {
    type: Function as PropType<ICrudBeforeOpen>,
    default: undefined,
  },
  beforeClose: {
    type: Function as PropType<ICrudBeforeClose>,
    default: undefined,
  },
  appendToBody: {
    type: Boolean,
    default: false,
  },
  destroyOnClose: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: undefined,
  },
  closeOnClickModal: {
    type: Boolean,
    default: true,
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true,
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  lockScroll: {
    type: Boolean,
    default: true,
  },
  modal: {
    type: Boolean,
    default: true,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: undefined,
  },
  openDelay: {
    type: Number,
    default: 0,
  },
  closeDelay: {
    type: Number,
    default: 0,
  },
  top: {
    type: String,
    default: '15vh',
  },
  modalClass: String,
  width: {
    type: [String, Number],
    default: undefined,
  },
  zIndex: {
    type: Number,
  },
}
