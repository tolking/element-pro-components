---
title: Search
meta:
  - name: description
    content: 封装搜索组件实现通过配置动态生成表单
---

# Search

> 封装搜索组件实现通过配置动态生成表单

::: tip 提示
Search 组件基于 <pro-link to="/zh-CN/components/form">Form</pro-link> 组件实现。

最主要的区别是 Search 组件会为 columns 属性的每一个值增加默认布局参数 `{ xs: 24, md: 12, lg: 8, xl: 6 }`；

另外 [prop] 相关的插槽也由 `form-[prop]` 更改为 `search-[prop]`
:::

## 使用

### 基础用法

::: demo
@/demo/Search/base.vue
:::

### 智能提示

通过辅助函数 `defineSearchColumns` `defineSearchMenuColumns` `defineSearchSubmit` 提供智能提示

::: demo
@/demo/Search/define.vue
:::

### 使用插槽

直接在模版中增加带 `search-[prop]` 相关的插槽即可使用。虽然在启用插槽后可以通过 `v-model="form.slot"` 这种方式绑定值，但更推荐使用 `value` 与 `setValue`

::: demo
@/demo/Search/slots.vue
:::

### TypeScript

`defineSearchColumns` 支持传入一个泛型用来推断 `prop` 值；`defineComponentProps` 支持传入一个泛型用来辅助输入 `props` 值

::: demo
@/demo/Search/typescript.vue
:::

### 配置

| 参数                     | 说明                                                                                                                                                 | 类型             | 可选值                                                               | 默认值                           |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------- | :------------------------------------------------------------------- | :------------------------------- |
| v-model                  | 绑定值                                                                                                                                               | object / array   | -                                                                    | -                                |
| columns                  | 表单配置参考下面 `columns`                                                                                                                           | array            | -                                                                    | -                                |
| menu                     | 按钮配置参考下面 `menu`                                                                                                                              | object           | -                                                                    | -                                |
| config                   | 每项的默认布局配置                                                                                                                                   | object           | -                                                                    | { xs: 24, md: 12, lg: 8, xl: 6 } |
| rules                    | 表单验证规则                                                                                                                                         | object           | -                                                                    | -                                |
| inline                   | 行内表单模式                                                                                                                                         | boolean          | -                                                                    | false                            |
| array                    | 是否启用数组表单                                                                                                                                     | boolean          |                                                                      | -                                |
| max                      | 限制数组表单的最大数量                                                                                                                               | number           | -                                                                    | -                                |
| label-position           | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width`                                                                              | string           | right / left / top                                                   | right                            |
| label-width              | 表单域标签的宽度，例如 '50px' 或 'auto'                                                                                                              | string           | -                                                                    | -                                |
| label-suffix             | 表单域标签的后缀                                                                                                                                     | string           | -                                                                    | -                                |
| hide-required-asterisk   | 是否显示必填字段的标签旁边的红色星号                                                                                                                 | boolean          | -                                                                    | false                            |
| show-message             | 是否显示校验错误信息                                                                                                                                 | boolean          | -                                                                    | true                             |
| inline-message           | 是否以行内形式展示校验信息                                                                                                                           | boolean          | -                                                                    | false                            |
| status-icon              | 是否在输入框中显示校验结果反馈图标                                                                                                                   | boolean          | -                                                                    | false                            |
| validate-on-rule-change  | 是否在 `rules` 属性改变后立即触发一次验证                                                                                                            | boolean          | -                                                                    | true                             |
| size                     | 用于控制该表单内组件的尺寸                                                                                                                           | string           | large / default /small                                               | -                                |
| disabled                 | 是否禁用该表单内的所有组件                                                                                                                           | boolean          | -                                                                    | false                            |
| scroll-to-error          | 当校验失败时，滚动到第一个错误表单项                                                                                                                 | boolean          | -                                                                    | false                            |
| scroll-into-view-options | 当校验有失败结果时，滚动到第一个失败的表单项目 可通过 [scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) 配置 | object / boolean | —                                                                    | -                                |
| gutter                   | 栅格间隔                                                                                                                                             | number           | -                                                                    | 0                                |
| justify                  | flex 布局下的水平排列方式                                                                                                                            | string           | start / end / center / space-around / space-between / spacing-evenly | start                            |
| align                    | flex 布局下的垂直排列方式                                                                                                                            | string           | top / middle / bottom                                                | top                              |

#### columns

| 参数          | 说明                                                                                                        | 类型                      | 可选值                                    | 默认值 |
| :------------ | :---------------------------------------------------------------------------------------------------------- | :------------------------ | :---------------------------------------- | :----- |
| prop          | v-model 绑定的字段名 (**需要是唯一值**)                                                                     | string                    | -                                         | -      |
| label         | 标签文本                                                                                                    | string                    | -                                         | -      |
| component     | 当前项对应的组件，可以直接传入局部组件                                                                      | string / Component        | -                                         | -      |
| props         | 传递的对应的组件的参数                                                                                      | object                    | -                                         | -      |
| modelKey      | 当前项对应的组件的 `v-model` 绑定的字段名                                                                   | string / [string, string] | -                                         | -      |
| children      | 分组表单或子表单内容                                                                                        | array                     | -                                         | -      |
| type          | children 内部表单的类型                                                                                     | string                    | array / group / tabs / collapse / steps   | array  |
| max           | 限制 `type=array` 时子表单的最大数量                                                                        | number                    | -                                         | -      |
| show          | 是否在表单中显示当前项                                                                                      | boolean                   | -                                         | true   |
| labelWidth    | 表单域标签的宽度，例如 '50px' 或 'auto'                                                                     | string                    | -                                         | -      |
| labelPosition | 表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性 默认会继承 Form的label-position | string                    | left / right / top                        | -      |
| required      | 是否必填，如不设置，则会根据校验规则自动生成                                                                | boolean                   | -                                         | false  |
| rules         | 表单验证规则                                                                                                | object / array            | -                                         | -      |
| error         | 表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息                                   | string                    | -                                         | -      |
| showMessage   | 是否显示校验错误信息                                                                                        | boolean                   | -                                         | true   |
| inlineMessage | 以行内形式展示校验信息                                                                                      | boolean                   | -                                         | false  |
| size          | 用于控制该表单域下组件的尺寸                                                                                | string                    | large / default /small                    | -      |
| span          | 栅格占据的列数                                                                                              | number                    | -                                         | 24     |
| offset        | 栅格左侧的间隔格数                                                                                          | number                    | -                                         | 0      |
| push          | 栅格向右移动格数                                                                                            | number                    | -                                         | 0      |
| pull          | 栅格向左移动格数                                                                                            | number                    | -                                         | 0      |
| xs            | `<768px` 响应式栅格数或者栅格属性对象                                                                       | number / object           | -                                         | -      |
| sm            | `≥768px` 响应式栅格数或者栅格属性对象                                                                       | number / object           | -                                         | -      |
| md            | `≥992px` 响应式栅格数或者栅格属性对象                                                                       | number / object           | -                                         | -      |
| lg            | `≥1200px` 响应式栅格数或者栅格属性对象                                                                      | number / object           | -                                         | -      |
| xl            | `≥1920px` 响应式栅格数或者栅格属性对象                                                                      | number / object           | -                                         | -      |
| disabled      | 是否禁用, 当 `type=tabs` 或者 `type=collapse` 时生效                                                        | boolean                   | —                                         | false  |
| closable      | 标签是否可关闭, 当 `type=tabs` 时生效                                                                       | boolean                   | —                                         | false  |
| lazy          | 标签是否延迟渲染, 当 `type=tabs` 时生效                                                                     | boolean                   | —                                         | false  |
| description   | 分步描述文案, 当 `type=steps` 时生效                                                                        | string                    | —                                         | —      |
| icon          | 自定义分步图标, 当 `type=steps` 时生效                                                                      | string / Component        | —                                         | —      |
| status        | 设置当前步骤的状态, 当 `type=steps` 时生效                                                                  | string                    | wait / process / finish / error / success | —      |

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

| 参数        | 说明                                | 类型    | 默认值              |
| :---------- | :---------------------------------- | :------ | :------------------ |
| submit      | 是否显示 submit 按钮                | boolean | true                |
| submitText  | submit 按钮显示的文字               | string  | Search              |
| submitProps | submit 按钮的配置，参考 `el-button` | object  | { type: 'primary' } |
| reset       | 是否显示 reset 按钮                 | boolean | true                |
| resetText   | reset 按钮显示的文字                | string  | Reset               |
| resetProps  | reset 按钮的配置，参考 `el-button`  | object  | -                   |
| prevText    | prev 按钮显示的文字                 | string  | Prev                |
| prevProps   | prev 按钮的配置，参考 `el-button`   | object  | -                   |
| nextText    | next 按钮显示的文字                 | string  | Next                |
| nextProps   | next 按钮的配置，参考 `el-button`   | object  | -                   |

### 事件

| 事件名          | 说明                   | 参数                                                            |
| --------------- | ---------------------- | --------------------------------------------------------------- |
| submit          | submit 被点击后触发    | (done: () => void, isValid: boolean, invalidFields) => void     |
| reset           | reset 按钮被点击后触发 | () => void                                                      |
| validate        | 任一表单项被校验后触发 | (prop: FormItemProp, isValid: boolean, message: string) => void |
| add-item        | add 被点击后触发       | (indexes: number[]) => void                                     |
| remove-item     | remove 被点击后触发    | (indexes: number[]) => void                                     |
| collapse-change | collapse 改变时触发    | (active: CollapseModelValue) => void                            |
| tab-change      | tab 改变时触发         | (name: TabPaneName) => void                                     |
| step-change     | step 改变时触发        | (active: string \| number) => void                              |

### 方法

| 方法名        | 说明                                                                                                                                                                 | 参数                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| validate      | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | (callback?: FormValidateCallback) => void                                             |
| validateField | 对部分表单字段进行校验的方法                                                                                                                                         | (props?: string \| string[], callback?: FormValidateCallback) => FormValidationResult |
| resetFields   | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果                                                                                                           | (props?: string \| string[]) => void                                                  |
| scrollToField | 滚动到指定表单字段                                                                                                                                                   | (prop: string) => void                                                                |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果                                                             | (props?: string \| string[]) => void                                                  |

### 插槽

| 名称                | 说明                                   | 类型                                                                             |
| :------------------ | :------------------------------------- | :------------------------------------------------------------------------------- |
| -                   | 在底部菜单前插入的任意内容             | -                                                                                |
| menu-left           | 搜索表单底部按钮左侧                   | { loading: boolean }                                                             |
| menu-right          | 搜索表单底部按钮右侧                   | { loading: boolean }                                                             |
| search-[prop]       | 当前这项的 Search Item 的内容          | { item: object, indexes?: number[], value: any, setValue: (value: any) => void } |
| search-[prop]-label | 当前这项的标签文本的内容               | { item: object, indexes?: number[] }                                             |
| search-[prop]-error | 当前这项的自定义表单校验信息的显示方式 | { error, item: object, indexes?: number[] }                                      |

::: tip 提示
[prop] 为 columns 中定义的 prop
:::
