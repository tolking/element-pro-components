import ProRadio from './Radio'
import props from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

const _ProRadio: IDefinePlugin<typeof ProRadio> = ProRadio as IDefinePlugin<
  typeof ProRadio
>

_ProRadio.install = (app) => {
  app.component(_ProRadio.name, _ProRadio)
}

export default _ProRadio
export type IRadioProps = IDefineProps<typeof props>
