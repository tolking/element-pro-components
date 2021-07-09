import type { App } from 'vue'
import ProTreeSelect from './TreeSelect.vue'
import type { IDefineComponent, ITreeSelectProps } from '../types/index'

ProTreeSelect.install = (app: App) => {
  app.component(ProTreeSelect.name, ProTreeSelect)
}

export default ProTreeSelect as IDefineComponent<ITreeSelectProps>
