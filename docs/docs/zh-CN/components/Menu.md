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

通过传入 `mode` 实现自定义菜单模式

::: demo
@/demo/Menu/mode.vue
:::

### 自定义路由

通过传入 `routes` 实现自定义路由显示

::: demo
@/demo/Menu/routes.vue
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
| background-color    | 菜单的背景色（仅支持 hex 格式）                      | string  | -                     | #ffffff                |
| text-color          | 菜单的文字颜色（仅支持 hex 格式）                    | string  | -                     | #303133                |
| active-text-color   | 当前激活菜单的文字颜色（仅支持 hex 格式）            | string  | -                     | #409EFF                |
| default-openeds     | 当前打开的 sub-menu 的 index 的数组                  | Array   | -                     | -                      |
| unique-opened       | 是否只保持一个子菜单的展开                           | boolean | -                     | false                  |
| menu-trigger        | 子菜单打开的触发方式(只在 mode 为 horizontal 时有效) | string  | hover / click         | hover                  |
| collapse-transition | 是否开启折叠动画                                     | boolean | -                     | true                   |

### 插槽

| name | 说明                                                 |
| :--- | :--------------------------------------------------- |
| -    | 控制菜单显示内容，参数为 { meta, path, redirect } 等 |
