import { withInstall } from '../utils/index'
import Checkbox from './Checkbox'
import props from './props'
import type { IDefineProps } from '../types/index'

export const ProCheckbox = withInstall(Checkbox)
export type ICheckboxProps = IDefineProps<typeof props>
