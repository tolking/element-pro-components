import { withInstall } from '../utils/index'
import Layout from './Layout'
import { layoutProps } from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

export { layoutProps } from './props'
export const ProLayout: IDefinePlugin<typeof Layout> = withInstall(Layout)
export type ILayoutProps = IDefineProps<typeof layoutProps>
