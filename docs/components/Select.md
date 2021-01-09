# Select

> 封装选择器

## 使用

::: demo

<template>
  <pro-select
    v-model="select"
    :data="list"
    :config="config"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const select = ref('')
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

| 参数    | 说明             | 类型   | 默认值                                            |
| :------ | :--------------- | :----- | :------------------------------------------------ |
| v-model | 绑定值           | array  | -                                                 |
| data    | 绑定数据         | array  | -                                                 |
| config  | 配置绑定数据键值 | object | {value:'value',label:'label',disabled:'disabled'} |

### 其它配置

同 [ElSelect](https://element-plus.gitee.io/#/zh-CN/component/select)
