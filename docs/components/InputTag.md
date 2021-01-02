---
title: InputTag
---

# InputTag

> 基于 `tag` `input` `autocomplete` 的输入多个标签的输入框

## 使用

1. 基于 `input` 使用

::: demo input 默认 type="text"，支持 type="text" 的大部分配置 <template> <pro-input-tag v-model="inputTags" placeholder="请输入内容,点击空格按键" @change="handleTagsChange" /> </template>

<script>
export default {
  data() {
    return {
      inputTags: []
    }
  },
  methods: {
    handleTagsChange(tags) {
      console.log(tags)
    }
  }
}
</script>

:::

## 配置 TODO: rebuild

**input 默认 type="text"，支持 type="text" 的大部分配置**

**支持 autocomplete 的大部分配置**

v-model 或者 value

- type: `Array`
- default: `[]`

绑定的标签数组

autocomplete

- type: `Boolean`
- default: `false`

是否启用自动补全

tagType

- type: `String`
- default: `null`

tag 类型

tagSize

- type: `String`
- default: `null`

tag 尺寸

tagHit

- type: `Boolean`
- default: `false`

tag 是否有边框描边

tagEffect

- type: `String`
- default: `light`

tag 主题

## 事件

change

标签数组变化时返回 `tags`
