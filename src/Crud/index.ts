import ProCrud from './Crud'
import props from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

const _ProCrud: IDefinePlugin<typeof ProCrud> = ProCrud as IDefinePlugin<
  typeof ProCrud
>

_ProCrud.install = (app) => {
  app.component(_ProCrud.name, _ProCrud)
}

export default _ProCrud
export type ICrudProps = IDefineProps<typeof props>
