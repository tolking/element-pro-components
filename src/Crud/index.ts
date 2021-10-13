export * from './type'
import { objectDeepMerge } from '../utils/index'
import ProCrud from './Crud'
import props from './props'
import type {
  InstallOptions,
  IDefinePlugin,
  IDefineProps,
} from '../types/index'

const _ProCrud: IDefinePlugin<typeof ProCrud> = ProCrud as IDefinePlugin<
  typeof ProCrud
>

_ProCrud.install = (app, options?: InstallOptions) => {
  if (options) {
    const _before = app.config.globalProperties.$PROOPTIONS as InstallOptions
    const _options = _before
      ? objectDeepMerge<InstallOptions>(_before, options)
      : options
    app.config.globalProperties.$PROOPTIONS = _options
  }

  app.component(_ProCrud.name, _ProCrud)
}

export default _ProCrud
export type ICrudProps = IDefineProps<typeof props>
