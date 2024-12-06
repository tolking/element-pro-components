import { computed, toRefs } from 'vue'
import { reactiveComputed } from '@vueuse/core'
import StackBlitz from '@stackblitz/sdk'

const ViteConfig = `
import vue from "@vitejs/plugin-vue"
export default { plugins: [vue()] }
`

const PackageJson = `
{
  "name": "element-pro-components-demo",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview"
  },
  "dependencies": {
    "@element-plus/icons-vue": "latest",
    "@vueuse/core": "latest",
    "element-plus": "latest",
    "element-pro-components": "latest",
    "vue": "latest",
    "vue-router": "latest"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "latest",
    "vite": "latest"
  },
  "stackblitz": {
    "installDependencies": false,
    "startCommand": "turbo && turbo dev"
  }
}
`

const IndexHtml = `
<div id="app"></div>
<script type="module" src="/src/main.js"></script>
`
const getMainJs = (needRouter: boolean) => `
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import ElementPro from 'element-pro-components'
import Demo from './Demo.vue'
${needRouter ? "import router from './router'" : ''}
import 'element-plus/dist/index.css'
import 'element-pro-components/lib/styles/index'

createApp(Demo)${
  needRouter ? '.use(router)' : ''
}.use(ElementPlus).use(ElementPro).mount('#app')
`

const RouterJs = `
import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./Home.vue'),
      meta: { title: 'Home' },
    },
    {
      path: '/keep-alive',
      component: () => import('./KeepAlive.vue'),
      meta: { title: 'KeepAlive' },
    },
  ],
})
`

const HomeVue = `
<template>
  <p>This is a simple home page</p>
</template>
`

const KeepAliveVue = `
<template>
  <div>
    <p>The input data will be preserved after page jumps when keep-alive is true in ProLayout</p>
    <el-input v-model="value" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'KeepAlive',
  setup() {
    const value = ref('')
    return { value }
  },
})
</script>
`

export function useStackBlitz(
  props: Readonly<{ link: string; content: string }>,
) {
  const { link, content } = toRefs(props)
  const name = reactiveComputed(() => {
    const result = link.value.match(/^@\/demo\/([^/]*)\/([^/]*).vue$/)

    if (result) {
      return {
        componentName: result[1],
        demoName: result[2],
      }
    } else {
      // eslint-disable-next-line no-console
      console.error(`The demo file path is invalid: ${link.value}.
      The correct path should be: @/demo/'componentName'/'demoName'.vue`)
      return {
        componentName: '',
        demoName: '',
      }
    }
  })
  const needRouter = computed(() => {
    return ['Layout', 'Menu', 'FilterRoutes', 'Breadcrumb', 'Tabs'].includes(
      name.componentName,
    )
  })

  function createConfig() {
    const files = {
      'vite.config.js': ViteConfig,
      'package.json': PackageJson,
      'index.html': IndexHtml,
      'src/main.js': getMainJs(needRouter.value),
      'src/Demo.vue': decodeURIComponent(content.value),
    }

    if (needRouter.value) {
      Object.assign(files, {
        'src/router.js': RouterJs,
        'src/Home.vue': HomeVue,
        'src/KeepAlive.vue': KeepAliveVue,
      })
    }

    return {
      title: `${name.componentName} Demo`,
      description: `The ${name.demoName} demo about ${name.componentName}`,
      template: 'node' as const,
      files,
    }
  }

  function open() {
    StackBlitz.openProject(createConfig(), { openFile: 'src/Demo.vue' })
  }

  return open
}
