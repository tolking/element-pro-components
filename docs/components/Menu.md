---
title: Menu
lang: zh-CN
description: 封装默认的NavMenu，通过路由生成菜单栏
--- 

# Menu

> 封装默认的 `NavMenu`，通过路由生成菜单栏

## 作用

根据路由情况生成菜单栏

## 使用

**效果**

::: demo 通过 `mode` 来控制显示模式
<template>
  <pro-menu :routers="routers" mode="horizontal" />
  <br>
  <div style="width: 250px">
    <pro-menu :routers="routers" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 路由的大致结构
      routers: [
        { path: '/login', hidden: true },
        { path: '/404', hidden: true },
        {
          path: '/',
          redirect: '/index',
          meta: { title: '首页', icon: 'el-icon-s-home' },
          children: [{
            path: 'index'
          }]
        },
        {
          path: '/setting',
          redirect: '/setting/index',
          meta: { title: '设置', icon: 'el-icon-setting' },
          children: [
             {
              path: 'index',
              meta: { title: '个人资料', icon: 'el-icon-user' }
            },
            {
              path: 'password',
              meta: { title: '修改密码' }
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

需要生成菜单的路由数组 (默认移除 `hidden: true` 的路由)，如果是动态生成的路由需要传入此参数，或者将生成的路由增加到 `this.$router.options.routes`

default-active
- type: `String`
- default: `this.$route.path`

当前激活菜单的 index

其它同 `NavMenu` 
