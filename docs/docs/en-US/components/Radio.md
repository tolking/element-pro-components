---
title: Radio
meta:
  - name: description
    content: Single selection among multiple options
---

# Radio

> Single selection among multiple options

## Use

### Basic Use

Set `data` attribute will automatic generate options

::: demo
@/demo/Radio/base.vue
:::

### Disabled State

Set the `disabled` attribute in prop `data`

::: demo
@/demo/Radio/disabled.vue
:::

### Configure binding data key value

Set `config` attribute. `value`- v-model bind key; `label`- display key; `disabled`- Disabled key; `name`- name key

::: demo
@/demo/Radio/config.vue
:::

### Button style

use `pro-radio-button` then checkbox with button styles

::: demo
@/demo/RadioButton/base.vue
:::

### Radio Props

| Name           | Description                                       | Type    | Options                | Default                                                                |
| :------------- | :------------------------------------------------ | :------ | :--------------------- | :--------------------------------------------------------------------- |
| v-model        | binding value                                     | array   | -                      | -                                                                      |
| data           | binding data                                      | array   | -                      | -                                                                      |
| config         | config the key of data                            | object  | -                      | { value: 'value', label: 'label', disabled: 'disabled', name: 'name' } |
| size           | component size                                    | string  | large / default /small | -                                                                      |
| disabled       | whether disabled                                  | boolean | -                      | false                                                                  |
| text-color     | font color when button is active                  | string  | -                      | #ffffff                                                                |
| fill           | border and background color when button is active | string  | -                      | #409EFF                                                                |
| validate-event | whether to trigger form validation                | boolean | -                      | true                                                                   |

### Radio Events

| Name   | Description                           | Parameters                          |
| ------ | ------------------------------------- | ----------------------------------- |
| change | triggers when the bound value changes | the label value of the chosen radio |

## RadioButton

> Single selection among multiple options

### RadioButton Props

| Name       | Description                                       | Type    | Options                | Default                                                                |
| :--------- | :------------------------------------------------ | :------ | :--------------------- | :--------------------------------------------------------------------- |
| v-model    | binding value                                     | array   | -                      | -                                                                      |
| data       | binding data                                      | array   | -                      | -                                                                      |
| config     | config the key of data                            | object  | -                      | { value: 'value', label: 'label', disabled: 'disabled', name: 'name' } |
| size       | component size                                    | string  | large / default /small | -                                                                      |
| disabled   | whether disabled                                  | boolean | -                      | false                                                                  |
| text-color | font color when button is active                  | string  | -                      | #ffffff                                                                |
| fill       | border and background color when button is active | string  | -                      | #409EFF                                                                |

### RadioButton Events

| Name   | Description                           | Parameters                          |
| ------ | ------------------------------------- | ----------------------------------- |
| change | triggers when the bound value changes | the label value of the chosen radio |
