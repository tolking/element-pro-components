export * from './composables/public'
export * from './utils/index'
import './styles/index.css'
import type { App, ComponentOptions } from 'vue'
import { config, InstallOptions } from './config'

import ProBreadcrumb from './Breadcrumb/index'
import ProForm from './Form/index'
import ProInputTag from './InputTag/index'
import ProLayout from './Layout/index'
import ProMenu from './Menu/index'
import ProTable from './Table/index'
import ProTabs from './Tabs/index'

const version = process.env.VERSION || '0.0.0'

const components: Record<string, ComponentOptions> = {
  ProBreadcrumb,
  ProForm,
  ProInputTag,
  ProLayout,
  ProMenu,
  ProTable,
  ProTabs,
}

const install = (app: App, options?: InstallOptions): void => {
  const _options = Object.assign({}, config, options)

  app.provide('ProOptions', _options)

  for (const key in components) {
    const item = components[key]
    app.component(item.name || key, item)
  }
}

export {
  ProBreadcrumb,
  ProForm,
  ProInputTag,
  ProLayout,
  ProMenu,
  ProTable,
  ProTabs,
  version,
  install,
}

export default {
  version,
  install,
}
