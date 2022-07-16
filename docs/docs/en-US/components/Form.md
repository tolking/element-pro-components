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

Use the `defineFormColumns` `defineFormMenuColumns` `defineFormSubmit` to make it easier to define columns

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

### Async Form

To implement Async Form, columns must be bound to a reactive array

::: demo
@/demo/Form/async.vue
:::

### TypeScript

The function `defineFormColumns` supports passing in a Generics type to infer the value of `prop`

::: demo
@/demo/Form/typescript.vue
:::

### Props

| Name                    | Description                                                                                                                       | Type    | Options                                                              | Default |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------- | :------ |
| v-model                 | binding value                                                                                                                     | object  | -                                                                    | -       |
| columns                 | to generate form components, reference `columns`                                                                                  | array   | -                                                                    | -       |
| menu                    | config the menu content, reference `menu`                                                                                         | object  | -                                                                    | -       |
| rules                   | validation rules of form                                                                                                          | object  | -                                                                    | -       |
| inline                  | whether the form is inline                                                                                                        | boolean | -                                                                    | false   |
| label-position          | position of label. If set to 'left' or 'right', `label-width` prop is also required                                               | string  | right / left / top                                                   | right   |
| label-width             | width of label, e.g. '50px'. All its direct child form items will inherit this value. Width `auto` is supported.                  | string  | -                                                                    | -       |
| label-suffix            | suffix of the label                                                                                                               | string  | -                                                                    | -       |
| hide-required-asterisk  | whether required fields should have a red asterisk (star) beside their labels                                                     | boolean | -                                                                    | false   |
| show-message            | whether to show the error message                                                                                                 | boolean | -                                                                    | true    |
| inline-message          | whether to display the error message inline with the form item                                                                    | boolean | -                                                                    | false   |
| status-icon             | whether to display an icon indicating the validation result                                                                       | boolean | -                                                                    | false   |
| validate-on-rule-change | whether to trigger validation when the `rules` prop is changed                                                                    | boolean | -                                                                    | true    |
| size                    | control the size of components in this form                                                                                       | string  | large / default /small                                               | -       |
| disabled                | whether to disabled all components in this form. If set to true, it cannot be overridden by its inner components' `disabled` prop | boolean | -                                                                    | false   |
| scroll-to-error         | When validation fails, scroll to the first error form entry                                                                       | boolean | -                                                                    | false   |
| gutter                  | grid spacing                                                                                                                      | number  | -                                                                    | 0       |
| justify                 | horizontal alignment of flex layout                                                                                               | string  | start / end / center / space-around / space-between / spacing-evenly | start   |
| align                   | vertical alignment of flex layout                                                                                                 | string  | top / middle / bottom                                                | top     |

#### columns

| Name          | Description                                                                                            | Type                                        | Options                | Default |
| :------------ | :----------------------------------------------------------------------------------------------------- | :------------------------------------------ | :--------------------- | :------ |
| prop          | a key of `v-model`                                                                                     | string                                      | -                      | -       |
| label         | label text                                                                                             | string                                      | -                      | -       |
| component     | binding component                                                                                      | string                                      | -                      | -       |
| props         | transfer `props` to the current component                                                              | object                                      | -                      | -       |
| children      | sub-columns                                                                                            | array                                       | -                      | -       |
| max           | limit the maximum number of sub-columns                                                                | number                                      | -                      | -       |
| labelWidth    | width of label, e.g. '50px'. Width `auto` is supported.                                                | string                                      | -                      | -       |
| required      | whether the field is required or not, will be determined by validation rules if omitted                | boolean                                     | -                      | false   |
| rules         | validation rules of form                                                                               | object                                      | -                      | -       |
| error         | field error message, set its value and the field will validate error and show this message immediately | string                                      | -                      | -       |
| showMessage   | whether to show the error message                                                                      | boolean                                     | -                      | true    |
| inlineMessage | inline style validate message                                                                          | boolean                                     | -                      | false   |
| size          | control the size of components in this form-item                                                       | string                                      | large / default /small | -       |
| span          | number of column the grid spans                                                                        | number                                      | -                      | 24      |
| offset        | number of spacing on the left side of the grid                                                         | number                                      | -                      | 0       |
| push          | number of columns that grid moves to the right                                                         | number                                      | -                      | 0       |
| pull          | number of columns that grid moves to the left                                                          | number                                      | -                      | 0       |
| xs            | `<768px` Responsive columns or column props object                                                     | number / object (e.g. {span: 4, offset: 4}) | -                      | -       |
| sm            | `≥768px` Responsive columns or column props object                                                     | number / object (e.g. {span: 4, offset: 4}) | -                      | -       |
| md            | `≥992px` Responsive columns or column props object                                                     | number / object (e.g. {span: 4, offset: 4}) | -                      | -       |
| lg            | `≥1200px` Responsive columns or column props object                                                    | number / object (e.g. {span: 4, offset: 4}) | -                      | -       |
| xl            | `≥1920px` Responsive columns or column props object                                                    | number / object (e.g. {span: 4, offset: 4}) | -                      | -       |

::: tip about props
The props attribute will all be passed to the component. **For events need to be bound by `on[Event]`. example: `change` -> `onChange`, `input` -> `onInput`**

```js
props: {
  clearable: true,
  'prefix-icon': 'el-icon-search',
  suffixIcon: 'el-icon-date',
  onChange: e => console.log(e),
}
```

:::

#### menu

| Name        | Description                                       | Type    | Options | Default             |
| :---------- | :------------------------------------------------ | :------ | :------ | :------------------ |
| submit      | whether to display a submit button                | boolean | -       | true                |
| submitText  | the text of submit button                         | string  | -       | Submit              |
| submitProps | the props of submit button, reference `el-button` | object  | -       | { type: 'primary' } |
| reset       | Whether to display a reset button                 | boolean | -       | true                |
| resetText   | the text of reset button                          | string  | -       | Reset               |
| resetProps  | the props of reset button, reference `el-button`  | object  | -       | -                   |

### Events

| Name     | Description                             | Parameters                                                                                            |
| -------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| submit   | triggers when the submit click          | done, isValid, invalidFields                                                                          |
| reset    | triggers when the reset click           | -                                                                                                     |
| validate | triggers after a form item is validated | prop name of the form item being validated, whether validation is passed and the error message if not |

### Methods

| Name          | Description                                                                                                                                                                                                                                                                      | Name                                                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| validate      | validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted | Function(callback: Function(boolean, object))                              |
| validateField | validate one or several form items                                                                                                                                                                                                                                               | Function(props: string \| array, callback: Function(errorMessage: string)) |
| resetFields   | reset all the fields and remove validation result                                                                                                                                                                                                                                | -                                                                          |
| scrollToField | Scroll to the specified form field                                                                                                                                                                                                                                               | Function(prop: string)                                                     |
| clearValidate | clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared                                                     | Function(props: string \| array)                                           |

### Slots

| Name              | Description                                                              |
| :---------------- | :----------------------------------------------------------------------- |
| -                 | anything inserted before the menu                                        |
| menu-left         | control the menu left display content, parameters { loading }            |
| menu-right        | control the menu right display content, parameters { loading }           |
| form-[prop]       | control the `Item` display content, parameters { item, value, setValue } |
| form-[prop]-label | control the `Item` label display content, parameters { item }            |
| form-[prop]-error | control the `Item` error display content, parameters { error, item }     |

::: tip Tip
[prop] the prop of columns
:::
