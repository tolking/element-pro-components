import { withInstall } from '../utils/index'
import InputTag from './InputTag'
import props from './props'
import emits from './emits'
import type { IDefineProps, IDefineEmits } from '../types/index'

export * from './useInputTag'
export const ProInputTag = withInstall(InputTag)
export type IInputTagProps = IDefineProps<typeof props>
export type IInputTagEmits = IDefineEmits<typeof emits>
