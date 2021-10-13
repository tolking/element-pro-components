export * from './type'
import { objectDeepMerge } from '../utils/index'
import ProTable from './Table'
import props from './props'
import type {
  InstallOptions,
  IDefinePlugin,
  IDefineProps,
} from '../types/index'

const _ProTable: IDefinePlugin<typeof ProTable> = ProTable as IDefinePlugin<
  typeof ProTable
>

_ProTable.install = (app, options?: InstallOptions) => {
  if (options) {
    const _before = app.config.globalProperties.$PROOPTIONS as InstallOptions
    const _options = _before
      ? objectDeepMerge<InstallOptions>(_before, options)
      : options
    app.config.globalProperties.$PROOPTIONS = _options
  }

  app.component(_ProTable.name, _ProTable)
}

export default _ProTable
export type ITableProps = IDefineProps<typeof props>
