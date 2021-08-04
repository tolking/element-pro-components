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

::: demo Set `data` attribute will automatic generate options

<template>
  <pro-checkbox
    v-model="checkbox"
    :data="data"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const checkbox = ref([])
    const data = ref([
      { value: 'Go', label: 'go' },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])

    return {
      checkbox,
      data,
    }
  }
}
</script>

:::

### Disabled State

::: demo Set the `disabled` attribute in prop `data`

<template>
  <pro-checkbox
    v-model="checkbox1"
    :data="list"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const checkbox1 = ref([])
    const list = ref([
      { value: 'Go', label: 'go', disabled: true },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])

    return {
      checkbox1,
      list,
    }
  }
}
</script>

:::

### Configure key of binding data

::: demo Set `config` attribute. `value`- v-model bind key; `label`- display key; `disabled`- Disabled key; `name`- name key

<template>
  <pro-checkbox
    v-model="checkbox2"
    :data="data"
    :config="config"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const checkbox2 = ref([])
    const config = ref({ value: 'label', label: 'value' })
    const data = ref([
      { value: 'Go', label: 'go' },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])

    return {
      checkbox2,
      config,
      data,
    }
  }
}
</script>

:::

### Button style

::: demo use `pro-checkbox-button` then checkbox with button styles

<template>
  <pro-checkbox-button
    v-model="checkboxbutton"
    :data="data"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const checkboxbutton = ref([])
    const data = ref([
      { value: 'Go', label: 'go' },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])

    return {
      checkboxbutton,
      data,
    }
  }
}
</script>

:::

### Checkbox Props

| Name       | Description                                       | Type    | Options               | Default                                                                |
| :--------- | :------------------------------------------------ | :------ | :-------------------- | :--------------------------------------------------------------------- |
| v-model    | binding value                                     | array   | -                     | -                                                                      |
| data       | binding data                                      | array   | -                     | -                                                                      |
| config     | config the key of data                            | object  | -                     | { value: 'value', label: 'label', disabled: 'disabled', name: 'name' } |
| size       | component size                                    | string  | medium / small / mini | -                                                                      |
| disabled   | whether disabled                                  | boolean | -                     | false                                                                  |
| min        | minimum number of checkbox checked                | number  | -                     | -                                                                      |
| max        | maximum number of checkbox checked                | number  | -                     | -                                                                      |
| text-color | font color when button is active                  | string  | -                     | #ffffff                                                                |
| fill       | border and background color when button is active | string  | -                     | #409EFF                                                                |

### Checkbox Events

| Name   | Description                             | Parameters        |
| ------ | --------------------------------------- | ----------------- |
| change | triggers when the binding value changes | the updated value |

### CheckboxButton

> Checkbox with button styles

### CheckboxButton Props

| Name       | Description                                       | Type    | Options               | Default                                                                |
| :--------- | :------------------------------------------------ | :------ | :-------------------- | :--------------------------------------------------------------------- |
| v-model    | binding value                                     | array   | -                     | -                                                                      |
| data       | binding data                                      | array   | -                     | -                                                                      |
| config     | config the key of data                            | object  | -                     | { value: 'value', label: 'label', disabled: 'disabled', name: 'name' } |
| size       | component size                                    | string  | medium / small / mini | -                                                                      |
| disabled   | whether disabled                                  | boolean | -                     | false                                                                  |
| min        | minimum number of checkbox checked                | number  | -                     | -                                                                      |
| max        | maximum number of checkbox checked                | number  | -                     | -                                                                      |
| text-color | font color when button is active                  | string  | -                     | #ffffff                                                                |
| fill       | border and background color when button is active | string  | -                     | #409EFF                                                                |

### CheckboxButton Events

| Name   | Description                             | Parameters        |
| ------ | --------------------------------------- | ----------------- |
| change | triggers when the binding value changes | the updated value |
