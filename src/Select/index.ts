import { withInstall, modelValueEmit } from '../utils/index'
import Select from './Select'
import props from './props'
import type { IDefineProps, IDefineEmits } from '../types/index'

export const ProSelect = withInstall(Select)
export type ISelectProps = IDefineProps<typeof props>
export type ISelectEmits = IDefineEmits<typeof modelValueEmit>
