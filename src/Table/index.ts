import { withInstall } from '../utils/index'
import Table from './Table'
import props from './props'
import emits from './emits'
import type { IDefineProps, IDefineEmits } from '../types/index'

export * from './useTable'
export * from './type'
export const ProTable = withInstall(Table)
export type ITableProps = IDefineProps<typeof props>
export type ITableEmits = IDefineEmits<typeof emits>
