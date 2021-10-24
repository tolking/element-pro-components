import ProCheckbox from './Checkbox'
import props from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

const _ProCheckbox: IDefinePlugin<
  typeof ProCheckbox
> = ProCheckbox as IDefinePlugin<typeof ProCheckbox>

_ProCheckbox.install = (app) => {
  app.component(_ProCheckbox.name, _ProCheckbox)
}

export default _ProCheckbox
export type ICheckboxProps = IDefineProps<typeof props>
