---
title: Form
meta:
  - name: description
    content: Form consists of `input`, `radio`, `select`, `checkbox` and so on. With form, you can collect, verify and submit data
---

# Form

> Form consists of `input`, `radio`, `select`, `checkbox` and so on. With form, you can collect, verify and submit data

::: tip Tip
Applicable to any component that can bind value through `v-model`. example:

- Support `el-input` `el-switch` `input` ...
- Not support `el-upload` ... (The relevant components need to be rewritten to support `v-model` components)

:::

## Use

### Basic Use

When columns is bound to a reactive array, changes in the array will affect form changes (dynamic form). If you don't need a dynamic form, it is recommended to bind an ordinary array.

::: demo
@/demo/Form/base.vue
:::

### Intellisense

Use the `defineFormColumns` `defineFormMenuColumns` `defineFormSubmit` `defineComponentProps` to make it easier to define columns

::: demo
@/demo/Form/define.vue
:::

### Nested value

Support for set the objects or arrays with nested structures value, only need to configure the `prop`

::: demo Prevent assignment to nested keys when `prop` has a default value
@/demo/Form/nested.vue
:::

### Custom Component

Set `component` in `columns` attribute to dfine what component the item generates, that component should can bind value through `v-model`. props can be passed to the component through `props`, <pro-link to="https://v3.vuejs.org/guide/render-function.html">render-function</pro-link> can be passed to the component thrrough `slots` in `props`

::: demo
@/demo/Form/component.vue
:::

### Custom local registration component

Local component can be passed directly through `component` in `columns` attribute (marking the component with `markRaw`)

::: demo
@/demo/Form/local.vue
:::

### Configure the v-model arguments for component

By default, the ProForm component only supports components that bind values through `v-model`. If you need to use other arguments to bind values, you can configure it through `models`. When `models` is specified, the `prop` attribute will be ignored (the binding implemented by `v-model` will be invalid), and you need to pass `{ prop: [prop], key: 'modelValue' }` to `models` to implement the binding.

In addition, `models` can also be used to bind multiple parameters to a component

::: tip
Since `1.4.0`, the `modelKey` attribute has been deprecated, please use the `models` attribute instead
:::

::: demo prop: the name of the bound field, key: the parameter used to configure v-model, event: the event used to configure the bound value
@/demo/Form/models.vue
:::

### Ref

::: tip
Since `1.4.1`, support binding component instances through `ref`
:::

::: demo
@/demo/Form/ref.vue
:::

### Slots

::: tip Tip
Starting from `1.2.0`, the `[prop]` related slots need to be prefixed with `form-` to use
:::

Directly add some slot with `form-[prop]` in the template

::: demo
@/demo/Form/slots.vue
:::

### Custom Menu

Set `menu` attribute to enable custom menu

Menu can also be configured through <pro-link to="/en-US/guide/i18n">Localization</pro-link>

::: demo
@/demo/Form/menu.vue
:::

### Custom sub-forms

Set `children` in `columns` attribute to enable custom sub-forms

::: demo Use `max` to limit the maximum number of sub-forms
@/demo/Form/sub.vue
:::

### Validation

Set `rules` attribute to enable validation, or Set `rules` in `columns` attribute to enable validation, or reference `${parental prop}.${current index}.${current prop}`

::: demo
@/demo/Form/rules.vue
:::

### Dynamically Form

If the columns with reactive, the dynamically modified columns form will also change accordingly

::: demo
@/demo/Form/dynamically.vue
:::

### Linkage Form

By controlling the `show` field of `columns`, the display of the form can be dynamically controlled, making it easy to achieve linked forms

::: demo
@/demo/Form/show.vue
:::

### Layout

Use the same way as `el-row` `el-col` (`el-row` corresponds to `pro-form`; `el-col` corresponds to `columns`) **Invalid when `inline` is `true`**

::: demo
@/demo/Form/layout.vue
:::

### Inline Form

Set the `inline` attribute to `true` and the form will be inline

::: demo
@/demo/Form/inline.vue
:::

### Custom Alignment

The `label-position` attribute decides how labels align

::: demo When the breakpoint is `xs`, the defaults value is `top`, otherwise is `right`
@/demo/Form/label-position.vue
:::

### Array Form

The array form is the same as the sub-form. It is used to handle the situation where an array needs to be entered. Just configure the `array` to enable

::: demo Control the maximum number of forms through max
@/demo/Form/array.vue
:::

### Group Form

The Group Form used to display ordinary forms in groups

::: demo
@/demo/Form/group.vue
:::

### Collapse Form

Collapsible group form

::: demo
@/demo/Form/collapse.vue
:::

### Tabs Form

Switch different forms through tabs

::: demo
@/demo/Form/tabs.vue
:::

### Steps Form

Split a form into several steps for input

::: demo
@/demo/Form/steps.vue
:::

### Async Form

To implement Async Form, columns must be bound to a reactive array

::: demo
@/demo/Form/async.vue
:::

### TypeScript

The function `defineFormColumns` supports passing in a Generics type to infer the value of `prop`, The function `defineComponentProps` supports passing in a Generics type to help input the `props` value

::: demo
@/demo/Form/typescript.vue
:::

### Props

| Name                     | Description                                                                                                                                                                              | Type             | Options                                                              | Default |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------- | :------------------------------------------------------------------- | :------ |
| v-model                  | binding value                                                                                                                                                                            | object / array   | -                                                                    | -       |
| columns                  | to generate form components, reference `columns`                                                                                                                                         | array            | -                                                                    | -       |
| menu                     | config the menu content, reference `menu`                                                                                                                                                | object           | -                                                                    | -       |
| rules                    | validation rules of form                                                                                                                                                                 | object           | -                                                                    | -       |
| inline                   | whether the form is inline                                                                                                                                                               | boolean          | -                                                                    | false   |
| array                    | whether the form is ArrayForm                                                                                                                                                            | boolean          |                                                                      | -       |
| max                      | limit the maximum number of ArrayForm component                                                                                                                                          | number           | -                                                                    | -       |
| label-position           | position of label. If set to 'left' or 'right', `label-width` prop is also required                                                                                                      | string           | right / left / top                                                   | right   |
| label-width              | width of label, e.g. '50px'. All its direct child form items will inherit this value. Width `auto` is supported.                                                                         | string           | -                                                                    | -       |
| label-suffix             | suffix of the label                                                                                                                                                                      | string           | -                                                                    | -       |
| hide-required-asterisk   | whether required fields should have a red asterisk (star) beside their labels                                                                                                            | boolean          | -                                                                    | false   |
| show-message             | whether to show the error message                                                                                                                                                        | boolean          | -                                                                    | true    |
| inline-message           | whether to display the error message inline with the form item                                                                                                                           | boolean          | -                                                                    | false   |
| status-icon              | whether to display an icon indicating the validation result                                                                                                                              | boolean          | -                                                                    | false   |
| validate-on-rule-change  | whether to trigger validation when the `rules` prop is changed                                                                                                                           | boolean          | -                                                                    | true    |
| size                     | control the size of components in this form                                                                                                                                              | string           | large / default /small                                               | -       |
| disabled                 | whether to disabled all components in this form. If set to true, it cannot be overridden by its inner components' `disabled` prop                                                        | boolean          | -                                                                    | false   |
| scroll-to-error          | When validation fails, scroll to the first error form entry                                                                                                                              | boolean          | -                                                                    | false   |
| scroll-into-view-options | When validation fails, it scrolls to the first error item based on the scrollIntoView option. [scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView). | object / boolean | —                                                                    | -       |
| gutter                   | grid spacing                                                                                                                                                                             | number           | -                                                                    | 0       |
| justify                  | horizontal alignment of flex layout                                                                                                                                                      | string           | start / end / center / space-around / space-between / spacing-evenly | start   |
| align                    | vertical alignment of flex layout                                                                                                                                                        | string           | top / middle / bottom                                                | top     |

#### columns

| Name          | Description                                                                                                                             | Type                                        | Options                                   | Default |
| :------------ | :-------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------ | :---------------------------------------- | :------ |
| prop          | a key of `v-model` (**unique value**)                                                                                                   | string                                      | -                                         | -       |
| label         | label text                                                                                                                              | string                                      | -                                         | -       |
| component     | binding component                                                                                                                       | string                                      | -                                         | -       |
| props         | transfer `props` to the current component                                                                                               | object                                      | -                                         | -       |
| models        | Configure the `v-model` binding parameters of the component corresponding to the current item (Array<{ prop, key, event }>)             | array                                       | -                                         | -       |
| children      | group form or sub-form content                                                                                                          | array                                       | -                                         | -       |
| type          | type of children internal forms                                                                                                         | string                                      | array / group / tabs / collapse / steps   | array   |
| max           | limit the maximum number of `type=array`                                                                                                | number                                      | -                                         | -       |
| show          | whether to show the current component                                                                                                   | boolean                                     | -                                         | true    |
| labelWidth    | width of label, e.g. '50px'. Width `auto` is supported.                                                                                 | string                                      | -                                         | -       |
| labelPosition | Position of item label. If set to `'left'` or `'right'`, `label-width` prop is also required. Default extend `label-postion` of `form`. | string                                      | left / right / top                        | -       |
| required      | whether the field is required or not, will be determined by validation rules if omitted                                                 | boolean                                     | -                                         | false   |
| rules         | validation rules of form                                                                                                                | object                                      | -                                         | -       |
| error         | field error message, set its value and the field will validate error and show this message immediately                                  | string                                      | -                                         | -       |
| showMessage   | whether to show the error message                                                                                                       | boolean                                     | -                                         | true    |
| inlineMessage | inline style validate message                                                                                                           | boolean                                     | -                                         | false   |
| size          | control the size of components in this form-item                                                                                        | string                                      | large / default /small                    | -       |
| span          | number of column the grid spans                                                                                                         | number                                      | -                                         | 24      |
| offset        | number of spacing on the left side of the grid                                                                                          | number                                      | -                                         | 0       |
| push          | number of columns that grid moves to the right                                                                                          | number                                      | -                                         | 0       |
| pull          | number of columns that grid moves to the left                                                                                           | number                                      | -                                         | 0       |
| xs            | `<768px` Responsive columns or column props object                                                                                      | number / object (e.g. {span: 4, offset: 4}) | -                                         | -       |
| sm            | `≥768px` Responsive columns or column props object                                                                                      | number / object (e.g. {span: 4, offset: 4}) | -                                         | -       |
| md            | `≥992px` Responsive columns or column props object                                                                                      | number / object (e.g. {span: 4, offset: 4}) | -                                         | -       |
| lg            | `≥1200px` Responsive columns or column props object                                                                                     | number / object (e.g. {span: 4, offset: 4}) | -                                         | -       |
| xl            | `≥1920px` Responsive columns or column props object                                                                                     | number / object (e.g. {span: 4, offset: 4}) | -                                         | -       |
| disabled      | whether Tab is disabled, work on `type=tabs` or `type=collapse`                                                                         | boolean                                     | —                                         | false   |
| closable      | whether Tab is closable, work on `type=tabs`                                                                                            | boolean                                     | —                                         | false   |
| lazy          | whether Tab is lazily rendered, work on `type=tabs`                                                                                     | boolean                                     | —                                         | false   |
| description   | step description, work on `type=steps`                                                                                                  | string                                      | —                                         | —       |
| icon          | step custom icon, work on `type=steps`                                                                                                  | string / Component                          | —                                         | —       |
| status        | current status, work on `type=steps`                                                                                                    | string                                      | wait / process / finish / error / success | —       |

::: tip about props
The props attribute will all be passed to the component.

- For attributes with hyphens, you can wrap them in strings or convert them to camelCase
- Through `slots`, you can pass simple [render functions](https://v3.vuejs.org/guide/render-function.html)
- **For events need to be bound by `on[Event]`. example: `change` -> `onChange`, `input` -> `onInput`**
- Since `1.4.1`, support binding component instances through `ref`

```js
props: {
  ref: searchRef,
  clearable: true,
  'prefix-icon': 'el-icon-search',
  suffixIcon: 'el-icon-date',
  slots: {
    prefix: () => h('i', { className: 'el-input__icon el-icon-search' }),
    append: () => 'Search'
  },
  onChange: e => console.log(e),
}
```

:::

#### menu

| Name        | Description                                       | Type    | Default             |
| :---------- | :------------------------------------------------ | :------ | :------------------ |
| submit      | whether to display a submit button                | boolean | true                |
| submitText  | the text of submit button                         | string  | Submit              |
| submitProps | the props of submit button, reference `el-button` | object  | { type: 'primary' } |
| reset       | Whether to display a reset button                 | boolean | true                |
| resetText   | the text of reset button                          | string  | Reset               |
| resetProps  | the props of reset button, reference `el-button`  | object  | -                   |
| prevText    | the text of prev button                           | string  | Prev                |
| prevProps   | the props of prev button, reference `el-button`   | object  | -                   |
| nextText    | the text of next button                           | string  | Next                |
| nextProps   | the props of next button, reference `el-button`   | object  | -                   |

### Events

| Name            | Description                             | Type                                                            |
| --------------- | --------------------------------------- | --------------------------------------------------------------- |
| submit          | triggers when the submit click          | (done: () => void, isValid: boolean, invalidFields) => void     |
| reset           | triggers when the reset click           | () => void                                                      |
| validate        | triggers after a form item is validated | (prop: FormItemProp, isValid: boolean, message: string) => void |
| add-item        | triggers when the add click             | (indexes: number[]) => void                                     |
| remove-item     | triggers when the remove click          | (indexes: number[]) => void                                     |
| collapse-change | triggers when the collapse change       | (active: CollapseModelValue) => void                            |
| tab-change      | triggers when the tab change            | (name: TabPaneName) => void                                     |
| step-change     | triggers when the step change           | (active: string \| number) => void                              |

### Methods

| Name          | Description                                                                                                                                                                                                                                                                      | Type                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| validate      | validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted | (callback?: FormValidateCallback) => void                                             |
| validateField | validate one or several form items                                                                                                                                                                                                                                               | (props?: string \| string[], callback?: FormValidateCallback) => FormValidationResult |
| resetFields   | reset all the fields and remove validation result                                                                                                                                                                                                                                | (props?: string \| string[]) => void                                                  |
| scrollToField | Scroll to the specified form field                                                                                                                                                                                                                                               | (prop: string) => void                                                                |
| clearValidate | clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared                                                     | (props?: string \| string[]) => void                                                  |

### Slots

| Name              | Description                              | Type                                                                             |
| :---------------- | :--------------------------------------- | :------------------------------------------------------------------------------- |
| -                 | anything inserted before the menu        | -                                                                                |
| menu-left         | control the menu left display content    | { loading: boolean }                                                             |
| menu-right        | control the menu right display content   | { loading: boolean }                                                             |
| form-[prop]       | control the `Item` display content       | { item: object, indexes?: number[], value: any, setValue: (value: any) => void } |
| form-[prop]-label | control the `Item` label display content | { item: object, indexes?: number[] }                                             |
| form-[prop]-error | control the `Item` error display content | { error, item: object, indexes?: number[] }                                      |

::: tip Tip
[prop] the prop of columns
:::
