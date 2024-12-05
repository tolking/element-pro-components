import { withInstall } from '../utils/index'
import Search from './Search'

export * from './useSearch'
export * from './type'
export { searchProps, searchEmits } from './props'
export const ProSearch = withInstall(Search)
