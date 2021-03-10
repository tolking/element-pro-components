import type {
  FormColumn,
  IFormProps,
  IFormColumns,
  IFormMenuColumns,
  IFormExpose,
  IFormSubmit,
  TableColumn,
  ITableProps,
  ITableColumns,
  ITableMenuColumns,
  ITableExpose,
  IButtonProps,
  IDialogProps,
  UnknownObject,
  DeepTypeof,
} from './index'

export interface ICrudProps<T = UnknownObject>
  extends Partial<ITableProps<T>>,
    Partial<Omit<IFormProps<T>, 'menu'>>,
    IDialogProps {
  columns?: ICrudColumns<T>
  addColumns?: IFormColumns<T>
  editColumns?: IFormColumns<T>
  formColumns?: IFormColumns<T>
  searchColumns?: IFormColumns<T>
  tableColumns?: ITableColumns<T>
  menu: boolean | ICrudMenuColumns<T>
  search?: T
  searchRules?: UnknownObject
  beforeOpen?: ICrudBeforeOpen<T>
}

export interface CrudColumn<T = UnknownObject>
  extends FormColumn<T>,
    TableColumn<T> {
  /** keys of model that passed to form and table */
  prop: DeepTypeof<T>
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
  /** whether to hide in the table */
  hide?: boolean
}

export type ICrudColumns<T = UnknownObject> = CrudColumn<T>[]

export interface CrudMenu<T = UnknownObject> {
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

export type ICrudMenuColumns<T = UnknownObject> = CrudMenu<T> &
  ITableMenuColumns &
  IFormMenuColumns

export type ICrudFormType = 'add' | 'edit'

export type ICrudBeforeOpen<T = UnknownObject> = (
  done: () => void,
  formType: ICrudFormType,
  row?: T
) => void

export type ICrudSearch = IFormSubmit

export type ICrudSubmit = (
  close: () => void,
  done: () => void,
  formType: ICrudFormType,
  isValid: boolean,
  invalidFields?: UnknownObject
) => void

export type ICrudExpose<T = UnknownObject> = IFormExpose<T> & ITableExpose<T>
