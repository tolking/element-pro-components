import type { App } from 'vue'
import ProForm from './Form.vue'
import type { IDefineComponent, IFormProps } from '../types/index'

ProForm.install = (app: App) => {
  app.component(ProForm.name || 'ProForm', ProForm)
}

export default ProForm as IDefineComponent<IFormProps>
