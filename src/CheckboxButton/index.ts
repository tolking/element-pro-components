import type { App } from 'vue'
import ProCheckboxButton from './CheckboxButton.vue'

ProCheckboxButton.install = (app: App) => {
  app.component(
    ProCheckboxButton.name || 'ProCheckboxButton',
    ProCheckboxButton
  )
}

export default ProCheckboxButton
