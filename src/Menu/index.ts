import { withInstall } from '../utils/index'
import Menu from './Menu'
import props from './props'
import type { IDefineProps } from '../types/index'

export const ProMenu = withInstall(Menu)
export type IMenuProps = IDefineProps<typeof props>
