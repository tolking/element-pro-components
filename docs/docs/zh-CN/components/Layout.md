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

组件默认将从 `vue-router` 中获取生成菜单的路由信息，前往<pro-link to="/zh-CN/guide/router">路由和菜单</pro-link>查看路由相关使用

::: demo
@/demo/Layout/base.vue
:::

### 顶栏模式

通过配置 `mode="horizontal"` 作用于菜单实现顶栏模式

::: demo
@/demo/Layout/mode.vue
:::

### 自定义路由

通过传入 `routes` 实现自定义路由显示

::: demo
@/demo/Layout/routes.vue
:::

### 自定义过度动画

通过配置 `transition` 实现定义过度动画

::: tip 提示
当配置 `transition` 后，由于 `Transition` 组件限制，页面必须仅有一个根元素
:::

::: demo 可以通过路由中 `meta.transition` 配置当前路由的过度动画
@/demo/Layout/transition.vue
:::

### 自定缓存

通过配置 `keep-alive` 启用缓存，`include` `exclude` `max` 控制缓存内容

::: tip 提示
启用后默认将缓存所有页面

`include` `exclude` 匹配的是页面的 name

推荐将需要缓存的页面以 `Keep` 开头命名，然后配置 `:include="/^Keep/"` 使用
:::

::: demo
@/demo/Layout/keep-alive.vue
:::

### 自定义路由跳转

::: tip 提示
从 `1.2.0` 起，菜单将不兼容完整的 URL 地址跳转，需要通过自定义路由跳转实现
:::

首先应该配置 `:router="false"`, 然后通过 select 事件处理点击

::: demo
@/demo/Layout/router.vue
:::

### 自定义颜色

通过 CSS 变量配置菜单颜色

::: demo
@/demo/Layout/color.vue
:::

### 插槽

通过插槽实现更复杂的界面

::: demo
@/demo/Layout/slots.vue
:::

### 自定义 RouterView

通过默认插槽改写 RouterView

::: demo
@/demo/Layout/router-view.vue
:::

### 配置

| 参数                | 说明                                                    | 类型                    | 可选值                | 默认值                 |
| :------------------ | :------------------------------------------------------ | :---------------------- | :-------------------- | :--------------------- |
| fixed-header        | 是否固定页面头部                                        | boolean                 | -                     | true                   |
| transition          | 定义页面过度渐变动画                                    | string                  | -                     | -                      |
| keep-alive          | 是否启用缓存页面                                        | boolean                 | -                     | false                  |
| include             | 匹配需要缓存页面的 name，当 keep-alive 为 true 时生效   | string / array / RegExp | -                     | -                      |
| exclude             | 匹配不需要缓存页面的 name，当 keep-alive 为 true 时生效 | string / array / RegExp | -                     | -                      |
| max                 | 限制组件缓存的最大数量，当 keep-alive 为 true 时生效    | string / number         | -                     | -                      |
| routes              | 当前程序路由                                            | array                   | -                     | 从 `vue-router` 中获取 |
| mode                | 导航菜单模式                                            | string                  | horizontal / vertical | vertical               |
| collapse            | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）    | boolean                 | -                     | false                  |
| ellipsis            | 是否省略多余的子项（仅在横向模式生效）                  | boolean                 | —                     | true                   |
| default-openeds     | 当前打开的 sub-menu 的 index 的数组                     | Array                   | -                     | -                      |
| unique-opened       | 是否只保持一个子菜单的展开                              | boolean                 | -                     | false                  |
| menu-trigger        | 子菜单打开的触发方式(只在 mode 为 horizontal 时有效)    | string                  | hover / click         | hover                  |
| router              | 是否自动跳转路由                                        | boolean                 | —                     | true                   |
| collapse-transition | 是否开启折叠动画                                        | boolean                 | -                     | true                   |

### 事件

| 事件名 | 说明                | 参数                                                                            |
| ------ | ------------------- | ------------------------------------------------------------------------------- |
| select | 菜单激活回调        | index: 选中菜单项的 index, indexPath: 选中菜单项的 index path, item: 选中菜单项 |
| open   | sub-menu 展开的回调 | index: 打开的 sub-menu 的 index, indexPath: 打开的 sub-menu 的 index path       |
| close  | sub-menu 收起的回调 | index: 收起的 sub-menu 的 index, indexPath: 收起的 sub-menu 的 index path       |

### 插槽

| 插槽名        | 说明                                                         |
| :------------ | :----------------------------------------------------------- |
| default       | 自定义实现 RouterView                                        |
| logo          | 自定义 Logo，参数为 { collapse } collapse-当前菜单栏是否折叠 |
| menu          | 控制菜单显示内容，参数为 { meta, path, redirect } 等         |
| footer        | 页脚内容                                                     |
| header-left   | 头部左侧内容                                                 |
| header-right  | 头部右侧内容                                                 |
| header-bottom | 头部下面内容                                                 |
