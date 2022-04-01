---
title: Card
meta:
  - name: description
    content: 将内容至于卡片中展示同时支持简单的布局
---

# Card

> 将内容至于卡片中展示同时支持简单的布局

## 使用

### 基础用法

当单独使用时就和直接使用 ElCard 无多大差别

::: demo
@/demo/Card/base.vue
:::

### 阴影

通过 `shadow` 属性设置卡片阴影出现的时机

::: demo
@/demo/Card/shadow.vue
:::

## 幽灵模式

启用幽灵模式可以让背景边框透明，同时 body 的 padding 也会变为 0

::: demo
@/demo/Card/ghost.vue
:::

### 栅格布局

与使用 `el-row` 和 `el-col` 组件相同 (`el-row` 对应外部的 `pro-card`；`el-col` 对应嵌套的 `pro-card`)，通过相关配置可以自由地组合布局

::: demo
@/demo/Card/layout.vue
:::

### 方向

通过 `direction` 改变栅格布局排序的方向

::: demo
@/demo/Card/direction.vue
:::

### 分割卡片

分割卡片是对栅格布局的增强

::: demo
@/demo/Card/split.vue
:::

### 嵌套

通过对 Card 的嵌套和灵活使用实现更复杂的布局

::: demo
@/demo/Card/nested.vue
:::

### 配置

| 参数       | 说明                                   | 类型                    | 可选值                                                               | 默认值                |
| :--------- | :------------------------------------- | :---------------------- | :------------------------------------------------------------------- | :-------------------- |
| header     | 卡片的标题                             | string                  | —                                                                    | —                     |
| body-style | body 的样式                            | string / object / array | —                                                                    | `{ padding: '20px' }` |
| shadow     | 设置阴影显示时机                       | string                  | always / hover / never                                               | always                |
| ghost      | 是否是幽灵模式，及将背景边框透明       | boolean                 | -                                                                    | false                 |
| split      | 是否分割卡片，当内部嵌套 Card 时生效   | boolean                 | -                                                                    | false                 |
| gutter     | 栅格间隔，当内部嵌套 Card 时生效       | number                  | -                                                                    | 0                     |
| justify    | 水平排列方式，当内部嵌套 Card 时生效   | string                  | start / end / center / space-around / space-between / spacing-evenly | start                 |
| align      | 垂直排列方式，当内部嵌套 Card 时生效   | string                  | top / middle / bottom                                                | top                   |
| direction  | 主轴的方向，当内部嵌套 Card 时生效     | string                  | row / row-reverse / column / column-reverse                          | row                   |
| span       | 栅格占据的列数                         | number                  | -                                                                    | -                     |
| offset     | 栅格左侧的间隔格数                     | number                  | -                                                                    | 0                     |
| push       | 栅格向右移动格数                       | number                  | -                                                                    | 0                     |
| pull       | 栅格向左移动格数                       | number                  | -                                                                    | 0                     |
| xs         | `<768px` 响应式栅格数或者栅格属性对象  | number / object         | -                                                                    | -                     |
| sm         | `≥768px` 响应式栅格数或者栅格属性对象  | number / object         | -                                                                    | -                     |
| md         | `≥992px` 响应式栅格数或者栅格属性对象  | number / object         | -                                                                    | -                     |
| lg         | `≥1200px` 响应式栅格数或者栅格属性对象 | number / object         | -                                                                    | -                     |
| xl         | `≥1920px` 响应式栅格数或者栅格属性对象 | number / object         | -                                                                    | -                     |

## 插槽

| 插槽名 | 说明           |
| ------ | -------------- |
| —      | 自定义默认内容 |
| header | 自定义标题内容 |
