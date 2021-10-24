import ProTreeSelect from './TreeSelect'
import props from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

const _ProTreeSelect: IDefinePlugin<
  typeof ProTreeSelect
> = ProTreeSelect as IDefinePlugin<typeof ProTreeSelect>

_ProTreeSelect.install = (app) => {
  app.component(_ProTreeSelect.name, _ProTreeSelect)
}

export default _ProTreeSelect
export type ITreeSelectProps = IDefineProps<typeof props>
