export * from './components'
export * from './composables/index'
export * from './utils/index'
export * from './types/index'
import * as components from './components'
import type { App, Plugin } from 'vue'
import type { InstallOptions } from './types/index'

const install = (app: App, options?: InstallOptions): void => {
  options && (app.config.globalProperties.$PROOPTIONS = options)
  const _components = components as Record<string, Plugin>
  for (const key in _components) {
    const item = _components[key]
    app.use(item)
  }
}

export default install
