---
title: Link
lang: zh-CN
description: 处理全局的路由
---

# Link

> 处理全局的路由

## 作用

处理全局需要跳转的路由

## 使用

**效果**

::: demo
<template>
  <pro-link to="/">首页</pro-link>
  <pro-link to="https://ououe.com">ououe</pro-link>
</template>
:::

## 选项

linkClick
- type: `linkClick(to: String | Object): Boolean`
- default: `true`

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
