---
title: 自定义主题
meta:
  - name: description
    content: 如何自定义 element-pro-components 组件库的主题
---

# 自定义主题

::: tip 提示
[实验性质] 自 `0.12.0` 起，内部 css-variables 将优先使用来自 `Element Plus` 的 css-variables，方便你同时控制两个组件库的样式
:::

## 简单配置

```css
:root {
  --el-color-primary: #42b983;
  --pro-layout-aside-background-color: #f0f2f5;
}
```

## 浅色/深色模式

```css
@media (prefers-color-scheme: light) {
  :root {
    --el-color-primary: #42b983;
    --pro-layout-aside-background-color: #f0f2f5;
  }
}
/* 也可以只增加以下内容增加深色模式 */
@media (prefers-color-scheme: dark) {
  :root {
    --el-color-primary: #25272a;
    --pro-layout-aside-background-color: #2b2b2b;
  }
}
```

## 多主题

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

::: tip 提示
然后可以通过 js 动态改变 theme 的值实现

可以使用 postcss 插件 [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) 或者同类的插件转换 `css-variables` 获得更好的兼容性，以便在不支持 `css-variables` 时能够显示默认值样式
:::

## 提供配置的参数

- 公共 css-variables

<<< @/src/styles/vars.css

- Element Plus 的公共 css-variables

<<< @/node_modules/element-plus/theme-chalk/el-var.css
