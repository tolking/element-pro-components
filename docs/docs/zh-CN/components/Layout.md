---
title: Layout
meta:
  - name: description
    content: 基础的中后台布局界面组件
---

# Layout

> 基础的中后台布局界面组件

## 使用

### 基础用法

::: demo 组件默认将从 `vue-router` 中获取路由生成路由

<template>
  <pro-layout class="docs-layout" />
</template>

<style>
.docs-layout {
  border: 1px solid var(--c-border);
  height: 400px;
}
</style>

:::

### 插槽

::: demo 通过插槽实现更复杂的界面

<template>
  <pro-layout class="docs-layout">
    <template #logo="{ collapse }">
      <span style="line-height: 54px">
        {{ collapse ? 'L' : 'logo' }}
      </span>
    </template>
    <template #footer>
      <p>footer</p>
    </template>
    <template #header-left>
      <span>header-left</span>
    </template>
    <template #header-right>
      <span>header-right</span>
    </template>
    <template #header-bottom>
      <span>header-bottom</span>
    </template>
    <template #main-top>
      <p>main-top</p>
    </template>
    <template #main-bottom>
      <p>main-bottom</p>
    </template>
  </pro-layout>
</template>

:::

### 自定义路由

::: demo 通过传入 `routes` 实现自定义路由显示

<template>
  <pro-layout
    :routes="routes"
    class="docs-layout"
  />
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const routes = computed(() => {
      const _routes = router.options.routes
      return _routes.find(item => {
        return item.path === '/zh-CN/components/'
      })?.children || []
    })

    return {
      routes,
    }
  }
}
</script>

:::

### 配置

| 参数            | 说明                                | 类型    | 默认值                 |
| :-------------- | :---------------------------------- | :------ | :--------------------- |
| routes          | 当前程序路由                        | array   | 从 `vue-router` 中获取 |
| transition      | 定义页面过度渐变动画                | string  | -                      |
| collapse        | 默认是否收起菜单                    | boolean | false                  |
| default-openeds | 当前打开的 sub-menu 的 index 的数组 | Array   | -                      |
| unique-opened   | 是否只保持一个子菜单的展开          | boolean | false                  |

### 插槽

| name          | 说明                                                         |
| :------------ | :----------------------------------------------------------- |
| logo          | 自定义 Logo，参数为 { collapse } collapse-当前菜单栏是否折叠 |
| menu          | 控制菜单显示内容，参数为 { meta, path, redirect } 等         |
| footer        | 页脚内容                                                     |
| header-left   | 头部左侧内容                                                 |
| header-right  | 头部右侧内容                                                 |
| header-bottom | 头部下面内容                                                 |
| main-top      | 主体顶部内容                                                 |
| main-bottom   | 主体底部内容                                                 |
