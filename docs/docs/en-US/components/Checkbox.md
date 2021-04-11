# Checkbox

> Single selection among multiple options

# Use

## Basic Use

::: demo 使用 `pro-checkbox`，并传入 data 数据，自动生成选项

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

### 控制不可选项目

::: demo 将传入 data 数据中的某项设置为 `disabled: true` 即可

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

### 配置绑定数据键值

::: demo 通过 config 配置数据键值。`value`- v-model 绑定的键值、`label`-显示键值、`disabled`-控制不可选的键值、`name`-原生 name 的键值

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

### 按钮样式

::: demo 使用 `pro-checkbox-button` 显示按钮样式的多选框组

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
