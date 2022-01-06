import { withInstall } from '../utils/index'
import TreeSelect from './TreeSelect'
import props from './props'
import type { IDefineProps } from '../types/index'

export const ProTreeSelect = withInstall(TreeSelect)
export type ITreeSelectProps = IDefineProps<typeof props>
