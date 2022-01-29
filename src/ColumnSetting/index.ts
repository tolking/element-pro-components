import { withInstall, modelValueEmit } from '../utils/index'
import ColumnSetting from './ColumnSetting'
import props from './props'
import type { IDefineProps, IDefineEmits } from '../types/index'

export const ProColumnSetting = withInstall(ColumnSetting)
export type IColumnSettingProps = IDefineProps<typeof props>
export type IColumnSettingEmits = IDefineEmits<typeof modelValueEmit>
