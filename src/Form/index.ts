import { withInstall } from '../utils/index'
import Form from './Form'
import props from './props'
import type { IDefineProps } from '../types/index'

export const ProForm = withInstall(Form)
export type IFormProps = IDefineProps<typeof props>
