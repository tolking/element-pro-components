import type { App } from 'vue'
import ProLayout from './Layout.vue'
import { ProDefineComponent, ProRouteRecordRaw } from '../types/index'

ProLayout.install = (app: App) => {
  app.component(ProLayout.name || 'ProLayout', ProLayout)
}

export default ProLayout as ProDefineComponent<{
  routes?: ProRouteRecordRaw[]
  transition?: string
  collapse: boolean
  defaultOpeneds?: number[]
  uniqueOpened: boolean
}>
