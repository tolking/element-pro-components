import { withInstall, modelValueEmit } from '../utils/index'
import AutocompleteTag from './AutocompleteTag'
import props from './props'
import type { IDefineProps, IDefineEmits } from '../types/index'

export const ProAutocompleteTag = withInstall(AutocompleteTag)
export type IAutocompleteTagProps = IDefineProps<typeof props>
export type IAutocompleteTagEmits = IDefineEmits<typeof modelValueEmit>
