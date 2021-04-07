# Menu

> Menu that provides navigation for your website

# Use

## Basic Use

::: demo 组件默认将从 `vue-router` 中获取路由生成路由，格式参考页面下方

<template>
  <pro-menu />
</template>

:::

### 模式

::: demo 通过传入 `mode` 实现自定义菜单模式

<template>
  <pro-radio-button
    v-model="mode"
    :data="data"
  />
  <pro-menu :mode="mode" />
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
  <pro-menu :routes="routes" />
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const routes = computed(() => {
      const _routes = router.options.routes
      return _routes.find(item => item.path === '/zh-CN/components/').children
    })

    return {
      routes,
    }
  }
}
</script>

:::

## Props

| Name                | Description                                                         | Type    | Options               | Default           |
| :------------------ | :------------------------------------------------------------------ | :------ | :-------------------- | :---------------- |
| routes              | current routes                                                      | array   | -                     | from `vue-router` |
| mode                | menu display mode                                                   | string  | horizontal / vertical | vertical          |
| collapse            | whether the menu is collapsed (available only in vertical mode)     | boolean | -                     | false             |
| background-color    | background color of Menu (hex format)                               | string  | -                     | #ffffff           |
| text-color          | text color of Menu (hex format)                                     | string  | -                     | #303133           |
| active-text-color   | text color of currently active menu item (hex format)               | string  | -                     | #409EFF           |
| default-openeds     | array that contains indexes of currently active sub-menus           | Array   | -                     | -                 |
| unique-opened       | whether only one sub-menu can be active                             | boolean | -                     | false             |
| menu-trigger        | how sub-menus are triggered, only works when `mode` is 'horizontal' | string  | hover / click         | hover             |
| collapse-transition | whether to enable the collapse transition                           | boolean | -                     | true              |

## Slots

| Name | Description                                                       |
| :--- | :---------------------------------------------------------------- |
| -    | Control menu display content，Parameters { meta, path, redirect } |
