import { withInstall } from '../utils/index'
import TreeSelect from './TreeSelect'
import { treeSelectProps } from './props'
import emits from './emits'
import type { IDefineProps, IDefineEmits } from '../types/index'

export { treeSelectProps } from './props'
export const ProTreeSelect = withInstall(TreeSelect)
export type ITreeSelectProps = IDefineProps<typeof treeSelectProps>
export type ITreeSelectEmits = IDefineEmits<typeof emits>
