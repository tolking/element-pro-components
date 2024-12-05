---
title: 快速上手
meta:
  - name: description
    content: 快速上手 element-pro-components 组件库
---

# 快速上手

你可以直接使用已经准备好的[模版项目](https://github.com/tolking/element-admin-template)快速开始，或者参考下面内容自行搭建

## 准备

在开始前你可能需要 vue3 版本脚手架工具，同时需要提前安装 [vue](https://vuejs.org/) [vue-router](https://router.vuejs.org/) [element-plus](https://element-plus.org/)

- [vite](https://vitejs.dev/)
- [vue-cli](https://cli.vuejs.org/zh/)

## 安装

[![Latest tag via npm](https://img.shields.io/npm/v/element-pro-components.svg?style=flat-square&logo=npm)](https://npmjs.com/package/element-pro-components)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/element-pro-components?label=minzip&logo=npm&style=flat-square)](https://npmjs.com/package/element-pro-components)
[![Npm Last Updated](https://img.shields.io/badge/dynamic/json.svg?style=flat-square&logo=npm&label=last%20release&url=http%3A%2F%2Fregistry.npmjs.org%2Felement-pro-components&query=$.time.modified)](https://www.npmjs.com/package/element-pro-components)

```
npm i element-pro-components
# 或者
yarn add element-pro-components
# 或者
pnpm add element-pro-components
```

## 完整引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import ElementPro from 'element-pro-components'
import 'element-pro-components/lib/styles/index'

const app = createApp(App)

app.use(ElementPro)
app.mount('#app')
```

## 按需引入样式

::: tip 提示
自 `0.12.0` 起，推荐使用按需引入样式文件夹中的 js 文件替代 css 文件，避免样式的重复引用

自 `1.0.0` 起，增加对 CommonJS 支持，导入 `.cjs` 使用
:::

### 推荐使用 unplugin-vue-components

安装及使用查看 [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components)

- 使用

```js
import { ElementProResolver } from 'element-pro-components'

Components({
  resolvers: [
    ElementProResolver(/* options */),
  ],
}),
```

- 参数

| 参数               | 说明                     | 类型                     | 默认值 |
| :----------------- | :----------------------- | :----------------------- | :----- |
| importStyle        | 导入组件的样式文件后缀   | `'js' \| 'cjs' \| 'css'` | js     |
| exclude            | 排除不需要自动导入的组件 | `RegExp`                 | -      |
| noStylesComponents | 没有样式的组件名称列表   | `string[]`               | -      |

### 在 vite 中使用 vite-plugin-style-import

安装及使用查看 [vite-plugin-style-import](https://www.npmjs.com/package/vite-plugin-style-import)

- 修改配置 vite.config

```js
import styleImport from 'vite-plugin-style-import'

export default {
  plugins: [
    styleImport({
      libs: [
        {
          importTest: /^Pro/,
          libraryName: 'element-pro-components',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-pro-components/lib/styles/${name.slice(4)}`
          },
        },
      ],
    }),
  ],
}
```

### 手动引入样式

例如：

```js
import { ProLayout } from 'element-pro-components'
import 'element-pro-components/lib/styles/layout'
```

::: tip 提示
完整组件列表[参考里面的 components](https://github.com/tolking/element-pro-components/blob/master/src/components.ts)

在导出组件的同时，一起导出的还包括内部使用的[utils](https://github.com/tolking/element-pro-components/blob/master/src/utils/)与[composables](https://github.com/tolking/element-pro-components/blob/master/src/composables/)，如果需要可以引用使用
:::

## 类型提示

对于使用 VS Code 配合 typescript 开发，推荐使用插件 [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)。只需要中向 `tsconfig.json` 文件中增加全局组件类型

```diff
{
  "compilerOptions": {
+    "types": ["element-pro-components/types/components"]
  }
}
```

或者

```diff
{
  "include": [
+   "node_modules/element-pro-components/types/components.d.ts"
  ]
}
```

也可以向全局类型定义文件中中增加，例如：env.d.ts

```diff
+ /// <reference types="element-pro-components/types/components" />
```

对于 webstorm 也提供了完整的组件、属性、事件补全
