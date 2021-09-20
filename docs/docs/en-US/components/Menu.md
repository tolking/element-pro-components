---
title: Menu
meta:
  - name: description
    content: Menu that provides navigation for your website
---

# Menu

> Menu that provides navigation for your website

## Use

### Basic Use

::: demo By default, the component will generate routes from vue-router

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

### Custom Mode

::: demo Set `mode` attribute to enable custom Mode

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
      { value: 'vertical', label: 'Vertical' },
      { value: 'horizontal', label: 'Horizontal' },
    ]

    return {
      mode,
    }
  }
}
</script>

:::

### Custom routes

::: demo Set `routes` attribute to enable custom routes

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
        return item.path === '/en-US/components/'
      })?.children || []
    })

    return {
      routes,
    }
  }
}
</script>

:::

### Slots

::: tip Tip
Starting from `0.12.0`, the internal menu will be implemented using svgicon by default. If you want to continue to use fonticon, you can use the slot in the following way to achieve
:::

::: demo How to display the menu content through the default slot

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

### Props

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

### Slots

| Name | Description                                                       |
| :--- | :---------------------------------------------------------------- |
| -    | Control menu display content, parameters { meta, path, redirect } |
