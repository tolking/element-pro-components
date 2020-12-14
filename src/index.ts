export * from './composables/index'
import './styles/index.css'
import type { App, ComponentOptions } from 'vue'

// import Breadcrumb from './Breadcrumb'
// import ImgCropper from './ImgCropper'
// import InputTag from './InputTag'
import ProLayout from './ProLayout/index'
import ProMenu from './ProMenu/index'
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

if (typeof window !== undefined && window.Vue) {
  install(window.Vue)
}

export {
  ProLayout,
  ProMenu,
}

export default {
  version: '0.0.0',
  install,
}
