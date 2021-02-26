import type {
  FormColumn,
  IFormColumns,
  IFormMenuColumns,
  TableColumn,
  ITableProps,
  ITableColumns,
  ITableMenuColumns,
  IButtonProps,
  UnknownObject,
} from './index'

export interface ICrudProps extends Partial<ITableProps> {
  columns?: ICrudColumns
  addColumns?: IFormColumns
  editColumns?: IFormColumns
  searchColumns?: IFormColumns
  tableColumns?: ITableColumns
  menu: boolean | ICrudMenuColumns
  modelValue?: UnknownObject
  search?: UnknownObject
  beforeOpen?: ICrudBeforeOpen
}

export interface CrudColumn<T = UnknownObject>
  extends FormColumn<T>,
    TableColumn<T> {
  prop: keyof T
  children?: ICrudColumns<T>
  add?: boolean
  edit?: boolean
  search?: boolean
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

export type ICrudMenuColumns<T = UnknownObject> = CrudMenu &
  ITableMenuColumns &
  IFormMenuColumns

export type ICrudFormType = 'add' | 'edit'

export type ICrudBeforeOpen<T = UnknownObject> = (
  next: () => void,
  type: ICrudFormType,
  row?: T
) => void
