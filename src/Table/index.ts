import type { App } from 'vue'
import { config, InstallOptions } from '../utils/config'
import ProTable from './Table.vue'

ProTable.installl = (app: App, options?: InstallOptions) => {
  const _options = Object.assign({}, config, options)

  app.provide('ProTableOptions', _options)

  app.component(ProTable.name || 'ProTable', ProTable)
}

export default ProTable
