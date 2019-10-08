import Breadcrumb from './Breadcrumb'
import ImgCropper from './ImgCropper'
import InputTag from './InputTag'
import Layout from './Layout'
import Link from './Link'
import Menu from './Menu'
import Svg from './Svg'
import Tabs from './Tabs'

const components = [Breadcrumb, ImgCropper, InputTag, Layout, Menu, Svg, Tabs]

const install = function(Vue, options = {}) {
  Vue.use(Link, { linkClick: options.linkClick })

  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

export default {
  version: '1.0.0',
  install,
  Link,
  ...components
}
