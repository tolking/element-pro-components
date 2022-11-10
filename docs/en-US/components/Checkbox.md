---
title: Checkbox
meta:
  - name: description
    content: Single selection among multiple options
---

# Checkbox

> Single selection among multiple options

## Use

### Basic Use

Set `data` attribute will automatic generate options

::: demo
@/demo/Checkbox/base.vue
:::

### Disabled State

Set the `disabled` attribute in prop `data`

::: demo
@/demo/Checkbox/disabled.vue
:::

### Configure key of binding data

Set `config` attribute. `value`- v-model bind key; `label`- display key; `disabled`- Disabled key; `name`- name key

::: demo
@/demo/Checkbox/config.vue
:::

### Button style

use `pro-checkbox-button` then checkbox with button styles

::: demo
@/demo/CheckboxButton/base.vue
:::

### Checkbox Props

| Name           | Description                                       | Type    | Options                | Default                                                                |
| :------------- | :------------------------------------------------ | :------ | :--------------------- | :--------------------------------------------------------------------- |
| v-model        | binding value                                     | array   | -                      | -                                                                      |
| data           | binding data                                      | array   | -                      | -                                                                      |
| config         | config the key of data                            | object  | -                      | { value: 'value', label: 'label', disabled: 'disabled', name: 'name' } |
| size           | component size                                    | string  | large / default /small | -                                                                      |
| disabled       | whether disabled                                  | boolean | -                      | false                                                                  |
| min            | minimum number of checkbox checked                | number  | -                      | -                                                                      |
| max            | maximum number of checkbox checked                | number  | -                      | -                                                                      |
| text-color     | font color when button is active                  | string  | -                      | #ffffff                                                                |
| fill           | border and background color when button is active | string  | -                      | #409EFF                                                                |
| validate-event | whether to trigger form validation                | boolean | -                      | true                                                                   |

### Checkbox Events

| Name   | Description                             | Parameters        |
| ------ | --------------------------------------- | ----------------- |
| change | triggers when the binding value changes | the updated value |

## CheckboxButton

> Checkbox with button styles

### CheckboxButton Props

| Name           | Description                                       | Type    | Options                | Default                                                                |
| :------------- | :------------------------------------------------ | :------ | :--------------------- | :--------------------------------------------------------------------- |
| v-model        | binding value                                     | array   | -                      | -                                                                      |
| data           | binding data                                      | array   | -                      | -                                                                      |
| config         | config the key of data                            | object  | -                      | { value: 'value', label: 'label', disabled: 'disabled', name: 'name' } |
| size           | component size                                    | string  | large / default /small | -                                                                      |
| disabled       | whether disabled                                  | boolean | -                      | false                                                                  |
| min            | minimum number of checkbox checked                | number  | -                      | -                                                                      |
| max            | maximum number of checkbox checked                | number  | -                      | -                                                                      |
| text-color     | font color when button is active                  | string  | -                      | #ffffff                                                                |
| fill           | border and background color when button is active | string  | -                      | #409EFF                                                                |
| validate-event | whether to trigger form validation                | boolean | -                      | true                                                                   |

### CheckboxButton Events

| Name   | Description                             | Parameters        |
| ------ | --------------------------------------- | ----------------- |
| change | triggers when the binding value changes | the updated value |
