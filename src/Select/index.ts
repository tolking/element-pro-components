import type { App } from 'vue'
import ProSelect from './Select.vue'

ProSelect.install = (app: App) => {
  app.component(ProSelect.name || 'ProSelect', ProSelect)
}

export default ProSelect
