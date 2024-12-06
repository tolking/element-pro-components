import { withInstall } from '../utils/index'
import ColumnSetting from './ColumnSetting'
import { columnSettingProps, columnSettingEmits } from './props'
import type { IDefineProps, IDefineEmits, IDefinePlugin } from '../types/index'

export { columnSettingProps, columnSettingEmits } from './props'
export const ProColumnSetting: IDefinePlugin<typeof ColumnSetting> =
  withInstall(ColumnSetting)
export type IColumnSettingProps = IDefineProps<typeof columnSettingProps>
export type IColumnSettingEmits = IDefineEmits<typeof columnSettingEmits>
