# Menu

> Menu that provides navigation for your website

## Use

### Basic Use

::: demo By default, the component will generate routes from vue-router

<template>
  <pro-menu />
</template>

:::

### Custom Mode

::: demo Set `mode` attribute to enable custom Mode

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
