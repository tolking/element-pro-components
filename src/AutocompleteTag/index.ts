import { withInstall } from '../utils/index'
import AutocompleteTag from './AutocompleteTag'
import props from './props'
import type { IDefineProps } from '../types/index'
import type { IInputTagEmits } from '../InputTag/index'

export const ProAutocompleteTag = withInstall(AutocompleteTag)
export type IAutocompleteTagProps = IDefineProps<typeof props>
export type IAutocompleteTagEmits = IInputTagEmits
