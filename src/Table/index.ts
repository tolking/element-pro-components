import { withInstall } from '../utils/index'
import Table from './Table'

export * from './useTable'
export * from './type'
export { tableProps } from './props'
export const ProTable = withInstall(Table)
