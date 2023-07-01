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

::: demo
@/demo/Tabs/slots.vue
:::

### Props

| Name              | Description                                                                                                                             | Type                                                  | Accepted Values             | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | --------------------------- | ------- |
| type              | type of Tab                                                                                                                             | string                                                | card / border-card          | -       |
| tab-position      | position of tabs                                                                                                                        | string                                                | top / right / bottom / left | top     |
| stretch           | whether width of tab automatically fits its container                                                                                   | boolean                                               | -                           | false   |
| keep-hidden-route | Whether to keep the route with the hidden flag, it is automatically closed by default                                                   | boolean                                               | -                           | false   |
| before-add        | hook function before add tab. If `false` is returned or a `Promise` is returned and then is rejected, add will be prevented             | Function({ route, oldPath, list, close, closeOther }) | -                           | -       |
| before-leave      | hook function before switching tab. If `false` is returned or a `Promise` is returned and then is rejected, switching will be prevented | Function(activeName, oldActiveName)                   | -                           | -       |

## Events

| Name       | Description                                | Parameters                             |
| ---------- | ------------------------------------------ | -------------------------------------- |
| tab-click  | triggers when a tab is clicked             | (pane: `TabsPaneContext`, ev: `Event`) |
| tab-change | triggers when `activeName` is changed      | (path name)                            |
| tab-remove | triggers when tab-remove button is clicked | (path name)                            |

### Methods

| Name       | Description               | Parameters                 |
| ---------- | ------------------------- | -------------------------- |
| close      | close some tab from tabs  | path (the router of close) |
| closeOther | close other tab from tabs | -                          |

### Slots

| Name  | Description                            | Type                          |
| ----- | -------------------------------------- | ----------------------------- |
| label | customize the label content of the tab | { ...route.meta, path, name } |
