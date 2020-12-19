import type { App } from 'vue'
import ProLayout from './Layout.vue'

ProLayout.install = (app: App) => {
  app.component(ProLayout.name || 'ProLayout', ProLayout)
}

export default ProLayout
