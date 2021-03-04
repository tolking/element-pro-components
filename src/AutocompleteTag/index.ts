import type { App } from 'vue'
import ProAutocompleteTag from './AutocompleteTag.vue'
import type { IDefineComponent, IAutocompleteTagProps } from '../types/index'

ProAutocompleteTag.install = (app: App) => {
  app.component(
    ProAutocompleteTag.name || 'ProAutocompleteTag',
    ProAutocompleteTag
  )
}

export default ProAutocompleteTag as IDefineComponent<IAutocompleteTagProps>
