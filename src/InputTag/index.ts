import { withInstall } from '../utils/index'
import InputTag from './InputTag'
import { inputTagProps, inputTagEmits } from './props'
import type { IDefineProps, IDefineEmits } from '../types/index'

export * from './useInputTag'
export { inputTagProps, inputTagEmits } from './props'
export const ProInputTag = withInstall(InputTag)
export type IInputTagProps = IDefineProps<typeof inputTagProps>
export type IInputTagEmits = IDefineEmits<typeof inputTagEmits>
