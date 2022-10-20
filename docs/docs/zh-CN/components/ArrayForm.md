---
title: ArrayForm
meta:
  - name: description
    content: 封装表单组件实现通过配置动态生成数组表单
---

# ArrayForm

> 封装表单组件实现通过配置动态生成数组表单

::: tip 提示
ArrayForm 属于 Form 组件的增强，支持相同的配置，用于表单是一个数组的情况
:::

## 使用

### 基础用法

当 columns 绑定的是一个具有响应式的数组时，数组的变动会影响表单变动（及动态表单）。如果不需要动态表单推荐绑定一个普通数组

::: demo
@/demo/ArrayForm/base.vue
:::

### 智能提示

通过辅助函数 `defineFormColumns` `defineFormMenuColumns` `defineFormSubmit` 提供智能提示

::: demo
@/demo/ArrayForm/define.vue
:::

### 嵌套键值

支持直接对具有嵌套结构的对象或数组进行赋值，仅需要配置 `prop`

::: demo 当 `prop` 存在默认值时会阻止对嵌套键值赋值
@/demo/ArrayForm/nested.vue
:::

### 指定对应的组件

通过 columns 的 `component` 定义该项生成什么组件，要求对应组件可以通过 `v-model` 绑定值。通过 `props` 可以向组件中传值，通过 `props` 里面的 `slots` 可以向组件传递简单的 <pro-link to="https://v3.cn.vuejs.org/guide/render-function.html">渲染函数</pro-link>

::: demo
@/demo/ArrayForm/component.vue
:::

### 使用局部组件

通过 `component` 也可以直接传入局部组件 (请使用 `markRaw` 标记)

::: demo
@/demo/ArrayForm/local.vue
:::

### 使用插槽

直接在模版中增加带 `form-[prop]` 相关的插槽即可使用。虽然在启用插槽后可以通过 `v-model="form.slot"` 这种方式绑定值，但更推荐使用 `value` 与 `setValue`

::: demo
@/demo/ArrayForm/slots.vue
:::

### 配置按钮

通过 `menu` 配置按钮显示、文字、参数

按钮文字也可以通过 <pro-link to="/zh-CN/guide/i18n">国际化</pro-link> 来配置

::: demo
@/demo/ArrayForm/menu.vue
:::

### 嵌套数组表单

通过 columns 的 `children` 配置子数组表单，当然你也可以配置多层的 `children` 结构实现反复套娃

::: demo 通过 `max` 限制子表单的最大数量
@/demo/ArrayForm/sub.vue
:::

### 表单验证

像 el-form 一样可以通过 `rules` 配置表单验证。对于数组表单更推荐使用 columns 里面的 `rules` 字段实现验证。否则你需要通过 `${当前项的 index}.${当前的 prop}` 这种方式配置表单的验证

::: demo submit 方法第二个参数表示是否通过表单验证
@/demo/ArrayForm/rules.vue
:::

### 动态表单

如果传入的 `columns` 是一个响应性数据，动态的修改 columns 表单也会随之改变

::: demo
@/demo/ArrayForm/dynamically.vue
:::

### 栅格布局

与使用 `el-row` 和 `el-col` 组件相同 (`el-row` 对应 `pro-form`；`el-col` 对应 `columns`)，通过相关配置可以自由地组合布局。**当 `inline` 为 `true` 时无效**

::: demo
@/demo/ArrayForm/layout.vue
:::

### 对齐方式

通过设置 `label-position` 属性可以改变表单域标签的位置

::: demo 当断点是 `xs` 时，默认为 `top`；其余则是 `right`
@/demo/ArrayForm/label-position.vue
:::

### 异步表单

想要实现异步表单 columns 必须绑定一个动态数组

::: demo
@/demo/ArrayForm/async.vue
:::

### TypeScript

`defineFormColumns` 支持传入一个泛型用来推断 `prop` 值

::: demo
@/demo/ArrayForm/typescript.vue
:::

### 配置

| 参数                    | 说明                                                                    | 类型    | 可选值                                                               | 默认值 |
| :---------------------- | :---------------------------------------------------------------------- | :------ | :------------------------------------------------------------------- | :----- |
| v-model                 | 绑定值                                                                  | object  | -                                                                    | -      |
| columns                 | 表单配置参考下面 `columns`                                              | array   | -                                                                    | -      |
| menu                    | 按钮配置参考下面 `menu`                                                 | object  | -                                                                    | -      |
| rules                   | 表单验证规则                                                            | object  | -                                                                    | -      |
| max                     | 限制数组表单的最大数量                                                  | number  | -                                                                    | -      |
| label-position          | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width` | string  | right / left / top                                                   | right  |
| label-width             | 表单域标签的宽度，例如 '50px' 或 'auto'                                 | string  | -                                                                    | -      |
| label-suffix            | 表单域标签的后缀                                                        | string  | -                                                                    | -      |
| hide-required-asterisk  | 是否显示必填字段的标签旁边的红色星号                                    | boolean | -                                                                    | false  |
| show-message            | 是否显示校验错误信息                                                    | boolean | -                                                                    | true   |
| inline-message          | 是否以行内形式展示校验信息                                              | boolean | -                                                                    | false  |
| status-icon             | 是否在输入框中显示校验结果反馈图标                                      | boolean | -                                                                    | false  |
| validate-on-rule-change | 是否在 `rules` 属性改变后立即触发一次验证                               | boolean | -                                                                    | true   |
| size                    | 用于控制该表单内组件的尺寸                                              | string  | large / default /small                                               | -      |
| disabled                | 是否禁用该表单内的所有组件                                              | boolean | -                                                                    | false  |
| scroll-to-error         | 当校验失败时，滚动到第一个错误表单项                                    | boolean | -                                                                    | false  |
| gutter                  | 栅格间隔                                                                | number  | -                                                                    | 0      |
| justify                 | flex 布局下的水平排列方式                                               | string  | start / end / center / space-around / space-between / spacing-evenly | start  |
| align                   | flex 布局下的垂直排列方式                                               | string  | top / middle / bottom                                                | top    |

#### columns

| 参数          | 说明                                                                      | 类型               | 可选值                 | 默认值 |
| :------------ | :------------------------------------------------------------------------ | :----------------- | :--------------------- | :----- |
| prop          | v-model 绑定的字段名 (**必填，需要是唯一值**)                             | string             | -                      | -      |
| label         | 标签文本                                                                  | string             | -                      | -      |
| component     | 当前项对应的组件，可以直接传入局部组件                                    | string / Component | -                      | -      |
| props         | 传递的对应的组件的参数                                                    | object             | -                      | -      |
| children      | 实现子表单                                                                | array              | -                      | -      |
| max           | 与 children 一起使用，限制子表单的最大数量                                | number             | -                      | -      |
| labelWidth    | 表单域标签的宽度，例如 '50px' 或 'auto'                                   | string             | -                      | -      |
| required      | 是否必填，如不设置，则会根据校验规则自动生成                              | boolean            | -                      | false  |
| rules         | 表单验证规则                                                              | object / array     | -                      | -      |
| error         | 表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息 | string             | -                      | -      |
| showMessage   | 是否显示校验错误信息                                                      | boolean            | -                      | true   |
| inlineMessage | 以行内形式展示校验信息                                                    | boolean            | -                      | false  |
| size          | 用于控制该表单域下组件的尺寸                                              | string             | large / default /small | -      |
| span          | 栅格占据的列数                                                            | number             | -                      | 24     |
| offset        | 栅格左侧的间隔格数                                                        | number             | -                      | 0      |
| push          | 栅格向右移动格数                                                          | number             | -                      | 0      |
| pull          | 栅格向左移动格数                                                          | number             | -                      | 0      |
| xs            | `<768px` 响应式栅格数或者栅格属性对象                                     | number / object    | -                      | -      |
| sm            | `≥768px` 响应式栅格数或者栅格属性对象                                     | number / object    | -                      | -      |
| md            | `≥992px` 响应式栅格数或者栅格属性对象                                     | number / object    | -                      | -      |
| lg            | `≥1200px` 响应式栅格数或者栅格属性对象                                    | number / object    | -                      | -      |
| xl            | `≥1920px` 响应式栅格数或者栅格属性对象                                    | number / object    | -                      | -      |

::: tip 关于 props
props 的属性将全部传递给 component 指定的组件

- 对于存在连字符的属性，可以通过字符串包裹或者转换为驼峰结构
- 通过 `slots` 可以向组件传递简单的[渲染函数](https://v3.cn.vuejs.org/guide/render-function.html)
- **对于事件需要通过 `on[Event]` 驼峰这种形式绑定。如：`change` -> `onChange`, `input` -> `onInput`**

```js
props: {
  clearable: true,
  'prefix-icon': 'el-icon-search',
  suffixIcon: 'el-icon-date',
  slots: {
    prefix: () => h('i', { className: 'el-input__icon el-icon-search' }),
    append: () => '搜索'
  },
  onChange: e => console.log(e),
}
```

:::

#### menu 的参数

| 参数        | 说明                              | 类型    | 可选值 | 默认值              |
| :---------- | :-------------------------------- | :------ | :----- | :------------------ |
| submit      | 是否显示 submit 按钮              | boolean | -      | true                |
| submitText  | submit 按钮显示的文字             | string  | -      | Submit              |
| submitProps | submit 按钮的配置，参考 el-button | object  | -      | { type: 'primary' } |
| reset       | 是否显示 reset 按钮               | boolean | -      | true                |
| resetText   | 是否显示 reset 按钮显示的文字     | string  | -      | Reset               |
| resetProps  | reset 按钮的配置，参考 el-button  | object  | -      | -                   |

### 事件

| 事件名   | 说明                   | 参数                                           |
| -------- | ---------------------- | ---------------------------------------------- |
| submit   | submit 被点击后触发    | done, isValid, invalidFields                   |
| reset    | reset 按钮被点击后触发 | -                                              |
| validate | 任一表单项被校验后触发 | 被校验的表单项 prop 值, isValid, invalidFields |

### 方法

| 方法名        | 说明                                                                                                                                                                 | 参数                                                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| validate      | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object))                              |
| validateField | 对部分表单字段进行校验的方法                                                                                                                                         | Function(props: array \| string, callback: Function(errorMessage: string)) |
| resetFields   | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果                                                                                                           | -                                                                          |
| scrollToField | 滚动到指定表单字段                                                                                                                                                   | Function(prop: string)                                                     |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果                                                             | Function(props: array \| string)                                           |

### 插槽

| 名称              | 说明                                   | 类型                                                                             |
| :---------------- | :------------------------------------- | :------------------------------------------------------------------------------- |
| -                 | 在底部菜单前插入的任意内容             | -                                                                                |
| menu-left         | 表单底部按钮左侧                       | { loading: boolean }                                                             |
| menu-right        | 表单底部按钮右侧                       | { loading: boolean }                                                             |
| form-[prop]       | 当前这项的 Form Item 的内容            | { item: object, indexes?: number[], value: any, setValue: (value: any) => void } |
| form-[prop]-label | 当前这项的标签文本的内容               | { item: object, indexes?: number[] }                                             |
| form-[prop]-error | 当前这项的自定义表单校验信息的显示方式 | { error, item: object, indexes?: number[] }                                      |

::: tip 提示
[prop] 为 columns 中定义的 prop
:::
