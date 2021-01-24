# Select

> 封装选择器

## 使用

- 基础用法

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

- 控制不可选项目

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

- 配置绑定数据键值

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

- 开启多选

::: demo 当 `multiple` 为 `true` 时，启用多选。此时绑定的 model-value 为数组格式

<template>
  <pro-select
    v-model="select"
    :data="list"
    :config="config"
    multiple
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const select = ref([])
    const config = ref({ label: 'tag' })
    const list = ref([
      { value: 'Go', tag: 'go', disabled: true },
      { value: 'JavaScript', tag: 'javascript' },
      { value: 'Python', tag: 'python' },
    ])
    return {
      select,
      config,
      list,
    }
  }
}
</script>

:::

## 配置

| 参数                  | 说明                                                               | 类型                          | 可选值                | 默认值                 |
| :-------------------- | :----------------------------------------------------------------- | :---------------------------- | :-------------------- | :--------------------- |
| v-model               | 绑定值                                                             | array                         | -                     | -                      |
| data                  | 绑定数据                                                           | array                         | -                     | -                      |
| config                | 配置绑定数据键值                                                   | object                        | -                     | {value,label,disabled} |
| multiple              | 是否多选                                                           | boolean                       | —                     | false                  |
| disabled              | 是否禁用                                                           | boolean                       | —                     | false                  |
| size                  | 尺寸                                                               | string                        | medium / small / mini | —                      |
| clearable             | 是否可以清空选项                                                   | boolean                       | —                     | false                  |
| collapse-tags         | 多选时是否将选中值按文字的形式展示                                 | boolean                       | —                     | false                  |
| multiple-limit        | 多选时用户最多可以选择的项目数，为 0 则不限制                      | number                        | —                     | 0                      |
| name                  | select input 的 name 属性                                          | string                        | —                     | —                      |
| autocomplete          | select input 的 autocomplete 属性                                  | string                        | —                     | off                    |
| auto-complete         | 下个主版本弃用                                                     | string                        | —                     | off                    |
| placeholder           | 占位符                                                             | string                        | —                     | 请选择                 |
| filterable            | 是否可搜索                                                         | boolean                       | —                     | false                  |
| allow-create          | 是否允许用户创建新条目，需配合 filterable 使用                     | boolean                       | —                     | false                  |
| filter-method         | 自定义搜索方法                                                     | function                      | —                     | —                      |
| remote                | 是否为远程搜索                                                     | boolean                       | —                     | false                  |
| remote-method         | 远程搜索方法                                                       | function                      | —                     | —                      |
| loading               | 是否正在从远程获取数据                                             | boolean                       | —                     | false                  |
| loading-text          | 远程加载时显示的文字                                               | string                        | —                     | 加载中                 |
| no-match-text         | 搜索条件无匹配时显示的文字，也可以使用#empty 设置                  | string                        | —                     | 无匹配数据             |
| no-data-text          | 选项为空时显示的文字，也可以使用#empty 设置                        | string                        | —                     | 无数据                 |
| popper-class          | Select 下拉框的类名                                                | string                        | —                     | —                      |
| reserve-keyword       | 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词           | boolean                       | —                     | false                  |
| default-first-option  | 在输入框按下回车，选择第一个匹配项。配合 filterable 或 remote 使用 | boolean                       | -                     | false                  |
| popper-append-to-body | 是否将弹出框插入至 body 元素                                       | boolean                       | -                     | false                  |
| automatic-dropdown    | 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单      | boolean                       | -                     | false                  |
| clear-icon            | 自定义清空图标的类名                                               | string — el-icon-circle-close |
