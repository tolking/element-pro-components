import { withInstall } from '../utils/index'
import Link from './Link'
import { linkProps } from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

export { linkProps } from './props'
export const ProLink: IDefinePlugin<typeof Link> = withInstall(Link)
export type ILinkProps = IDefineProps<typeof linkProps>
