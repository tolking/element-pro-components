import type { App } from 'vue'
import ProRadio from './Radio.vue'
import type { ProDefineComponent } from '../types/index'

ProRadio.install = (app: App) => {
  app.component(ProRadio.name || 'ProRadio', ProRadio)
}

export default ProRadio as ProDefineComponent<{
  modelValue: string
  data: Record<string, unknown>
  config: {
    value?: string
    label?: string
    disabled?: string
    name?: string
  }
}>
