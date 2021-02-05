import type { App } from 'vue'
import DefaultTheme from 'vitepress/dist/client/theme-default/index'
import ProCode from './ProCode.vue'
import { ElButton, ElInput, ElUpload } from 'element-plus'
import {
  ProAutocompleteTag,
  ProCheckbox,
  ProCheckboxButton,
  ProForm,
  ProInputTag,
  ProRadio,
  ProRadioButton,
  ProSelect,
  ProTable,
} from '/@src/index'
import 'element-plus/lib/theme-chalk/index.css'
import './index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app
      .component('ProCode', ProCode)
      .use(ElButton)
      .use(ElInput)
      .use(ElUpload)
      .use(ProAutocompleteTag)
      .use(ProCheckbox)
      .use(ProCheckboxButton)
      .use(ProForm)
      .use(ProInputTag)
      .use(ProRadio)
      .use(ProRadioButton)
      .use(ProSelect)
      .use(ProTable)
  },
}
