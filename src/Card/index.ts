import { withInstall } from '../utils/index'
import Card from './Card'
import { cardProps } from './props'
import type { IDefineProps } from '../types/index'

export { cardProps } from './props'
export const ProCard = withInstall(Card)
export type ICardProps = IDefineProps<typeof cardProps>
