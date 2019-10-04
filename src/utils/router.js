/**
 * Filter out router with hidden values
 * @param {Array} router router list
 */
export function filterRouterByHidden(router) {
  return router.filter(item => {
    if (Array.isArray(item.children)) {
      filterRouterByHidden(item.children)
    }
    return !item.hidden
  })
}

export function findRouterItemListByPath(router, path) {
  let _router = []
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
