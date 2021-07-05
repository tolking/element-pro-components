import type { App } from 'vue'
import ProBreadcrumb from './Breadcrumb.vue'
import type { IDefineComponent, IBreadcrumbProps } from '../types/index'

ProBreadcrumb.install = (app: App) => {
  app.component(ProBreadcrumb.name, ProBreadcrumb)
}

export default ProBreadcrumb as IDefineComponent<IBreadcrumbProps>
