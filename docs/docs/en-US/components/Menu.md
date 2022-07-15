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

By default, the component will generate routes from vue-router, Go to <pro-link to="/zh-CN/guide/router">Router and Menu</pro-link> to view routing related usage

::: demo
@/demo/Menu/base.vue
:::

### Custom Mode

Set `mode` attribute to enable custom Mode

::: demo
@/demo/Menu/mode.vue
:::

### Custom routes

Set `routes` attribute to enable custom routes

::: demo
@/demo/Menu/routes.vue
:::

### Custom router

::: tip Tip
Starting from `1.2.0`, the Menu will not be compatible with the complete URL address jump, which needs to be realized by custom router
:::

First you should configure `:router="false"`, then handle the click through the select event

::: demo
@/demo/Menu/router.vue
:::

### Custom color

Configure menu colors by CSS variables

::: demo
@/demo/Menu/color.vue
:::

### Slots

::: tip Tip
Starting from `0.12.0`, the internal menu will be implemented using svgicon by default. If you want to continue to use fonticon, you can use the slot in the following way to achieve
:::

::: demo How to display the menu content through the default slot
@/demo/Menu/slots.vue
:::

### Props

| Name                | Description                                                         | Type    | Options               | Default           |
| :------------------ | :------------------------------------------------------------------ | :------ | :-------------------- | :---------------- |
| routes              | current routes                                                      | array   | -                     | from `vue-router` |
| mode                | menu display mode                                                   | string  | horizontal / vertical | vertical          |
| collapse            | whether the menu is collapsed (available only in vertical mode)     | boolean | -                     | false             |
| ellipsis            | whether the menu is ellipsis (available only in horizontal mode)    | boolean | —                     | true              |
| default-openeds     | array that contains indexes of currently active sub-menus           | Array   | -                     | -                 |
| unique-opened       | whether only one sub-menu can be active                             | boolean | -                     | false             |
| menu-trigger        | how sub-menus are triggered, only works when `mode` is 'horizontal' | string  | hover / click         | hover             |
| router              | whether to automatically activate the route action                  | boolean | —                     | true              |
| collapse-transition | whether to enable the collapse transition                           | boolean | -                     | true              |

## Events

| Name   | Description                               | Parameters                                                                                            |
| ------ | ----------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| select | callback function when menu is activated  | index: index of activated menu, indexPath: index path of activated menu, item: the selected menu item |
| open   | callback function when sub-menu expands   | index: index of expanded sub-menu, indexPath: index path of expanded sub-menu                         |
| close  | callback function when sub-menu collapses | index: index of collapsed sub-menu, indexPath: index path of collapsed sub-menu                       |

### Slots

| Name | Description                                                       |
| :--- | :---------------------------------------------------------------- |
| -    | Control menu display content, parameters { meta, path, redirect } |
