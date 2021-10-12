import ProBreadcrumb from './Breadcrumb'
import props from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

const _ProBreadcrumb: IDefinePlugin<
  typeof ProBreadcrumb
> = ProBreadcrumb as IDefinePlugin<typeof ProBreadcrumb>

_ProBreadcrumb.install = (app) => {
  app.component(_ProBreadcrumb.name, _ProBreadcrumb)
}

export default _ProBreadcrumb
export type IBreadcrumbProps = IDefineProps<typeof props>
