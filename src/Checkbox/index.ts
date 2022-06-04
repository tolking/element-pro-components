import { withInstall, modelValueEmit } from '../utils/index'
import Checkbox from './Checkbox'
import { checkboxProps } from './props'
import type { IDefineProps, IDefineEmits } from '../types/index'

export { checkboxProps } from './props'
export const ProCheckbox = withInstall(Checkbox)
export type ICheckboxProps = IDefineProps<typeof checkboxProps>
export type ICheckboxEmits = IDefineEmits<typeof modelValueEmit>
