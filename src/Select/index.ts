import { withInstall } from '../utils/index'
import Select from './Select'
import type { IDefinePlugin } from '../types/index'

export * from './type'
export { selectProps, selectEmits } from './props'
export const ProSelect: IDefinePlugin<typeof Select> = withInstall(Select)
