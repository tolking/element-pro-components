import ProAutocompleteTag from './AutocompleteTag'
import props from './props'
import type { IDefinePlugin, IDefineProps } from '../types/index'

const _ProAutocompleteTag: IDefinePlugin<
  typeof ProAutocompleteTag
> = ProAutocompleteTag as IDefinePlugin<typeof ProAutocompleteTag>

_ProAutocompleteTag.install = (app) => {
  app.component(_ProAutocompleteTag.name, _ProAutocompleteTag)
}

export default _ProAutocompleteTag
export type IAutocompleteTagProps = IDefineProps<typeof props>
