---
title: Breadcrumb
---

# Breadcrumb

> 根据当前页面路由自动生成面包屑，与 `vue-router` 高度绑定

## 使用

```vue
<template>
  <pro-layout>
    <template #left-header>
      <pro-breadcrumb />
    </template>
  </pro-layout>
</template>
```

## 配置

### routes (可选)

自定义生成侧边菜单栏的路由

::: tip 提示如果没有传值，将自动从 `vue-router` 中获取路由并排除 `meta: { hidden: true }` 的路由 :::

类型: 同 Layout

### 其它配置

同 [ElBreadcrumb](https://element-plus.gitee.io/#/zh-CN/component/breadcrumb)
