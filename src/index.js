import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'
import ImgCropper from './ImgCropper'
import InputTag from './InputTag'
import Layout from './Layout'
import Link from './Link'

const components = [Aside, Footer, Header, ImgCropper, InputTag, Layout, Link]

const install = function(Vue) {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

export default {
  version: '1.0.0',
  install,
  ...components
}
