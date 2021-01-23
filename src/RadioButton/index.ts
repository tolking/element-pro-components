import type { App } from 'vue'
import ProRadioButton from './RadioButton.vue'
import { ProDefineComponent } from '../types/index'

ProRadioButton.install = (app: App) => {
  app.component(ProRadioButton.name || 'ProRadioButton', ProRadioButton)
}

export default ProRadioButton as ProDefineComponent<{
  modelValue: string
  data: Record<string, unknown>
  config: {
    value?: string
    label?: string
    disabled?: string
    name?: string
  }
}>
