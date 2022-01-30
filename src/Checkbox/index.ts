import { withInstall, modelValueEmit } from '../utils/index'
import Checkbox from './Checkbox'
import props from './props'
import type { IDefineProps, IDefineEmits } from '../types/index'

export const ProCheckbox = withInstall(Checkbox)
export type ICheckboxProps = IDefineProps<typeof props>
export type ICheckboxEmits = IDefineEmits<typeof modelValueEmit>
