# Layout

> 基础的中后台布局界面组件，与 `vue-router` 高度绑定

## 使用

### 基础用法

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

### 插槽

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

## 配置

| 参数            | 说明                                                                | 类型    | 默认值                 |
| :-------------- | :------------------------------------------------------------------ | :------ | :--------------------- |
| routes          | 自定义生成侧边菜单栏的路由，同 `vue-router` 中 routes (仅扩展 meta) | array   | 从 `vue-router` 中获取 |
| transition      | 定义页面过度渐变动画                                                | string  | -                      |
| collapse        | 默认是否收起菜单                                                    | boolean | false                  |
| default-openeds | 当前打开的 sub-menu 的 index 的数组                                 | Array   | -                      |
| unique-opened   | 是否只保持一个子菜单的展开                                          | boolean | false                  |

## 插槽

| name          | 说明                                                         |
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
