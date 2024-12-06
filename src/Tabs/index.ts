import { withInstall } from '../utils/index'
import Tabs from './Tabs'
import type { IDefinePlugin } from '../types/index'

export * from './useTabs'
export { tabsProps } from './props'
export * from './type'
export const ProTabs: IDefinePlugin<typeof Tabs> = withInstall(Tabs)
