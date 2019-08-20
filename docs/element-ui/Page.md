# AppPage

> 基于 element-ui 的公用分页组件

## 作用

处理分页按钮变动时，返回页面顶部

## 注册

1. 全局注册

``` js
// src-> main.js
import Vue from 'vue'
import AppPage from '@/components/Page'

Vue.use(AppPage)
```

2. 直接引用

``` js
import AppPage from '@/components/Page'

export default {
  components: { AppPage }
}
```

## 使用

``` html vue
<template>
  <app-page v-model="page" @change="handleCurrentChange"/>
</template>

<script>
export default {
  data() {
    return {
      page: {
        current: 1,
        total: 0,
        size: 15
      }
    }
  },
  methods: {
    handleCurrentChange(page) {
      console.log(page)
    }
  }
}
</script>
```

## 效果

查看下面

## 配置

v-model 或者 value
- type: `Object`
- default: `{ current: 1, total: 0, size: 15 }`

绑定的分页数据

scroll
- type: `Boolean`
- default: `true`

是否需要返回顶部

## 事件

change

分页变动时返回 `page`

## 注意

1. 该组件对弹窗里面的滚动条无效
2. 如果在弹窗中出现分页，需要指定 `scroll` 为 `false`，防止主页面滚动回顶部

``` html
<app-page v-model="page" :scroll="false"/>
```

<template>
  <app-page v-model="page" @change="handleCurrentChange"/>
</template>

<script>
import AppPage from '../../element-ui-components/Page'

export default {
  components: { AppPage },
  data() {
    return {
      page: {
        current: 1,
        total: 200,
        size: 15
      }
    }
  },
  methods: {
    handleCurrentChange(page) {
      console.log(page)
    }
  }
}
</script>