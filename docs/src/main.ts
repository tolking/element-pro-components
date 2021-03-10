import Layout from './App.vue'
import { App, createApp as _createApp, createSSRApp } from 'vue'
import { createRouter } from './router/index'
import { Router } from 'vue-router'
import {
  ElButton,
  ElInput,
  ElUpload,
  ElTag,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
} from 'element-plus'
import ElementPro from '/@src/index'
import ProCode from './components/ProCode.vue'
import 'element-plus/lib/theme-chalk/index.css'
import './styles/index.css'

export function createApp(): {
  app: App<Element>
  router: Router
} {
  const app =
    import.meta.env.MODE === 'production'
      ? createSSRApp(Layout)
      : _createApp(Layout)
  const router = createRouter()

  app
    .use(router)
    .component('ProCode', ProCode)
    .use(ElButton)
    .use(ElInput)
    .use(ElUpload)
    .use(ElTag)
    .use(ElDropdown)
    .use(ElDropdownItem)
    .use(ElDropdownMenu)
    .use(ElementPro)

  return { app, router }
}
