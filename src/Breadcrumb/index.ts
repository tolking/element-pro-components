import { withInstall } from '../utils/index'
import Breadcrumb from './Breadcrumb'
import props from './props'
import type { IDefineProps } from '../types/index'

export const ProBreadcrumb = withInstall(Breadcrumb)
export type IBreadcrumbProps = IDefineProps<typeof props>
