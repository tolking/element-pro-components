---
title: 自定义主题
meta:
  - name: description
    content: 如何自定义 element-pro-components 组件库的主题
---

# 自定义主题

::: tip 提示
ElementPlus `v2.2.0` 已经支持深色模式，你仅需要遵循 [Dark Mode](https://element-plus.org/zh-CN/guide/dark-mode.html) 使用即可控制两个组件库颜色
:::

## 简单配置

推荐通过 css-variables 控制颜色

```css
:root {
  --el-color-primary: #42b983;
  --pro-layout-aside-background-color: #f0f2f5;
}
```

## 深色模式

只需要配置 ElementPlus 的深色模式

```js
import 'element-plus/theme-chalk/dark/css-vars.css'
```

```html
<html class="dark"></html>
```

## 多主题

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

::: tip 提示
然后可以通过 js 动态改变 class 的值实现

可以使用 postcss 插件 [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) 或者同类的插件转换 `css-variables` 获得更好的兼容性，以便在不支持 `css-variables` 时能够显示默认值样式
:::

## 提供配置的参数

- 公共 css-variables

<<< @/src/styles/vars.css

- Element Plus 的浅色模式 css-variables

<<< @/node_modules/element-plus/theme-chalk/el-var.css

- Element Plus 的深色模式 css-variables

<<< @/node_modules/element-plus/theme-chalk/dark/css-vars.css
