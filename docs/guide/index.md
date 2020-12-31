---
title: 介绍
description: 为了实现业务逻辑，自己改写的部分 components 组件
---

# 介绍 (TODO: rebuild)

为了实现业务逻辑，自己改写的部分 components 组件

::: demo 简单介绍

<p>{{ list }}</p>
<pro-input-tag v-model="list" />

<script>
export default {
  data() {
    return {
      list: []
    }
  }
}
</script>

:::

## 下载

**使用需要注意组件的依赖**

直接将需要组件放置于 `src-> components` 下面

## 注册

1. 全局注册

```js
// src-> main.js
import Vue from 'vue'
import XXX from '@/components/XXX'

Vue.use(XXX)
```

2. 直接引用

```js
import XXX from '@/components/XXX'

export default {
  components: { XXX },
}
```

## 使用

**使用需要注意，部分组件可能需要修改内部（例如：ImgUpload）**
