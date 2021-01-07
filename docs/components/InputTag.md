# InputTag

> 基于 `tag` `input` `autocomplete` 的输入多个标签的输入框

## 使用

1. 基于 `input` 使用

::: demo input 默认 type="text"，支持 type="text" 的大部分配置

<template>
  <pro-input-tag
    v-model="inputTags"
    placeholder="请输入内容,点击空格按键"
  />
</template>

<script>
export default {
  data() {
    return {
      inputTags: []
    }
  }
}
</script>

:::

2. 基于 `autocomplete` 使用

::: demo 支持 autocomplete 的大部分配置

<template>
  <pro-input-tag
    v-model="inputTags1"
    :fetch-suggestions="querySearch"
    autocomplete
    placeholder="请输入内容,点击空格按键"
  />
</template>

<script setup>
import { onMounted, ref } from 'vue'

const inputTags1 = ref([])
const list = [
  { value: 'Go', tag: 'go' },
  { value: 'JavaScript', tag: 'javascript' },
  { value: 'Python', tag: 'python' },
]

function querySearch(queryString, cb) {
  cb(queryString ? list.filter(i => {
    return i.value.indexOf(queryString.toLowerCase()) === 0
  }) : list)
}
</script>

:::

## 配置

| 参数         | 说明                     | 类型    | 默认值              |
| :----------- | :----------------------- | :------ | :------------------ |
| v-model      | 绑定值                   | array   | -                   |
| autocomplete | 是否启用自动补全         | boolran | false               |
| tag          | tag 标签的配置，参考 tag | object  | { effect: 'light' } |

#### 其它配置

autocomplete: false 时，同 type="text" [ElInput](https://element-plus.gitee.io/#/zh-CN/component/input)
autocomplete: true 时，同 [ElAutocomplete](https://element-plus.gitee.io/#/zh-CN/component/input)

### tag

| 参数   | 说明           | 类型    | 可选值                      | 默认值 |
| :----- | :------------- | :------ | :-------------------------- | :----- |
| type   | 类型           | string  | success/info/warning/danger | —      |
| hit    | 是否有边框描边 | boolean | —                           | false  |
| color  | 背景色         | string  | —                           | —      |
| size   | 尺寸           | string  | medium / small / mini       | —      |
| effect | 主题           | string  | dark / light / plain        | light  |
