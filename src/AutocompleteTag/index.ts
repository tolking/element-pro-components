import ProAutocompleteTag from './AutocompleteTag'
import type { IDefinePlugin } from '../types/index'
import type { IInputTagProps } from '../InputTag/index'

const _ProAutocompleteTag: IDefinePlugin<
  typeof ProAutocompleteTag
> = ProAutocompleteTag as IDefinePlugin<typeof ProAutocompleteTag>

_ProAutocompleteTag.install = (app) => {
  app.component(_ProAutocompleteTag.name, _ProAutocompleteTag)
}

export default _ProAutocompleteTag
export type IAutocompleteTagProps = IInputTagProps
