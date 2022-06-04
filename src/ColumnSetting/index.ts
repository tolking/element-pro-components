import { withInstall, modelValueEmit } from '../utils/index'
import ColumnSetting from './ColumnSetting'
import { columnSettingProps } from './props'
import type { IDefineProps, IDefineEmits } from '../types/index'

export { columnSettingProps } from './props'
export const ProColumnSetting = withInstall(ColumnSetting)
export type IColumnSettingProps = IDefineProps<typeof columnSettingProps>
export type IColumnSettingEmits = IDefineEmits<typeof modelValueEmit>
