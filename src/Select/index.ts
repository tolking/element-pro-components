import type { App } from 'vue'
import ProSelect from './Select.vue'
import type { ProDefineComponent } from '../types/index'

ProSelect.install = (app: App) => {
  app.component(ProSelect.name || 'ProSelect', ProSelect)
}

export default ProSelect as ProDefineComponent<{
  modelValue: string | string[]
  data: Record<string, unknown>
  config: {
    value?: string
    label?: string
    disabled?: string
  }
}>
