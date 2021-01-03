# Menu

> 封装默认 Menu 通过传入路由或者自动获取路由生成导航，与 `vue-router` 高度绑定

## 使用

```vue
<template>
  <pro-menu />
</template>
```

## 配置

### routes (可选)

自定义生成侧边菜单栏的路由

::: tip 提示
如果没有传值，将自动从 `vue-router` 中获取路由并排除 `meta: { hidden: true }` 的路由
:::

类型: 同 Layout

### 其它配置 

同 [ElMenu](https://element-plus.gitee.io/#/zh-CN/component/menu) 

## 插槽

| name | 说明 |
| :-- | :-- |
| - | 控制菜单显示，参数为 { meta, path, redirect } 等 |
