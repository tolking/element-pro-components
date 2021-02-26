import type { App } from 'vue'
import ProSelect from './Select.vue'
import type { IDefineComponent } from '../types/index'

ProSelect.install = (app: App) => {
  app.component(ProSelect.name || 'ProSelect', ProSelect)
}

export default ProSelect as IDefineComponent<{
  modelValue: string | string[]
  data: Record<string, unknown>
  config: {
    value?: string
    label?: string
    disabled?: string
  }
}>
