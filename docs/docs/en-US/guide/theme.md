# 自定义主题

::: tip Tip
与 `Element Plus` 不同，组件内部样式通过 [css-variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) 实现

相比 scss 这样更方便配置和实现主题切换、浅色模式与深色模式

如果你需要动态改变主题你应该注意目标浏览器的[兼容情况](https://caniuse.com/css-variables)
:::

::: warning Warning
TODO: Since `Element Plus` started to use css-variables internally, this part of the content will be refactored in the future

这样配置目前只适用于组件内部，不能够修改 `Element Plus` 内部的样式。如果需要同时控制两者可以

```scss
$--color-white: var(--c-background);
$--background-color-base: var(--c-page-background);
/* ... */
```

:::

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

::: tip Tip
然后可以通过 js 动态改变 theme 的值实现
:::

## 然后

在入口文件中引入你的样式配置文件

```js
import 'element-pro-components/lib/style.css'
import 'your/css/file'
```

::: tip Tip
可以使用 postcss 插件 [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) 或者同类的插件转换 `css-variables` 获得更好的兼容性，以便在不支持 `css-variables` 时能够显示默认值样式
:::

## 提供配置的参数

<<< @/src/styles/var.css
