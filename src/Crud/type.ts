import { crudProps } from './props'
import emits from './emits'
import type { ButtonProps } from 'element-plus'
import type {
  IDefineProps,
  IDefineEmits,
  UnknownObject,
  ExternalParam,
  FormColumnChildren,
} from '../types/index'
import type {
  FormColumn,
  IFormMenuColumns,
  IFormExpose,
  IFormSubmit,
  InvalidFields,
} from '../Form/index'
import type {
  TableColumn,
  ITableMenuColumns,
  ITableExpose,
} from '../Table/index'
import type { DescriptionsColumn } from '../Descriptions/type'

export interface CrudColumn<T = ExternalParam>
  extends Omit<FormColumn<T>, 'children'>,
    Omit<TableColumn<T>, 'children'>,
    Omit<DescriptionsColumn<T>, 'span'> {
  /** sub-form and multi-level header */
  children?: ICrudColumns<T & FormColumnChildren<T>>
  /** whether to display in the add form */
  add?: boolean
  /** whether to display in the edit form */
  edit?: boolean
  /** whether to display in the add and edit form */
  form?: boolean
  /** whether to display in the detail descriptions */
  detail?: boolean
  /** whether to display in the search form */
  search?: boolean
}

/** Crud Columns Options */
export type ICrudColumns<T = ExternalParam> = Array<
  CrudColumn<T> & UnknownObject
>

export interface CrudMenu<T = ExternalParam> {
  /** show add button */
  add?: boolean
  /** text of add button */
  addText?: string
  /** props of add button */
  addProps?: Partial<ButtonProps>
  /** show edit button */
  edit?: boolean | ((row: T) => boolean)
  /** text of edit button */
  editText?: string
  /** props of edit button */
  editProps?: Partial<ButtonProps>
  /** show detail button */
  detail?: boolean | ((row: T) => boolean)
  /** text of detail button */
  detailText?: string
  /** props of detail button */
  detailProps?: Partial<ButtonProps>
  /** show del button */
  del?: boolean | ((row: T) => boolean)
  /** text of del button */
  delText?: string
  /** props of del button */
  delProps?: Partial<ButtonProps>
  /** show search button */
  search?: boolean
  /** text of search button */
  searchText?: string
  /** props of search button */
  searchProps?: Partial<ButtonProps>
  /** show search reset button */
  searchReset?: boolean
  /** text of search reset button */
  searchResetText?: string
  /** props of search reset button */
  searchResetProps?: Partial<ButtonProps>
}

export type ICrudMenuColumns<T = ExternalParam> = CrudMenu<T> &
  ITableMenuColumns &
  IFormMenuColumns

export type ICrudDialogType = 'add' | 'edit' | 'detail'

export type ICrudBeforeOpen<T = ExternalParam> = (
  done: () => void,
  type: ICrudDialogType,
  row?: T
) => void

export type ICrudBeforeClose = (done: () => void) => void

export type ICrudSearch = IFormSubmit

export type ICrudSubmit = (
  close: () => void,
  done: () => void,
  type: ICrudDialogType,
  isValid: boolean,
  invalidFields?: InvalidFields
) => void

export type ICrudProps = IDefineProps<typeof crudProps>
export type ICrudEmits = IDefineEmits<typeof emits>
export type ICrudExpose<T = UnknownObject> = IFormExpose & ITableExpose<T>

/**
 * Type helper to make it easier to define columns
 * @param columns the columns of Crud
 */
export function defineCrudColumns<T = ExternalParam>(
  columns: ICrudColumns<T>
): ICrudColumns<T> {
  return columns
}

/**
 * Type helper to make it easier to define menu columns
 * @param columns the columns of Menu
 */
export function defineCrudMenuColumns<T = ExternalParam>(
  columns: ICrudMenuColumns<T>
): ICrudMenuColumns<T> {
  return columns
}

/**
 * Type helper to make it easier to define function (before the dialog is opened)
 * @param fun function
 */
export function defineCrudBeforeOpen<T = ExternalParam>(
  fun: ICrudBeforeOpen<T>
): ICrudBeforeOpen<T> {
  return fun
}

/**
 * Type helper to make it easier to define function (before the dialog is closed)
 * @param fun function
 */
export function defineCrudBeforeClose(fun: ICrudBeforeClose): ICrudBeforeClose {
  return fun
}

/**
 * Type helper to make it easier to define search function
 * @param fun search function
 */
export function defineCrudSearch(fun: ICrudSearch): ICrudSearch {
  return fun
}

/**
 * Type helper to make it easier to define submit function
 * @param fun submit function
 */
export function defineCrudSubmit(fun: ICrudSubmit): ICrudSubmit {
  return fun
}
