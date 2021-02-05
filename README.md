# element-pro-components (WIP)

> a component library for Vue 3 base on element-plus

[Documentation](https://tolking.github.io/element-pro-components)

## TODO:

- components

  - [x] ProLayout
  - [x] ProMenu
  - [x] ProBreadcrumb
  - [x] ProTabs
  - [x] ProTable
  - [x] ProForm
  - [x] ProInputTag
  - [x] ProRadio
  - [x] ProRadioButton
  - [x] ProCheckbox
  - [x] ProCheckboxButton
  - [x] ProSelect
  - [ ] ProSerach
  - [ ] ProList
  - [ ] ProCrud
  - [ ] ProUpload
  - ...

- [x] docs
- [x] test
- [x] vetur
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
