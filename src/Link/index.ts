import { withInstall } from '../utils/index'
import Link from './Link'
import props from './props'
import type { IDefineProps } from '../types/index'

export * from './useLink'
export const ProLink = withInstall(Link)
export type ILinkProps = IDefineProps<typeof props>
