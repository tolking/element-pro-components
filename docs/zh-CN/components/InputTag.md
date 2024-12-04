---
title: InputTag
meta:
  - name: description
    content: 基于 `ElTag` `ElInput` 的输入多个标签的输入框
---

# InputTag

> 基于 `ElTag` `ElInput` 的输入多个标签的输入框

::: tip 提示
你也可以选择 ElInputTag 替代这个组件
:::

## 使用

### 基础用法

使用 `pro-input-tag` 支持 type="text" 的大部分配置

::: demo
@/demo/InputTag/base.vue
:::

### 触发方式

::: tip 提示
自 `1.0.0` 起，默认触发方式调整为 `enter`
:::

通过 `trigger` 配置触发方式，支持 `space` `enter`

::: demo
@/demo/InputTag/trigger.vue
:::

### 限制输入数量

通过 `max` 可以配置可以输入标签的最大数量

::: demo
@/demo/InputTag/max.vue
:::

### 尺寸

可通过 `size` 属性指定输入框和标签的尺寸

::: demo
@/demo/InputTag/size.vue
:::

### 配置

| 参数            | 说明                     | 类型    | 可选值                            | 默认值 |
| :-------------- | :----------------------- | :------ | :-------------------------------- | :----- |
| v-model         | 绑定值                   | array   | -                                 | -      |
| trigger         | 触发输入按键             | string  | space / enter                     | enter  |
| max             | 可输入的最大数量         | number  | -                                 | -      |
| size            | 尺寸                     | string  | large / default /small            | -      |
| type            | tag 类型                 | string  | success / info / warning / danger | -      |
| hit             | tag 是否有边框描边       | boolean | -                                 | false  |
| color           | tag 背景色               | string  | -                                 | -      |
| effect          | tag 主题                 | string  | dark / light / plain              | light  |
| maxlength       | 原生属性，最大输入长度   | number  | -                                 | -      |
| minlength       | 原生属性，最小输入长度   | number  | -                                 | -      |
| show-word-limit | 是否显示输入字数统计     | boolean | -                                 | false  |
| placeholder     | 输入框占位文本           | string  | -                                 | -      |
| clearable       | 是否可清空               | boolean | -                                 | false  |
| disabled        | 禁用                     | boolean | -                                 | false  |
| prefix-icon     | 输入框头部图标           | string  | -                                 | -      |
| suffix-icon     | 输入框尾部图标           | string  | -                                 | -      |
| autocomplete    | 原生属性，自动补全       | string  | on / off                          | off    |
| name            | 原生属性                 | string  | -                                 | -      |
| readonly        | 原生属性，是否只读       | boolean | -                                 | false  |
| autofocus       | 原生属性，自动获取焦点   | boolean | -                                 | false  |
| form            | 原生属性                 | string  | -                                 | -      |
| label           | 输入框关联的 label 文字  | string  | -                                 | -      |
| tabindex        | 输入框的 tabindex        | string  | -                                 | -      |
| validate-event  | 输入时是否触发表单的校验 | boolean | -                                 | true   |
| input-style     | input 元素的样式         | object  | -                                 | -      |

### 事件

| 事件名     | 说明               | 参数            |
| ---------- | ------------------ | --------------- |
| input      | Input 值改变时触发 | (value: string) |
| tag-add    | 新增 tag 时触发    | (value: string) |
| tag-remove | 关闭 tag 时触发    | (value: string) |
