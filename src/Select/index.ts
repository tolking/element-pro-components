import { withInstall } from '../utils/index'
import Select from './Select'

export * from './type'
export { selectProps, selectEmits } from './props'
export const ProSelect = withInstall(Select)
