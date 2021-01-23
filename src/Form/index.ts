import type { App } from 'vue'
import ProForm from './Form.vue'
import { ProDefineComponent } from '../types/index'

ProForm.install = (app: App) => {
  app.component(ProForm.name || 'ProForm', ProForm)
}

export default ProForm as ProDefineComponent<{
  modelValue: Record<string, unknown>
  columns: Record<string, unknown>[]
}>
