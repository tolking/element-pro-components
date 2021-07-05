import type { App } from 'vue'
import ProLayout from './Layout.vue'
import type { IDefineComponent, ILayoutProps } from '../types/index'

ProLayout.install = (app: App) => {
  app.component(ProLayout.name, ProLayout)
}

export default ProLayout as IDefineComponent<ILayoutProps>
