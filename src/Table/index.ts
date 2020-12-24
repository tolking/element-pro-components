import type { App } from 'vue'
import ProTable from './Table.vue'

ProTable.installl = (app: App) => {
  app.component(ProTable.name || 'ProTable', ProTable)
}

export default ProTable
