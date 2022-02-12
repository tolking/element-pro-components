import { withInstall, modelValueEmit } from '../utils/index'
import Radio from './Radio'
import props from './props'
import type { IDefineProps, IDefineEmits } from '../types/index'

export const ProRadio = withInstall(Radio)
export type IRadioProps = IDefineProps<typeof props>
export type IRadioEmits = IDefineEmits<typeof modelValueEmit>
