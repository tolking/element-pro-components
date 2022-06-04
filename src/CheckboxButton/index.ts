import { withInstall } from '../utils/index'
import CheckboxButton from './CheckboxButton'
import type { ICheckboxProps, ICheckboxEmits } from '../Checkbox/index'

export { checkboxProps as checkboxButtonProps } from '../Checkbox/props'
export const ProCheckboxButton = withInstall(CheckboxButton)
export type ICheckboxButtonProps = ICheckboxProps
export type ICheckboxButtonEmits = ICheckboxEmits
