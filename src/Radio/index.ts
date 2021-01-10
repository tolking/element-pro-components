import type { App } from 'vue'
import ProRadio from './Radio.vue'

ProRadio.install = (app: App) => {
  app.component(ProRadio.name || 'ProRadio', ProRadio)
}

export default ProRadio
