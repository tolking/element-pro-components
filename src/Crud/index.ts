import { withInstall } from '../utils/index'
import Crud from './Crud'
import props from './props'
import type { IDefineProps } from '../types/index'

export const ProCrud = withInstall(Crud)
export type ICrudProps = IDefineProps<typeof props>
