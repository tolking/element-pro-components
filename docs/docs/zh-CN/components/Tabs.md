---
title: Tabs
meta:
  - name: description
    content: 根据浏览记录自动记录历史 tab
---

# Tabs

> 根据浏览记录自动记录历史 tab

## 使用

### 基础用法

将自动记录路由变化

::: demo
@/demo/Tabs/base.vue
:::

### 风格类型

::: demo
@/demo/Tabs/type.vue
:::

### 保持隐藏路由

默认自动关闭具有 `hidden` 标识的路由，可以通过 `keep-hidden-route` 阻止这种行为

::: demo
@/demo/Tabs/keep-hidden-route.vue
:::

### 外部调用关闭

通过 `ref` 绑定 `Tabs` 进而通过外部调用关闭 tab 页

::: demo `const tabs = inject('tabs')` 由顶层 `Layout` 注入 [参考](https://github.com/tolking/element-pro-components/blob/master/docs/src/layout/Layout.vue)
@/demo/Tabs/ref.vue
:::

### 增加标签之前

通过 `before-add` 钩子在标签增加前执行一些操作，若返回 false 或者返回 Promise 且被 reject，则阻止增加标签

::: demo
@/demo/Tabs/before-add.vue
:::

### 切换标签之前

通过 `before-leave` 钩子在标签切换前执行一些操作，若返回 false 或者返回 Promise 且被 reject，则阻止切换标签

::: demo
@/demo/Tabs/before-leave.vue
:::

### 配置

| 参数              | 说明                                                                        | 类型                                                  | 可选值                      | 默认值 |
| ----------------- | --------------------------------------------------------------------------- | ----------------------------------------------------- | --------------------------- | ------ |
| type              | 风格类型                                                                    | string                                                | card / border-card          | -      |
| tab-position      | 标签位置                                                                    | string                                                | top / right / bottom / left | top    |
| stretch           | 标签的宽度是否自撑开                                                        | boolean                                               | -                           | false  |
| keep-hidden-route | 是否保持具有 hidden 标识的路由存在，默认自动关闭                            | boolean                                               | -                           | false  |
| before-add        | 增加标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止增加。 | Function({ route, oldPath, list, close, closeOther }) | -                           | -      |
| before-leave      | 切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。 | Function(activeName, oldActiveName)                   | -                           | -      |

### 事件

| 事件名     | 说明                    | 参数                                   |
| ---------- | ----------------------- | -------------------------------------- |
| tab-click  | tab 被选中时触发        | (pane: `TabsPaneContext`, ev: `Event`) |
| tab-change | `activeName` 变动后触发 | (path name)                            |
| tab-remove | 关闭时触发              | (path name)                            |

### 方法

| 方法名     | 说明                               | 参数                      |
| ---------- | ---------------------------------- | ------------------------- |
| close      | 从 tabs 中关闭指定路由的页面       | path (需要关闭页面的路由) |
| closeOther | 从 tabs 中关闭除当前路由的其它路由 | -                         |
