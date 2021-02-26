import type { App } from 'vue'
import { config } from '../utils/config'
import ProCrud from './Crud.vue'
import type { InstallOptions, IDefineComponent } from '../types/index'

ProCrud.install = (app: App, options?: InstallOptions) => {
  const _options = Object.assign({}, config, options)

  app.provide('ProTableOptions', _options)

  app.component(ProCrud.name || 'ProCrud', ProCrud)
}

export default ProCrud as IDefineComponent
