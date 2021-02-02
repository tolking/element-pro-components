import type { App } from 'vue'
import ProTabs from './Tabs.vue'
import { ProDefineComponent } from '../types/index'

ProTabs.install = (app: App) => {
  app.component(ProTabs.name || 'ProTabs', ProTabs)
}

export default ProTabs as ProDefineComponent
