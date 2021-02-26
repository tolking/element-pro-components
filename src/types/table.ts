import type {
  UnknownObject,
  UnknownFunction,
  IPlacementType,
  StringObject,
} from './index'

export interface ITableProps extends TableColumnsProps {
  selection: boolean | ITableSelectionColumns
  expand: boolean | ITableExpandColumns
  index: boolean | ITableIndexColumns
  menu: boolean | ITableMenuColumns
  columns: ITableColumns
  total?: number
  pageSize?: number
  currentPage?: number
  pagination?: IPagination
}

/** Table Column Options for pro-table */
export interface TableColumnsProps {
  /** whether to hide extra content and show them in a tooltip when hovering on the cell */
  showOverflowTooltip?: boolean
  /** alignment */
  align?: 'left' | 'center' | 'right'
  /** alignment of the table header. If omitted, the value of the above align attribute will be applied */
  headerAlign?: 'left' | 'center' | 'right'
}

interface TableCommonColumn<T = UnknownObject>
  extends StringObject,
    TableColumnsProps {
  /** column label */
  label?: string
  /** column width */
  width?: string
  /** column minimum width. Columns with width has a fixed width, while columns with min-width has a width that is distributed in proportion */
  minWidth?: string
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
  filterPlacement?: IPlacementType
  /** whether data filtering supports multiple options */
  filterMultiple?: boolean
  /** data filtering method. If filter-multiple is on, this method will be called multiple times for each row, and a row will display if one of the calls returns true */
  filterMethod?: UnknownFunction
  /** filter value for selected data, might be useful when table header is rendered with render-header */
  filteredValue?: unknown[]
}

/** Table Column Options */
export interface TableColumn<T = UnknownObject> extends TableCommonColumn {
  /** field name */
  prop?: keyof T
  /** whether column has a slot */
  slot?: boolean
  /** When the data structure is complex, you can use children to show the data hierarchy */
  children?: ITableColumns<T>
}

/** Table Columns Options */
export type ITableColumns<T = UnknownObject> = TableColumn<T>[]

/** Table Expand Options */
export type ITableExpandColumns = TableCommonColumn

/** Table Menu Options */
export type ITableMenuColumns = TableCommonColumn

/** Table Index Columns Options */
export interface ITableIndexColumns extends TableCommonColumn {
  /** customize indices for each row */
  index?: number | ((index: number) => number | string)
}

/** Table Selection Columns Options */
export interface ITableSelectionColumns<T = UnknownObject>
  extends TableCommonColumn<T> {
  /** function that determines if a certain row can be selected */
  selectable?: (row: T, index: number) => unknown
  /** whether to reserve selection after data refreshing. Note that row-key is required for this to work */
  reserveSelection?: boolean
}

/** Table Expose Methods */
export interface ITableExpose<T = UnknownObject> {
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
  clearFilter: (columnKeys?: string[]) => void
  /** refresh the layout of Table. When the visibility of Table changes, you may need to call this method to get a correct layout */
  doLayout: () => void
  /** sort Table manually. Property prop is used to set sort column, property order is used to set sort order */
  sort: (prop: string, order: string) => void
}

/** Pagination Attributes */
export interface IPagination extends StringObject {
  /** whether to use small pagination */
  small?: boolean
  /** number of pagers. Pagination collapses when the total page count exceeds this value */
  pagerCount?: number
  /** layout of Pagination, elements separated with a comma */
  layout?: string
  /** options of item count per page, default: `[10, 20, 30, 40, 50, 100]` */
  pageSizes?: Array<number>
  /** custom class name for the page size Select's dropdown */
  popperClass?: string
  /** text for the prev button */
  prevText?: string
  /** text for the next button */
  nextText?: string
  /** whether the buttons have a background color */
  background?: boolean
  /** whether Pagination is disabled */
  disabled?: boolean
  /** whether to hide when there's only one page */
  hideOnSinglePage?: boolean
}
