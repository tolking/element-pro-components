import type { App } from 'vue'
import { objectDeepMerge } from '../utils/index'
import ProForm from './Form.vue'
import type {
  InstallOptions,
  IDefineComponent,
  IFormProps,
} from '../types/index'

ProForm.install = (app: App, options?: InstallOptions) => {
  if (options) {
    const _before = app.config.globalProperties.$PROOPTIONS as InstallOptions
    const _options = _before
      ? objectDeepMerge<InstallOptions>(_before, options)
      : options
    app.config.globalProperties.$PROOPTIONS = _options
  }

  app.component(ProForm.name || 'ProForm', ProForm)
}

export default ProForm as IDefineComponent<IFormProps>
