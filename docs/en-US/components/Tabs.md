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

Automatic record routes

::: demo
@/demo/Tabs/base.vue
:::

### Custom Type

::: demo
@/demo/Tabs/type.vue
:::

### Keep hidden route

Routes with the `hidden` flag are automatically closed by default, this behavior can be prevented with `keep-hidden-route`

::: demo
@/demo/Tabs/keep-hidden-route.vue
:::

### External call close

Use `ref` bind `Tabs` then execute internal methods to close tab

::: demo `const tabs = inject('tabs')` from top-level `Layout` [refer](https://github.com/tolking/element-pro-components/blob/master/docs/src/layout/Layout.vue)
@/demo/Tabs/ref.vue
:::

### Before add

Do something before the tab add with the `before-add` hook. If `false` is returned or a `Promise` is returned and then is rejected, add will be prevented.

::: demo
@/demo/Tabs/before-add.vue
:::

### Before leave

Do something before the tab switch with the `before-leave` hook. If `false` is returned or a `Promise` is returned and then is rejected, add will be prevented.

::: demo
@/demo/Tabs/before-leave.vue
:::

### Slots

Customize the label content of the tab through `label`

::: tip
Since 1.4.0, the `label` slot parameter has been changed to `RouteLocationNormalizedLoaded`
:::

::: demo
@/demo/Tabs/slots.vue
:::

### Contextmenu

Since 1.4.0, the Tabs component supports displaying the right-click menu through the `contextmenu` configuration

::: tip
If you enable the `refresh` feature, you need to configure the `refreshPath` attribute additionally and add the corresponding route information to vue-router
:::

::: details Reference route configuration

<<< @/docs/src/router/index.ts

:::

::: demo
@/demo/Tabs/contextmenu.vue
:::

### Props

| Name              | Description                                                                                                                             | Type                                                                                        | Accepted Values             | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------- | ------- |
| type              | type of Tab                                                                                                                             | string                                                                                      | card / border-card          | -       |
| tab-position      | position of tabs                                                                                                                        | string                                                                                      | top / right / bottom / left | top     |
| stretch           | whether width of tab automatically fits its container                                                                                   | boolean                                                                                     | -                           | false   |
| keep-hidden-route | Whether to keep the route with the hidden flag, it is automatically closed by default                                                   | boolean                                                                                     | -                           | false   |
| contextmenu       | The right-click menu configuration                                                                                                      | boolean / object ({ refresh?: boolean, left?: boolean, right?: boolean, others?: boolean }) | -                           | false   |
| refreshPath       | Refresh path, used to refresh the tab page                                                                                              | string                                                                                      | -                           | -       |
| before-add        | hook function before add tab. If `false` is returned or a `Promise` is returned and then is rejected, add will be prevented             | Function({ route, oldPath, list, close, closeOther })                                       | -                           | -       |
| before-leave      | hook function before switching tab. If `false` is returned or a `Promise` is returned and then is rejected, switching will be prevented | Function(activeName, oldActiveName)                                                         | -                           | -       |

## Events

| Name       | Description                                | Type                                       |
| ---------- | ------------------------------------------ | ------------------------------------------ |
| tab-click  | triggers when a tab is clicked             | (pane: TabsPaneContext, ev: Event) => void |
| tab-change | triggers when `activeName` is changed      | (name: TabPaneName) => void                |
| tab-remove | triggers when tab-remove button is clicked | (name: TabPaneName) => void                |

### Methods

| Name       | Description               | Type                                 |
| ---------- | ------------------------- | ------------------------------------ |
| list       | access history list       | Ref<RouteLocationNormalizedLoaded[]> |
| close      | close some tab from tabs  | (path: string) => void               |
| closeOther | close other tab from tabs | () => void                           |

### Slots

| Name  | Description                            | Type                          |
| ----- | -------------------------------------- | ----------------------------- |
| label | customize the label content of the tab | RouteLocationNormalizedLoaded |
