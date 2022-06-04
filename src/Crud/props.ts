import { dialogProps } from 'element-plus'
import { objectOmit } from '../utils/index'
import { formProps } from '../Form/props'
import { tableProps } from '../Table/props'
import { descriptionsProps } from '../Descriptions/props'
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

type FormKeys = Array<keyof typeof formProps>
type TableKeys = Array<keyof typeof tableProps>
type DescriptionsKeys = Array<keyof typeof descriptionsProps>
type DialogKeys = Array<keyof typeof dialogProps>

const _formProps = objectOmit(formProps, 'columns', 'menu')
const _tableProps = objectOmit(tableProps, 'columns', 'menu')
const _descriptionsProps = objectOmit(descriptionsProps, 'columns', 'title')
const _dialogProps = objectOmit(dialogProps, 'modelValue')

export const formKeys = Object.keys(_formProps) as FormKeys
export const tableKeys = Object.keys(_tableProps) as TableKeys
export const descriptionsKeys = Object.keys(
  _descriptionsProps
) as DescriptionsKeys
export const dialogKeys = Object.keys(_dialogProps) as DialogKeys

export const crudProps = {
  ..._formProps,
  ..._tableProps,
  ..._descriptionsProps,
  ..._dialogProps,
  columns: Array as PropType<ICrudColumns>,
  addColumns: Array as PropType<IFormColumns>,
  editColumns: Array as PropType<IFormColumns>,
  formColumns: Array as PropType<IFormColumns>,
  searchColumns: Array as PropType<IFormColumns>,
  tableColumns: Array as PropType<ITableColumns>,
  detailColumns: Array as PropType<IDescriptionsColumns>,
  menu: [Boolean, Object] as PropType<boolean | ICrudMenuColumns>,
  search: Object,
  searchRules: Object as PropType<IFormProps['rules']>,
  beforeOpen: Function as PropType<ICrudBeforeOpen>,
  beforeClose: Function as PropType<ICrudBeforeClose>,
}
