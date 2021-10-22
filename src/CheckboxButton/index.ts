import ProCheckboxButton from './CheckboxButton'
import type { IDefinePlugin } from '../types/index'
import type { ICheckboxProps } from '../Checkbox/index'

const _ProCheckboxButton: IDefinePlugin<
  typeof ProCheckboxButton
> = ProCheckboxButton as IDefinePlugin<typeof ProCheckboxButton>

_ProCheckboxButton.install = (app) => {
  app.component(_ProCheckboxButton.name, _ProCheckboxButton)
}

export default _ProCheckboxButton
export type ICheckboxButtonProps = ICheckboxProps
