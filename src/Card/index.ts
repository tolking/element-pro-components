import { withInstall } from '../utils/index'
import Card from './Card'
import props from './props'
import type { IDefineProps } from '../types/index'

export const ProCard = withInstall(Card)
export type ICardProps = IDefineProps<typeof props>
