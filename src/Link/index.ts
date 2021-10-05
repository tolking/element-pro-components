import ProLink from './Link'
import props from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

const _ProLink: IDefinePlugin<typeof ProLink> = ProLink as IDefinePlugin<
  typeof ProLink
>

_ProLink.install = (app) => {
  app.component(_ProLink.name, _ProLink)
}

export default _ProLink
export type ILinkProps = IDefineProps<typeof props>
