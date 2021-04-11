# Radio

> Single selection among multiple options

# Use

## Basic Use

::: demo 使用 `pro-radio`，并传入 data 数据，自动生成选项

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

### 控制不可选项目

::: demo 将传入 data 数据中的某项设置为 `disabled: true` 即可

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

### 配置绑定数据键值

::: demo 通过 config 配置数据键值。`value`- v-model 绑定的键值、`label`-显示键值、`disabled`-控制不可选的键值、`name`-原生 name 的键值

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

### 按钮样式

::: demo 使用 `pro-radio-button` 显示按钮样式的多选框组

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
