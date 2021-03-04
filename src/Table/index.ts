import type { App } from 'vue'
import { objectDeepMerge } from '../utils/index'
import { config } from '../utils/config'
import ProTable from './Table.vue'
import type {
  InstallOptions,
  IDefineComponent,
  ITableProps,
} from '../types/index'

ProTable.install = (app: App, options?: InstallOptions) => {
  const _options = options
    ? objectDeepMerge<Required<InstallOptions>>(config, options)
    : config

  app.config.globalProperties.$PROOPTIONS = _options

  app.component(ProTable.name || 'ProTable', ProTable)
}

export default ProTable as IDefineComponent<ITableProps>
