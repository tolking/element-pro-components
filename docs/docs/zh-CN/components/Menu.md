---
title: Menu
meta:
  - name: description
    content: 封装默认 Menu 通过传入路由或者自动获取路由生成导航
---

# Menu

> 封装默认 Menu 通过传入路由或者自动获取路由生成导航

## 使用

### 基础用法

::: demo 组件默认将从 `vue-router` 中获取路由生成路由

<template>
  <pro-menu class="docs-menu" />
</template>

<style>
.docs-menu {
  max-height: 400px;
  overflow: auto;
}
</style>

:::

### 模式

::: demo 通过传入 `mode` 实现自定义菜单模式

<template>
  <pro-radio-button
    v-model="mode"
    :data="data"
  />
  <pro-menu :mode="mode" class="docs-menu" />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const mode = ref('horizontal')
    const data = [
      { value: 'vertical', label: '垂直' },
      { value: 'horizontal', label: '水平' },
    ]

    return {
      mode,
    }
  }
}
</script>

:::

### 自定义路由

::: demo 通过传入 `routes` 实现自定义路由显示

<template>
  <pro-menu :routes="routes" class="docs-menu" />
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const routes = computed(() => {
      const _routes = router.options.routes
      return _routes.find(item => {
        return item.path === '/zh-CN/components/'
      })?.children || []
    })

    return {
      routes,
    }
  }
}
</script>

:::

### 使用插槽

::: tip 提示
从 `0.12.0` 起，菜单内部将默认使用 svgicon 实现。如果想继续使用 fonticon 可以通过下面这种方式使用插槽实现
:::

::: demo 通过默认插槽可以很方便的定义如何显示菜单内容

<template>
  <pro-menu :routes="routes1" class="docs-menu">
    <template #default="item">
      <pro-link :to="item.path">
        <i
          v-if="item.meta?.icon"
          :class="item.meta.icon"
        />
        <span v-if="item.meta?.title">
          {{ item.meta.title }}
        </span>
      </pro-link>
    </template>
  </pro-menu>
</template>

<script>
export default {
  setup() {
    const routes1 = [
      {
        path: '/zh-CN/components/menu',
        meta: { title: 'FontIcon', icon: 'el-icon-potato-strips' },
      },
      {
        path: '/zh-CN/components/menu',
        meta: { title: 'Development', icon: 'el-icon-cpu' },
      },
    ]

    return {
      routes1,
    }
  }
}
</script>

:::

### 配置

| 参数                | 说明                                                 | 类型    | 可选值                | 默认值                 |
| :------------------ | :--------------------------------------------------- | :------ | :-------------------- | :--------------------- |
| routes              | 当前程序路由                                         | array   | -                     | 从 `vue-router` 中获取 |
| mode                | 模式                                                 | string  | horizontal / vertical | vertical               |
| collapse            | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用） | boolean | -                     | false                  |
| background-color    | 菜单的背景色（仅支持 hex 格式）                      | string  | -                     | #ffffff                |
| text-color          | 菜单的文字颜色（仅支持 hex 格式）                    | string  | -                     | #303133                |
| active-text-color   | 当前激活菜单的文字颜色（仅支持 hex 格式）            | string  | -                     | #409EFF                |
| default-openeds     | 当前打开的 sub-menu 的 index 的数组                  | Array   | -                     | -                      |
| unique-opened       | 是否只保持一个子菜单的展开                           | boolean | -                     | false                  |
| menu-trigger        | 子菜单打开的触发方式(只在 mode 为 horizontal 时有效) | string  | hover / click         | hover                  |
| collapse-transition | 是否开启折叠动画                                     | boolean | -                     | true                   |

### 插槽

| name | 说明                                                 |
| :--- | :--------------------------------------------------- |
| -    | 控制菜单显示内容，参数为 { meta, path, redirect } 等 |
