import type { App } from 'vue'
import ProMenu from './Menu.vue'
import type { IDefineComponent, IRouteRecordRaw } from '../types/index'

ProMenu.install = (app: App) => {
  app.component(ProMenu.name || 'ProMenu', ProMenu)
}

export default ProMenu as IDefineComponent<{
  routes?: IRouteRecordRaw[]
}>
