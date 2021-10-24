import type { IRouteRecordRaw } from '../types/index'

/**
 * Find an array of all router parents where the path is located
 * @param router router list
 * @param path route path
 * @param name route name (priority match)
 */
export function findRouterPath(
  router: IRouteRecordRaw[],
  path: string,
  name?: string | symbol | null
): IRouteRecordRaw[] {
  let _router: IRouteRecordRaw[] = []
  for (let i = 0; i < router.length; i++) {
    const item = router[i]
    if (name && item.name === name) {
      _router = [item]
      break
    } else if (item.path === path) {
      _router = [item]
      break
    } else {
      if (item.children && item.children.length) {
        const childrenRouter = findRouterPath(item.children, path)
        if (childrenRouter.length) {
          _router = [item, ...childrenRouter]
          break
        }
      }
    }
  }
  return _router
}
