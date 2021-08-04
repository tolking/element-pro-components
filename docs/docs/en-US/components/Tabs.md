---
title: Tabs
meta:
  - name: description
    content: display page access history
---

# Tabs

> display page access history

## Use

### Basic Use

::: demo Automatic record routes

<template>
  <pro-tabs />
</template>

:::

### External call close

::: demo Use `ref` bind `Tabs` then execute internal methods to close tab. Note: `const tabs = inject('tabs')` from top-level `Layout` [refer](https://github.com/tolking/element-pro-components/blob/master/docs/src/layout/Layout.vue)

<template>
  <pro-tabs ref="childTabs" style="margin-bottom:15px" />
  <el-button @click="childTabs.close('/en-US/guide/')">Close homepage</el-button>
  <el-button @click="childTabs.closeOther">Close otherpage</el-button>
  <el-button @click="asyncList">async</el-button>
</template>

<script>
import { inject, onMounted, shallowRef } from 'vue'

export default {
  setup() {
    const tabs = inject('tabs') // Get top-level `Tabs` inject
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

### Props

| Name         | Description                                                                                                                             | Type                                | Accepted Values    | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------ | ------- |
| type         | type of Tab                                                                                                                             | string                              | card / border-card | -       |
| closable     | whether Tab is closable                                                                                                                 | boolean                             | -                  | -       |
| stretch      | whether width of tab automatically fits its container                                                                                   | boolean                             | -                  | false   |
| before-leave | hook function before switching tab. If `false` is returned or a `Promise` is returned and then is rejected, switching will be prevented | Function(activeName, oldActiveName) | -                  | -       |

### Events

| Name       | Description                                | Parameters              |
| ---------- | ------------------------------------------ | ----------------------- |
| tab-click  | triggers when a tab is clicked             | clicked tab             |
| tab-remove | triggers when tab-remove button is clicked | name of the removed tab |

### Methods

| Name       | Description               | Parameters                 |
| ---------- | ------------------------- | -------------------------- |
| close      | close some tab from tabs  | path (the router of close) |
| closeOther | close other tab from tabs | -                          |
