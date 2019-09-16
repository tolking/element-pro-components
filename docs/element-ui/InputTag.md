---
title: InputTag
lang: zh-CN
description: 基于 element-ui input tag 的输入多个标签的输入框(类似 github 上的 Manage topics)
--- 

# InputTag

> 基于 element-ui `input` `tag` 的输入多个标签的输入框(类似 github 上的 `Manage topics`)

## 作用

通过点击 `Enter` 按键，增加一个标签。然后生成标签数组，并且可以单独删除每个标签

## 注册

1. 全局注册

``` js
// src-> main.js
import Vue from 'vue'
import InputTag from '@/components/InputTag'

Vue.use(InputTag)
```

2. 直接引用

``` js
import InputTag from '@/components/InputTag'

export default {
  components: { InputTag }
}
```

## 使用

``` html vue
<template>
  <input-tag v-model="tags" @change="handleTagsChange"/>
</template>

<script>
export default {
  data() {
    return {
      tags: []
    }
  },
  methods: {
    handleTagsChange(tags) {
      console.log(tags)
    }
  }
}
</script>
```

**效果**

<template>
  <input-tag v-model="tags" @change="handleTagsChange"/>
</template>

<script>
import InputTag from '../../element-ui-components/InputTag'

export default {
  components: { InputTag },
  data() {
    return {
      tags: []
    }
  },
  methods: {
    handleTagsChange(tags) {
      console.log(tags)
    }
  }
}
</script>


## 配置

**默认 type="text"，支持除了 type 外的大部 input 的分配置**

v-model 或者 value
- type: `Array`
- default: `[]`

绑定的标签数组

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
