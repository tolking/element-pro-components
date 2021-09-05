---
title: Router and Menu
meta:
  - name: description
    content: How to configure the route and menu of the element-pro-components component library
---

# Router and Menu

By default, layout-related components will automatically obtain the required routes information from `vue-router`

## Format

Compared with the vue-router type, only the `meta` attribute is extended

```ts
interface RouteMeta {
  title?: string // Show menu title
  icon?: string // Show menu icon
  hidden?: boolean // Whether to display in the menu, does not affect the router jump
  keepAlive?: boolean // Whether to keepAlive
}
```

refer router

<<< @/docs/src/router/dev.ts

### Use icon

The Icon render as a components, so you can define as any icon component.

Install the required icon component library

- [@element-plus/icons](https://www.npmjs.com/package/@element-plus/icons)
- [bootstrap-icons-vue](https://www.npmjs.com/package/bootstrap-icons-vue)
- and more

Let's use @element-plus/icons as an example

```
yarn add @element-plus/icons
# or
npm install @element-plus/icons
```

- **Globally register** requires icon components

```js
import { Edit } from '@element-plus/icons'

app.component(Edit.name, Edit)
```

- Custom icon

```js
{
  name: 'admin',
  path: '/admin',
  component: Layout,
  meta: { title: 'Admin', icon: 'edit' },
}
```

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
