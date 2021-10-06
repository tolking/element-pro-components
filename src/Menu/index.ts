import ProMenu from './Menu'
import props from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

const _ProMenu: IDefinePlugin<typeof ProMenu> = ProMenu as IDefinePlugin<
  typeof ProMenu
>

_ProMenu.install = (app) => {
  app.component(_ProMenu.name, _ProMenu)
}

export default _ProMenu
export type IMenuProps = IDefineProps<typeof props>
