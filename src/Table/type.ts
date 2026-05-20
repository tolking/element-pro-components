import { tableProps, tableEmits } from './props'
import type { VNode } from 'vue'
import type { Placement } from 'element-plus'
import type {
  IDefineProps,
  IDefineEmits,
  UnknownFunction,
  UnknownObject,
  MaybeArray,
  ExternalParam,
  ColumnProp,
} from '../types/index'

/** Table Column Options for pro-table */
export interface TableColumnsProps {
  /** whether to hide extra content and show them in a tooltip when hovering on the cell */
  showOverflowTooltip?: boolean
  /** alignment */
  align?: 'left' | 'center' | 'right'
  /** alignment of the table header. If omitted, the value of the above align attribute will be applied */
  headerAlign?: 'left' | 'center' | 'right'
}

export interface TableCommonColumn<T = ExternalParam>
  extends TableColumnsProps {
  /** column label */
  label?: string
  /** column width */
  width?: string | number
  /** column minimum width. Columns with width has a fixed width, while columns with min-width has a width that is distributed in proportion */
  minWidth?: string | number
  /** whether column is fixed at `left` `right` */
  fixed?: boolean | 'left' | 'right'
  /** render function for table header of this column */
  renderHeader?: UnknownFunction
  /** whether column can be sorted. Remote sorting can be done by setting this attribute to 'custom' and listening to the sort-change event of Table */
  sortable?: boolean | 'custom'
  /** sorting method, works when sortable is true */
  sortMethod?: (a: unknown, b: unknown) => number
  /** specify which property to sort by, works when sortable is true and sort-method is undefined. If set to an Array, the column will sequentially sort by the next property if the previous one is equal */
  sortBy?: string | string[] | ((row: T, index: number) => void)
  /** the order of the sorting strategies used when sorting the data, works when sortable is true. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array */
  sortOrders?: Array<'ascending' | 'descending' | null>
  /** whether column width can be resized, works when border of pro-table is true */
  resizable?: boolean
  /** function that formats cell content */
  formatter?: UnknownFunction
  /** class name of cells in the column */
  className?: string
  /** class name of the label of this column */
  labelClassName?: string
  /** an array of data filtering options. For each element in this array, text and value are required */
  filters?: Array<'text' | 'value' | string>
  /** placement for the filter dropdown */
  filterPlacement?: Placement
  /** whether data filtering supports multiple options */
  filterMultiple?: boolean
  /** data filtering method. If filter-multiple is on, this method will be called multiple times for each row, and a row will display if one of the calls returns true */
  filterMethod?: UnknownFunction
  /** filter value for selected data, might be useful when table header is rendered with render-header */
  filteredValue?: unknown[]
}

/** Table Column Options */
export interface TableColumn<T = ExternalParam> extends TableCommonColumn<T> {
  /** field name */
  prop: ColumnProp<T>
  /** When the data structure is complex, you can use children to show the data hierarchy */
  children?: ITableColumns<T>
  /** whether to hide in the table */
  hide?: boolean
  /** Use simple slot */
  render?: (row: T) => string | MaybeArray<VNode>
}

/** Table Columns Options */
export type ITableColumns<T = ExternalParam> = Array<
  TableColumn<T> & UnknownObject
>

/** Table Expand Options */
export type ITableExpandColumns<T = ExternalParam> = TableCommonColumn<T>

/** Table Menu Options */
export type ITableMenuColumns = TableCommonColumn

/** Table Index Columns Options */
export interface ITableIndexColumns extends TableCommonColumn {
  /** customize indices for each row */
  index?: number | ((index: number) => number | string)
}

/** Table Selection Columns Options */
export interface ITableSelectionColumns<T = ExternalParam>
  extends TableCommonColumn<T> {
  /** function that determines if a certain row can be selected */
  selectable?: (row: T, index: number) => unknown
  /** whether to reserve selection after data refreshing. Note that row-key is required for this to work */
  reserveSelection?: boolean
}

/** Table Expose Methods */
export interface ITableExpose<T = ExternalParam> {
  /** used in multiple selection Table, clear user selection */
  clearSelection: () => void
  /** used in multiple selection Table, toggle if a certain row is selected. With the second parameter, you can directly set if this row is selected */
  toggleRowSelection: (row: T, selected?: boolean) => void
  /** used in multiple selection Table, toggle select all and deselect all */
  toggleAllSelection: () => void
  /** used in expandable Table or tree Table, toggle if a certain row is expanded. With the second parameter, you can directly set if this row is expanded or collapsed */
  toggleRowExpansion: (row: T, expanded?: boolean) => void
  /** used in single selection Table, set a certain row selected. If called without any parameter, it will clear selection */
  setCurrentRow: (row?: T) => void
  /** clear sorting, restore data to the original order */
  clearSort: () => void
  /** clear filters of the columns whose columnKey are passed in. If no params, clear all filters */
  clearFilter: (columnKeys?: MaybeArray<string>) => void
  /** refresh the layout of Table. When the visibility of Table changes, you may need to call this method to get a correct layout */
  doLayout: () => void
  /** sort Table manually. Property prop is used to set sort column, property order is used to set sort order */
  sort: (prop: string, order: string) => void
}

export type ITableProps = IDefineProps<typeof tableProps>
export type ITableEmits = IDefineEmits<typeof tableEmits>

/**
 * Type helper to make it easier to define columns
 * @param columns the columns of Table
 */
export function defineTableColumns<T = ExternalParam>(
  columns: ITableColumns<T>,
): ITableColumns<T> {
  return columns
}

/**
 * Type helper to make it easier to define menu columns
 * @param columns the columns of Menu
 */
export function defineTableMenuColumns(
  columns: ITableMenuColumns,
): ITableMenuColumns {
  return columns
}

/**
 * Type helper to make it easier to define selection columns
 * @param columns the columns of Selection
 */
export function defineTableSelectionColumns<T = ExternalParam>(
  columns: ITableSelectionColumns<T>,
): ITableSelectionColumns<T> {
  return columns
}

/**
 * Type helper to make it easier to define index columns
 * @param columns the columns of Index
 */
export function defineTableIndexColumns(
  columns: ITableIndexColumns,
): ITableIndexColumns {
  return columns
}

/**
 * Type helper to make it easier to define expand columns
 * @param columns the columns of Expand
 */
export function defineTableExpandColumns<T = ExternalParam>(
  columns: ITableExpandColumns<T>,
): ITableExpandColumns<T> {
  return columns
}
