import type { App } from 'vue'
import { objectDeepMerge } from '../utils/index'
import ProForm from './Form'
import type { InstallOptions, IDefinePlugin } from '../types/index'

const _ProForm: IDefinePlugin<typeof ProForm> = ProForm as IDefinePlugin<
  typeof ProForm
>

_ProForm.install = (app: App, options?: InstallOptions) => {
  if (options) {
    const _before = app.config.globalProperties.$PROOPTIONS as InstallOptions
    const _options = _before
      ? objectDeepMerge<InstallOptions>(_before, options)
      : options
    app.config.globalProperties.$PROOPTIONS = _options
  }

  app.component(_ProForm.name, _ProForm)
}

export default _ProForm
