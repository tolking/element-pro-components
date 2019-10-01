import ElementUI, { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElementPro from '../../src'
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
}
