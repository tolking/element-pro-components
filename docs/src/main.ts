import { App, createApp as _createApp, createSSRApp } from 'vue'
import { createRouter } from './router/index'
import { createHead } from '@unhead/vue/client'
import {
  ElConfigProvider,
  ElButton,
  ElInput,
  ElUpload,
  ElTag,
  ElDropdown,
  ElDatePicker,
  ElCard,
  ElSwitch,
  ElTooltip,
  ElIcon,
  ElDrawer,
  ElImage,
  ElPagination,
  ID_INJECTION_KEY,
  ZINDEX_INJECTION_KEY,
} from 'element-plus'
import ElementPro from 'element-pro-components'
import IconExternalLink from './components/IconExternalLink.vue'
import ProCode from './components/ProCode.vue'
import Layout from './App.vue'
import 'element-plus/theme-chalk/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-pro-components/styles/index.css'
import './styles/index.css'
import type { Router } from 'vue-router'
import type { VueHeadClient, MergeHead } from '@unhead/vue'

export function createApp(): {
  app: App<Element>
  router: Router
  head: VueHeadClient<MergeHead>
} {
  const app =
    import.meta.env.MODE === 'production'
      ? createSSRApp(Layout)
      : _createApp(Layout)
  const router = createRouter()
  const head = createHead() as unknown as VueHeadClient<MergeHead>

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
    .use(ElSwitch)
    .use(ElTooltip)
    .use(ElIcon)
    .use(ElDrawer)
    .use(ElImage)
    .use(ElPagination)
    .component('IconExternalLink', IconExternalLink)
    .component('ProCode', ProCode)
    .use(ElementPro)
    .provide(ZINDEX_INJECTION_KEY, { current: 0 })
    .provide(ID_INJECTION_KEY, {
      prefix: 1024,
      current: 0,
    })

  return { app, router, head }
}
