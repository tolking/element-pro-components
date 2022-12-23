[![License](https://img.shields.io/github/license/tolking/element-pro-components.svg?style=flat-square&logo=opensourceinitiative)](https://github.com/tolking/element-pro-components/blob/master/LICENSE)
[![Latest tag via npm](https://img.shields.io/npm/v/element-pro-components.svg?style=flat-square&logo=npm)](https://npmjs.com/package/element-pro-components)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/element-pro-components?label=minzip&logo=npm&style=flat-square)](https://npmjs.com/package/element-pro-components)
[![Npm Last Updated](https://img.shields.io/badge/dynamic/json.svg?style=flat-square&logo=npm&label=last%20release&url=http%3A%2F%2Fregistry.npmjs.org%2Felement-pro-components&query=$.time.modified)](https://www.npmjs.com/package/element-pro-components)
[![GitHub last commit](https://img.shields.io/github/last-commit/tolking/element-pro-components.svg?&style=flat-square&logo=github)](https://github.com/tolking/element-pro-components/commits)
[![Latest tag via GitHub](https://img.shields.io/github/v/tag/tolking/element-pro-components.svg?sort=semver&style=flat-square&logo=github)](https://github.com/tolking/element-pro-components/tags)

# element-pro-components

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

## Development project

Nodejs 16+

start

```bash
pnpm install

pnpm dev
```

then, preview on `http://localhost:5173/`

test build

```bash
pnpm build
```

before push

```bash
pnpm check

pnpm test
```

[commit-convention](https://github.com/vuejs/vue-next/blob/master/.github/commit-convention.md)

## License

[MIT](http://opensource.org/licenses/MIT)
