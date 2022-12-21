---
title: Radio
meta:
  - name: description
    content: 封装单选框组件
---

# Radio

> 封装单选框组件

## 使用

### 基础用法

传入 data 数据将自动生成选项

::: demo
@/demo/Radio/base.vue
:::

### 控制不可选项目

将传入 data 数据中的某项设置为 `disabled: true` 即可

::: demo
@/demo/Radio/disabled.vue
:::

### 配置绑定数据键值

通过 config 配置数据键值。`value`- v-model 绑定的键值、`label`-显示键值、`disabled`-控制不可选的键值、`name`-原生 name 的键值

::: demo
@/demo/Radio/config.vue
:::

### 按钮样式

使用 `pro-radio-button` 显示按钮样式的多选框组

::: demo
@/demo/RadioButton/base.vue
:::

### Radio 配置

| 参数           | 说明                           | 类型    | 可选值                 | 默认值                                                                 |
| :------------- | :----------------------------- | :------ | :--------------------- | :--------------------------------------------------------------------- |
| v-model        | 绑定值                         | array   | -                      | -                                                                      |
| data           | 绑定数据                       | array   | -                      | -                                                                      |
| config         | 配置绑定数据键值               | object  | -                      | { value: 'value', label: 'label', disabled: 'disabled', name: 'name' } |
| size           | 尺寸                           | string  | large / default /small | -                                                                      |
| disabled       | 是否禁用                       | boolean | -                      | false                                                                  |
| text-color     | 按钮形式激活时的文本颜色       | string  | -                      | #ffffff                                                                |
| fill           | 按钮形式激活时的填充色和边框色 | string  | -                      | #409EFF                                                                |
| validate-event | 输入时是否触发表单的校验       | boolean | -                      | true                                                                   |

#### Radio 事件

| 名称   | 说明                   | 回调参数              |
| ------ | ---------------------- | --------------------- |
| change | 绑定值变化时触发的事件 | 选中的 Radio label 值 |

## RadioButton

> 封装单选框按钮组件

### RadioButton 配置

| 参数           | 说明                           | 类型    | 可选值                 | 默认值                                                                 |
| :------------- | :----------------------------- | :------ | :--------------------- | :--------------------------------------------------------------------- |
| v-model        | 绑定值                         | array   | -                      | -                                                                      |
| data           | 绑定数据                       | array   | -                      | -                                                                      |
| config         | 配置绑定数据键值               | object  | -                      | { value: 'value', label: 'label', disabled: 'disabled', name: 'name' } |
| size           | 尺寸                           | string  | large / default /small | -                                                                      |
| disabled       | 是否禁用                       | boolean | -                      | false                                                                  |
| text-color     | 按钮形式激活时的文本颜色       | string  | -                      | #ffffff                                                                |
| fill           | 按钮形式激活时的填充色和边框色 | string  | -                      | #409EFF                                                                |
| validate-event | 输入时是否触发表单的校验       | boolean | -                      | true                                                                   |

### RadioButton 事件

| 名称   | 说明                   | 回调参数              |
| ------ | ---------------------- | --------------------- |
| change | 绑定值变化时触发的事件 | 选中的 Radio label 值 |
