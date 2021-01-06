import type { App } from 'vue'
import DefaultTheme from 'vitepress/dist/client/theme-default/index'
import ProCode from './ProCode.vue'
import { ElButton, ElInput } from 'element-plus'
import ElementPro from '../../../src/index'
import '../../../node_modules/element-plus/lib/theme-chalk/index.css'
import '../../../src/styles/index.css'
import './index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(ElementPro)
    app.component(ElButton.name, ElButton)
    app.component(ElInput.name, ElInput)
    app.component('ProCode', ProCode)
  },
}
