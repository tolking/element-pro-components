# Layout

> 基础的中后台布局界面组件，与 `vue-router` 高度绑定

## 使用

**效果**

![pro-layout](/img/pro-layout.jpg)

@[code](@/example/src/layout/Layout.vue)

## 配置

| 参数            | 说明                                                                | 类型    | 默认值                 |
| :-------------- | :------------------------------------------------------------------ | :------ | :--------------------- |
| routes          | 自定义生成侧边菜单栏的路由，同 `vue-router` 中 routes (仅扩展 meta) | array   | 从 `vue-router` 中获取 |
| transition      | 定义页面过度渐变动画                                                | string  | -                      |
| collapse        | 默认是否收起菜单                                                    | boolean | false                  |
| default-openeds | 当前打开的 sub-menu 的 index 的数组                                 | Array   | -                      |
| unique-opened   | 是否只保持一个子菜单的展开                                          | boolean | false                  |

- 参考 meta

```ts
interface IRouteMeta extends RouteMeta {
  title?: string // 用于显示菜单标题
  icon?: string // 用于显示菜单图标
  hidden?: boolean // 用于判断是否显示
  keepAlive?: boolean // 控制 keepAlive
}
```

- 参考路由

@[code](@/example/src/router/index.ts)

## 插槽

| name          | 说明                                                         |
| :------------ | :----------------------------------------------------------- |
| logo          | 自定义 Logo，参数为 { collapse } collapse-当前菜单栏是否折叠 |
| menu          | 控制菜单显示内容，参数为 { meta, path, redirect } 等         |
| left-header   | 头部左侧内容                                                 |
| right-header  | 头部右侧内容                                                 |
| bottom-header | 头部下面内容                                                 |

## 样式配置

[参考](../guide/theme#提供配置的参数)
