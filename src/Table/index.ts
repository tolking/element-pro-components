import ProTable from './Table'
import props from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

const _ProTable: IDefinePlugin<typeof ProTable> = ProTable as IDefinePlugin<
  typeof ProTable
>

_ProTable.install = (app) => {
  app.component(_ProTable.name, _ProTable)
}

export default _ProTable
export type ITableProps = IDefineProps<typeof props>
