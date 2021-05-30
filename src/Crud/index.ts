import type { App } from 'vue'
import { objectDeepMerge } from '../utils/index'
import ProCrud from './Crud.vue'
import type {
  InstallOptions,
  IDefineComponent,
  ICrudProps,
} from '../types/index'

ProCrud.install = (app: App, options?: InstallOptions) => {
  if (options) {
    const _before = app.config.globalProperties.$PROOPTIONS as InstallOptions
    const _options = _before
      ? objectDeepMerge<InstallOptions>(_before, options)
      : options
    app.config.globalProperties.$PROOPTIONS = _options
  }

  app.component(ProCrud.name || 'ProCrud', ProCrud)
}

export default ProCrud as IDefineComponent<ICrudProps>
