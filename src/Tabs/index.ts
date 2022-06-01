import { withInstall } from '../utils/index'
import Tabs from './Tabs'
import props from './props'
import type { IDefineProps } from '../types/index'

export * from './useTabs'
export * from './type'
export const ProTabs = withInstall(Tabs)
export type ITabsProps = IDefineProps<typeof props>
