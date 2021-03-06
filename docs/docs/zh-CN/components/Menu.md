# Menu

> 封装默认 Menu 通过传入路由或者自动获取路由生成导航，与 `vue-router` 高度绑定

## 使用

```vue
<template>
  <pro-menu />
</template>
```

## 配置

| 参数                | 说明                                                                | 类型    | 可选值                | 默认值                 |
| :------------------ | :------------------------------------------------------------------ | :------ | :-------------------- | :--------------------- |
| routes              | 自定义生成侧边菜单栏的路由，同 `vue-router` 中 routes (仅扩展 meta) | array   | -                     | 从 `vue-router` 中获取 |
| mode                | 模式                                                                | string  | horizontal / vertical | vertical               |
| collapse            | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）                | boolean | -                     | false                  |
| background-color    | 菜单的背景色（仅支持 hex 格式）                                     | string  | -                     | #ffffff                |
| text-color          | 菜单的文字颜色（仅支持 hex 格式）                                   | string  | -                     | #303133                |
| active-text-color   | 当前激活菜单的文字颜色（仅支持 hex 格式）                           | string  | -                     | #409EFF                |
| default-openeds     | 当前打开的 sub-menu 的 index 的数组                                 | Array   | -                     | -                      |
| unique-opened       | 是否只保持一个子菜单的展开                                          | boolean | -                     | false                  |
| menu-trigger        | 子菜单打开的触发方式(只在 mode 为 horizontal 时有效)                | string  | hover / click         | hover                  |
| collapse-transition | 是否开启折叠动画                                                    | boolean | -                     | true                   |

## 插槽

| name | 说明                                                 |
| :--- | :--------------------------------------------------- |
| -    | 控制菜单显示内容，参数为 { meta, path, redirect } 等 |
