---
title: 路由和菜单
meta:
  - name: description
    content: 如何配置 element-pro-components 组件库的路由和菜单
---

# 路由和菜单

默认情况下，布局相关的组件会自动从 `vue-router` 中获取所需要的路由信息

## 统一格式

相比原生 router 类型仅扩展了 `meta` 属性

```ts
interface RouteMeta {
  title?: string // 用于显示菜单标题
  icon?: string // 用于显示菜单图标
  hidden?: boolean // 用于判断是否在菜单中显示，不影响 router-link 跳转
  keepAlive?: boolean // 控制 keepAlive
}
```

参考路由

<<< @/docs/src/router/dev.ts

## 配置 icon

组件库内部直接将 icon 渲染成一个组件，所以你可以定义为任意图标组件

安装需要的图标组件库

- [@element-plus/icons](https://www.npmjs.com/package/@element-plus/icons)
- [bootstrap-icons-vue](https://www.npmjs.com/package/bootstrap-icons-vue)
- 等

下面使用 @element-plus/icons 举例

```
yarn add @element-plus/icons
# 或者
npm install @element-plus/icons
```

- **全局注册**需要图标组件

```js
import { Edit } from '@element-plus/icons'

app.component(Edit.name, Edit)
```

- 定义路由 icon

```js
{
  name: 'admin',
  path: '/admin',
  component: Layout,
  meta: { title: 'Admin', icon: 'edit' },
}
```

## 异步路由

组件只能够获取定义在 `vue-router` 中的原始路由信息，不能够获取动态增加的路由。当使用异步生成的动态路由时，虽然可以通过 `routes` 向组件中传值，但更推荐通过通过下面方式动态增加。只需要保持 `router.options.routes` 同最终动态增加的路由相同即可

```js
const newRoute = {
  name: 'admin',
  path: '/admin',
  component: Layout,
  meta: { title: 'Admin' },
  children: [
    {
      path: 'settings',
      component: AdminSettings,
      meta: { title: 'Settings' },
    },
  ],
}
router.addRoute(newRoute)
router.options.routes.push(newRoute)
```

## 路由权限

当前组件是不支持路由权限验证的，你需要手动增加

比如：通过 [异步路由](#异步路由) 的方式，在增加生成或增加路由时去除没有访问权限的路由信息

或者：在 `router.beforeEach` 中进行跳转验证

当然也可以结合两者使用
