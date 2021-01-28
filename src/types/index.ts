import type { App, DefineComponent } from 'vue'
import type { RouteMeta, RouteRecordRaw } from 'vue-router'

export interface ProRouteMeta extends RouteMeta {
  title?: string
  icon?: string
  hidden?: boolean
  keepAlive?: boolean
}

export type ProRouteRecordRaw = RouteRecordRaw

interface ProColumnItem {
  slot?: boolean
  children?: ProColumns
  [key: string]: unknown
}

export type ProColumns = ProColumnItem[]

export type ComponentSize = 'medium' | 'small' | 'mini' | undefined

export interface ProColumnsDefaultBind {
  size?: ComponentSize
  showOverflowTooltip: boolean
  align?: 'left' | 'center' | 'right'
  headerAlign?: 'left' | 'center' | 'right'
}

export type UnknownObject = Record<string, unknown>

export interface ProFormValidateCallback {
  (isValid: boolean, invalidFields?: UnknownObject): void
}

export interface ProFormValidateFieldCallback {
  (message?: string, invalidFields?: UnknownObject): void
}

/** Form Expose Methods */
export interface ProFormExpose {
  /** validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted */
  validate: (callback?: ProFormValidateCallback) => Promise<boolean>
  /** reset all the fields and remove validation result */
  resetFields: () => void
  /** clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared */
  clearValidate: (props?: string | string[]) => void
  /** validate one or several form items */
  validateField: (
    props: string | string[],
    cb: ProFormValidateFieldCallback
  ) => void
}

/** Table Expose Methods */
export interface ProTableExpose {
  /** used in multiple selection Table, clear user selection */
  clearSelection: () => void
  /** used in multiple selection Table, toggle if a certain row is selected. With the second parameter, you can directly set if this row is selected */
  toggleRowSelection: (row: UnknownObject, selected?: boolean) => void
  /** used in multiple selection Table, toggle select all and deselect all */
  toggleAllSelection: () => void
  /** used in expandable Table or tree Table, toggle if a certain row is expanded. With the second parameter, you can directly set if this row is expanded or collapsed */
  toggleRowExpansion: (row: UnknownObject, expanded?: boolean) => void
  /** used in single selection Table, set a certain row selected. If called without any parameter, it will clear selection */
  setCurrentRow: (row?: UnknownObject) => void
  /** clear sorting, restore data to the original order */
  clearSort: () => void
  /** clear filters of the columns whose columnKey are passed in. If no params, clear all filters */
  clearFilter: (columnKeys?: string[]) => void
  /** refresh the layout of Table. When the visibility of Table changes, you may need to call this method to get a correct layout */
  doLayout: () => void
  /** sort Table manually. Property prop is used to set sort column, property order is used to set sort order */
  sort: (prop: string, order: string) => void
}

export type ProDefineComponent<
  Props = UnknownObject
> = DefineComponent<Props> & {
  install: (app: App) => void
}
