---
title: Quick start
meta:
  - name: description
    content: Quick start with element-pro-components component library
---

# Quick start

You can refer to the [template project](https://github.com/tolking/element-admin-template) to use, or build it yourself through the following content

## Ready

You may need the vue3 version of the scaffolding tool before you start, and you need to install [vue](https://vuejs.org/), [vue-router](https://router.vuejs.org/), [element-plus](https://element-plus.org/) in advance.

- [vite](https://vitejs.dev/)
- [vue-cli](https://cli.vuejs.org/)

## Install

[![Latest tag via npm](https://img.shields.io/npm/v/element-pro-components.svg?style=flat-square&logo=npm)](https://npmjs.com/package/element-pro-components)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/element-pro-components?label=minzip&logo=npm&style=flat-square)](https://npmjs.com/package/element-pro-components)
[![Npm Last Updated](https://img.shields.io/badge/dynamic/json.svg?style=flat-square&logo=npm&label=last%20release&url=http%3A%2F%2Fregistry.npmjs.org%2Felement-pro-components&query=$.time.modified)](https://www.npmjs.com/package/element-pro-components)

```
npm i element-pro-components
# or
yarn add element-pro-components
# or
pnpm add element-pro-components
```

## Fully import

```js
import { createApp } from 'vue'
import App from './App.vue'
import ElementPro from 'element-pro-components'
import 'element-pro-components/lib/styles/index'

const app = createApp(App)

app.use(ElementPro)
app.mount('#app')
```

## On demand

::: tip Tip
Since `0.12.0`, it is recommended to use the js file in the style folder imported on demand instead of the css file to avoid repeated references of styles.

Since `1.0.0`, support CommonJS by import `.cjs`
:::

### Recommended unplugin-vue-components

Installation and use view [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components)

- Used

```js
import { ElementProResolver } from 'element-pro-components'

Components({
  resolvers: [
    ElementProResolver(/* options */),
  ],
}),
```

- Options

| Name               | Description                                             | Type                     | Default |
| :----------------- | :------------------------------------------------------ | :----------------------- | :------ |
| importStyle        | style file suffix for import component                  | `'js' \| 'cjs' \| 'css'` | js      |
| exclude            | exclude components that do not require automatic import | `RegExp`                 | -       |
| noStylesComponents | a list of component names that have no styles           | `string[]`               | -       |

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

### By hand

example:

```js
import { ProLayout } from 'element-pro-components'
import 'element-pro-components/lib/styles/layout'
```

::: tip Tip
Component list reference [components](https://github.com/tolking/element-pro-components/blob/master/src/components.ts)

In addition to components, you can also use some internal [utils](https://github.com/tolking/element-pro-components/blob/master/src/utils/) or [composables](https://github.com/tolking/element-pro-components/blob/master/src/composables/)
:::

## TypeScript

If you use VS Code with typescript to develop, It is recommended to use plug-in [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar). Just add the global component type definition to the `tsconfig.json` file

```diff
{
  "compilerOptions": {
+    "types": ["element-pro-components/types/components"]
  }
}
```

or

```diff
{
  "include": [
+   "node_modules/element-pro-components/types/components.d.ts"
  ]
}
```

You can also add to the global type definition file, eg: env.d.ts

```diff
+ /// <reference types="element-pro-components/types/components" />
```

If you use webstorm to develop, complete components, prop, and event completions
