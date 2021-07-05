import type { App } from 'vue'
import ProCheckboxButton from './CheckboxButton.vue'
import type { IDefineComponent, ICheckboxButtonProps } from '../types/index'

ProCheckboxButton.install = (app: App) => {
  app.component(ProCheckboxButton.name, ProCheckboxButton)
}

export default ProCheckboxButton as IDefineComponent<ICheckboxButtonProps>
