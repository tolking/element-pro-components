import { withInstall } from '../utils/index'
import Search from './Search'
import type { IDefinePlugin } from '../types/index'

export * from './useSearch'
export * from './type'
export { searchProps, searchEmits } from './props'
export const ProSearch: IDefinePlugin<typeof Search> = withInstall(Search)
