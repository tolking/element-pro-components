import type { App } from 'vue'
import { config, InstallOptions } from '../utils/config'
import ProTable from './Table.vue'
import type { ProDefineComponent, ProPagination } from '../types/index'

ProTable.installl = (app: App, options?: InstallOptions) => {
  const _options = Object.assign({}, config, options)

  app.provide('ProTableOptions', _options)

  app.component(ProTable.name || 'ProTable', ProTable)
}

export default ProTable as ProDefineComponent<{
  selection: boolean | Record<string, unknown>
  expand: boolean | Record<string, unknown>
  index: boolean | Record<string, unknown>
  menu: boolean | Record<string, unknown>
  columns: Record<string, unknown>[]
  total?: number
  pageSize?: number
  currentPage?: number
  pagination?: ProPagination
  showOverflowTooltip: boolean
  align?: 'left' | 'center' | 'right'
  headerAlign?: 'left' | 'center' | 'right'
}>
