import { withInstall } from '../utils/index'
import TreeSelect from './TreeSelect'
import { treeSelectProps, treeSelectEmits } from './props'
import type { IDefineProps, IDefineEmits } from '../types/index'

export { treeSelectProps, treeSelectEmits } from './props'
export const ProTreeSelect = withInstall(TreeSelect)
export type ITreeSelectProps = IDefineProps<typeof treeSelectProps>
export type ITreeSelectEmits = IDefineEmits<typeof treeSelectEmits>
