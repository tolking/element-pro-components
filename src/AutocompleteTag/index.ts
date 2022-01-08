import { withInstall } from '../utils/index'
import AutocompleteTag from './AutocompleteTag'
import props from './props'
import type { IDefineProps } from '../types/index'

export const ProAutocompleteTag = withInstall(AutocompleteTag)
export type IAutocompleteTagProps = IDefineProps<typeof props>
