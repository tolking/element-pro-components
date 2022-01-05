import ProForm from './Form'
import props from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

const _ProForm: IDefinePlugin<typeof ProForm> = ProForm as IDefinePlugin<
  typeof ProForm
>

_ProForm.install = (app) => {
  app.component(_ProForm.name, _ProForm)
}

export default _ProForm
export type IFormProps = IDefineProps<typeof props>
