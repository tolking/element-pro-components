import type { App } from 'vue'
import ProInputTag from './InputTag.vue'
import type { IDefineComponent, IInputTagProps } from '../types/index'

ProInputTag.install = (app: App) => {
  app.component(ProInputTag.name || 'ProInputTag', ProInputTag)
}

export default ProInputTag as IDefineComponent<IInputTagProps>
