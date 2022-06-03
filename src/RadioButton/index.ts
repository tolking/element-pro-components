import { withInstall } from '../utils/index'
import RadioButton from './RadioButton'
import type { IRadioProps, IRadioEmits } from '../Radio/index'

export { radioProps as radioButtonProps } from '../Radio/props'
export const ProRadioButton = withInstall(RadioButton)
export type IRadioButtonProps = IRadioProps
export type IRadioButtonEmits = IRadioEmits
