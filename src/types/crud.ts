import {
  IButtonProps,
  UnknownObject,
  ExternalParam,
  FormColumn,
  IFormMenuColumns,
  IFormExpose,
  IFormSubmit,
  TableColumn,
  ITableMenuColumns,
  ITableExpose,
} from './index'

export interface CrudColumn<T = ExternalParam>
  extends FormColumn<T>,
    TableColumn<T> {
  /** sub-form and multi-level header */
  children?: ICrudColumns<T>
  /** whether to display in the add form */
  add?: boolean
  /** whether to display in the edit form */
  edit?: boolean
  /** whether to display in the add and edit form */
  form?: boolean
  /** whether to display in the search form */
  search?: boolean
}

/** Crud Columns Options */
export type ICrudColumns<T = ExternalParam> = CrudColumn<T>[]

export interface CrudMenu<T = ExternalParam> {
  /** show add button */
  add?: boolean
  /** text of add button */
  addText?: string
  /** props of add button */
  addProps?: IButtonProps
  /** show edit button */
  edit?: boolean | ((row: T) => boolean)
  /** text of edit button */
  editText?: string
  /** props of edit button */
  editProps?: IButtonProps
  /** show del button */
  del?: boolean | ((row: T) => boolean)
  /** text of del button */
  delText?: string
  /** props of del button */
  delProps?: IButtonProps
  /** show search button */
  search?: boolean
  /** text of search button */
  searchText?: string
  /** props of search button */
  searchProps?: IButtonProps
  /** show search reset button */
  searchReset?: boolean
  /** text of search reset button */
  searchResetText?: string
  /** props of search reset button */
  searchResetProps?: IButtonProps
}

export type ICrudMenuColumns<T = ExternalParam> = CrudMenu<T> &
  ITableMenuColumns &
  IFormMenuColumns

export type ICrudFormType = 'add' | 'edit'

export type ICrudBeforeOpen<T = ExternalParam> = (
  done: () => void,
  formType: ICrudFormType,
  row?: T
) => void

export type ICrudBeforeClose = (done: () => void) => void

export type ICrudSearch = IFormSubmit

export type ICrudSubmit = (
  close: () => void,
  done: () => void,
  formType: ICrudFormType,
  isValid: boolean,
  invalidFields?: UnknownObject
) => void

export type ICrudExpose<T = UnknownObject> = IFormExpose & ITableExpose<T>
