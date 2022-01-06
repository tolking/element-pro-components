import { withInstall } from '../utils/index'
import Select from './Select'
import props from './props'
import type { IDefineProps } from '../types/index'

export const ProSelect = withInstall(Select)
export type ISelectProps = IDefineProps<typeof props>
