---
title: 快速上手
meta:
  - name: description
    content: 快速上手 element-pro-components 组件库
---

# 快速上手

## 准备

在开始前你可能需要 vue3 版本脚手架工具

- [vite](https://vitejs.dev/)
- [vue-cli](https://cli.vuejs.org/zh/)
- [nuxt](https://zh.nuxtjs.org/)

## 安装

[![Latest tag via npm](https://img.shields.io/npm/v/element-pro-components.svg?style=flat-square&logo=npm)](https://npmjs.com/package/element-pro-components)
[![npm bundle size](https://img.shields.io/bundlephobia/min/element-pro-components?label=size&logo=npm&style=flat-square)](https://npmjs.com/package/element-pro-components)
[![Npm Last Updated](https://img.shields.io/badge/dynamic/json.svg?style=flat-square&logo=npm&label=last%20release&url=http%3A%2F%2Fregistry.npmjs.org%2Felement-pro-components&query=$.time.modified)](https://www.npmjs.com/package/element-pro-components)

```
yarn add element-pro-components
# 或者
npm i element-pro-components
```

## 完整引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import ElementPro from 'element-pro-components'
import 'element-pro-components/lib/styles/index.css'

const app = createApp(App)

app.use(ElementPro)
app.mount('#app')
```

## 按需引入

::: tip 提示
自 `0.12.0` 起，推荐使用按需引入样式文件夹中的 js 文件替代 css 文件，避免样式的重复引用。(注：引用 js 样式文件需要编译工具支持 ES modules)
:::

### 推荐使用 unplugin-vue-components

安装及使用查看 [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components)

- 配置信息

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

### 在 vue-cli 中使用 babel-plugin-import

安装及使用查看 [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)

- 修改配置 babel.config

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-pro-components',
        customStyleName: (name) => {
          return `element-pro-components/lib/styles/${name.slice(4)}`
        },
      },
    ],
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
完整组件列表[参考里面的 components](https://github.com/tolking/element-pro-components/blob/master/src/index.ts)

在导出组件的同时，一起导出的还包括内部使用的[utils](https://github.com/tolking/element-pro-components/blob/master/src/utils/)与[composables](https://github.com/tolking/element-pro-components/blob/master/src/composables/)，如果需要可以引用使用
:::

## 全局配置

::: danger 危险
全局配置将在不久之后修改或移除，推荐现在使用相关组件传参实现
:::

- 参考

<<< @/src/utils/config.ts

- 配置

```js
app.use(ElementPro, {
  pagination: {
    small: true,
    hideOnSinglePage: true,
    layout: 'prev, pager, next',
  },
})
```

::: tip 提示
如果使用按需引入，可以通过 `ProCrud` `ProForm` `ProTable` 中的一个注入全局配置
:::

## 开始使用

::: tip 提示
文档示例基于 [组合式 API](https://v3.cn.vuejs.org/guide/composition-api-introduction.html) 语法，如果不熟悉语法请前往官方文档查看

如果使用 VS Code 开发，配合 [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) 使用提供完整的组件、属性、事件补全。例如：输入 `<pro-` 将罗列出所有组件库组件

对于使用 VS Code 配合 typescript 开发，推荐使用插件 [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)。只需要中向 `tsconfig.json` 文件中的 `include` 字段增加

```diff
{
  "include": [
+   "node_modules/element-pro-components/types/element-pro-components.d.ts"
  ]
}
```

对于 webstorm 也提供了完整的组件、属性、事件补全

如果使用 TypeScript 编写，可以参考 [example](https://github.com/tolking/element-pro-components/tree/master/docs/src/views/)。内部提供部分类型方便使用
:::

<<< @/docs/src/layout/Layout.vue
