---
title: Layout
meta:
  - name: description
    content: default global layout interface
---

# Layout

> default global layout interface

## Use

### Basic Use

::: demo By default, the component will generate routes from vue-router

<template>
  <pro-layout class="docs-layout" />
</template>

<style>
.docs-layout {
  border: 1px solid var(--c-border);
  height: 400px;
}
</style>

:::

### Slots

::: demo More complex interface through slots

<template>
  <pro-layout class="docs-layout">
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

:::

### Custom routes

::: demo Set `routes` attribute to enable custom routes

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

| Name            | Description                                            | Type    | Default           |
| :-------------- | :----------------------------------------------------- | :------ | :---------------- |
| routes          | current routes                                         | array   | from `vue-router` |
| transition      | the animation name of transition pages                 | string  | -                 |
| collapse        | whether the menu is collapsed                          | boolean | false             |
| default-openeds | array that contains keys of currently active sub-menus | Array   | -                 |
| unique-opened   | whether only one sub-menu can be active                | boolean | false             |

### Slots

| Name          | Description                                                       |
| :------------ | :---------------------------------------------------------------- |
| logo          | control logo display content, parameters { collapse }             |
| menu          | control menu display content, parameters { meta, path, redirect } |
| footer        | control the footer of page display content                        |
| header-left   | control the header left display content                           |
| header-right  | control the header right display content                          |
| header-bottom | control the header bottom display content                         |
| main-top      | control the main top display content                              |
| main-bottom   | control the main bottom display content                           |
