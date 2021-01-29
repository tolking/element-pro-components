import type { App } from 'vue'
import ProForm from './Form.vue'
import type {
  ProDefineComponent,
  ProFormColumns,
  UnknownObject,
  ComponentSize,
} from '../types/index'

ProForm.install = (app: App) => {
  app.component(ProForm.name || 'ProForm', ProForm)
}

export default ProForm as ProDefineComponent<{
  modelValue: Record<string, unknown>
  columns: ProFormColumns
  rules?: UnknownObject
  inline?: boolean
  labelPosition?: 'right' | 'left' | 'top'
  labelWidth?: string
  labelSuffix?: string
  hideRequiredAsterisk?: boolean
  showMessage?: boolean
  inlineMessage?: boolean
  statusIcon?: boolean
  validateOnRuleChange?: boolean
  size?: ComponentSize
  disabled?: boolean
}>
