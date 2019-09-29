export function routerFilterByHidden(router) {
  return router.filter(item => {
    if (Array.isArray(item.children)) {
      routerFilterByHidden(item.children)
    }
    return !item.hidden
  })
}
