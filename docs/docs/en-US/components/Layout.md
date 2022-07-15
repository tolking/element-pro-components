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

### Custom Transition

Provides animated transition effects by `transition`

::: tip Tip
When used `transition`, the page must have only one root element due to `Transition` component restrictions
:::

::: demo The transition animation of the current route can be configured through `meta.transition` in the router
@/demo/Layout/transition.vue
:::

### Custom keepAlive

enable cache by `keep-alive`, use `include` `exclude` `max` to Control cache

::: tip Tip
When enabled, all pages will be cached by default

`include` and `exclude` match the name of the page

It is recommended to name the pages that need to be cached starting with `Keep`, and then configure `:include="/^Keep/"` to use
:::

::: demo
@/demo/Layout/keep-alive.vue
:::

### Custom router

::: tip Tip
Starting from `1.2.0`, the Menu will not be compatible with the complete URL address jump, which needs to be realized by custom router
:::

First you should configure `:router="false"`, then handle the click through the select event

::: demo
@/demo/Layout/router.vue
:::

### Custom color

Configure menu colors by CSS variables

::: demo
@/demo/Layout/color.vue
:::

### Slots

More complex interface through slots

::: demo
@/demo/Layout/slots.vue
:::

### Custom RouterView

Custom RouterView by the default slot

::: demo
@/demo/Layout/router-view.vue
:::

### Props

| Name                | Description                                                                                   | Type                    | Options               | Default           |
| :------------------ | :-------------------------------------------------------------------------------------------- | :---------------------- | :-------------------- | :---------------- |
| fixed-header        | whether to fix the page header                                                                | boolean                 | -                     | true              |
| keep-alive          | whether to enable cache pages                                                                 | boolean                 | -                     | false             |
| include             | match the name of the page that need to be cache, takes effect when keep-alive is true        | string / array / RegExp | -                     | -                 |
| exclude             | match the name of the page that do not need to be cache, takes effect when keep-alive is true | string / array / RegExp | -                     | -                 |
| max                 | limit the max number of cache, takes effect when keep-alive is true                           | string / number         | -                     | -                 |
| transition          | the animation name of transition pages                                                        | string                  | -                     | -                 |
| routes              | current routes of menu                                                                        | array                   | -                     | from `vue-router` |
| mode                | menu display mode                                                                             | string                  | horizontal / vertical | vertical          |
| collapse            | whether the menu is collapsed (available only in vertical mode)                               | boolean                 | -                     | false             |
| ellipsis            | whether the menu is ellipsis (available only in horizontal mode)                              | boolean                 | —                     | true              |
| default-openeds     | array that contains indexes of currently active sub-menus                                     | Array                   | -                     | -                 |
| unique-opened       | whether only one sub-menu can be active                                                       | boolean                 | -                     | false             |
| menu-trigger        | how sub-menus are triggered, only works when `mode` is 'horizontal'                           | string                  | hover / click         | hover             |
| router              | whether to automatically activate the route action                                            | boolean                 | —                     | true              |
| collapse-transition | whether to enable the collapse transition                                                     | boolean                 | -                     | true              |

## Events

| Name   | Description                               | Parameters                                                                                            |
| ------ | ----------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| select | callback function when menu is activated  | index: index of activated menu, indexPath: index path of activated menu, item: the selected menu item |
| open   | callback function when sub-menu expands   | index: index of expanded sub-menu, indexPath: index path of expanded sub-menu                         |
| close  | callback function when sub-menu collapses | index: index of collapsed sub-menu, indexPath: index path of collapsed sub-menu                       |

### Slots

| Name          | Description                                                       |
| :------------ | :---------------------------------------------------------------- |
| default       | custom implementation RouterView                                  |
| logo          | control logo display content, parameters { collapse }             |
| menu          | control menu display content, parameters { meta, path, redirect } |
| footer        | control the footer of page display content                        |
| header-left   | control the header left display content                           |
| header-right  | control the header right display content                          |
| header-bottom | control the header bottom display content                         |
