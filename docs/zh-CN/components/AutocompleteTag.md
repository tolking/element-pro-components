---
title: AutocompleteTag
meta:
  - name: description
    content: 基于 `ElTag` `ElAutocomplete` 的输入多个标签的输入框
---

# AutocompleteTag

> 基于 `ElTag` `ElAutocomplete` 的输入多个标签的输入框

## 使用

### 基础用法

`pro-autocomplete-tag` 提供输入建议，支持 autocomplete 的大部分配置

::: demo
@/demo/AutocompleteTag/base.vue
:::

### 配置

| 参数                  | 说明                                   | 类型                            | 可选值                                                         | 默认值       |
| :-------------------- | :------------------------------------- | :------------------------------ | :------------------------------------------------------------- | :----------- |
| v-model               | 绑定值                                 | array                           | -                                                              | -            |
| trigger               | 触发输入按键                           | string                          | space / enter                                                  | enter        |
| max                   | 可输入的最大数量                       | number                          | -                                                              | -            |
| size                  | 尺寸                                   | string                          | large / default /small                                         | -            |
| type                  | tag 类型                               | string                          | success / info / warning / danger                              | -            |
| hit                   | tag 是否有边框描边                     | boolean                         | -                                                              | false        |
| color                 | tag 背景色                             | string                          | -                                                              | -            |
| effect                | tag 主题                               | string                          | dark / light / plain                                           | light        |
| placeholder           | 输入框占位文本                         | string                          | -                                                              | -            |
| disabled              | 禁用                                   | boolean                         | -                                                              | false        |
| value-key             | 输入建议对象中用于显示的键名           | string                          | -                                                              | value        |
| debounce              | 获取输入建议的去抖延时                 | number                          | -                                                              | 300          |
| placement             | 菜单弹出位置                           | string                          | top / top-start / top-end / bottom / bottom-start / bottom-end | bottom-start |
| fetch-suggestions     | 返回输入建议的方法                     | Function(queryString, callback) | -                                                              | -            |
| popper-class          | Autocomplete 下拉列表的类名            | string                          | -                                                              | -            |
| trigger-on-focus      | 是否在输入框 focus 时显示建议列表      | boolean                         | -                                                              | true         |
| name                  | 原生属性                               | string                          | -                                                              | -            |
| select-when-unmatched | 按下回车是否触发 `select` 事件         | boolean                         | -                                                              | false        |
| label                 | 输入框关联的 label 文字                | string                          | -                                                              | -            |
| prefix-icon           | 输入框头部图标                         | string                          | -                                                              | -            |
| suffix-icon           | 输入框尾部图标                         | string                          | -                                                              | -            |
| hide-loading          | 是否隐藏远程加载时的加载图标           | boolean                         | -                                                              | false        |
| teleported            | 是否将下拉列表插入至 body 元素         | boolean                         | -                                                              | true         |
| highlight-first-item  | 是否默认突出显示远程搜索建议中的第一项 | boolean                         | -                                                              | false        |
| fit-input-width       | 下拉框的宽度是否与输入框相同           | boolean                         | —                                                              | false        |

### 事件

| 事件名     | 说明               | 参数            |
| ---------- | ------------------ | --------------- |
| input      | Input 值改变时触发 | (value: string) |
| tag-add    | 新增 tag 时触发    | (value: string) |
| tag-remove | 关闭 tag 时触发    | (value: string) |
