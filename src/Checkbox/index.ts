import type { App } from 'vue'
import ProCheckbox from './Checkbox.vue'
import type { IDefineComponent } from '../types/index'

ProCheckbox.install = (app: App) => {
  app.component(ProCheckbox.name || 'ProCheckbox', ProCheckbox)
}

export default ProCheckbox as IDefineComponent<{
  modelValue: string[]
  data: Record<string, unknown>
  config: {
    value?: string
    label?: string
    disabled?: string
    name?: string
  }
}>
