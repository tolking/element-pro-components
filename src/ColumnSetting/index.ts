import { withInstall } from '../utils/index'
import ColumnSetting from './ColumnSetting'
import props from './props'
import type { IDefineProps } from '../types/index'

export const ProColumnSetting = withInstall(ColumnSetting)
export type IColumnSettingProps = IDefineProps<typeof props>
