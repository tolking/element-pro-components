import { withInstall } from '../utils/index'
import Table from './Table'
import props from './props'
import type { IDefineProps } from '../types/index'

export const ProTable = withInstall(Table)
export type ITableProps = IDefineProps<typeof props>
