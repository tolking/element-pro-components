import type { App } from 'vue'
import ProCheckbox from './Checkbox.vue'

ProCheckbox.install = (app: App) => {
  app.component(ProCheckbox.name || 'ProCheckbox', ProCheckbox)
}

export default ProCheckbox
