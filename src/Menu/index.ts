import type { App } from 'vue'
import ProMenu from './Menu.vue'

ProMenu.install = (app: App) => {
  app.component(ProMenu.name || 'ProMenu', ProMenu)
}

export default ProMenu
