import { withInstall } from '../utils/index'
import InputTag from './InputTag'
import { inputTagProps } from './props'
import emits from './emits'
import type { IDefineProps, IDefineEmits } from '../types/index'

export * from './useInputTag'
export { inputTagProps } from './props'
export const ProInputTag = withInstall(InputTag)
export type IInputTagProps = IDefineProps<typeof inputTagProps>
export type IInputTagEmits = IDefineEmits<typeof emits>
