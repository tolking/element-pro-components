---
title: Descriptions
meta:
  - name: description
    content: Display multiple fields in list form
---

# Descriptions

> Display multiple fields in list form

## Use

### Basic Use

When columns is bound to a reactive array, changes in the array will affect Descriptions changes. If you don't need a dynamic Descriptions, it is recommended to bind an ordinary array.

::: demo
@/demo/Descriptions/base.vue
:::

### Intellisense

Use the `defineDescriptionsColumns` to make it easier to define columns

::: demo
@/demo/Descriptions/define.vue
:::

### Nested value

Support for get the objects or arrays with nested structures value, only need to configure the `prop`

::: demo
@/demo/Descriptions/nested.vue
:::

### Alignment

::: demo
@/demo/Descriptions/alignment.vue
:::

### Slots

::: tip Tip
Starting from `1.2.0`, the `[prop]` related slots need to be prefixed with `detail-` to use
:::

Directly add some slot with `detail-[prop]` in the template

::: demo
@/demo/Descriptions/slots.vue
:::

### TypeScript

The function `defineDescriptionsColumns` supports passing in a Generics type to infer the value of `prop`

::: demo
@/demo/Descriptions/typescript.vue
:::

### Props

| Name        | Description                                                                                                                                 | Type    | Options                | Default    |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :------ | :--------------------- | :--------- |
| columns     | to generate descriptions list, reference `columns`                                                                                          | array   | -                      | -          |
| detail      | detail data of display                                                                                                                      | object  | -                      | -          |
| border      | with or without border                                                                                                                      | boolean | -                      | false      |
| column      | numbers of `Descriptions Item` in one line                                                                                                  | number  | -                      | 3          |
| direction   | direction of list                                                                                                                           | string  | vertical / horizontal  | horizontal |
| size        | size of list                                                                                                                                | string  | large / default /small | -          |
| title       | title text, display on the top left                                                                                                         | string  | -                      | -          |
| extra       | extra text, display on the top right                                                                                                        | string  | -                      | -          |
| align       | column content alignment (If no `border`, effective for both label and content)                                                             | string  | left / center / right  | left       |
| label-align | column label alignment, if omitted, the value of the above `align` attribute will be applied (If no `border`, please use `align` attribute) | string  | left / center / right  | -          |

### columns

| Name           | Description                                                                                                                                                                                  | Type             | Options               | Default |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------- | :-------------------- | :------ |
| prop           | the key of detail                                                                                                                                                                            | string           | -                     | -       |
| label          | label text                                                                                                                                                                                   | string           | -                     | -       |
| span           | colspan of column                                                                                                                                                                            | number           | -                     | 1       |
| width          | column width, the width of the same column in different rows is set by the max value (If no `border`, width contains label and content)                                                      | string           | -                     | -       |
| minWidth       | column minimum width, columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion (If no`border`, width contains label and content) | string           | -                     | -       |
| align          | column content alignment (If no `border`, effective for both label and content)                                                                                                              | string           | left / center / right | left    |
| labelAlign     | column label alignment, if omitted, the value of the above `align` attribute will be applied (If no `border`, please use `align` attribute)                                                  | string           | left / center / right | -       |
| className      | column content custom class name                                                                                                                                                             | string           | -                     | -       |
| labelClassName | column label custom class name                                                                                                                                                               | string           | -                     | -       |
| render         | render function for descriptions columns                                                                                                                                                     | function(detail) | -                     | -       |
| renderLabel    | render function for Label                                                                                                                                                                    | function(column) | -                     | -       |

## Slots

| Name                | Description                                                         |
| ------------------- | ------------------------------------------------------------------- |
| -                   | insert more descriptions information at the end                     |
| title               | custom title, display on the top left, parameters { size }          |
| extra               | custom extra area, display on the top right, parameters { size }    |
| detail-[prop]       | control the `Item` display content, parameters { size, item }       |
| detail-[prop]-label | control the `Item` label display content, parameters { size, item } |

::: tip Tip
[prop] the prop of columns
:::
