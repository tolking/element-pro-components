import type { App } from 'vue'
import ProRadio from './Radio.vue'
import type { IDefineComponent, IRadioProps } from '../types/index'

ProRadio.install = (app: App) => {
  app.component(ProRadio.name, ProRadio)
}

export default ProRadio as IDefineComponent<IRadioProps>
