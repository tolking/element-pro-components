import type {
  ProFormColumn,
  ProTableColumn,
  ProTableMenuColumns,
  UnknownObject,
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

export interface ProCrudMenuColumns<T = UnknownObject>
  extends ProTableMenuColumns {
  edit?: boolean | ((row: T) => boolean)
  del?: boolean | ((row: T) => boolean)
}
