import ProColumnSetting from './ColumnSetting'
import props from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

const _ProColumnSetting: IDefinePlugin<
  typeof ProColumnSetting
> = ProColumnSetting as IDefinePlugin<typeof ProColumnSetting>

_ProColumnSetting.install = (app) => {
  app.component(_ProColumnSetting.name, _ProColumnSetting)
}

export default _ProColumnSetting
export type IColumnSettingProps = IDefineProps<typeof props>
