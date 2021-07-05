import type { App } from 'vue'
import ProMenu from './Menu.vue'
import type { IDefineComponent, IMenuProps } from '../types/index'

ProMenu.install = (app: App) => {
  app.component(ProMenu.name, ProMenu)
}

export default ProMenu as IDefineComponent<IMenuProps>
