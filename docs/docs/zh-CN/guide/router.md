# 路由和菜单

默认情况下，布局相关的组件会自动从 `vue-router` 中获取所需要的路由信息

## 统一格式

相比原生 router 类型仅扩展了 `meta` 属性

```ts
interface IRouteMeta extends RouteMeta {
  title?: string // 用于显示菜单标题
  icon?: string // 用于显示菜单图标
  hidden?: boolean // 用于判断是否在菜单中显示，不影响 router-link 跳转
  keepAlive?: boolean // 控制 keepAlive
}
```

参考路由

<<< @/docs/src/router/dev.ts

## 异步路由

组件只能够获取定义在 `vue-router` 中的原始路由信息，不能够获取动态增加的路由。当使用异步生成的动态路由时，虽然可以通过 `routes` 向组件中传值，但更推荐通过通过下面方式动态增加。只需要保持 `router.options.routes` 同最终动态增加的路由相同即可

```js
import { useRouter } from 'vue-router'

const router = useRouter()
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
