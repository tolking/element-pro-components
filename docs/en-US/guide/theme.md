---
title: Theme
meta:
  - name: description
    content: How to configure the theme of the element-pro-components component library
---

# Custom theme

::: tip Tip
ElementPlus `v2.2.0` already supports dark mode, You only need to follow the [Dark Mode](https://element-plus.org/en-US/guide/dark-mode.html) to control the two component library colors.
:::

## Simple configuration

css-variables is recommended

```css
:root {
  --el-color-primary: #42b983;
  --pro-layout-aside-background-color: #f0f2f5;
}
```

## Dark Mode

Only need to configure the dark mode of ElementPlus

```js
import 'element-plus/theme-chalk/dark/css-vars.css'
```

```html
<html class="dark"></html>
```

## Multi-theme

```css
:root {
  --el-color-primary: #42b983;
  --pro-layout-aside-background-color: #f0f2f5;
}
html.my {
  --el-color-primary: #25272a;
  --pro-layout-aside-background-color: #2b2b2b;
}
html.other {
  /* ... */
}
```

```html
<html class="other"></html>
```

::: tip Tip
Then you can dynamically change the value of class through js

Use [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) or similar plugin of postcss to convert `css-variables` for better compatibility, so that the default value style can be displayed when `css-variables` is not supported.
:::

## Provide configuration parameters

- public css-variables

<<< @/src/styles/vars.css

- Light Mode css-variables of Element Plus

<<< @/node_modules/element-plus/theme-chalk/el-var.css

- Dark Mode css-variables of Element Plus

<<< @/node_modules/element-plus/theme-chalk/dark/css-vars.css
