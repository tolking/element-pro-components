import { isArray } from './index'

type ListDeep = Array<{
  children?: ListDeep
  [key: string]: unknown
}>

export function filterDeep<T extends ListDeep>(
  list: T,
  key: string,
  value = true
): T {
  return list.filter((item) => {
    const _item = { ...item }
    if (_item[key] && _item.children && _item.children.length) {
      _item.children = filterDeep(_item.children, key)
    }
    return value ? _item[key] : !_item[key]
  }) as T
}

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
