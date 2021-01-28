import { UnknownObject } from './index'

export interface ProTableColumnsProps {
  showOverflowTooltip: boolean
  align?: 'left' | 'center' | 'right'
  headerAlign?: 'left' | 'center' | 'right'
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

/** Pagination Attributes */
export interface ProPagination {
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
