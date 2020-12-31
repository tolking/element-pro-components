import DefaultTheme from 'vitepress/dist/client/theme-default/index'
import ProCode from './ProCode.vue'
import ElementPro from '/element-pro/index'
import 'element-plus/lib/theme-chalk/index.css'
import '/element-pro/styles/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPro)
    app.component('ProCode', ProCode)
  },
}
