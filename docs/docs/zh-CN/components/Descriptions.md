---
title: Descriptions
meta:
  - name: description
    content: 列表形式展示多个字段
---

# Descriptions

> 列表形式展示多个字段

## 使用

### 基础用法

当 columns 绑定的是一个具有响应式的数组时，数组的变动会影响 Descriptions 变动（及动态 Descriptions）。如果不需要动态 Descriptions 推荐绑定一个普通数组

::: demo
@/demo/Descriptions/base.vue
:::

### 智能提示

通过辅助函数 `defineDescriptionsColumns` 提供智能提示

::: demo
@/demo/Descriptions/define.vue
:::

### 获取嵌套键值

支持直接对具有嵌套结构的对象或数组进行取值，仅需要配置 `prop`

::: demo
@/demo/Descriptions/nested.vue
:::

### 对齐方式

::: demo
@/demo/Descriptions/alignment.vue
:::

### 插槽

::: tip 提示
从 `1.2.0` 起，`[prop]` 相关插槽需要增加前缀 `detail-` 使用
:::

直接在模版中增加带 `detail-[prop]` 相关的插槽即可使用

::: demo
@/demo/Descriptions/slots.vue
:::

### TypeScript

`defineDescriptionsColumns` 支持传入一个泛型用来推断 `prop` 值

::: demo
@/demo/Descriptions/typescript.vue
:::

### 配置

| 参数        | 说明                                                                                   | 类型    | 可选值                 | 默认值     |
| :---------- | :------------------------------------------------------------------------------------- | :------ | :--------------------- | :--------- |
| columns     | 表单配置参考下面 `columns`                                                             | array   | -                      | -          |
| detail      | 显示的详情数据                                                                         | object  | -                      | -          |
| border      | 是否带有边框                                                                           | boolean | -                      | false      |
| column      | 一行显示的数量                                                                         | number  | -                      | 3          |
| direction   | 排列的方向                                                                             | string  | vertical / horizontal  | horizontal |
| size        | 列表的尺寸                                                                             | string  | large / default /small | -          |
| title       | 标题文本，显示在左上方                                                                 | string  | -                      | -          |
| extra       | 操作区文本，显示在右上方                                                               | string  | -                      | -          |
| align       | 列的内容对齐方式（如无 border，对标签和内容均生效）                                    | string  | left / center / right  | -          |
| label-align | 列的标签对齐方式，若不设置该项，则使用内容的对齐方式（如无 border，请使用 align 参数） | string  | left / center / right  | -          |

#### columns

| 参数           | 说明                                                                                                                                       | 类型             | 可选值                | 默认值 |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :--------------- | :-------------------- | :----- |
| prop           | 对应 detail 的字段名                                                                                                                       | string           | -                     | -      |
| label          | 标签文本                                                                                                                                   | string           | -                     | -      |
| span           | 列的数量                                                                                                                                   | number           | -                     | 1      |
| width          | 列的宽度，不同行相同列的宽度按最大值设定（如无 border ，宽度包含标签与内容）                                                               | string           | -                     | -      |
| minWidth       | 列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列（如无 border，宽度包含标签与内容） | string           | -                     | -      |
| align          | 列的内容对齐方式（如无 border，对标签和内容均生效）                                                                                        | string           | left / center / right | left   |
| labelAlign     | 列的标签对齐方式，若不设置该项，则使用内容的对齐方式（如无 border，请使用 align 参数）                                                     | string           | left / center / right | -      |
| className      | 列的内容自定义类名                                                                                                                         | string           | -                     | -      |
| labelClassName | 列的标签自定义类名                                                                                                                         | string           | -                     | -      |
| render         | 通过渲染函数实现简单的插槽功能                                                                                                             | function(detail) | -                     | -      |
| renderLabel    | 通过渲染函数实现简单的 Label 插槽功能                                                                                                      | function(column) | -                     | -      |

## 插槽

| 名称                | 说明                                          |
| ------------------- | --------------------------------------------- |
| -                   | 在尾部插入更多的描述信息                      |
| title               | 自定义标题文本，显示在左上方, 参数 { size }   |
| extra               | 自定义操作区文本，显示在右上方, 参数 { size } |
| detail-[prop]       | 当前这项的内容, 参数 { size, item }           |
| detail-[prop]-label | 当前这项的标签文本内容, 参数 { size, item }   |

::: tip 提示
[prop] 为 columns 中定义的 prop
:::
