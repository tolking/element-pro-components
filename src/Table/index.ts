import type { App } from 'vue'
import { config } from '../utils/config'
import ProTable from './Table.vue'
import type {
  InstallOptions,
  ProDefineComponent,
  ProTableColumns,
  ProTableIndexColumns,
  ProTableSelectionColumns,
  ProTableExpandColumns,
  ProTableMenuColumns,
  ProPagination,
} from '../types/index'

ProTable.install = (app: App, options?: InstallOptions) => {
  const _options = Object.assign({}, config, options)

  app.provide('ProTableOptions', _options)

  app.component(ProTable.name || 'ProTable', ProTable)
}

export default ProTable as ProDefineComponent<{
  selection: boolean | ProTableSelectionColumns
  expand: boolean | ProTableExpandColumns
  index: boolean | ProTableIndexColumns
  menu: boolean | ProTableMenuColumns
  columns: ProTableColumns
  total?: number
  pageSize?: number
  currentPage?: number
  pagination?: ProPagination
  showOverflowTooltip?: boolean
  align?: 'left' | 'center' | 'right'
  headerAlign?: 'left' | 'center' | 'right'
}>
