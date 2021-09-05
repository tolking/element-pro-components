import { App, createApp as _createApp, createSSRApp } from 'vue'
import { createRouter } from './router/index'
import { createHead, HeadClient } from '@vueuse/head'
import {
  ElConfigProvider,
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
    .use(ElButton)
    .use(ElInput)
    .use(ElUpload)
    .use(ElTag)
    .use(ElDropdown)
    .use(ElDatePicker)
    .use(ElCard)
    .component('ProCode', ProCode)
    .component('icon-edit', Edit)
    .component('icon-house', House)
    .component('icon-takeaway-box', TakeawayBox)
    .component('icon-caret-top', CaretTop)
    .component('icon-caret-bottom', CaretBottom)
    .use(ElementPro)

  return { app, router, head }
}
