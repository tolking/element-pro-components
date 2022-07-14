---
title: Select
meta:
  - name: description
    content: When there are plenty of options, use a drop-down menu to display and select desired ones
---

# Select

> When there are plenty of options, use a drop-down menu to display and select desired ones

::: tip Tip
You can choose ElSelectV2 instead of this component
:::

## Use

### Basic Use

Set `data` attribute will automatic generate options

::: demo
@/demo/Select/base.vue
:::

### Disabled State

Set the `disabled` attribute in prop `data`

::: demo
@/demo/Select/disabled.vue
:::

### Configure binding data key

Set `config` attribute. `value`- v-model bind key; `label`- display key; `disabled`- Disabled key; `children`- children key

::: demo
@/demo/Select/config.vue
:::

### Slots

You can customize HTML templates for options

::: demo
@/demo/Select/slots.vue
:::

### Basic multiple select

Set `multiple` attribute to enable multiple mode. In this case, the value of v-model will be an array of selected options

::: demo
@/demo/Select/multiple.vue
:::

### Hide extra tags

You can collapse tags to a text by using `collapse-tags` attribute. You can check them when mouse hover collapse text by using `collapse-tags-tooltip` attribute.

::: demo
@/demo/Select/collapse-tags.vue
:::

### Grouping

Set `children` in `data` will automatic generate the children options (If there is a multi-layer hierarchies, `TreeSelect` is recommended)

::: demo
@/demo/Select/group.vue
:::

### Props

| Name                  | Description                                                                                                      | Type               | Options                           | Default                                                                        |
| :-------------------- | :--------------------------------------------------------------------------------------------------------------- | :----------------- | :-------------------------------- | :----------------------------------------------------------------------------- |
| v-model               | binding value                                                                                                    | array              | -                                 | -                                                                              |
| data                  | binding data                                                                                                     | array              | -                                 | -                                                                              |
| config                | config the key of data                                                                                           | object             | -                                 | { value: 'value', label: 'label', disabled: 'disabled', children: 'children' } |
| multiple              | whether multiple-select is activated                                                                             | boolean            | -                                 | false                                                                          |
| disabled              | whether disabled                                                                                                 | boolean            | -                                 | false                                                                          |
| size                  | component size                                                                                                   | string             | large / default /small            | -                                                                              |
| clearable             | whether clearable                                                                                                | boolean            | -                                 | false                                                                          |
| collapse-tags         | whether to collapse tags to a text when multiple selecting                                                       | boolean            | -                                 | false                                                                          |
| collapse-tags-tooltip | whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true | boolean            | -                                 | false                                                                          |
| multiple-limit        | maximum number of options user can select when multiple is true. No limit when set to 0                          | number             | -                                 | 0                                                                              |
| name                  | the name attribute of select input                                                                               | string             | -                                 | -                                                                              |
| effect                | Tooltip theme                                                                                                    | string             | dark / light                      | light                                                                          |
| autocomplete          | the autocomplete attribute of select input                                                                       | string             | on /off                           | off                                                                            |
| placeholder           | placeholder                                                                                                      | string             | -                                 | Select                                                                         |
| filterable            | whether Select is filterable                                                                                     | boolean            | -                                 | false                                                                          |
| allow-create          | whether creating new items is allowed. To use this, `filterable` must be true                                    | boolean            | -                                 | false                                                                          |
| filter-method         | custom filter method                                                                                             | function           | -                                 | -                                                                              |
| remote                | whether options are loaded from server                                                                           | boolean            | -                                 | false                                                                          |
| remote-method         | custom remote search method                                                                                      | function           | -                                 | -                                                                              |
| loading               | whether Select is loading data from server                                                                       | boolean            | -                                 | false                                                                          |
| loading-text          | displayed text while loading data from server                                                                    | string             | -                                 | Loading                                                                        |
| no-match-text         | displayed text when no data matches the filtering query, you can also use slot `empty`                           | string             | -                                 | No matching data                                                               |
| no-data-text          | displayed text when there is no options, you can also use slot empty                                             | string             | -                                 | No data                                                                        |
| popper-class          | custom class name for Select's dropdown                                                                          | string             | -                                 | -                                                                              |
| reserve-keyword       | when `multiple` and `filter` is true, whether to reserve current keyword after selecting an option               | boolean            | -                                 | false                                                                          |
| default-first-option  | select first matching option on enter key. Use with `filterable` or `remote`                                     | boolean            | -                                 | false                                                                          |
| teleported            | whether select dropdown is teleported to the body                                                                | boolean            | -                                 | true                                                                           |
| persistent            | when select dropdown is inactive and `persistent` is `false`, select dropdown will be destroyed                  | boolean            | -                                 | true                                                                           |
| automatic-dropdown    | for non-filterable Select, this prop decides if the option menu pops up when the input is focused                | boolean            | -                                 | false                                                                          |
| clear-icon            | Custom clear icon class                                                                                          | string / Component | -                                 | CircleClose                                                                    |
| fit-input-width       | whether the width of the dropdown is the same as the input                                                       | boolean            | —                                 | false                                                                          |
| suffix-icon           | Custom suffix icon component                                                                                     | string / Component | —                                 | ArrowUp                                                                        |
| tag-type              | tag type                                                                                                         | string             | success / info / warning / danger | info                                                                           |
| validate-event        | whether to trigger form validation                                                                               | boolean            | -                                 | true                                                                           |

### Events

| Name           | Description                                                   | Parameters                                |
| -------------- | ------------------------------------------------------------- | ----------------------------------------- |
| change         | triggers when the selected value changes                      | current selected value                    |
| visible-change | triggers when the dropdown appears/disappears                 | true when it appears, and false otherwise |
| remove-tag     | triggers when a tag is removed in multiple mode               | removed tag value                         |
| clear          | triggers when the clear icon is clicked in a clearable Select | —                                         |
| blur           | triggers when Input blurs                                     | (event: Event)                            |
| focus          | triggers when Input focuses                                   | (event: Event)                            |

### Slots

| Name | Description                               |
| ---- | ----------------------------------------- |
| -    | Custom content. The parameter is { item } |
