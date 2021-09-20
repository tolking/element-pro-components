---
title: Quick start
meta:
  - name: description
    content: Quick start with element-pro-components component library
---

# Quick start

## Ready

You may need the vue3 version of the scaffolding tool before you start

- [vite](https://vitejs.dev/)
- [vue-cli](https://cli.vuejs.org/zh/)
- [nuxt](https://zh.nuxtjs.org/)

## Install

[![Latest tag via npm](https://img.shields.io/npm/v/element-pro-components.svg?style=flat-square&logo=npm)](https://npmjs.com/package/element-pro-components)
[![npm bundle size](https://img.shields.io/bundlephobia/min/element-pro-components?label=size&logo=npm&style=flat-square)](https://npmjs.com/package/element-pro-components)
[![Npm Last Updated](https://img.shields.io/badge/dynamic/json.svg?style=flat-square&logo=npm&label=last%20release&url=http%3A%2F%2Fregistry.npmjs.org%2Felement-pro-components&query=$.time.modified)](https://www.npmjs.com/package/element-pro-components)

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

::: tip Tip
Since `0.12.0`, it is recommended to use the js file in the style folder imported on demand instead of the css file to avoid repeated references of styles. (Note: Referencing js style files requires compilation tools to support ES modules)
:::

### Recommended unplugin-vue-components

Installation and use view [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components)

- Configuration information

```js
{
  resolvers: [
    (name) => {
      if (name.startsWith('Pro')) {
        const fileName = name.slice(3).replace(/\B([A-Z])/g, '-$1').toLocaleLowerCase()
        return {
          importName: name,
          path: 'element-pro-components',
          sideEffects: `element-pro-components/lib/styles/${fileName}`
        }
      }
    }
  ],
}
```

### Use vite-plugin-style-import in vite

Installation and use view [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import)

- change vite.config

```js
import styleImport from 'vite-plugin-style-import'

export default {
  plugins: [
    styleImport({
      libs: [
        {
          importTest: /^Pro/,
          libraryName: 'element-pro-components',
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-pro-components/lib/styles/${name.slice(4)}.css`
          },
        },
      ],
    }),
  ],
}
```

### Use babel-plugin-import in vue-cli

Installation and use view [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

- change babel.config

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-pro-components',
        customStyleName: (name) => {
          return `element-pro-components/lib/styles/${name.slice(4)}.css`
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

::: tip Tip
Component list reference [components](https://github.com/tolking/element-pro-components/blob/master/src/index.ts)

In addition to components, you can also use some internal [utils](https://github.com/tolking/element-pro-components/blob/master/src/utils/) or [composables](https://github.com/tolking/element-pro-components/blob/master/src/composables/)
:::

## Global config

::: danger Danger
The global config will be modified or removed in the near future, it is recommended to use related components to pass parameters to achieve
:::

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

If you use VS Code to develop, cooperate with [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) to provide complete components, prop, and event completion. example: input `<pro-` will list all components

If you use VS Code with typescript to develop, It is recommended to use plug-in [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar). Just add to the `include` field in the `tsconfig.json` file

```diff
{
  "include": [
+   "node_modules/element-pro-components/types/element-pro-components.d.ts"
  ]
}
```

If you use webstorm to develop, complete components, prop, and event completions

If you use TypeScript to develop, You can refer to the [example](https://github.com/tolking/element-pro-components/tree/master/docs/src/views/), Some types are provided internally for easy use
:::

<<< @/docs/src/layout/Layout.vue
