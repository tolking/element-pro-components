# element-pro-components (Beta)

> a component library for Vue 3 base on element-plus

[Documentation](https://tolking.github.io/element-pro-components) | [Changelog](./CHANGELOG.md)

## Installation

```sh
yarn add element-pro-components
# or
npm i element-pro-components
```

## Usage

```js
import { createApp } from 'vue'
import App from './App.vue'
import ElementPro from 'element-pro-components'
import 'element-pro-components/lib/style.css'

createApp(App).use(ElementPro).mount('#app')
```

```vue
<template>
  <pro-layout />
</template>
```

## Development project

nodejs ^12

start

```bash
yarn

yarn dev
```

then, preview on `http://localhost:3000/`

test build

```bash
yarn build
```

before push

```bash
yarn test
```

[commit-convention](https://github.com/vuejs/vue-next/blob/master/.github/commit-convention.md)

## License

[MIT](http://opensource.org/licenses/MIT)
