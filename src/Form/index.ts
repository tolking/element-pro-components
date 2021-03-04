import type { App } from 'vue'
import { objectDeepMerge } from '../utils/index'
import { config } from '../utils/config'
import ProForm from './Form.vue'
import type {
  InstallOptions,
  IDefineComponent,
  IFormProps,
} from '../types/index'

ProForm.install = (app: App, options?: InstallOptions) => {
  const _options = options
    ? objectDeepMerge<Required<InstallOptions>>(config, options)
    : config

  app.config.globalProperties.$PROOPTIONS = _options

  app.component(ProForm.name || 'ProForm', ProForm)
}

export default ProForm as IDefineComponent<IFormProps>
