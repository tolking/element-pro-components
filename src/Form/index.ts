import type { App } from 'vue'
import ProForm from './Form.vue'

ProForm.install = (app: App) => {
  app.component(ProForm.name || 'ProForm', ProForm)
}

export default ProForm
