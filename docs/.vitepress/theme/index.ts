import type { App } from 'vue'
import DefaultTheme from 'vitepress/dist/client/theme-default/index'
import ProCode from './ProCode.vue'
import { ElButton, ElInput, ElUpload } from 'element-plus'
import ElementPro from '/@src/index'
import 'element-plus/lib/theme-chalk/index.css'
import './index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app
      .use(ElementPro)
      .component(ElButton.name, ElButton)
      .component(ElInput.name, ElInput)
      .component(ElUpload.name, ElUpload)
      .component('ProCode', ProCode)
  },
}
