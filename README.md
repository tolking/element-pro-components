# element-pro-components (WIP)

> a component library for Vue 3 base on element-plus

构建中...

**docs 文档暂时未更新，参考 example 文件夹**

## TODO:

- components

  - [x] ProLayout
  - [x] ProMenu
  - [x] ProBreadcrumb
  - [x] ProTabs
  - [x] ProInputTag
  - [ ] ProForm
  - [ ] ProSerach
  - [ ] ProTable
  - [ ] ProList
  - [ ] ProCrud
  - ...

- [ ] test
- [ ] docs (rebuild)
- ...

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
import 'element-pro-components/lib/index.min.css'

createApp(App).use(ElementPro).mount('#app')
```

```vue
<template>
  <pro-layout />
</template>
```

## License

[MIT](http://opensource.org/licenses/MIT)
