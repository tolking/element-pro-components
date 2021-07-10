# Select

> When there are plenty of options, use a drop-down menu to display and select desired ones

# Use

## Basic Use

::: demo 传入 data 数据，自动生成选项

<template>
  <pro-select
    v-model="select"
    :data="data"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const select = ref('')
    const data = ref([
      { value: 'Go', label: 'go' },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])

    return {
      select,
      data,
    }
  }
}
</script>

:::

### 控制不可选项目

::: demo 将传入 data 数据中的某项设置为 `disabled: true` 即可

<template>
  <pro-select
    v-model="select1"
    :data="list"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const select1 = ref('')
    const list = ref([
      { value: 'Go', label: 'go', disabled: true },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])

    return {
      select1,
      list,
    }
  }
}
</script>

:::

### 配置绑定数据键值

::: demo 通过 config 配置数据键值。`value`- v-model 绑定的键值、`label`-显示键值、`disabled`-控制不可选的键值

<template>
  <pro-select
    v-model="select2"
    :data="data"
    :config="config"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const select2 = ref('')
    const config = ref({ value: 'label', label: 'value' })
    const data = ref([
      { value: 'Go', label: 'go' },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])

    return {
      select2,
      config,
      data,
    }
  }
}
</script>

:::

### 开启多选

::: demo 当 `multiple` 为 `true` 时，启用多选。此时绑定的 model-value 为数组格式

<template>
  <pro-select
    v-model="select"
    :data="data"
    multiple
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const select = ref([])
    const data = ref([
      { value: 'Go', label: 'go' },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])

    return {
      select,
      data,
    }
  }
}
</script>

:::

### Props

| Name                  | Description                                                                                                                 | Type     | Options               | Default                                                                        |
| :-------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :------- | :-------------------- | :----------------------------------------------------------------------------- |
| v-model               | binding value                                                                                                               | array    | -                     | -                                                                              |
| data                  | binding data                                                                                                                | array    | -                     | -                                                                              |
| config                | config the key of data                                                                                                      | object   | -                     | { value: 'value', label: 'label', disabled: 'disabled', children: 'children' } |
| multiple              | whether multiple-select is activated                                                                                        | boolean  | -                     | false                                                                          |
| disabled              | whether disabled                                                                                                            | boolean  | -                     | false                                                                          |
| size                  | component size                                                                                                              | string   | medium / small / mini | -                                                                              |
| clearable             | whether clearable                                                                                                           | boolean  | -                     | false                                                                          |
| collapse-tags         | whether to collapse tags to a text when multiple selecting                                                                  | boolean  | -                     | false                                                                          |
| multiple-limit        | maximum number of options user can select when multiple is true. No limit when set to 0                                     | number   | -                     | 0                                                                              |
| name                  | the name attribute of select input                                                                                          | string   | -                     | -                                                                              |
| autocomplete          | the autocomplete attribute of select input                                                                                  | string   | on /off               | off                                                                            |
| placeholder           | placeholder                                                                                                                 | string   | -                     | Select                                                                         |
| filterable            | whether Select is filterable                                                                                                | boolean  | -                     | false                                                                          |
| allow-create          | whether creating new items is allowed. To use this, `filterable` must be true                                               | boolean  | -                     | false                                                                          |
| filter-method         | custom filter method                                                                                                        | function | -                     | -                                                                              |
| remote                | whether options are loaded from server                                                                                      | boolean  | -                     | false                                                                          |
| remote-method         | custom remote search method                                                                                                 | function | -                     | -                                                                              |
| loading               | whether Select is loading data from server                                                                                  | boolean  | -                     | false                                                                          |
| loading-text          | displayed text while loading data from server                                                                               | string   | -                     | Loading                                                                        |
| no-match-text         | displayed text when no data matches the filtering query, you can also use slot `empty`                                      | string   | -                     | No matching data                                                               |
| no-data-text          | displayed text when there is no options, you can also use slot empty                                                        | string   | -                     | No data                                                                        |
| popper-class          | custom class name for Select's dropdown                                                                                     | string   | -                     | -                                                                              |
| reserve-keyword       | when `multiple` and `filter` is true, whether to reserve current keyword after selecting an option                          | boolean  | -                     | false                                                                          |
| default-first-option  | select first matching option on enter key. Use with `filterable` or `remote`                                                | boolean  | -                     | false                                                                          |
| popper-append-to-body | whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false | boolean  | -                     | false                                                                          |
| automatic-dropdown    | for non-filterable Select, this prop decides if the option menu pops up when the input is focused                           | boolean  | -                     | false                                                                          |
| clear-icon            | Custom clear icon class                                                                                                     | string   | -                     | el-icon-circle-close                                                           |

### Events

| Name           | Description                                                   | Parameters                                |
| -------------- | ------------------------------------------------------------- | ----------------------------------------- |
| change         | triggers when the selected value changes                      | current selected value                    |
| visible-change | triggers when the dropdown appears/disappears                 | true when it appears, and false otherwise |
| remove-tag     | triggers when a tag is removed in multiple mode               | removed tag value                         |
| clear          | triggers when the clear icon is clicked in a clearable Select | —                                         |
| blur           | triggers when Input blurs                                     | (event: Event)                            |
| focus          | triggers when Input focuses                                   | (event: Event)                            |
