# Link

## 作用

处理全局需要跳转的路由

## 使用

``` html
<template>
  <pro-link to="/">首页</pro-link>
  <pro-link to="https://ououe.com">ououe</pro-link>
</template>
```

**效果**

<template>
  <pro-link to="/">首页</pro-link>
  <pro-link to="https://ououe.com">ououe</pro-link>
</template>

## 选项

linkClick
- type: `linkClick(to: String | Object): Boolean`

链接点击后判断是否需要跳转

``` js
import Vue from 'vue'
import Link from 'element-pro-components/src/Link'

Vue.use(Link, { linkClick: to => {
  return to === '/'
}})
```

## 配置

to
- type: `String`, `Object`
- required: `true`

地址
