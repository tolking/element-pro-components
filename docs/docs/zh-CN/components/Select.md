---
title: Select
meta:
  - name: description
    content: 封装选择器
---

# Select

> 封装选择器

## 使用

### 基础用法

传入 data 数据，自动生成选项

::: demo
@/demo/Select/base.vue
:::

### 控制不可选项目

将传入 data 数据中的某项设置为 `disabled: true` 即可

::: demo
@/demo/Select/disabled.vue
:::

### 配置绑定数据键值

通过 config 配置数据键值。`value`- v-model 绑定的键值、`label`-显示键值、`disabled`-控制不可选的键值、`children`-子分组的键值

::: demo
@/demo/Select/config.vue
:::

### 使用插槽

通过默认插槽可以自定义备选项

::: demo
@/demo/Select/slots.vue
:::

### 开启多选

当 `multiple` 为 `true` 时，启用多选。此时绑定的 model-value 为数组格式

::: demo
@/demo/Select/multiple.vue
:::

### 分组

通过 `data` 中的 `children` 字段配置可以轻松生成分组展示 (如果有多层分组，推荐使用 `TreeSelect`)

::: demo
@/demo/Select/group.vue
:::

### 配置

| 参数                 | 说明                                                               | 类型               | 可选值                            | 默认值                                                                         |
| :------------------- | :----------------------------------------------------------------- | :----------------- | :-------------------------------- | :----------------------------------------------------------------------------- |
| v-model              | 绑定值                                                             | array              | -                                 | -                                                                              |
| data                 | 绑定数据                                                           | array              | -                                 | -                                                                              |
| config               | 配置绑定数据键值                                                   | object             | -                                 | { value: 'value', label: 'label', disabled: 'disabled', children: 'children' } |
| multiple             | 是否多选                                                           | boolean            | -                                 | false                                                                          |
| disabled             | 是否禁用                                                           | boolean            | -                                 | false                                                                          |
| size                 | 尺寸                                                               | string             | large / default /small            | -                                                                              |
| clearable            | 是否可以清空选项                                                   | boolean            | -                                 | false                                                                          |
| collapse-tags        | 多选时是否将选中值按文字的形式展示                                 | boolean            | -                                 | false                                                                          |
| multiple-limit       | 多选时用户最多可以选择的项目数，为 0 则不限制                      | number             | -                                 | 0                                                                              |
| name                 | select input 的 name 属性                                          | string             | -                                 | -                                                                              |
| autocomplete         | select input 的 autocomplete 属性                                  | string             | on / off                          | off                                                                            |
| placeholder          | 占位符                                                             | string             | -                                 | 请选择                                                                         |
| filterable           | 是否可搜索                                                         | boolean            | -                                 | false                                                                          |
| allow-create         | 是否允许用户创建新条目，需配合 filterable 使用                     | boolean            | -                                 | false                                                                          |
| filter-method        | 自定义搜索方法                                                     | function           | -                                 | -                                                                              |
| remote               | 是否为远程搜索                                                     | boolean            | -                                 | false                                                                          |
| remote-method        | 远程搜索方法                                                       | function           | -                                 | -                                                                              |
| loading              | 是否正在从远程获取数据                                             | boolean            | -                                 | false                                                                          |
| loading-text         | 远程加载时显示的文字                                               | string             | -                                 | 加载中                                                                         |
| no-match-text        | 搜索条件无匹配时显示的文字，也可以使用#empty 设置                  | string             | -                                 | 无匹配数据                                                                     |
| no-data-text         | 选项为空时显示的文字，也可以使用#empty 设置                        | string             | -                                 | 无数据                                                                         |
| popper-class         | Select 下拉框的类名                                                | string             | -                                 | -                                                                              |
| reserve-keyword      | 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词           | boolean            | -                                 | false                                                                          |
| default-first-option | 在输入框按下回车，选择第一个匹配项。配合 filterable 或 remote 使用 | boolean            | -                                 | false                                                                          |
| teleported           | 是否将 Select 的下拉菜单 teleport 至 body                          | boolean            | -                                 | true                                                                           |
| automatic-dropdown   | 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单      | boolean            | -                                 | false                                                                          |
| clear-icon           | 自定义清空图标的类名                                               | string / Component | -                                 | CircleClose                                                                    |
| fit-input-width      | 下拉框的宽度是否与输入框相同                                       | boolean            | —                                 | false                                                                          |
| suffix-icon          | 自定义后缀图标组件                                                 | string / Component | —                                 | ArrowUp                                                                        |
| tag-type             | 标签类型                                                           | string             | success / info / warning / danger | info                                                                           |

### 事件

| 名称           | 说明                                     | 回调参数                      |
| -------------- | ---------------------------------------- | ----------------------------- |
| change         | 选中值发生变化时触发                     | 目前的选中值                  |
| visible-change | 下拉框出现/隐藏时触发                    | 出现则为 true，隐藏则为 false |
| remove-tag     | 多选模式下移除 tag 时触发                | 移除的 tag 值                 |
| clear          | 可清空的单选模式下用户点击清空按钮时触发 | —                             |
| blur           | 当 input 失去焦点时触发                  | (event: Event)                |
| focus          | 当 input 获得焦点时触发                  | (event: Event)                |

### 插槽

| 名称 | 说明                          |
| ---- | ----------------------------- |
| -    | 自定插槽内容，参数为 { data } |
