import './styles/index.css'
import type { App, ComponentOptions } from 'vue'
export * from './composables/index'

// import Breadcrumb from './Breadcrumb'
// import ImgCropper from './ImgCropper'
// import InputTag from './InputTag'
import ProLayout from './ProLayout/index'
import ProMenu from './ProMenu/index'
// import Svg from './Svg'
// import Tabs from './Tabs'

const version = process.env.VERSION || '0.0.0'

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
  version,
  install,
}

export default {
  version,
  install,
}
