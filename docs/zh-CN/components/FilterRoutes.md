---
title: FilterRoutes
meta:
  - name: description
    content: 通过关键词快速筛选匹配路由
---

# FilterRoutes

> 通过关键词快速筛选匹配路由

## 使用

### 基础用法

组件默认将从 `vue-router` 中获取路由生成路由，前往<pro-link to="/zh-CN/guide/router">路由和菜单</pro-link>查看路由相关使用

::: demo
@/demo/FilterRoutes/base.vue
:::

### 自定义路由

通过传入 `routes` 自定义路由显示

::: demo
@/demo/FilterRoutes/routes.vue
:::

### 自定插槽

通过默认插槽可以自定义备选项

::: demo
@/demo/FilterRoutes/slots.vue
:::

### 配置

| 参数            | 说明                                                             | 类型               | 可选值                 | 默认值                 |
| :-------------- | :--------------------------------------------------------------- | :----------------- | :--------------------- | :--------------------- |
| routes          | 当前程序路由                                                     | array              | -                      | 从 `vue-router` 中获取 |
| disabled        | 是否禁用                                                         | boolean            | -                      | false                  |
| size            | 尺寸                                                             | string             | large / default /small | -                      |
| clearable       | 是否可以清空选项                                                 | boolean            | -                      | false                  |
| name            | select input 的 name 属性                                        | string             | -                      | -                      |
| effect          | Tooltip 主题                                                     | string             | dark / light           | light                  |
| placeholder     | 占位符                                                           | string             | -                      | 请选择                 |
| no-match-text   | 搜索条件无匹配时显示的文字，也可以使用#empty 设置                | string             | -                      | 无匹配数据             |
| no-data-text    | 选项为空时显示的文字，也可以使用#empty 设置                      | string             | -                      | 无数据                 |
| teleported      | 是否将 Select 的下拉菜单 teleport 至 body                        | boolean            | -                      | true                   |
| persistent      | 选择下拉目时不活动同时`persistent` 是`false`，选择下拉目将被销毁 | boolean            | -                      | true                   |
| clear-icon      | 自定义清空图标的类名                                             | string / Component | -                      | CircleClose            |
| fit-input-width | 下拉框的宽度是否与输入框相同                                     | boolean            | —                      | false                  |
| suffix-icon     | 自定义后缀图标组件                                               | string / Component | —                      | ArrowUp                |
| validate-event  | 输入时是否触发表单的校验                                         | boolean            | -                      | true                   |

### 事件

| 名称           | 说明                                     | 类型                        |
| -------------- | ---------------------------------------- | --------------------------- |
| change         | 选中值发生变化时触发                     | (value: any) => void        |
| visible-change | 下拉框出现/隐藏时触发                    | (visible: boolean) => void  |
| remove-tag     | 多选模式下移除 tag 时触发                | (tagValue: any) => void     |
| clear          | 可清空的单选模式下用户点击清空按钮时触发 | () => void                  |
| blur           | 当 input 失去焦点时触发                  | (event: FocusEvent) => void |
| focus          | 当 input 获得焦点时触发                  | (event: FocusEvent) => void |

### 插槽

| 名称 | 说明         | 类型             |
| ---- | ------------ | ---------------- |
| -    | 自定插槽内容 | { item: object } |
