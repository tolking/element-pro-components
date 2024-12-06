import { withInstall } from '../utils/index'
import Menu from './Menu'
import { menuProps } from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

export { menuProps } from './props'
export const ProMenu: IDefinePlugin<typeof Menu> = withInstall(Menu)
export type IMenuProps = IDefineProps<typeof menuProps>
