# Quick start

## Ready

You may need the vue3 version of the scaffolding tool before you start

- [vite](https://vitejs.dev/)
- [vue-cli](https://cli.vuejs.org/zh/)
- [nuxt](https://zh.nuxtjs.org/)

## Install

```
yarn add element-pro-components
# or
npm i element-pro-components
```

## Fully import

```js
import { createApp } from 'vue'
import App from './App.vue'
import ElementPro from 'element-pro-components'
import 'element-pro-components/lib/styles/index.css'

const app = createApp(App)

app.use(ElementPro)
app.mount('#app')
```

## On demand

### vite

With the help of [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import), we can import components styles we actually need

- install

```
yarn add -D vite-plugin-style-import
# or
npm i -D vite-plugin-style-import
```

- change vite.config

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          importTest: /^Pro/,
          libraryName: 'element-pro-components',
          ensureStyleFile: true,
          resolveStyle: (name) => {
            name = name.slice(4)
            return `element-pro-components/lib/styles/${name}.css`
          },
        },
      ],
    }),
  ],
})
```

### vue-cli

With the help of [babel-plugin-import](https://github.com/ant-design/babel-plugin-import), we can import components styles we actually need

- install

```
yarn add -D babel-plugin-import
# or
npm i -D babel-plugin-import
```

- change babel.config

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-pro-components',
        customStyleName: (name) => {
          name = name.slice(4)
          return `element-pro-components/lib/styles/${name}.css`
        },
      },
    ],
  ],
}
```

### By hand

example:

```js
import { ProLayout } from 'element-pro-components'
import 'element-pro-components/lib/styles/layout.css'
```

Next, you need to introduce the css variable file

```js
import { createApp } from 'vue'
import App from './App.vue'
import { ProLayout } from 'element-pro-components'
// Unless you redefine all css variables, you need to manually import css variable files
import 'element-pro-components/lib/styles/vars.css'

const app = createApp(App)

app.use(ProLayout)
// or
app.component('ProLayout', ProLayout)

app.mount('#app')
```

::: tip Tip
Component list reference [components](https://github.com/tolking/element-pro-components/blob/master/src/index.ts)

In addition to components, you can also use some internal [utils](https://github.com/tolking/element-pro-components/blob/master/src/utils/) or [composables](https://github.com/tolking/element-pro-components/blob/master/src/composables/)
:::

## Global config

- refer

<<< @/src/utils/config.ts

- config

```js
app.use(ElementPro, {
  pagination: {
    small: true,
    hideOnSinglePage: true,
    layout: 'prev, pager, next',
  },
})
```

::: tip Tip
If you use on demand import components, you can inject global config through one of `ProCrud` `ProForm` `ProTable`
:::

## Start using

::: tip Tip
Document example based on [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html), If you are not familiar with the syntax, please visit the official document

If you use VS Code to develop, cooperate with Vetur to provide complete components, prop, and event completion. example: input `<pro-` will list all components

If you use webstorm to develop, complete components, prop, and event completions

If you use TypeScript to develop, You can refer to the [example](https://github.com/tolking/element-pro-components/tree/master/docs/src/views/), Some types are provided internally for easy use
:::

<<< @/docs/src/layout/Layout.vue
