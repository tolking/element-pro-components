import type { App } from 'vue'
import ProLayout from './Layout.vue'
import type { IDefineComponent, IRouteRecordRaw } from '../types/index'

ProLayout.install = (app: App) => {
  app.component(ProLayout.name || 'ProLayout', ProLayout)
}

export default ProLayout as IDefineComponent<{
  routes?: IRouteRecordRaw[]
  transition?: string
  collapse: boolean
  defaultOpeneds?: number[]
  uniqueOpened: boolean
}>
