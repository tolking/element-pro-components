import type { App } from 'vue'
import ProSelect from './Select.vue'
import type { IDefineComponent, ISelectProps } from '../types/index'

ProSelect.install = (app: App) => {
  app.component(ProSelect.name, ProSelect)
}

export default ProSelect as IDefineComponent<ISelectProps>
