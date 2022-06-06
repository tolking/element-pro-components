import { withInstall } from '../utils/index'
import Checkbox from './Checkbox'
import { checkboxProps, checkboxEmits } from './props'
import type { IDefineProps, IDefineEmits } from '../types/index'

export { checkboxProps, checkboxEmits } from './props'
export const ProCheckbox = withInstall(Checkbox)
export type ICheckboxProps = IDefineProps<typeof checkboxProps>
export type ICheckboxEmits = IDefineEmits<typeof checkboxEmits>
