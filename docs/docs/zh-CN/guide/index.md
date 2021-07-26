# 快速上手

## 准备

在开始前你可能需要 vue3 版本脚手架工具

- [vite](https://vitejs.dev/)
- [vue-cli](https://cli.vuejs.org/zh/)
- [nuxt](https://zh.nuxtjs.org/)

## 安装

```
yarn add element-pro-components
# or
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

### vite

借助 [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import) 实现加载样式

- 安装

```
yarn add -D vite-plugin-style-import
# or
npm i -D vite-plugin-style-import
```

- 修改配置 vite.config

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

借助 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 实现加载样式

- 安装

```
yarn add -D babel-plugin-import
# or
npm i -D babel-plugin-import
```

- 修改配置 babel.config

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

### 手动引入样式

例如：

```js
import { ProLayout } from 'element-pro-components'
import 'element-pro-components/lib/styles/layout.css'
```

接下来需要引入 css 变量文件

```js
import { createApp } from 'vue'
import App from './App.vue'
import { ProLayout } from 'element-pro-components'
// 除非重新定义所有css变量，否则需要手动引入css变量文件
import 'element-pro-components/lib/styles/vars.css'

const app = createApp(App)

app.use(ProLayout)
// 或者
app.component('ProLayout', ProLayout)

app.mount('#app')
```

::: tip 提示
完整组件列表[参考里面的 components](https://github.com/tolking/element-pro-components/blob/master/src/index.ts)

在导出组件的同时，一起导出的还包括内部使用的[utils](https://github.com/tolking/element-pro-components/blob/master/src/utils/)与[composables](https://github.com/tolking/element-pro-components/blob/master/src/composables/)，如果需要可以引用使用
:::

## 全局配置

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

如果使用 VS Code 开发，配合 Vetur 使用提供完整的组件、属性、事件补全。例如：输入 `<pro-` 将罗列出所有组件库组件

如果使用 TypeScript 编写，可以参考 [example](https://github.com/tolking/element-pro-components/tree/master/docs/src/views/)。内部提供部分类型方便使用
:::

<<< @/docs/src/layout/Layout.vue
