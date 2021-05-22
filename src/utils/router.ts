import type { IRouteRecordRaw } from '../types/index'

/**
 * Find an array of all router parents where the path is located
 * @param router router list
 * @param path route path
 */
export function findRouterItemListByPath(
  router: IRouteRecordRaw[],
  path: string
): IRouteRecordRaw[] {
  let _router: IRouteRecordRaw[] = []
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
