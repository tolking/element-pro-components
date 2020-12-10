import type { App } from 'vue'
import ProMenu from './ProMenu.vue'

ProMenu.install = (app: App) => {
  app.component(ProMenu.name || 'ProMenu', ProMenu)
}

export default ProMenu
