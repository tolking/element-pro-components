import { dialogProps } from 'element-plus'
import { objectOmit } from '../utils/index'
import form from '../Form/props'
import table from '../Table/props'
import descriptions from '../Descriptions/props'
import type { PropType } from 'vue'
import type { IFormProps, IFormColumns } from '../Form/index'
import type { ITableColumns } from '../Table/index'
import type { IDescriptionsColumns } from '../Descriptions/index'
import type {
  ICrudColumns,
  ICrudMenuColumns,
  ICrudBeforeOpen,
  ICrudBeforeClose,
} from './type'

type FormKeys = Array<keyof typeof form>
type TableKeys = Array<keyof typeof table>
type DescriptionsKeys = Array<keyof typeof descriptions>
type DialogKeys = Array<keyof typeof dialogProps>

const _formProps = objectOmit(form, 'columns', 'menu')
const _tableProps = objectOmit(table, 'columns', 'menu')
const _descriptionsProps = objectOmit(descriptions, 'columns', 'title')
const _dialogProps = objectOmit(dialogProps, 'modelValue')

export const formKeys = Object.keys(_formProps) as FormKeys
export const tableKeys = Object.keys(_tableProps) as TableKeys
export const descriptionsKeys = Object.keys(
  _descriptionsProps
) as DescriptionsKeys
export const dialogKeys = Object.keys(_dialogProps) as DialogKeys

export default {
  ..._formProps,
  ..._tableProps,
  ..._descriptionsProps,
  ..._dialogProps,
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
  detailColumns: {
    type: Array as PropType<IDescriptionsColumns>,
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
    type: Object as PropType<IFormProps['rules']>,
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
}
