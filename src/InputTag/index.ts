import { withInstall } from '../utils/index'
import InputTag from './InputTag'
import props from './props'
import type { IDefineProps } from '../types/index'

export const ProInputTag = withInstall(InputTag)
export type IInputTagProps = IDefineProps<typeof props>
