import { App, createApp as _createApp, createSSRApp } from 'vue'
import { createRouter } from './router/index'
import { createHead, HeadClient } from '@vueuse/head'
import {
  ElConfigProvider,
  ElIcon,
  ElButton,
  ElInput,
  ElUpload,
  ElTag,
  ElDropdown,
  ElDatePicker,
  ElCard,
} from 'element-plus'
import {
  Edit,
  House,
  TakeawayBox,
  CaretTop,
  CaretBottom,
} from '@element-plus/icons'
import ElementPro from '/@src/index'
import ProCode from './components/ProCode.vue'
import Layout from './App.vue'
import 'element-plus/theme-chalk/el-var.css'
import 'element-plus/theme-chalk/el-icon.css'
import 'element-plus/theme-chalk/el-button.css'
import 'element-plus/theme-chalk/el-input.css'
import 'element-plus/theme-chalk/el-upload.css'
import 'element-plus/theme-chalk/el-tag.css'
import 'element-plus/theme-chalk/el-dropdown.css'
import 'element-plus/theme-chalk/el-dropdown-item.css'
import 'element-plus/theme-chalk/el-dropdown-menu.css'
import 'element-plus/theme-chalk/el-date-picker.css'
import 'element-plus/theme-chalk/el-card.css'
import '/@src/styles/index.css'
import './styles/index.css'
import type { Router } from 'vue-router'

export function createApp(): {
  app: App<Element>
  router: Router
  head: HeadClient
} {
  const app =
    import.meta.env.MODE === 'production'
      ? createSSRApp(Layout)
      : _createApp(Layout)
  const router = createRouter()
  const head = createHead()

  app
    .use(router)
    .use(head)
    .use(ElConfigProvider)
    .use(ElIcon)
    .use(ElButton)
    .use(ElInput)
    .use(ElUpload)
    .use(ElTag)
    .use(ElDropdown)
    .use(ElDatePicker)
    .use(ElCard)
    .component('ProCode', ProCode)
    .component('el-icon-edit', Edit)
    .component('el-icon-house', House)
    .component('el-icon-takeaway-box', TakeawayBox)
    .component('el-icon-caret-top', CaretTop)
    .component('el-icon-caret-bottom', CaretBottom)
    .use(ElementPro)

  return { app, router, head }
}
