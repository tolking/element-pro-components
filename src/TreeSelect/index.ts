import { withInstall } from '../utils/index'
import TreeSelect from './TreeSelect'
import { treeSelectProps, treeSelectEmits } from './props'
import type { IDefineProps, IDefineEmits, IDefinePlugin } from '../types/index'

export { treeSelectProps, treeSelectEmits } from './props'
export const ProTreeSelect: IDefinePlugin<typeof TreeSelect> =
  withInstall(TreeSelect)
export type ITreeSelectProps = IDefineProps<typeof treeSelectProps>
export type ITreeSelectEmits = IDefineEmits<typeof treeSelectEmits>
