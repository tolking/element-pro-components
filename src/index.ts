export * from './composables/index'
export * from './utils/index'
import './styles/index.css'
import type { App, ComponentOptions } from 'vue'

import ProBreadcrumb from './Breadcrumb/index'
import ProInputTag from './InputTag/index'
import ProLayout from './Layout/index'
import ProMenu from './Menu/index'
import ProTabs from './Tabs/index'

const version = process.env.VERSION || '0.0.0'

const components: Record<string, ComponentOptions> = {
  ProBreadcrumb,
  ProInputTag,
  ProLayout,
  ProMenu,
  ProTabs,
}

const install = (app: App) => {
  for (const key in components) {
    const item = components[key]
    app.component(item.name || key, item)
  }
}

export {
  ProBreadcrumb,
  ProInputTag,
  ProLayout,
  ProMenu,
  ProTabs,
  version,
  install,
}

export default {
  version,
  install,
}
