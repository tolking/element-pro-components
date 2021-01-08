import type { App } from 'vue'
import ProRadioButton from './RadioButton.vue'

ProRadioButton.install = (app: App) => {
  app.component(ProRadioButton.name || 'ProRadioButton', ProRadioButton)
}

export default ProRadioButton
