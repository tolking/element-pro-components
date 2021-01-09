# Radio

> 封装单选框组

## 使用

::: demo `pro-radio` 基础样式的单选框组；`pro-radio-button` 按钮样式的单选框组

<template>
  <p>1. 基础用法</p>
  <pro-radio
    v-model="radio"
    :data="list"
    :config="config"
  />
  <p>2. 按钮样式</p>
  <pro-radio-button
    v-model="radiobutton"
    :data="list"
    :config="config"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const radio = ref('')
    const radiobutton = ref('')
    const config = ref({ label: 'tag' })
    const list = ref([
      { value: 'Go', tag: 'go', disabled: true },
      { value: 'JavaScript', tag: 'javascript' },
      { value: 'Python', tag: 'python' },
    ])
    return {
      radio,
      radiobutton,
      config,
      list,
    }
  }
}
</script>

:::

## 配置

| 参数       | 说明                           | 类型    | 可选值                | 默认值                                            |
| :--------- | :----------------------------- | :------ | :-------------------- | :------------------------------------------------ |
| v-model    | 绑定值                         | array   | -                     | -                                                 |
| data       | 绑定数据                       | array   | -                     | -                                                 |
| config     | 配置绑定数据键值               | object  | -                     | {value:'value',label:'label',disabled:'disabled'} |
| size       | 尺寸                           | string  | medium / small / mini | —                                                 |
| disabled   | 是否禁用                       | boolean | —                     | false                                             |
| text-color | 按钮形式激活时的文本颜色       | string  | —                     | #ffffff                                           |
| fill       | 按钮形式激活时的填充色和边框色 | string  | —                     | #409EFF                                           |
