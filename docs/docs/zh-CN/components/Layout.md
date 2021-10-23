---
title: Layout
meta:
  - name: description
    content: 基础的中后台布局界面组件
---

# Layout

> 基础的中后台布局界面组件

## 使用

### 基础用法

组件默认将从 `vue-router` 中获取生成菜单的路由信息，前往<pro-link to="/zh-CN/guide/router">路由和菜单</pro-link>查看路由相关使用

::: demo

<template>
  <pro-layout class="docs-layout" />
</template>

<style>
.docs-layout {
  --pro-layout-height: 400px;
  --pro-layout-index-sidebar: 1;
  border: 1px solid var(--c-border);
  max-height: 400px;
}
</style>

:::

### 顶栏模式

通过配置 `mode="horizontal"` 作用于菜单实现顶栏模式

::: demo

<template>
  <pro-layout mode="horizontal" class="docs-layout" />
</template>

:::

### 插槽

通过插槽实现更复杂的界面

::: demo

<template>
  <pro-radio-button
    v-model="mode"
    :data="data"
  />
  <pro-layout :mode="mode" class="docs-layout">
    <template #logo="{ collapse }">
      <span style="line-height: 54px">
        {{ collapse ? 'L' : 'logo' }}
      </span>
    </template>
    <template #footer>
      <p>footer</p>
    </template>
    <template #header-left>
      <span>header-left</span>
    </template>
    <template #header-right>
      <span>header-right</span>
    </template>
    <template #header-bottom>
      <span>header-bottom</span>
    </template>
    <template #main-top>
      <p>main-top</p>
    </template>
    <template #main-bottom>
      <p>main-bottom</p>
    </template>
  </pro-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const mode = ref('vertical')
    const data = [
      { value: 'vertical', label: '菜单垂直' },
      { value: 'horizontal', label: '菜单水平' },
    ]

    return {
      mode,
      data,
    }
  }
}
</script>

:::

### 自定义路由

通过传入 `routes` 实现自定义路由显示

::: demo

<template>
  <pro-layout
    :routes="routes"
    class="docs-layout"
  />
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

### 配置

| 参数                | 说明                                                 | 类型    | 可选值                | 默认值                 |
| :------------------ | :--------------------------------------------------- | :------ | :-------------------- | :--------------------- |
| fixed-header        | 是否固定页面头部                                     | boolean | -                     | true                   |
| fixed-main          | 是否固定页面主体                                     | boolean | -                     | false                  |
| transition          | 定义页面过度渐变动画                                 | string  | -                     | -                      |
| routes              | 当前程序路由                                         | array   | -                     | 从 `vue-router` 中获取 |
| mode                | 导航菜单模式                                         | string  | horizontal / vertical | vertical               |
| collapse            | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用） | boolean | -                     | false                  |
| background-color    | 菜单的背景色（仅支持 hex 格式）                      | string  | -                     | #ffffff                |
| text-color          | 菜单的文字颜色（仅支持 hex 格式）                    | string  | -                     | #303133                |
| active-text-color   | 当前激活菜单的文字颜色（仅支持 hex 格式）            | string  | -                     | #409E                  |
| default-openeds     | 当前打开的 sub-menu 的 index 的数组                  | Array   | -                     | -                      |
| unique-opened       | 是否只保持一个子菜单的展开                           | boolean | -                     | false                  |
| menu-trigger        | 子菜单打开的触发方式(只在 mode 为 horizontal 时有效) | string  | hover / click         | hover                  |
| collapse-transition | 是否开启折叠动画                                     | boolean | -                     | true                   |

### 插槽

| 插槽名        | 说明                                                         |
| :------------ | :----------------------------------------------------------- |
| logo          | 自定义 Logo，参数为 { collapse } collapse-当前菜单栏是否折叠 |
| menu          | 控制菜单显示内容，参数为 { meta, path, redirect } 等         |
| footer        | 页脚内容                                                     |
| header-left   | 头部左侧内容                                                 |
| header-right  | 头部右侧内容                                                 |
| header-bottom | 头部下面内容                                                 |
| main-top      | 主体顶部内容                                                 |
| main-bottom   | 主体底部内容                                                 |
