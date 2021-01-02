---
title: Layout
---

# Layout

> 基础的中后台布局界面组件，与 `vue-router` 高度绑定

## 使用

**效果**

TODO: 截图

@[code lang=vue](@/example/src/layout/layout.vue)

## 配置

### routes (可选)

自定义生成侧边菜单栏的路由

::: tip 提示如果没有传值，将自动从 `vue-router` 中获取路由并排除 `meta: { hidden: true }` 的路由 :::

类型:

仅扩展 meta，其它同 `vue-router`

```ts
interface ProRouteMeta extends RouteMeta {
  title?: string // 用于显示菜单标题
  icon?: string // 用于显示菜单图标
  hidden?: boolean // 用于判断是否显示
  keepAlive?: boolean // 控制 keepAlive
}
```

##### 参考

@[code](@/example/src/router/index.ts)

## 插槽

| name          | 说明                                                         |
| :------------ | :----------------------------------------------------------- |
| logo          | 自定义 Logo，参数为 { collapse } collapse-当前菜单栏是否折叠 |
| menu          | 控制菜单显示，参数为 { meta, path, redirect } 等             |
| left-header   | 头部左侧内容                                                 |
| right-header  | 头部右侧内容                                                 |
| bottom-header | 头部下面内容                                                 |

## 样式配置

[参考](../guide/theme#提供配置的参数)
