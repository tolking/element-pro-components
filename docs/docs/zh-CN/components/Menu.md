---
title: Menu
meta:
  - name: description
    content: 封装默认 Menu 通过传入路由或者自动获取路由生成导航
---

# Menu

> 封装默认 Menu 通过传入路由或者自动获取路由生成导航

## 使用

### 基础用法

组件默认将从 `vue-router` 中获取路由生成路由，前往<pro-link to="/zh-CN/guide/router">路由和菜单</pro-link>查看路由相关使用

::: demo
@/demo/Menu/base.vue
:::

### 模式

通过传入 `mode` 自定义菜单模式

::: demo
@/demo/Menu/mode.vue
:::

### 自定义路由

通过传入 `routes` 自定义路由显示

::: demo
@/demo/Menu/routes.vue
:::

### 自定义路由跳转

::: tip 提示
从 `1.2.0` 起，菜单将不兼容完整的 URL 地址跳转，需要通过自定义路由跳转实现
:::

首先应该配置 `:router="false"`, 然后通过 select 事件处理点击

::: demo
@/demo/Menu/router.vue
:::

### 配置颜色

通过 CSS 变量配置菜单颜色

::: demo
@/demo/Menu/color.vue
:::

### 使用插槽

::: tip 提示
从 `0.12.0` 起，菜单内部将默认使用 svgicon 实现。如果想继续使用 fonticon 可以通过下面这种方式使用插槽实现
:::

::: demo 通过默认插槽可以很方便的定义如何显示菜单内容
@/demo/Menu/slots.vue
:::

### 配置

| 参数                | 说明                                                 | 类型    | 可选值                | 默认值                 |
| :------------------ | :--------------------------------------------------- | :------ | :-------------------- | :--------------------- |
| routes              | 当前程序路由                                         | array   | -                     | 从 `vue-router` 中获取 |
| mode                | 模式                                                 | string  | horizontal / vertical | vertical               |
| collapse            | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用） | boolean | -                     | false                  |
| ellipsis            | 是否省略多余的子项（仅在横向模式生效）               | boolean | —                     | true                   |
| default-openeds     | 当前打开的 sub-menu 的 index 的数组                  | Array   | -                     | -                      |
| unique-opened       | 是否只保持一个子菜单的展开                           | boolean | -                     | false                  |
| menu-trigger        | 子菜单打开的触发方式(只在 mode 为 horizontal 时有效) | string  | hover / click         | hover                  |
| router              | 是否自动跳转路由                                     | boolean | —                     | true                   |
| collapse-transition | 是否开启折叠动画                                     | boolean | -                     | true                   |

### 事件

| 事件名 | 说明                | 参数                                                                            |
| ------ | ------------------- | ------------------------------------------------------------------------------- |
| select | 菜单激活回调        | index: 选中菜单项的 index, indexPath: 选中菜单项的 index path, item: 选中菜单项 |
| open   | sub-menu 展开的回调 | index: 打开的 sub-menu 的 index, indexPath: 打开的 sub-menu 的 index path       |
| close  | sub-menu 收起的回调 | index: 收起的 sub-menu 的 index, indexPath: 收起的 sub-menu 的 index path       |

### 插槽

| 名称 | 说明                                                 |
| :--- | :--------------------------------------------------- |
| -    | 控制菜单显示内容，参数为 { meta, path, redirect } 等 |
