---
title: 路由和菜单
meta:
  - name: description
    content: 如何配置 element-pro-components 组件库的路由和菜单
---

# 路由和菜单

默认情况下，布局相关的组件会自动从 `vue-router` 中获取所需要的路由信息

## 统一格式

meta 类型

<<< @/src/types/router.ts

参考路由

<<< @/docs/src/router/dev.ts

## 配置 icon

组件库内部直接将 icon 渲染成一个组件，所以你可以定义为任意图标组件

安装需要的图标组件库

- [@element-plus/icons-vue](https://www.npmjs.com/package/@element-plus/icons-vue)
- [bootstrap-icons-vue](https://www.npmjs.com/package/bootstrap-icons-vue)
- 等

下面使用 @element-plus/icons-vue 举例

```
yarn add @element-plus/icons-vue
# 或者
npm install @element-plus/icons-vue
```

- 全局注册

```js
import { Edit } from '@element-plus/icons-vue'

app.component(Edit.name, Edit)
```

```js
{
  name: 'admin',
  path: '/admin',
  component: Layout,
  meta: { title: 'Admin', icon: 'edit' },
}
```

- 直接使用

```js
import { markRaw } from 'vue'
import { Edit } from '@element-plus/icons-vue'
// ...
{
  name: 'admin',
  path: '/admin',
  component: Layout,
  meta: { title: 'Admin', icon: markRaw(Edit) },
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
