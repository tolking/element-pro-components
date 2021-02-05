import type { App } from 'vue'
import ProMenu from './Menu.vue'
import type { ProDefineComponent, ProRouteRecordRaw } from '../types/index'

ProMenu.install = (app: App) => {
  app.component(ProMenu.name || 'ProMenu', ProMenu)
}

export default ProMenu as ProDefineComponent<{
  routes?: ProRouteRecordRaw[]
}>
