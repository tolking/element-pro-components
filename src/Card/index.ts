import { withInstall } from '../utils/index'
import Card from './Card'
import { cardProps } from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

export { cardProps } from './props'
export const ProCard: IDefinePlugin<typeof Card> = withInstall(Card)
export type ICardProps = IDefineProps<typeof cardProps>
