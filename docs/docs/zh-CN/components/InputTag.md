---
title: InputTag
meta:
  - name: description
    content: 基于 `ElTag` `ElInput` 的输入多个标签的输入框
---

# InputTag

> 基于 `ElTag` `ElInput` 的输入多个标签的输入框

## 使用

### 基础用法

使用 `pro-input-tag` 支持 type="text" 的大部分配置

::: demo
@/demo/InputTag/base.vue
:::

### 通过 Enter 键触发

默认通过空格键触发输入，通过 `trigger` 为 `enter`时，将通过回车键触发输入

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

### 带输入建议

`pro-autocomplete-tag` 提供输入建议，支持 autocomplete 的大部分配置

::: demo
@/demo/AutocompleteTag/base.vue
:::

### InputTag 配置

| 参数            | 说明                     | 类型    | 可选值                            | 默认值 |
| :-------------- | :----------------------- | :------ | :-------------------------------- | :----- |
| v-model         | 绑定值                   | array   | -                                 | -      |
| trigger         | 触发输入按键             | string  | space / enter                     | space  |
| max             | 可输入的最大数量         | number  | -                                 | -      |
| size            | 尺寸                     | string  | medium / small / mini             | -      |
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

## AutocompleteTag

> 基于 `ElTag` `ElAutocomplete` 的输入多个标签的输入框

### AutocompleteTag 配置

| 参数                  | 说明                                   | 类型                            | 可选值                                                         | 默认值       |
| :-------------------- | :------------------------------------- | :------------------------------ | :------------------------------------------------------------- | :----------- |
| v-model               | 绑定值                                 | array                           | -                                                              | -            |
| trigger               | 触发输入按键                           | string                          | space / enter                                                  | space        |
| max                   | 可输入的最大数量                       | number                          | -                                                              | -            |
| size                  | 尺寸                                   | string                          | medium / small / mini                                          | -            |
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
| popper-append-to-body | 是否将下拉列表插入至 body 元素         | boolean                         | -                                                              | false        |
| highlight-first-item  | 是否默认突出显示远程搜索建议中的第一项 | boolean                         | -                                                              | false        |
