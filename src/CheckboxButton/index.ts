import type { App } from 'vue'
import ProCheckboxButton from './CheckboxButton.vue'
import { ProDefineComponent } from '../types/index'

ProCheckboxButton.install = (app: App) => {
  app.component(
    ProCheckboxButton.name || 'ProCheckboxButton',
    ProCheckboxButton
  )
}

export default ProCheckboxButton as ProDefineComponent<{
  modelValue: string[]
  data: Record<string, unknown>
  config: {
    value?: string
    label?: string
    disabled?: string
    name?: string
  }
}>
