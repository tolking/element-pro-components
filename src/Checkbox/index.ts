import type { App } from 'vue'
import ProCheckbox from './Checkbox.vue'
import { ProDefineComponent } from '../types/index'

ProCheckbox.install = (app: App) => {
  app.component(ProCheckbox.name || 'ProCheckbox', ProCheckbox)
}

export default ProCheckbox as ProDefineComponent<{
  modelValue: string[]
  data: Record<string, unknown>
  config: {
    value?: string
    label?: string
    disabled?: string
    name?: string
  }
}>
