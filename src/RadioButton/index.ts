import type { App } from 'vue'
import ProRadioButton from './RadioButton.vue'
import type { IDefineComponent } from '../types/index'

ProRadioButton.install = (app: App) => {
  app.component(ProRadioButton.name || 'ProRadioButton', ProRadioButton)
}

export default ProRadioButton as IDefineComponent<{
  modelValue: string
  data: Record<string, unknown>
  config: {
    value?: string
    label?: string
    disabled?: string
    name?: string
  }
}>
