import { dialogProps } from 'element-plus'
import {
  objectOmit,
  isObject,
  isFunction,
  isBoolean,
  isUndefined,
} from '../utils/index'
import { formProps, formEmits } from '../Form/props'
import { tableProps, tableEmits } from '../Table/props'
import { descriptionsProps } from '../Descriptions/props'
import type { PropType } from 'vue'
import type { UnknownObject } from '../types/index'
import type { IFormProps, IFormColumns, InvalidFields } from '../Form/index'
import type { ITableColumns } from '../Table/index'
import type { IDescriptionsColumns } from '../Descriptions/index'
import type {
  ICrudColumns,
  ICrudMenuColumns,
  ICrudBeforeOpen,
  ICrudBeforeClose,
  ICrudDialogType,
} from './type'
import { isString } from 'lodash'

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

export const crudEmits = {
  ...formEmits,
  ...tableEmits,
  submit: (
    close: () => void,
    done: () => void,
    type: ICrudDialogType,
    isValid: boolean,
    invalidFields?: InvalidFields
  ) =>
    isFunction(close) &&
    isFunction(done) &&
    isString(type) &&
    isBoolean(isValid) &&
    (isObject(invalidFields) || isUndefined(invalidFields)),
  search: (done: () => void, isValid: boolean, invalidFields?: InvalidFields) =>
    isFunction(done) &&
    isBoolean(isValid) &&
    (isObject(invalidFields) || isUndefined(invalidFields)),
  searchReset: () => true,
  add: () => true,
  edit: (row: UnknownObject) => isObject(row),
  detail: (row: UnknownObject) => isObject(row),
  delete: (row: UnknownObject) => isObject(row),
  'update:search': (value: UnknownObject) => isObject(value),
}
