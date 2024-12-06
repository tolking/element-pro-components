import { withInstall } from '../utils/index'
import RadioButton from './RadioButton'
import type { IRadioProps, IRadioEmits } from '../Radio/index'
import type { IDefinePlugin } from '../types/index'

export {
  radioProps as radioButtonProps,
  radioEmits as radioButtonEmits,
} from '../Radio/props'
export const ProRadioButton: IDefinePlugin<typeof RadioButton> =
  withInstall(RadioButton)
export type IRadioButtonProps = IRadioProps
export type IRadioButtonEmits = IRadioEmits
