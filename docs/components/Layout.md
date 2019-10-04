---
title: Layout
lang: zh-CN
description: 默认的布局组建
---

# Layout

> 默认的布局组建

## 作用

默认的界面布局

## 使用

**默认效果**

::: demo 部分颜色会与实际有所不同
<template>
  <pro-layout :routers="routers" />
</template>

<script>
export default {
  data() {
    return {
      routers: [
        { path: '/login', hidden: true },
        { path: '/404', hidden: true },
        {
          path: '/',
          redirect: '/index',
          meta: { title: '首页', icon: 'el-icon-house' },
          children: [{
            path: '/index'
          }]
        },
        {
          path: '/components',
          meta: { title: '组建', icon: 'el-icon-files' },
          children: [
            {
              path: '/components/Layout.html',
              meta: { title: '布局组建' }
            },
            {
              path: '/components/Breadcrumb.html',
              meta: { title: '面包屑' }
            }
          ]
        },
        {
          path: '/setting',
          redirect: '/setting/index',
          meta: { title: '设置', icon: 'el-icon-setting' },
          children: [
             {
              path: '/setting/index',
              meta: { title: '个人资料', icon: 'el-icon-user' }
            },
            {
              path: '/setting/password',
              meta: { title: '修改密码', icon: 'el-icon-edit' }
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

asideWidth
- type: `String`
- default: `300px`

侧边宽度

headerHeight
- type: `String`
- default: `60px`

顶栏高度

showFooter
- type: `Boolean`
- default: `true`

是否显示底栏

footerHeight
- type: `String`
- default: `60px`

底栏高度

**其它参考 `Menu`**

## 插槽

- asideTop
- asideBottom
- headerLeft 会替换默认 ProBreadcrumb
- headerRight
- footer 会替换默认
