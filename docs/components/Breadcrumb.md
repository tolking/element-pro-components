---
title: Breadcrumb
lang: zh-CN
description: 封装的面包屑组建
---

# Breadcrumb

> 基于 breadcrumb breadcrumb-item 的自动生成面包屑组建

## 作用

根据路由自动生成面包屑

## 使用

**效果**

::: demo
<template>
  <pro-breadcrumb :routers="routers" />
</template>

<script>
export default {
  data() {
    return {
      // test ProBreadcrumb
      routers: [
        {
          path: '/components',
          meta: { title: '组建' },
          children: [
            {
              path: '/components/Breadcrumb.html',
              meta: { title: '面包屑' }
            }
          ]
        }
      ]
    }
  }
}
</script>
:::

## 配置

routers
- type: `Array`
- default: `this.$router.options.routes`

需要生成面包屑的路由数组，如果是动态生成的路由需要传入此参数，或者将生成的路由增加到 `this.$router.options.routes`

其它同 `Breadcrumb`
