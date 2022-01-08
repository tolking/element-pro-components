import { withInstall } from '../utils/index'
import Radio from './Radio'
import props from './props'
import type { IDefineProps } from '../types/index'

export const ProRadio = withInstall(Radio)
export type IRadioProps = IDefineProps<typeof props>
