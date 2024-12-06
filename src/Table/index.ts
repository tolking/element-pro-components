import { withInstall } from '../utils/index'
import Table from './Table'
import type { IDefinePlugin } from '../types/index'

export * from './useTable'
export * from './type'
export { tableProps, tableEmits } from './props'
export const ProTable: IDefinePlugin<typeof Table> = withInstall(Table)
