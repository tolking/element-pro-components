import ElementUI, { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElementPro from 'element-pro-components/src'
import ProCode from './components/ProCode'
import './public/icons'

export default ({ Vue }) => {
  Vue.use(ElementUI)
  Vue.use(ElementPro, {
    linkClick: to => {
      const link = typeof to === 'object' ? to.redirect || to.path : to
      Message({
        message: 'link to ' + link,
        type: 'success'
      })
      return link === '/' || link === '/index'
    }
  })
  Vue.component(ProCode.name, ProCode)
}
