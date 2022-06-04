import { withInstall } from '../utils/index'
import Menu from './Menu'
import { menuProps } from './props'
import type { IDefineProps } from '../types/index'

export { menuProps } from './props'
export const ProMenu = withInstall(Menu)
export type IMenuProps = IDefineProps<typeof menuProps>
