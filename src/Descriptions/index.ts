import { withInstall } from '../utils/index'
import Descriptions from './Descriptions'
import type { IDefinePlugin } from '../types/index'

export * from './type'
export { descriptionsProps } from './props'
export const ProDescriptions: IDefinePlugin<typeof Descriptions> =
  withInstall(Descriptions)
