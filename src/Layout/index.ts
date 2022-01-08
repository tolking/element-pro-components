import { withInstall } from '../utils/index'
import Layout from './Layout'
import props from './props'
import type { IDefineProps } from '../types/index'

export const ProLayout = withInstall(Layout)
export type ILayoutProps = IDefineProps<typeof props>
