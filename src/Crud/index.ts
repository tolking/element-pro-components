import { withInstall } from '../utils/index'
import Crud from './Crud'
import type { IDefinePlugin } from '../types/index'

export * from './useCrud'
export * from './type'
export { crudProps, crudEmits } from './props'
export const ProCrud: IDefinePlugin<typeof Crud> = withInstall(Crud)
