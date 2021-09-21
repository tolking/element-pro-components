import type { App } from 'vue'
import { objectDeepMerge } from '../utils/index'
import ProTable from './Table'
import type { InstallOptions, IDefinePlugin } from '../types/index'

const _ProTable: IDefinePlugin<typeof ProTable> = ProTable as IDefinePlugin<
  typeof ProTable
>

_ProTable.install = (app: App, options?: InstallOptions) => {
  if (options) {
    const _before = app.config.globalProperties.$PROOPTIONS as InstallOptions
    const _options = _before
      ? objectDeepMerge<InstallOptions>(_before, options)
      : options
    app.config.globalProperties.$PROOPTIONS = _options
  }

  app.component(ProTable.name, ProTable)
}

export default _ProTable
