import type { App } from 'vue'
import ProBreadcrumb from './Breadcrumb.vue'

ProBreadcrumb.install = (app: App) => {
  app.component(ProBreadcrumb.name || 'ProBreadcrumb', ProBreadcrumb)
}

export default ProBreadcrumb
