import type { App } from 'vue'
import ProTabs from './Tabs.vue'

ProTabs.installl = (app: App) => {
  app.component(ProTabs.name || 'ProTabs', ProTabs)
}

export default ProTabs
