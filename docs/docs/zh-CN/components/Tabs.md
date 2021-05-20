# Tabs

> 根据浏览记录自动记录历史 tab，与 `vue-router` 高度绑定

## 使用

### 基础用法

::: demo 将自动记录路由变化

<template>
  <pro-tabs />
</template>

:::

### 外部调用关闭

::: demo 通过 `ref` 绑定 `Tabs` 进而通过外部调用关闭 tab 页

<template>
  <p>注意顶部变换</p>
  <el-button @click="tabs.close('/zh-CN/guide/')">关闭主页</el-button>
  <el-button @click="tabs.closeOther">关闭其它</el-button>
</template>

<script>
import { inject } from 'vue'

export default {
  setup() {
    const tabs = inject('tabs')

    return { tabs }
  }
}
</script>

:::

::: tip 提示
在使用前需要通过 `ref` 绑定 `Tabs`，参考

```vue
<template>
  <pro-tabs ref="tabs" />
</template>

<script>
import { ref, provide } from 'vue'

export default {
  setup() {
    const tabs = ref({})

    provide('tabs', tabs)
    return {}
  },
}
</script>
```

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
