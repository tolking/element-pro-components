---
title: FilterRoutes
meta:
  - name: description
    content: Quickly filter matching routes through keywords
---

# FilterRoutes

> Quickly filter matching routes through keywords

## Use

### Basic Use

By default, the component will generate routes from vue-router, Go to <pro-link to="/zh-CN/guide/router">Router and Menu</pro-link> to view routing related usage

::: demo
@/demo/Select/base.vue
:::

### Custom routes

Set `routes` attribute to enable custom routes

::: demo
@/demo/FilterRoutes/routes.vue
:::

### Custom Slots

You can customize HTML templates for options

::: demo
@/demo/FilterRoutes/slots.vue
:::

### Props

| Name            | Description                                                                                     | Type               | Options                | Default           |
| :-------------- | :---------------------------------------------------------------------------------------------- | :----------------- | :--------------------- | :---------------- |
| routes          | current routes                                                                                  | array              | -                      | from `vue-router` |
| disabled        | whether disabled                                                                                | boolean            | -                      | false             |
| size            | component size                                                                                  | string             | large / default /small | -                 |
| clearable       | whether clearable                                                                               | boolean            | -                      | false             |
| name            | the name attribute of select input                                                              | string             | -                      | -                 |
| effect          | Tooltip theme                                                                                   | string             | dark / light           | light             |
| placeholder     | placeholder                                                                                     | string             | -                      | Select            |
| no-match-text   | displayed text when no data matches the filtering query, you can also use slot `empty`          | string             | -                      | No matching data  |
| no-data-text    | displayed text when there is no options, you can also use slot empty                            | string             | -                      | No data           |
| teleported      | whether select dropdown is teleported to the body                                               | boolean            | -                      | true              |
| persistent      | when select dropdown is inactive and `persistent` is `false`, select dropdown will be destroyed | boolean            | -                      | true              |
| clear-icon      | Custom clear icon class                                                                         | string / Component | -                      | CircleClose       |
| fit-input-width | whether the width of the dropdown is the same as the input                                      | boolean            | —                      | false             |
| suffix-icon     | Custom suffix icon component                                                                    | string / Component | —                      | ArrowUp           |
| validate-event  | whether to trigger form validation                                                              | boolean            | -                      | true              |

### Events

| Name           | Description                                                   | Type                        |
| -------------- | ------------------------------------------------------------- | --------------------------- |
| change         | triggers when the selected value changes                      | (value: any) => void        |
| visible-change | triggers when the dropdown appears/disappears                 | (visible: boolean) => void  |
| remove-tag     | triggers when a tag is removed in multiple mode               | (tagValue: any) => void     |
| clear          | triggers when the clear icon is clicked in a clearable Select | () => void                  |
| blur           | triggers when Input blurs                                     | (event: FocusEvent) => void |
| focus          | triggers when Input focuses                                   | (event: FocusEvent) => void |

### Slots

| Name | Description    | Type             |
| ---- | -------------- | ---------------- |
| -    | Custom content | { item: object } |
