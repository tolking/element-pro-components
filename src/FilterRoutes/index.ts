import { withInstall } from '../utils/index'
import FilterRoutes from './FilterRoutes'
import { filterRoutesProps } from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

export { filterRoutesProps } from './props'
export const ProFilterRoutes: IDefinePlugin<typeof FilterRoutes> =
  withInstall(FilterRoutes)
export type IFilterRoutesProps = IDefineProps<typeof filterRoutesProps>
