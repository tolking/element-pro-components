import { withInstall } from '../utils/index'
import Form from './Form'
import props from './props'
import emits from './emits'
import type { IDefineProps, IDefineEmits } from '../types/index'

export * from './useForm'
export * from './type'
export const ProForm = withInstall(Form)
export type IFormProps = IDefineProps<typeof props>
export type IFormEmits = IDefineEmits<typeof emits>
