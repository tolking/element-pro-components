import { withInstall } from '../utils/index'
import FilterRoutes from './FilterRoutes'
import { filterRoutesProps } from './props'
import type { IDefineProps } from '../types/index'

export { filterRoutesProps } from './props'
export const ProFilterRoutes = withInstall(FilterRoutes)
export type IFilterRoutesProps = IDefineProps<typeof filterRoutesProps>
