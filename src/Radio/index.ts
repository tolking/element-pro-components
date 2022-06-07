import { withInstall } from '../utils/index'
import Radio from './Radio'
import { radioProps, radioEmits } from './props'
import type { IDefineProps, IDefineEmits } from '../types/index'

export { radioProps, radioEmits } from './props'
export const ProRadio = withInstall(Radio)
export type IRadioProps = IDefineProps<typeof radioProps>
export type IRadioEmits = IDefineEmits<typeof radioEmits>
