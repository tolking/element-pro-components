import ElementUI, { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElementPro from 'element-pro-components/src'
import ProCode from './components/ProCode'
import './public/icons'

export default ({ Vue }) => {
  Vue.use(ElementUI)
  Vue.use(ElementPro, {
    linkClick: to => {
      Message({
        message: 'link to ' + to,
        type: 'success'
      })
      return to === '/'
    }
  })
  Vue.component(ProCode.name, ProCode)
}
