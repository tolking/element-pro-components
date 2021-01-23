import type { App } from 'vue'
import ProAutocompleteTag from './AutocompleteTag.vue'
import { ProDefineComponent } from '../types/index'

ProAutocompleteTag.install = (app: App) => {
  app.component(
    ProAutocompleteTag.name || 'ProAutocompleteTag',
    ProAutocompleteTag
  )
}

export default ProAutocompleteTag as ProDefineComponent<{
  modelValue?: string[]
  trigger?: 'space' | 'enter'
  size?: 'medium' | 'small' | 'mini'
  type?: 'success' | 'info' | 'warning' | 'danger'
  hit?: boolean
  color?: string
  effect?: 'light' | 'dark' | 'plain'
}>
