import type { App } from 'vue'
import ProAutocompleteTag from './AutocompleteTag.vue'

ProAutocompleteTag.install = (app: App) => {
  app.component(
    ProAutocompleteTag.name || 'ProAutocompleteTag',
    ProAutocompleteTag
  )
}

export default ProAutocompleteTag
