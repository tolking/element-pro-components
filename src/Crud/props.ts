import { dialogProps } from 'element-plus'
import {
  objectOmit,
  isObject,
  isFunction,
  isBoolean,
  isUndefined,
  isString,
} from '../utils/index'
import { formProps, formEmits } from '../Form/props'
import { tableProps, tableEmits } from '../Table/props'
import { descriptionsProps } from '../Descriptions/props'
import type { PropType } from 'vue'
import type { ExternalParam } from '../types/index'
import type { IFormProps, IFormColumns, InvalidFields } from '../Form/index'
import type { ITableColumns } from '../Table/index'
import type { IDescriptionsColumns } from '../Descriptions/index'
import type {
  ICrudColumns,
  ICrudMenuColumns,
  ICrudBeforeOpen,
  ICrudBeforeClose,
  ICrudDialogType,
  ICrudSearchProps,
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
  _descriptionsProps,
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
  searchProps: Object as PropType<ICrudSearchProps>,
  /**
   * @deprecated The `searchRules` attribute will be removed in the next major version, please use `searchProps` instead
   */
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
    invalidFields?: InvalidFields,
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
  edit: (row: ExternalParam) => isObject(row),
  detail: (row: ExternalParam) => isObject(row),
  delete: (row: ExternalParam) => isObject(row),
  'update:search': (value: ExternalParam) => isObject(value),
}
