---
title: 自定义主题
---

# 自定义主题

::: tip 提示与 `Element Plus` 不同，组件内部样式通过 [css-variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) 实现

相比 scss 这样更方便配置和实现主题切换、浅色模式与深色模式

如果你需要动态改变主题你应该注意目标浏览器的[兼容情况](https://caniuse.com/css-variables) :::

::: warning 警告这样配置目前只适用于组件内部，不能够修改 `Element Plus` 内部的样式。如果需要同时控制两者可以

```scss
$--color-white: var(--c-background);
$--background-color-base: var(--c-page-background);
/* ... */
```

TODO: 未来可能会提供配置好的 scss 文件或者是转化好的 css 文件 :::

## 简单配置

```css
:root {
  --c-background: #ffffff;
  --c-page-background: #f0f2f5;
}
```

## 浅色/深色模式

```css
@media (prefers-color-scheme: light) {
  :root {
    --c-background: #ffffff;
    --c-page-background: #f0f2f5;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    --c-background: #25272a;
    --c-page-background: #2b2b2b;
  }
}
```

## 多主题

```css
:root {
  --c-background: #ffffff;
  --c-page-background: #f0f2f5;
}
html[theme='dark'] {
  --c-background: #25272a;
  --c-page-background: #2b2b2b;
}
html[theme='other'] {
  /* ... */
}
```

```html
<html theme="other"></html>
```

::: tip 提示然后可以通过 js 动态改变 theme 的值实现 :::

## 然后

在入口文件中引入你的样式配置文件

```js
// 当你自定义主题时，你可以使用 `index.css` 代替 `index.min.css`
import 'element-pro-components/lib/index.css'
import 'your/css/file'
```

::: tip 提示可以使用 postcss 插件 [postcss-preset-env](https://github.com/csstools/postcss-preset-env) 或者同类的插件转换 `css-variables` 获得更好的兼容性，以便在不支持 `css-variables` 时能够显示默认值样式 :::

## 提供配置的参数

@[code](@/src/styles/index.css)
