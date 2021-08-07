import type { App } from 'vue'
import ProLink from './Link.vue'
import type { IDefineComponent, ILinkProps } from '../types/index'

ProLink.install = (app: App) => {
  app.component(ProLink.name, ProLink)
}

export default ProLink as IDefineComponent<ILinkProps>
