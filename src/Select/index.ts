export * from './type'
import ProSelect from './Select'
import props from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

const _ProSelect: IDefinePlugin<typeof ProSelect> = ProSelect as IDefinePlugin<
  typeof ProSelect
>

_ProSelect.install = (app) => {
  app.component(_ProSelect.name, _ProSelect)
}

export default _ProSelect
export type ISelectProps = IDefineProps<typeof props>
