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

::: demo Set `data` attribute will automatic generate options

<template>
  <pro-radio
    v-model="radio"
    :data="data"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const radio = ref('')
    const data = ref([
      { value: 'Go', label: 'go' },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])

    return {
      radio,
      data,
    }
  }
}
</script>

:::

### Disabled State

::: demo Set the `disabled` attribute in prop `data`

<template>
  <pro-radio
    v-model="radio1"
    :data="list"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const radio1 = ref('')
    const list = ref([
      { value: 'Go', label: 'go', disabled: true },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])

    return {
      radio1,
      list,
    }
  }
}
</script>

:::

### Configure binding data key value

::: demo Set `config` attribute. `value`- v-model bind key; `label`- display key; `disabled`- Disabled key; `name`- name key

<template>
  <pro-radio
    v-model="radio2"
    :data="data"
    :config="config"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const radio2 = ref('')
    const config = ref({ value: 'label', label: 'value' })
    const data = ref([
      { value: 'Go', label: 'go' },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])

    return {
      radio2,
      config,
      data,
    }
  }
}
</script>

:::

### Button style

::: demo use `pro-radio-button` then checkbox with button styles

<template>
  <pro-radio-button
    v-model="radiobutton"
    :data="data"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const radiobutton = ref('')
    const data = ref([
      { value: 'Go', label: 'go' },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])

    return {
      radiobutton,
      data,
    }
  }
}
</script>

:::

### Radio Props

| Name       | Description                                       | Type    | Options               | Default                                                                |
| :--------- | :------------------------------------------------ | :------ | :-------------------- | :--------------------------------------------------------------------- |
| v-model    | binding value                                     | array   | -                     | -                                                                      |
| data       | binding data                                      | array   | -                     | -                                                                      |
| config     | config the key of data                            | object  | -                     | { value: 'value', label: 'label', disabled: 'disabled', name: 'name' } |
| size       | component size                                    | string  | medium / small / mini | -                                                                      |
| disabled   | whether disabled                                  | boolean | -                     | false                                                                  |
| text-color | font color when button is active                  | string  | -                     | #ffffff                                                                |
| fill       | border and background color when button is active | string  | -                     | #409EFF                                                                |

### Radio Events

| Event Name | Description                           | Parameters                          |
| ---------- | ------------------------------------- | ----------------------------------- |
| change     | triggers when the bound value changes | the label value of the chosen radio |

### RadioButton

> Single selection among multiple options

### RadioButton Props

| Name       | Description                                       | Type    | Options               | Default                                                                |
| :--------- | :------------------------------------------------ | :------ | :-------------------- | :--------------------------------------------------------------------- |
| v-model    | binding value                                     | array   | -                     | -                                                                      |
| data       | binding data                                      | array   | -                     | -                                                                      |
| config     | config the key of data                            | object  | -                     | { value: 'value', label: 'label', disabled: 'disabled', name: 'name' } |
| size       | component size                                    | string  | medium / small / mini | -                                                                      |
| disabled   | whether disabled                                  | boolean | -                     | false                                                                  |
| text-color | font color when button is active                  | string  | -                     | #ffffff                                                                |
| fill       | border and background color when button is active | string  | -                     | #409EFF                                                                |

### RadioButton Events

| Name   | Description                           | Parameters                          |
| ------ | ------------------------------------- | ----------------------------------- |
| change | triggers when the bound value changes | the label value of the chosen radio |
