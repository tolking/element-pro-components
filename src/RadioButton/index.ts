import { withInstall } from '../utils/index'
import RadioButton from './RadioButton'
import type { IRadioProps, IRadioEmits } from '../Radio/index'

export const ProRadioButton = withInstall(RadioButton)
export type IRadioButtonProps = IRadioProps
export type IRadioButtonEmits = IRadioEmits
