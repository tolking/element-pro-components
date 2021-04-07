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

## Props

| Name            | Description                                            | Type    | Default           |
| :-------------- | :----------------------------------------------------- | :------ | :---------------- |
| routes          | current routes                                         | array   | from `vue-router` |
| transition      | the animation name of transition pages                 | string  | -                 |
| collapse        | whether the menu is collapsed                          | boolean | false             |
| default-openeds | array that contains keys of currently active sub-menus | Array   | -                 |
| unique-opened   | whether only one sub-menu can be active                | boolean | false             |

## Slots

| Name          | Description                                                  |
| :------------ | :----------------------------------------------------------- |
| logo          | 自定义 Logo，参数为 { collapse } collapse-当前菜单栏是否折叠 |
| menu          | 控制菜单显示内容，参数为 { meta, path, redirect } 等         |
| left-header   | 头部左侧内容                                                 |
| right-header  | 头部右侧内容                                                 |
| bottom-header | 头部下面内容                                                 |

## 样式配置

[参考](../guide/theme#提供配置的参数)

## 参考

- 参考 meta

```ts
interface IRouteMeta extends RouteMeta {
  title?: string // 用于显示菜单标题
  icon?: string // 用于显示菜单图标
  hidden?: boolean // 用于判断是否显示 (仅适用于默认路由)
  keepAlive?: boolean // 控制 keepAlive
}
```

- 参考路由

<<< @/docs/src/router/dev.ts
