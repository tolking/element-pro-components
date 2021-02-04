import { isArray } from './index'

export function filterSlotDeep<T>(list: T): T {
  if (!isArray(list)) return ([] as unknown) as T

  return list.reduce((all, item) => {
    const _item = { ...item }
    let _list = []
    if (_item.children && _item.children.length) {
      _list = filterSlotDeep(_item.children)
      _item.children = undefined
    }
    if (_item.slot) {
      _list.push(_item)
    }
    return [...all, ..._list]
  }, ([] as unknown) as T)
}
