import { withInstall } from '../utils/index'
import Descriptions from './Descriptions'
import props from './props'
import type { IDefineProps } from '../types/index'

export const ProDescriptions = withInstall(Descriptions)
export type IDescriptionsProps = IDefineProps<typeof props>
