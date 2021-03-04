import type { App } from 'vue'
import { objectDeepMerge } from '../utils/index'
import { config } from '../utils/config'
import ProCrud from './Crud.vue'
import type {
  InstallOptions,
  IDefineComponent,
  ICrudProps,
} from '../types/index'

ProCrud.install = (app: App, options?: InstallOptions) => {
  const _options = options
    ? objectDeepMerge<Required<InstallOptions>>(config, options)
    : config

  app.config.globalProperties.$PROOPTIONS = _options

  app.component(ProCrud.name || 'ProCrud', ProCrud)
}

export default ProCrud as IDefineComponent<ICrudProps>
