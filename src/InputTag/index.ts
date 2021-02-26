import type { App } from 'vue'
import ProInputTag from './InputTag.vue'
import type { IDefineComponent } from '../types/index'

ProInputTag.install = (app: App) => {
  app.component(ProInputTag.name || 'ProInputTag', ProInputTag)
}

export default ProInputTag as IDefineComponent<{
  modelValue?: string[]
  trigger?: 'space' | 'enter'
  size?: 'medium' | 'small' | 'mini'
  type?: 'success' | 'info' | 'warning' | 'danger'
  hit?: boolean
  color?: string
  effect?: 'light' | 'dark' | 'plain'
}>
