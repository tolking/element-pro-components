import { withInstall } from '../utils/index'
import Breadcrumb from './Breadcrumb'
import type { BreadcrumbProps } from 'element-plus'
import type { IDefinePlugin } from '../types/index'

export const ProBreadcrumb: IDefinePlugin<typeof Breadcrumb> =
  withInstall(Breadcrumb)
export type IBreadcrumbProps = BreadcrumbProps
