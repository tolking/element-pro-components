---
title: Checkbox
meta:
  - name: description
    content: 封装多选框组件
---

# Checkbox

> 封装多选框组件

## 使用

### 基础用法

::: demo 传入 data 数据将自动生成选项

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
    const checkbox = ref(undefined)
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

### Checkbox 配置

| 参数       | 说明                           | 类型    | 可选值                | 默认值                                                                 |
| :--------- | :----------------------------- | :------ | :-------------------- | :--------------------------------------------------------------------- |
| v-model    | 绑定值                         | array   | -                     | -                                                                      |
| data       | 绑定数据                       | array   | -                     | -                                                                      |
| config     | 配置绑定数据键值               | object  | -                     | { value: 'value', label: 'label', disabled: 'disabled', name: 'name' } |
| size       | 尺寸                           | string  | medium / small / mini | -                                                                      |
| disabled   | 是否禁用                       | boolean | -                     | false                                                                  |
| min        | 可被勾选的的最小数量           | number  | -                     | -                                                                      |
| max        | 可被勾选的的最大数量           | number  | -                     | -                                                                      |
| text-color | 按钮形式激活时的文本颜色       | string  | -                     | #ffffff                                                                |
| fill       | 按钮形式激活时的填充色和边框色 | string  | -                     | #409EFF                                                                |

### Checkbox 事件

| 名称   | 说明                   | 回调参数        |
| ------ | ---------------------- | --------------- |
| change | 绑定值变化时触发的事件 | 选中的 label 值 |

### CheckboxButton

> 封装多选框按钮组件

### CheckboxButton 配置

| 参数       | 说明                           | 类型    | 可选值                | 默认值                                                                 |
| :--------- | :----------------------------- | :------ | :-------------------- | :--------------------------------------------------------------------- |
| v-model    | 绑定值                         | array   | -                     | -                                                                      |
| data       | 绑定数据                       | array   | -                     | -                                                                      |
| config     | 配置绑定数据键值               | object  | -                     | { value: 'value', label: 'label', disabled: 'disabled', name: 'name' } |
| size       | 尺寸                           | string  | medium / small / mini | -                                                                      |
| disabled   | 是否禁用                       | boolean | -                     | false                                                                  |
| min        | 可被勾选的的最小数量           | number  | -                     | -                                                                      |
| max        | 可被勾选的的最大数量           | number  | -                     | -                                                                      |
| text-color | 按钮形式激活时的文本颜色       | string  | -                     | #ffffff                                                                |
| fill       | 按钮形式激活时的填充色和边框色 | string  | -                     | #409EFF                                                                |

### CheckboxButton 事件

| 名称   | 说明                   | 回调参数        |
| ------ | ---------------------- | --------------- |
| change | 绑定值变化时触发的事件 | 选中的 label 值 |
