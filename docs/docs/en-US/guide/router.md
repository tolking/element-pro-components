# Router and Menu

By default, layout-related components will automatically obtain the required routes information from `vue-router`

## Format

Compared with the vue-router type, only the `meta` attribute is extended

```ts
interface IRouteMeta extends RouteMeta {
  title?: string // Show menu title
  icon?: string // Show menu icon
  hidden?: boolean // Whether to display in the menu, does not affect the router jump
  keepAlive?: boolean // Whether to keepAlive
}
```

refer router

<<< @/docs/src/router/dev.ts

## Dynamic Routing

Components can only obtain the original routing information defined in `vue-router`, and cannot obtain dynamically added routes. When using asynchronously generated dynamic routes, although you can pass prop ​​to the component through `routes`, it is more recommended to dynamically increase it through the following methods. Just keep `router.options.routes` the same as the final dynamically added routes

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

## Auth Routing

The current component does not support auth routing, you need to manually add

Example: by [Dynamic Routing](#dynamic-routing), remove routing information that does not have access rights when generating or adding routes

Or: use `router.beforeEach` to check routing information

Of course you can also combine the two way