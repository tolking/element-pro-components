# Quick start

## Ready

在开始前你可能需要 vue3 版本脚手架工具

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
import 'element-pro-components/lib/style.css'

const app = createApp(App)

app.use(ElementPro)
app.mount('#app')
```

## On demand

```js
import { createApp } from 'vue'
import App from './App.vue'
import { ProLayout } from 'element-pro-components'
import 'element-pro-components/lib/style.css'

const app = createApp(App)

app.use(ProLayout)
// or
app.component('ProLayout', ProLayout)
app.mount('#app')
```

::: tip Tip
与 `Element Plus` 不同，样式不支持按需引入。由于只包含少量必要样式，可能不会提供相同功能

完整组件列表[参考里面的 components](https://github.com/tolking/element-pro-components/blob/master/src/index.ts)
:::

::: tip Tip
在导出组件的同时，一起导出的还包括内部使用的[utils](https://github.com/tolking/element-pro-components/blob/master/src/utils/)与[composables](https://github.com/tolking/element-pro-components/blob/master/src/composables/)，如果需要可以引用使用
:::

## Global config

- example

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

## Start using

::: tip Tip
文档示例基于 [组合式 API](https://v3.cn.vuejs.org/guide/composition-api-introduction.html) 语法，如果不熟悉语法请前往官方文档查看

如果使用 VS Code 开发，配合 Vetur 使用提供完整的组件、属性、事件补全。例如：输入 `<pro-` 将罗列出所有组件库组件

如果使用 TypeScript 编写，可以参考 [example](https://github.com/tolking/element-pro-components/tree/master/docs/src/views/)。内部提供部分类型方便使用
:::

<<< @/docs/src/layout/Layout.vue
