---
title: AutocompleteTag
meta:
  - name: description
    content: Enter an array of tags with some recommended tips
---

# AutocompleteTag

> Enter an array of tags with some recommended tips

## Use

### Basic Use

When using `pro-autocomplete-tag`, most attribute of `ElAutocomplete` are supported

::: demo
@/demo/AutocompleteTag/base.vue
:::

### Props

| Name                  | Description                                                                                                              | Type                            | Options                                                        | Default      |
| :-------------------- | :----------------------------------------------------------------------------------------------------------------------- | :------------------------------ | :------------------------------------------------------------- | :----------- |
| v-model               | binding value                                                                                                            | array                           | -                                                              | -            |
| trigger               | the key to trigger input tag                                                                                             | string                          | space / enter                                                  | enter        |
| max                   | max number that can be enter                                                                                             | number                          | -                                                              | -            |
| size                  | component size                                                                                                           | string                          | large / default /small                                         | -            |
| type                  | tag Type                                                                                                                 | string                          | success / info / warning / danger                              | -            |
| hit                   | whether Tag has a highlighted border                                                                                     | boolean                         | -                                                              | false        |
| color                 | background color of the Tag                                                                                              | string                          | -                                                              | -            |
| effect                | component theme of the Tag                                                                                               | string                          | dark / light / plain                                           | light        |
| placeholder           | placeholder of Input                                                                                                     | string                          | -                                                              | -            |
| disabled              | whether disabled                                                                                                         | boolean                         | -                                                              | false        |
| value-key             | key name of the input suggestion object for display                                                                      | string                          | -                                                              | value        |
| debounce              | debounce delay when typing, in milliseconds                                                                              | number                          | -                                                              | 300          |
| placement             | placement of the popup menu                                                                                              | string                          | top / top-start / top-end / bottom / bottom-start / bottom-end | bottom-start |
| fetch-suggestions     | a method to fetch input suggestions. When suggestions are ready, invoke callback(data:[]) to return them to Autocomplete | Function(queryString, callback) | -                                                              | -            |
| popper-class          | custom class name for autocomplete's dropdown                                                                            | string                          | -                                                              | -            |
| trigger-on-focus      | whether show suggestions when input focus                                                                                | boolean                         | -                                                              | true         |
| name                  | same as name in native input                                                                                             | string                          | -                                                              | -            |
| select-when-unmatched | whether to emit a select event on enter when there is no autocomplete match                                              | boolean                         | -                                                              | false        |
| label                 | label text                                                                                                               | string                          | -                                                              | -            |
| prefix-icon           | prefix icon class                                                                                                        | string                          | -                                                              | -            |
| suffix-icon           | suffix icon class                                                                                                        | string                          | -                                                              | -            |
| hide-loading          | whether to hide the loading icon in remote search                                                                        | boolean                         | -                                                              | false        |
| teleported            | whether select dropdown is teleported to the body                                                                        | boolean                         | -                                                              | true         |
| highlight-first-item  | whether to highlight first item in remote search suggestions by default                                                  | boolean                         | -                                                              | false        |
| fit-input-width       | whether the width of the dropdown is the same as the input                                                               | boolean                         | —                                                              | false        |

## Events

| Name       | Description                           | Type                    |
| ---------- | ------------------------------------- | ----------------------- |
| input      | triggers when the Input value change  | (value: string) => void |
| tag-add    | triggers when add a tag               | (value: string) => void |
| tag-remove | triggers when close button is clicked | (value: string) => void |
