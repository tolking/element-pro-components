import type { App } from 'vue'
import ProRadioButton from './RadioButton.vue'
import type { IDefineComponent, IRadioButtonProps } from '../types/index'

ProRadioButton.install = (app: App) => {
  app.component(ProRadioButton.name, ProRadioButton)
}

export default ProRadioButton as IDefineComponent<IRadioButtonProps>
