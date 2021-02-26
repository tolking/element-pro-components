import type { App } from 'vue'
import { config } from '../utils/config'
import ProTable from './Table.vue'
import type {
  InstallOptions,
  IDefineComponent,
  ITableProps,
} from '../types/index'

ProTable.install = (app: App, options?: InstallOptions) => {
  const _options = Object.assign({}, config, options)

  app.provide('ProTableOptions', _options)

  app.component(ProTable.name || 'ProTable', ProTable)
}

export default ProTable as IDefineComponent<ITableProps>
