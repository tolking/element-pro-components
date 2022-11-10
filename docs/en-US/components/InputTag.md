---
title: InputTag
meta:
  - name: description
    content: Enter an array of tags
---

# InputTag

> Enter an array of tags

## Use

### Basic Use

When using `pro-input-tag`, most attribute of `type="text"` are supported

::: demo
@/demo/InputTag/base.vue
:::

### Trigger

::: tip TIP
Since `1.0.0`, The default trigger mode is adjusted to `Enter`
:::

Input is triggered by the space bar by default, Set `trigger="enter"` attribute to enable trigger by `Enter`

::: demo
@/demo/InputTag/trigger.vue
:::

### Limit max tags

The max number of tags that can be entered can be configured through `max`

::: demo
@/demo/InputTag/max.vue
:::

### Component Size

Set `size` attribute to change the size of Input and Tag

::: demo
@/demo/InputTag/size.vue
:::

### Props

| Name            | Description                          | Type    | Options                           | Default |
| :-------------- | :----------------------------------- | :------ | :-------------------------------- | :------ |
| v-model         | binding value                        | array   | -                                 | -       |
| trigger         | the key to trigger input tag         | string  | space / enter                     | enter   |
| max             | max number tags that can be enter    | number  | -                                 | -       |
| size            | component size                       | string  | large / default /small            | -       |
| type            | tag Type                             | string  | success / info / warning / danger | -       |
| hit             | whether Tag has a highlighted border | boolean | -                                 | false   |
| color           | background color of the Tag          | string  | -                                 | -       |
| effect          | component theme of the Tag           | string  | dark / light / plain              | light   |
| maxlength       | maximum Input text length            | number  | -                                 | -       |
| minlength       | minimum Input text length            | number  | -                                 | -       |
| show-word-limit | whether show word count              | boolean | -                                 | false   |
| placeholder     | placeholder of Input                 | string  | -                                 | -       |
| clearable       | whether to show clear button         | boolean | -                                 | false   |
| disabled        | whether disabled                     | boolean | -                                 | false   |
| prefix-icon     | prefix icon class                    | string  | -                                 | -       |
| suffix-icon     | suffix icon class                    | string  | -                                 | -       |
| autocomplete    | same as autocomplete in native input | string  | on / off                          | off     |
| name            | same as name in native input         | string  | -                                 | -       |
| readonly        | same as readonly in native input     | boolean | -                                 | false   |
| autofocus       | same as autofocus in native input    | boolean | -                                 | false   |
| form            | same as form in native input         | string  | -                                 | -       |
| label           | label text                           | string  | -                                 | -       |
| tabindex        | input tabindex                       | string  | -                                 | -       |
| validate-event  | whether to trigger form validation   | boolean | -                                 | true    |
| input-style     | the style of input                   | object  | -                                 | -       |

## Events

| Name       | Description                           | Parameters      |
| ---------- | ------------------------------------- | --------------- |
| input      | triggers when the Input value change  | (value: string) |
| tag-add    | triggers when add a tag               | (value: string) |
| tag-remove | triggers when close button is clicked | (value: string) |
