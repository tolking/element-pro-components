// import Breadcrumb from './Breadcrumb'
// import ImgCropper from './ImgCropper'
// import InputTag from './InputTag'
import ProLayout from './Layout'
// import Menu from './Menu'
// import Svg from './Svg'
// import Tabs from './Tabs'

// const components = [Breadcrumb, ImgCropper, InputTag, Layout, Menu, Svg, Tabs]

const install = function(Vue) {
  // components.forEach(item => {
    Vue.component(ProLayout.name, ProLayout)
  // })
}

export {
  ProLayout,
}

export default {
  version: '0.0.0',
  install,
}
