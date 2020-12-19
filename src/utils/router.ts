import type { RouteRecordRaw } from 'vue-router'

/**
 * Filter out router with `meta.hidden` values
 * @param router router list
 */
export function filterRouterByHidden(router: RouteRecordRaw[]): RouteRecordRaw[] {
  return router.filter(item => {
    if (Array.isArray(item.children)) {
      filterRouterByHidden(item.children)
    }
    return !item.meta?.hidden
  })
}

/**
 * Find an array of all router parents where the path is located
 * @param router router list
 * @param path route path
 */
export function findRouterItemListByPath(router: RouteRecordRaw[], path: string): RouteRecordRaw[] {
  let _router: RouteRecordRaw[] = []
  for (let i = 0; i < router.length; i++) {
    const item = router[i]
    if (item.path === path) {
      _router = [item]
      break
    } else {
      if (item.children && item.children.length) {
        const childrenRouter = findRouterItemListByPath(item.children, path)
        if (childrenRouter.length) {
          _router = [item, ...childrenRouter]
          break
        }
      }
    }
  }
  return _router
}
