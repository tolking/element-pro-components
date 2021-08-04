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
  ElDropdownItem,
  ElDropdownMenu,
  ElDatePicker,
} from 'element-plus'
import ElementPro from '/@src/index'
import ProCode from './components/ProCode.vue'
import Layout from './App.vue'
import 'element-plus/lib/theme-chalk/el-var.css'
import 'element-plus/lib/theme-chalk/el-icon.css'
import 'element-plus/lib/theme-chalk/el-button.css'
import 'element-plus/lib/theme-chalk/el-input.css'
import 'element-plus/lib/theme-chalk/el-upload.css'
import 'element-plus/lib/theme-chalk/el-tag.css'
import 'element-plus/lib/theme-chalk/el-dropdown.css'
import 'element-plus/lib/theme-chalk/el-dropdown-item.css'
import 'element-plus/lib/theme-chalk/el-dropdown-menu.css'
import 'element-plus/lib/theme-chalk/el-date-picker.css'
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
    .component('ProCode', ProCode)
    .use(ElConfigProvider)
    .use(ElIcon)
    .use(ElButton)
    .use(ElInput)
    .use(ElUpload)
    .use(ElTag)
    .use(ElDropdown)
    .use(ElDropdownItem)
    .use(ElDropdownMenu)
    .use(ElDatePicker)
    .use(ElementPro)

  return { app, router, head }
}
