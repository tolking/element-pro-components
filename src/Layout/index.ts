import ProLayout from './Layout'
import props from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

const _ProLayout: IDefinePlugin<typeof ProLayout> = ProLayout as IDefinePlugin<
  typeof ProLayout
>

_ProLayout.install = (app) => {
  app.component(_ProLayout.name, _ProLayout)
}

export default _ProLayout
export type ILayoutProps = IDefineProps<typeof props>
