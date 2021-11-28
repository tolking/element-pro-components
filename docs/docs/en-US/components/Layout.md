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

By default, the component will generate routes from vue-router, Go to <pro-link to="/zh-CN/guide/router">Router and Menu</pro-link> to view routing related usage

::: demo
@/demo/Layout/base.vue
:::

### Top mode

Implement top bar mode by `mode="horizontal"`

::: demo
@/demo/Layout/mode.vue
:::

### Custom routes

Set `routes` attribute to enable custom routes

::: demo
@/demo/Layout/routes.vue
:::

### Slots

More complex interface through slots

::: demo
@/demo/Layout/slots.vue
:::

### Props

| Name                | Description                                                         | Type    | Options               | Default           |
| :------------------ | :------------------------------------------------------------------ | :------ | :-------------------- | :---------------- |
| fixed-header        | whether to fix the page header                                      | boolean | -                     | true              |
| fixed-main          | whether to fix the page main                                        | boolean | -                     | false             |
| transition          | the animation name of transition pages                              | string  | -                     | -                 |
| routes              | current routes of menu                                              | array   | -                     | from `vue-router` |
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
