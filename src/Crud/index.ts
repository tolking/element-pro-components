import { withInstall } from '../utils/index'
import Crud from './Crud'
import props from './props'
import emits from './emits'
import type { IDefineProps, IDefineEmits } from '../types/index'

export * from './useCrud'
export * from './type'
export const ProCrud = withInstall(Crud)
export type ICrudProps = IDefineProps<typeof props>
export type ICrudEmits = IDefineEmits<typeof emits>
