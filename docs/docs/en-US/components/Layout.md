# Layout

> default global layout interface

# Use

## Basic Use

::: demo 组件默认将从 `vue-router` 中获取路由生成路由，格式参考页面下方

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

### Slots

::: demo 通过插槽实现更复杂的界面

<template>
  <pro-layout class="docs-layout">
    <template #logo="{ collapse }">
      <span style="line-height: 54px">{{ collapse ? 'L' : 'logo' }}</span>
    </template>
    <template #left-header>
      <span>left-header</span>
    </template>
    <template #right-header>
      <span>right-header</span>
    </template>
    <template #bottom-header>
      <span>bottom-header</span>
    </template>
  </pro-layout>
</template>

:::

### 自定义路由

::: demo 通过传入 `routes` 实现自定义路由显示

<template>
  <pro-layout :routes="routes" class="docs-layout" />
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const routes = computed(() => {
      const _routes = router.options.routes
      return _routes.find(item => item.path === '/zh-CN/components/').children
    })

    return {
      routes,
    }
  }
}
</script>

:::

### Props

| Name            | Description                                            | Type    | Default           |
| :-------------- | :----------------------------------------------------- | :------ | :---------------- |
| routes          | current routes                                         | array   | from `vue-router` |
| transition      | the animation name of transition pages                 | string  | -                 |
| collapse        | whether the menu is collapsed                          | boolean | false             |
| default-openeds | array that contains keys of currently active sub-menus | Array   | -                 |
| unique-opened   | whether only one sub-menu can be active                | boolean | false             |

### Slots

| Name          | Description                                                       |
| :------------ | :---------------------------------------------------------------- |
| logo          | control logo display content, parameters { collapse }             |
| menu          | control menu display content, parameters { meta, path, redirect } |
| left-header   | control the header left display content                           |
| right-header  | control the header right display content                          |
| bottom-header | control the header bottom display content                         |

## 参考

### 参考 meta

```ts
interface IRouteMeta extends RouteMeta {
  title?: string // the Menu title
  icon?: string // the Menu icon
  hidden?: boolean // whether to show in the Menu
  keepAlive?: boolean // whether the current route is keepAlive
}
```

### 参考路由

<<< @/docs/src/router/dev.ts

### 样式配置

[参考](../guide/theme#提供配置的参数)
