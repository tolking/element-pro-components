import ProRadioButton from './RadioButton'
import type { IDefinePlugin } from '../types/index'
import type { IRadioProps } from '../Radio/index'

const _ProRadioButton: IDefinePlugin<
  typeof ProRadioButton
> = ProRadioButton as IDefinePlugin<typeof ProRadioButton>

_ProRadioButton.install = (app) => {
  app.component(_ProRadioButton.name, _ProRadioButton)
}

export default _ProRadioButton
export type IRadioButtonProps = IRadioProps
