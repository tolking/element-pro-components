<p style="text-align: center">
  <img src="./docs/public/logo.svg" width="120px" height="120px" />
</p>
<p style="text-align: center;font-size: 24px">
  <b>element-pro-components</b>
</p>
<p style="text-align: center">
  <a href="https://github.com/tolking/element-pro-components/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/tolking/element-pro-components.svg?style=flat-square&logo=opensourceinitiative" />
  </a>
  <a href="https://npmjs.com/package/element-pro-components">
    <img src="https://img.shields.io/npm/v/element-pro-components.svg?style=flat-square&logo=npm">
  </a>
  <a href="https://npmjs.com/package/element-pro-components">
    <img src="https://img.shields.io/bundlephobia/minzip/element-pro-components?label=minzip&logo=npm&style=flat-square">
  </a>
</p>

> a component library for Vue 3 base on element-plus

[Documentation](https://tolking.github.io/element-pro-components) | [Template](https://github.com/tolking/element-admin-template) | [Changelog](./CHANGELOG.md)

## Installation

```sh
pnpm add element-pro-components
# or
yarn add element-pro-components
# or
npm i element-pro-components
```

## Usage

```js
import { createApp } from 'vue'
import App from './App.vue'
import ElementPro from 'element-pro-components'
import 'element-pro-components/lib/styles/index'

createApp(App).use(ElementPro).mount('#app')
```

```vue
<template>
  <pro-layout />
</template>
```

## Contributors

Thank you to all the people who have already contributed to element-pro-components!

[![contributors](https://contrib.rocks/image?repo=tolking/element-pro-components)](https://github.com/tolking/element-pro-components/graphs/contributors)

## License

[MIT](http://opensource.org/licenses/MIT)
