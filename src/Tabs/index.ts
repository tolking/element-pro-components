export * from './type'
import ProTabs from './Tabs'
import props from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

const _ProTabs: IDefinePlugin<typeof ProTabs> = ProTabs as IDefinePlugin<
  typeof ProTabs
>

_ProTabs.install = (app) => {
  app.component(_ProTabs.name, _ProTabs)
}

export default _ProTabs
export type ITabsProps = IDefineProps<typeof props>
