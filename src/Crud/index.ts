import { withInstall } from '../utils/index'
import Crud from './Crud'

export * from './useCrud'
export * from './type'
export { crudProps } from './props'
export const ProCrud = withInstall(Crud)
