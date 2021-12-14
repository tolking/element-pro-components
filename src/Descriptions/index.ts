import ProDescriptions from './Descriptions'
import props from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

const _ProDescriptions: IDefinePlugin<
  typeof ProDescriptions
> = ProDescriptions as IDefinePlugin<typeof ProDescriptions>

_ProDescriptions.install = (app) => {
  app.component(_ProDescriptions.name, _ProDescriptions)
}

export default _ProDescriptions
export type IDescriptionsProps = IDefineProps<typeof props>
