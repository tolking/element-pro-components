import type { App } from 'vue'
import ProCheckbox from './Checkbox.vue'
import type { IDefineComponent, ICheckboxProps } from '../types/index'

ProCheckbox.install = (app: App) => {
  app.component(ProCheckbox.name, ProCheckbox)
}

export default ProCheckbox as IDefineComponent<ICheckboxProps>
