import type { App } from 'vue'
import { objectDeepMerge } from '../utils/index'
import ProTable from './Table.vue'
import type {
  InstallOptions,
  IDefineComponent,
  ITableProps,
} from '../types/index'

ProTable.install = (app: App, options?: InstallOptions) => {
  if (options) {
    const _before = app.config.globalProperties.$PROOPTIONS as InstallOptions
    const _options = _before
      ? objectDeepMerge<InstallOptions>(_before, options)
      : options
    app.config.globalProperties.$PROOPTIONS = _options
  }

  app.component(ProTable.name, ProTable)
}

export default ProTable as IDefineComponent<ITableProps>
