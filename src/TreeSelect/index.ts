import { withInstall } from '../utils/index'
import TreeSelect from './TreeSelect'
import props from './props'
import emits from './emits'
import type { IDefineProps, IDefineEmits } from '../types/index'

export const ProTreeSelect = withInstall(TreeSelect)
export type ITreeSelectProps = IDefineProps<typeof props>
export type ITreeSelectEmits = IDefineEmits<typeof emits>
