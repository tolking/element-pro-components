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
@/demo/Tabs/base.vue
:::

### External call close

Use `ref` bind `Tabs` then execute internal methods to close tab

::: demo `const tabs = inject('tabs')` from top-level `Layout` [refer](https://github.com/tolking/element-pro-components/blob/master/docs/src/layout/Layout.vue)
@/demo/Tabs/ref.vue
:::

### Props

| Name         | Description                                                                                                                             | Type                                | Accepted Values             | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | --------------------------- | ------- |
| type         | type of Tab                                                                                                                             | string                              | card / border-card          | -       |
| tab-position | position of tabs                                                                                                                        | string                              | top / right / bottom / left | top     |
| stretch      | whether width of tab automatically fits its container                                                                                   | boolean                             | -                           | false   |
| before-leave | hook function before switching tab. If `false` is returned or a `Promise` is returned and then is rejected, switching will be prevented | Function(activeName, oldActiveName) | -                           | -       |

### Methods

| Name       | Description               | Parameters                 |
| ---------- | ------------------------- | -------------------------- |
| close      | close some tab from tabs  | path (the router of close) |
| closeOther | close other tab from tabs | -                          |
