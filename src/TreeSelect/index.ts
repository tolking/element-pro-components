import type { App } from 'vue'
import ProTreeSelect from './TreeSelect.vue'
import type { IDefineComponent } from '../types/index'

ProTreeSelect.install = (app: App) => {
  app.component(ProTreeSelect.name || 'ProTreeSelect', ProTreeSelect)
}

export default ProTreeSelect as IDefineComponent
