import ProInputTag from './InputTag'
import props from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

const _ProInputTag: IDefinePlugin<
  typeof ProInputTag
> = ProInputTag as IDefinePlugin<typeof ProInputTag>

_ProInputTag.install = (app) => {
  app.component(_ProInputTag.name, _ProInputTag)
}

export default _ProInputTag
export type IInputTagProps = IDefineProps<typeof props>
