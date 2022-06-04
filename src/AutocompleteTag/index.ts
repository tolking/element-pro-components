import { withInstall } from '../utils/index'
import AutocompleteTag from './AutocompleteTag'
import { autocompleteTagProps } from './props'
import type { IDefineProps } from '../types/index'
import type { IInputTagEmits } from '../InputTag/index'

export { autocompleteTagProps } from './props'
export const ProAutocompleteTag = withInstall(AutocompleteTag)
export type IAutocompleteTagProps = IDefineProps<typeof autocompleteTagProps>
export type IAutocompleteTagEmits = IInputTagEmits
