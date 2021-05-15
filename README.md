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

## License

[MIT](http://opensource.org/licenses/MIT)
