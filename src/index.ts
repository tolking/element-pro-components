export * from './composables/index'
export * from './utils/index'
import type { App, ComponentOptions } from 'vue'
// import Breadcrumb from './Breadcrumb'
// import ImgCropper from './ImgCropper'
// import InputTag from './InputTag'
import ProLayout from './ProLayout'
import ProMenu from './ProMenu'
// import Svg from './Svg'
// import Tabs from './Tabs'

const components: Record<string, ComponentOptions> = {
  ProLayout,
  ProMenu,
}

const install = (app: App) => {
  for (const key in components) {
    const item = components[key]
    app.component(item.name || key, item)
  }
}

export {
  ProLayout,
  ProMenu,
}

export default {
  version: '0.0.0',
  install,
}
