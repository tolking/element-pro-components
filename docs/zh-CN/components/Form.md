---
title: Form
meta:
  - name: description
    content: 封装表单组件实现通过配置动态生成表单
---

# Form

> 封装表单组件实现通过配置动态生成表单

::: tip 提示
适用于可以通过 `v-model` 绑定值的任意组件，例如：

- 支持 `el-input` `el-switch` `input` ...
- 不支持 `el-upload` ... (需要将相关组件重新封装为支持 `v-model` 的组件)

:::

## 使用

### 基础用法

当 columns 绑定的是一个具有响应式的数组时，数组的变动会影响表单变动（及动态表单）。如果不需要动态表单推荐绑定一个普通数组

::: demo
@/demo/Form/base.vue
:::

### 智能提示

通过辅助函数 `defineFormColumns` `defineFormMenuColumns` `defineFormSubmit` `defineComponentProps` 提供智能提示

::: demo
@/demo/Form/define.vue
:::

### 嵌套键值

支持直接对具有嵌套结构的对象或数组进行赋值，仅需要配置 `prop`

::: demo 当 `prop` 存在默认值时会阻止对嵌套键值赋值
@/demo/Form/nested.vue
:::

### 指定对应的组件

通过 columns 的 `component` 定义该项生成什么组件，要求对应组件可以通过 `v-model` 绑定值。通过 `props` 可以向组件中传值，通过 `props` 里面的 `slots` 可以向组件传递简单的 <pro-link to="https://v3.cn.vuejs.org/guide/render-function.html">渲染函数</pro-link>

::: demo
@/demo/Form/component.vue
:::

### 使用局部组件

通过 `component` 也可以直接传入局部组件 (请使用 `markRaw` 标记)

::: demo
@/demo/Form/local.vue
:::

### 配置组件绑定的 v-model 参数

默认情况下 ProForm 组件仅支持使用 `v-model` 绑定值的组件，如果需要使用其他参数绑定值，可以通过 `models` 配置。当指定 `models` 时，`prop` 属性会被忽略（`v-model` 实现的绑定将无效），需要额外向 `models` 中传入 `{ prop: [prop], key: 'modelValue' }` 来实现绑定。

另外 `models` 也可以用来为一个组件绑定多个参数

::: tip 提示
从 `1.4.0` 起，`modelKey` 属性已废弃，请使用 `models` 属性替代
:::

::: demo prop: 绑定的字段名, key: 用于配置 v-model 的参数, event: 用于配置绑定值的事件
@/demo/Form/models.vue
:::

### Ref

::: tip 提示
从 `1.4.1` 起，支持通过 `ref` 绑定组件实例
:::

::: demo
@/demo/Form/ref.vue
:::

### 使用插槽

::: tip 提示
从 `1.2.0` 起，`[prop]` 相关插槽需要增加前缀 `form-` 使用
:::

直接在模版中增加带 `form-[prop]` 相关的插槽即可使用。虽然在启用插槽后可以通过 `v-model="form.slot"` 这种方式绑定值，但更推荐使用 `value` 与 `setValue`

::: demo
@/demo/Form/slots.vue
:::

### 配置按钮

通过 `menu` 配置按钮显示、文字、参数

按钮文字也可以通过 <pro-link to="/zh-CN/guide/i18n">国际化</pro-link> 来配置

::: demo
@/demo/Form/menu.vue
:::

### 配置子表单

通过 columns 的 `children` 配置子表单，当然你也可以配置多层的 `children` 结构实现反复套娃

::: demo 通过 `max` 限制子表单的最大数量
@/demo/Form/sub.vue
:::

### 表单验证

像 el-form 一样可以通过 `rules` 配置表单验证。对于子表单更推荐使用 columns 里面的 `rules` 字段实现验证。否则你需要通过 `${父级的 prop}.${当前项的 index}.${当前的 prop}` 这种方式配置子表单的验证

::: demo submit 方法第二个参数表示是否通过表单验证
@/demo/Form/rules.vue
:::

### 动态表单

如果传入的 `columns` 是一个响应性数据，动态的修改 columns 表单也会随之改变

::: demo
@/demo/Form/dynamically.vue
:::

### 联动表单

通过控制 `columns` 中的 `show` 字段可以动态控制表单的显示，很容易实现联动表单

::: demo
@/demo/Form/show.vue
:::

### 栅格布局

与使用 `el-row` 和 `el-col` 组件相同 (`el-row` 对应 `pro-form`；`el-col` 对应 `columns`)，通过相关配置可以自由地组合布局。**当 `inline` 为 `true` 时无效**

::: demo
@/demo/Form/layout.vue
:::

### 行内表单

通过设置 `inline` 属性为 `true` 可以让表单域变为行内的表单域

::: demo
@/demo/Form/inline.vue
:::

### 对齐方式

通过设置 `label-position` 属性可以改变表单域标签的位置

::: demo 当断点是 `xs` 时，默认为 `top`；其余则是 `right`
@/demo/Form/label-position.vue
:::

### 数组表单

数组表单与子表单相同，用于处理需要输入一个数组的情况。仅需配置 `array` 即可启用

::: demo 通过 max 控制表单的最大数量
@/demo/Form/array.vue
:::

### 分组表单

分组表单用于将普通表单进行分组展示

::: demo
@/demo/Form/group.vue
:::

### 可折叠的分组表单

可折叠显示的分组表单

::: demo
@/demo/Form/collapse.vue
:::

### 带有标签的表单

通过标签页切换不同的表单

::: demo
@/demo/Form/tabs.vue
:::

### 分步表单

将一个普通的表单分割成几步输入

::: demo
@/demo/Form/steps.vue
:::

### 异步表单

想要实现异步表单 columns 必须绑定一个动态数组

::: demo
@/demo/Form/async.vue
:::

### TypeScript

`defineFormColumns` 支持传入一个泛型用来推断 `prop` 值；`defineComponentProps` 支持传入一个泛型用来辅助输入 `props` 值

::: demo
@/demo/Form/typescript.vue
:::

### 配置

| 参数                     | 说明                                                                                                                                                 | 类型             | 可选值                                                               | 默认值 |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------- | :------------------------------------------------------------------- | :----- |
| v-model                  | 绑定值                                                                                                                                               | object / array   | -                                                                    | -      |
| columns                  | 表单配置参考下面 `columns`                                                                                                                           | array            | -                                                                    | -      |
| menu                     | 按钮配置参考下面 `menu`                                                                                                                              | object           | -                                                                    | -      |
| rules                    | 表单验证规则                                                                                                                                         | object           | -                                                                    | -      |
| inline                   | 行内表单模式                                                                                                                                         | boolean          | -                                                                    | false  |
| array                    | 是否启用数组表单                                                                                                                                     | boolean          |                                                                      | -      |
| max                      | 限制数组表单的最大数量                                                                                                                               | number           | -                                                                    | -      |
| label-position           | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width`                                                                              | string           | right / left / top                                                   | right  |
| label-width              | 表单域标签的宽度，例如 '50px' 或 'auto'                                                                                                              | string           | -                                                                    | -      |
| label-suffix             | 表单域标签的后缀                                                                                                                                     | string           | -                                                                    | -      |
| hide-required-asterisk   | 是否显示必填字段的标签旁边的红色星号                                                                                                                 | boolean          | -                                                                    | false  |
| show-message             | 是否显示校验错误信息                                                                                                                                 | boolean          | -                                                                    | true   |
| inline-message           | 是否以行内形式展示校验信息                                                                                                                           | boolean          | -                                                                    | false  |
| status-icon              | 是否在输入框中显示校验结果反馈图标                                                                                                                   | boolean          | -                                                                    | false  |
| validate-on-rule-change  | 是否在 `rules` 属性改变后立即触发一次验证                                                                                                            | boolean          | -                                                                    | true   |
| size                     | 用于控制该表单内组件的尺寸                                                                                                                           | string           | large / default /small                                               | -      |
| disabled                 | 是否禁用该表单内的所有组件                                                                                                                           | boolean          | -                                                                    | false  |
| scroll-to-error          | 当校验失败时，滚动到第一个错误表单项                                                                                                                 | boolean          | -                                                                    | false  |
| scroll-into-view-options | 当校验有失败结果时，滚动到第一个失败的表单项目 可通过 [scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) 配置 | object / boolean | —                                                                    | -      |
| gutter                   | 栅格间隔                                                                                                                                             | number           | -                                                                    | 0      |
| justify                  | flex 布局下的水平排列方式                                                                                                                            | string           | start / end / center / space-around / space-between / spacing-evenly | start  |
| align                    | flex 布局下的垂直排列方式                                                                                                                            | string           | top / middle / bottom                                                | top    |

#### columns

| 参数          | 说明                                                                                                        | 类型               | 可选值                                    | 默认值 |
| :------------ | :---------------------------------------------------------------------------------------------------------- | :----------------- | :---------------------------------------- | :----- |
| prop          | v-model 绑定的字段名 (**需要是唯一值**)                                                                     | string             | -                                         | -      |
| label         | 标签文本                                                                                                    | string             | -                                         | -      |
| component     | 当前项对应的组件，可以直接传入局部组件                                                                      | string / Component | -                                         | -      |
| props         | 传递的对应的组件的参数                                                                                      | object             | -                                         | -      |
| models        | 配置当前项对应的组件的 `v-model` 绑定的参数 (Array<{ prop, key, event }>)                                   | array              | -                                         | -      |
| children      | 分组表单或子表单内容                                                                                        | array              | -                                         | -      |
| type          | children 内部表单的类型                                                                                     | string             | array / group / tabs / collapse / steps   | array  |
| max           | 限制 `type=array` 时子表单的最大数量                                                                        | number             | -                                         | -      |
| show          | 是否在表单中显示当前项                                                                                      | boolean            | -                                         | true   |
| labelWidth    | 表单域标签的宽度，例如 '50px' 或 'auto'                                                                     | string             | -                                         | -      |
| labelPosition | 表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性 默认会继承 Form的label-position | string             | left / right / top                        | -      |
| required      | 是否必填，如不设置，则会根据校验规则自动生成                                                                | boolean            | -                                         | false  |
| rules         | 表单验证规则                                                                                                | object / array     | -                                         | -      |
| error         | 表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息                                   | string             | -                                         | -      |
| showMessage   | 是否显示校验错误信息                                                                                        | boolean            | -                                         | true   |
| inlineMessage | 以行内形式展示校验信息                                                                                      | boolean            | -                                         | false  |
| size          | 用于控制该表单域下组件的尺寸                                                                                | string             | large / default /small                    | -      |
| span          | 栅格占据的列数                                                                                              | number             | -                                         | 24     |
| offset        | 栅格左侧的间隔格数                                                                                          | number             | -                                         | 0      |
| push          | 栅格向右移动格数                                                                                            | number             | -                                         | 0      |
| pull          | 栅格向左移动格数                                                                                            | number             | -                                         | 0      |
| xs            | `<768px` 响应式栅格数或者栅格属性对象                                                                       | number / object    | -                                         | -      |
| sm            | `≥768px` 响应式栅格数或者栅格属性对象                                                                       | number / object    | -                                         | -      |
| md            | `≥992px` 响应式栅格数或者栅格属性对象                                                                       | number / object    | -                                         | -      |
| lg            | `≥1200px` 响应式栅格数或者栅格属性对象                                                                      | number / object    | -                                         | -      |
| xl            | `≥1920px` 响应式栅格数或者栅格属性对象                                                                      | number / object    | -                                         | -      |
| disabled      | 是否禁用, 当 `type=tabs` 或者 `type=collapse` 时生效                                                        | boolean            | —                                         | false  |
| closable      | 标签是否可关闭, 当 `type=tabs` 时生效                                                                       | boolean            | —                                         | false  |
| lazy          | 标签是否延迟渲染, 当 `type=tabs` 时生效                                                                     | boolean            | —                                         | false  |
| description   | 分步描述文案, 当 `type=steps` 时生效                                                                        | string             | —                                         | —      |
| icon          | 自定义分步图标, 当 `type=steps` 时生效                                                                      | string / Component | —                                         | —      |
| status        | 设置当前步骤的状态, 当 `type=steps` 时生效                                                                  | string             | wait / process / finish / error / success | —      |

::: tip 关于 props
props 的属性将全部传递给 component 指定的组件

- 对于存在连字符的属性，可以通过字符串包裹或者转换为驼峰结构
- 通过 `slots` 可以向组件传递简单的[渲染函数](https://v3.cn.vuejs.org/guide/render-function.html)
- **对于事件需要通过 `on[Event]` 驼峰这种形式绑定。如：`change` -> `onChange`, `input` -> `onInput`**
- 从 `1.4.1` 起，可以通过 ref 绑定组件实例

```js
props: {
  ref: searchRef,
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
| submitText  | submit 按钮显示的文字               | string  | Submit              |
| submitProps | submit 按钮的配置，参考 `el-button` | object  | { type: 'primary' } |
| reset       | 是否显示 reset 按钮                 | boolean | true                |
| resetText   | reset 按钮显示的文字                | string  | Reset               |
| resetProps  | reset 按钮的配置，参考 `el-button`  | object  | -                   |
| prevText    | prev 按钮显示的文字                 | string  | Prev                |
| prevProps   | prev 按钮的配置，参考 `el-button`   | object  | -                   |
| nextText    | next 按钮显示的文字                 | string  | Next                |
| nextProps   | next 按钮的配置，参考 `el-button`   | object  | -                   |

### 事件

| 事件名          | 说明                   | 类型                                                            |
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

| 方法名        | 说明                                                                                                                                                                 | 类型                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| validate      | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | (callback?: FormValidateCallback) => void                                             |
| validateField | 对部分表单字段进行校验的方法                                                                                                                                         | (props?: string \| string[], callback?: FormValidateCallback) => FormValidationResult |
| resetFields   | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果                                                                                                           | (props?: string \| string[]) => void                                                  |
| scrollToField | 滚动到指定表单字段                                                                                                                                                   | (prop: string) => void                                                                |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果                                                             | (props?: string \| string[]) => void                                                  |

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
