---
title: Tabs
meta:
  - name: description
    content: 根据浏览记录自动记录历史 tab
---

# Tabs

> 根据浏览记录自动记录历史 tab

## 使用

### 基础用法

::: demo 将自动记录路由变化

<template>
  <pro-tabs />
</template>

:::

### 外部调用关闭

::: demo 通过 `ref` 绑定 `Tabs` 进而通过外部调用关闭 tab 页。注：`const tabs = inject('tabs')` 由顶层 `Layout` 注入 [参考](https://github.com/tolking/element-pro-components/blob/master/docs/src/layout/Layout.vue)

<template>
  <pro-tabs ref="childTabs" style="margin-bottom:15px" />
  <el-button @click="childTabs.close('/zh-CN/guide/')">关闭主页</el-button>
  <el-button @click="childTabs.closeOther">关闭其它</el-button>
  <el-button @click="asyncList">同步</el-button>
</template>

<script>
import { inject, onMounted, shallowRef } from 'vue'

export default {
  setup() {
    const tabs = inject('tabs') // 获取顶层 `Tabs` 注入
    const childTabs = shallowRef({})

    onMounted(() => {
      asyncList()
    })

    function asyncList() {
      childTabs.value.list = tabs.value.list
    }

    return {
      childTabs,
      asyncList,
    }
  }
}
</script>

:::

### 配置

| 参数         | 说明                                                                        | 类型                                | 可选值             | 默认值 |
| ------------ | --------------------------------------------------------------------------- | ----------------------------------- | ------------------ | ------ |
| type         | 风格类型                                                                    | string                              | card / border-card | -      |
| closable     | 标签是否可关闭                                                              | boolean                             | -                  | -      |
| stretch      | 标签的宽度是否自撑开                                                        | boolean                             | -                  | false  |
| before-leave | 切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。 | Function(activeName, oldActiveName) | -                  | -      |

### 事件

| 名称       | 说明                    | 回调参数              |
| ---------- | ----------------------- | --------------------- |
| tab-click  | tab 被选中时触发        | 被选中的标签 tab 实例 |
| tab-remove | 点击 tab 移除按钮后触发 | 被删除的标签的 name   |

### 方法

| 方法名     | 说明                               | 参数                      |
| ---------- | ---------------------------------- | ------------------------- |
| close      | 从 tabs 中关闭指定路由的页面       | path (需要关闭页面的路由) |
| closeOther | 从 tabs 中关闭除当前路由的其它路由 | -                         |
