import type {
  ProFormColumn,
  ProFormMenuColumns,
  ProTableColumn,
  ProTableMenuColumns,
  UnknownObject,
  IButtonProps,
} from './index'

export interface ProCrudColumn<T = UnknownObject>
  extends ProFormColumn<T>,
    ProTableColumn<T> {
  prop: keyof T
  children?: ProCrudColumns<T>
  add?: boolean
  edit?: boolean
  search?: boolean
  hide?: boolean
}

export type ProCrudColumns<T = UnknownObject> = ProCrudColumn<T>[]

export interface ProCrudMenu<T = UnknownObject> {
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

export type ProCrudMenuColumns<T = UnknownObject> = ProCrudMenu &
  ProTableMenuColumns &
  ProFormMenuColumns
