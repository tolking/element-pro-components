import type { App } from 'vue'
import ProInputTag from './InputTag.vue'

ProInputTag.install = (app: App) => {
  app.component(ProInputTag.name || 'ProInputTag', ProInputTag)
}

export default ProInputTag
