---
title: Search
meta:
  - name: description
    content: Encapsulate search components to dynamically generate forms through columns
---

# Search

> Encapsulate search components to dynamically generate forms through columns

::: tip
The Search component is based on the <pro-link to="/components/form">Form</pro-link> component.

The main difference is that the Search component will add default layout parameters `{ xs: 24, md: 12, lg: 8, xl: 6 }` for each value of the columns attribute;

In addition, the slot related to [prop] is changed from `form-[prop]` to `search-[prop]`
:::

## Use

### Basic Use

::: demo
@/demo/Search/base.vue
:::

### Intellisense

Use the `defineSearchColumns` `defineSearchMenuColumns` `defineSearchSubmit` to make it easier to define columns

::: demo
@/demo/Search/define.vue
:::

### Slots

Directly add some slot with `search-[prop]` in the template

::: demo
@/demo/Search/slots.vue
:::

### TypeScript

The function `defineSearchColumns` supports passing in a Generics type to infer the value of `prop`, The function `defineComponentProps` supports passing in a Generics type to help input the `props` value

::: demo
@/demo/Search/typescript.vue
:::

### Props

| Name                    | Description                                                                                                                       | Type           | Options                                                              | Default                          |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------- | :------------- | :------------------------------------------------------------------- | :------------------------------- |
| v-model                 | binding value                                                                                                                     | object / array | -                                                                    | -                                |
| columns                 | to generate form components, reference `columns`                                                                                  | array          | -                                                                    | -                                |
| menu                    | config the menu content, reference `menu`                                                                                         | object         | -                                                                    | -                                |
| config                  | default layout config for each column                                                                                             | object         | -                                                                    | { xs: 24, md: 12, lg: 8, xl: 6 } |
| rules                   | validation rules of form                                                                                                          | object         | -                                                                    | -                                |
| inline                  | whether the form is inline                                                                                                        | boolean        | -                                                                    | false                            |
| array                   | whether the form is ArrayForm                                                                                                     | boolean        |                                                                      | -                                |
| max                     | limit the maximum number of ArrayForm component                                                                                   | number         | -                                                                    | -                                |
| label-position          | position of label. If set to 'left' or 'right', `label-width` prop is also required                                               | string         | right / left / top                                                   | right                            |
| label-width             | width of label, e.g. '50px'. All its direct child form items will inherit this value. Width `auto` is supported.                  | string         | -                                                                    | -                                |
| label-suffix            | suffix of the label                                                                                                               | string         | -                                                                    | -                                |
| hide-required-asterisk  | whether required fields should have a red asterisk (star) beside their labels                                                     | boolean        | -                                                                    | false                            |
| show-message            | whether to show the error message                                                                                                 | boolean        | -                                                                    | true                             |
| inline-message          | whether to display the error message inline with the form item                                                                    | boolean        | -                                                                    | false                            |
| status-icon             | whether to display an icon indicating the validation result                                                                       | boolean        | -                                                                    | false                            |
| validate-on-rule-change | whether to trigger validation when the `rules` prop is changed                                                                    | boolean        | -                                                                    | true                             |
| size                    | control the size of components in this form                                                                                       | string         | large / default /small                                               | -                                |
| disabled                | whether to disabled all components in this form. If set to true, it cannot be overridden by its inner components' `disabled` prop | boolean        | -                                                                    | false                            |
| scroll-to-error         | When validation fails, scroll to the first error form entry                                                                       | boolean        | -                                                                    | false                            |
| gutter                  | grid spacing                                                                                                                      | number         | -                                                                    | 0                                |
| justify                 | horizontal alignment of flex layout                                                                                               | string         | start / end / center / space-around / space-between / spacing-evenly | start                            |
| align                   | vertical alignment of flex layout                                                                                                 | string         | top / middle / bottom                                                | top                              |

#### columns

| Name          | Description                                                                                            | Type                                        | Options                                   | Default |
| :------------ | :----------------------------------------------------------------------------------------------------- | :------------------------------------------ | :---------------------------------------- | :------ |
| prop          | a key of `v-model` (**unique value**)                                                                  | string                                      | -                                         | -       |
| label         | label text                                                                                             | string                                      | -                                         | -       |
| component     | binding component                                                                                      | string                                      | -                                         | -       |
| props         | transfer `props` to the current component                                                              | object                                      | -                                         | -       |
| modelKey      | the arguments name bound to the `v-model` of the current component                                     | string / [string, string]                   | -                                         | -       |
| children      | group form or sub-form content                                                                         | array                                       | -                                         | -       |
| type          | type of children internal forms                                                                        | string                                      | array / group / tabs / collapse / steps   | array   |
| max           | limit the maximum number of `type=array`                                                               | number                                      | -                                         | -       |
| show          | whether to show the current component                                                                  | boolean                                     | -                                         | true    |
| labelWidth    | width of label, e.g. '50px'. Width `auto` is supported.                                                | string                                      | -                                         | -       |
| required      | whether the field is required or not, will be determined by validation rules if omitted                | boolean                                     | -                                         | false   |
| rules         | validation rules of form                                                                               | object                                      | -                                         | -       |
| error         | field error message, set its value and the field will validate error and show this message immediately | string                                      | -                                         | -       |
| showMessage   | whether to show the error message                                                                      | boolean                                     | -                                         | true    |
| inlineMessage | inline style validate message                                                                          | boolean                                     | -                                         | false   |
| size          | control the size of components in this form-item                                                       | string                                      | large / default /small                    | -       |
| span          | number of column the grid spans                                                                        | number                                      | -                                         | 24      |
| offset        | number of spacing on the left side of the grid                                                         | number                                      | -                                         | 0       |
| push          | number of columns that grid moves to the right                                                         | number                                      | -                                         | 0       |
| pull          | number of columns that grid moves to the left                                                          | number                                      | -                                         | 0       |
| xs            | `<768px` Responsive columns or column props object                                                     | number / object (e.g. {span: 4, offset: 4}) | -                                         | -       |
| sm            | `≥768px` Responsive columns or column props object                                                     | number / object (e.g. {span: 4, offset: 4}) | -                                         | -       |
| md            | `≥992px` Responsive columns or column props object                                                     | number / object (e.g. {span: 4, offset: 4}) | -                                         | -       |
| lg            | `≥1200px` Responsive columns or column props object                                                    | number / object (e.g. {span: 4, offset: 4}) | -                                         | -       |
| xl            | `≥1920px` Responsive columns or column props object                                                    | number / object (e.g. {span: 4, offset: 4}) | -                                         | -       |
| disabled      | whether Tab is disabled, work on `type=tabs` or `type=collapse`                                        | boolean                                     | —                                         | false   |
| closable      | whether Tab is closable, work on `type=tabs`                                                           | boolean                                     | —                                         | false   |
| lazy          | whether Tab is lazily rendered, work on `type=tabs`                                                    | boolean                                     | —                                         | false   |
| description   | step description, work on `type=steps`                                                                 | string                                      | —                                         | —       |
| icon          | step custom icon, work on `type=steps`                                                                 | string / Component                          | —                                         | —       |
| status        | current status, work on `type=steps`                                                                   | string                                      | wait / process / finish / error / success | —       |

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

| Name        | Description                                       | Type    | Default             |
| :---------- | :------------------------------------------------ | :------ | :------------------ |
| submit      | whether to display a submit button                | boolean | true                |
| submitText  | the text of submit button                         | string  | Search              |
| submitProps | the props of submit button, reference `el-button` | object  | { type: 'primary' } |
| reset       | Whether to display a reset button                 | boolean | true                |
| resetText   | the text of reset button                          | string  | Reset               |
| resetProps  | the props of reset button, reference `el-button`  | object  | -                   |
| prevText    | the text of prev button                           | string  | Prev                |
| prevProps   | the props of prev button, reference `el-button`   | object  | -                   |
| nextText    | the text of next button                           | string  | Next                |
| nextProps   | the props of next button, reference `el-button`   | object  | -                   |

### Events

| Name            | Description                             | Parameters                   |
| --------------- | --------------------------------------- | ---------------------------- |
| submit          | triggers when the submit click          | done, isValid, invalidFields |
| reset           | triggers when the reset click           | -                            |
| validate        | triggers after a form item is validated | prop, isValid, invalidFields |
| add-item        | triggers when the add click             | indexes: number[]            |
| remove-item     | triggers when the remove click          | indexes: number[]            |
| collapse-change | triggers when the collapse change       | active: CollapseModelValue   |
| tab-change      | triggers when the tab change            | name: TabPaneName            |
| step-change     | triggers when the step change           | active: string \| number     |

### Methods

| Name          | Description                                                                                                                                                                                                                                                                      | Name                                                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| validate      | validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted | Function(callback: Function(boolean, object))                              |
| validateField | validate one or several form items                                                                                                                                                                                                                                               | Function(props: string \| array, callback: Function(errorMessage: string)) |
| resetFields   | reset all the fields and remove validation result                                                                                                                                                                                                                                | -                                                                          |
| scrollToField | Scroll to the specified form field                                                                                                                                                                                                                                               | Function(prop: string)                                                     |
| clearValidate | clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared                                                     | Function(props: string \| array)                                           |

### Slots

| Name                | Description                              | Type                                                                             |
| :------------------ | :--------------------------------------- | :------------------------------------------------------------------------------- |
| -                   | anything inserted before the menu        | -                                                                                |
| menu-left           | control the menu left display content    | { loading: boolean }                                                             |
| menu-right          | control the menu right display content   | { loading: boolean }                                                             |
| search-[prop]       | control the `Item` display content       | { item: object, indexes?: number[], value: any, setValue: (value: any) => void } |
| search-[prop]-label | control the `Item` label display content | { item: object, indexes?: number[] }                                             |
| search-[prop]-error | control the `Item` error display content | { error, item: object, indexes?: number[] }                                      |

::: tip Tip
[prop] the prop of columns
:::
