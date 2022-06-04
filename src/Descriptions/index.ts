import { withInstall } from '../utils/index'
import Descriptions from './Descriptions'

export * from './type'
export { descriptionsProps } from './props'
export const ProDescriptions = withInstall(Descriptions)
