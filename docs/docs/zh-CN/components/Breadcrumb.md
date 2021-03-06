# Breadcrumb

> 根据当前页面路由自动生成面包屑，与 `vue-router` 高度绑定

## 使用

```vue
<template>
  <pro-layout>
    <template #left-header>
      <pro-breadcrumb />
    </template>
  </pro-layout>
</template>
```

## 配置

| 参数            | 说明                                                                | 类型   | 可选值 | 默认值                 |
| :-------------- | :------------------------------------------------------------------ | :----- | :----- | :--------------------- |
| routes          | 自定义生成侧边菜单栏的路由，同 `vue-router` 中 routes (仅扩展 meta) | array  | -      | 从 `vue-router` 中获取 |
| separator       | 分隔符                                                              | string | -      | '/'                    |
| separator-class | 图标分隔符 class                                                    | string | -      | -                      |
