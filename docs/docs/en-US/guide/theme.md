---
title: Theme
meta:
  - name: description
    content: How to configure the theme of the element-pro-components component library
---

# Custom theme

::: tip Tip
[test] Since `0.12.0`, The internal css-variables will give priority to the css-variables from `Element Plus`, which is convenient for you to control the styles of the two component libraries at the same time
:::

## Simple configuration

```css
:root {
  --el-color-primary: #42b983;
  --pro-layout-aside-background-color: #f0f2f5;
}
```

## light/dark mode

```css
@media (prefers-color-scheme: light) {
  :root {
    --el-color-primary: #42b983;
    --pro-layout-aside-background-color: #f0f2f5;
  }
}
/* You can also add only the following to increase the dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --el-color-primary: #25272a;
    --pro-layout-aside-background-color: #2b2b2b;
  }
}
```

## Multi-theme

```css
:root {
  --el-color-primary: #42b983;
  --pro-layout-aside-background-color: #f0f2f5;
}
html[theme='dark'] {
  --el-color-primary: #25272a;
  --pro-layout-aside-background-color: #2b2b2b;
}
html[theme='other'] {
  /* ... */
}
```

```html
<html theme="other"></html>
```

::: tip Tip
Then you can dynamically change the value of theme through js

Use [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) or similar plugin of postcss to convert `css-variables` for better compatibility, so that the default value style can be displayed when `css-variables` is not supported.
:::

## Provide configuration parameters

- public css-variables

<<< @/src/styles/vars.css

- public css-variables of Element Plus

<<< @/node_modules/element-plus/theme-chalk/el-var.css
