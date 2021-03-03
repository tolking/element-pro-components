import { isArray } from './index'

type ListDeep = Array<{
  children?: ListDeep
  [key: string]: unknown
}>

/**
 * deep filter list
 * @param list list to be filter
 * @param key check key
 * @param value check the value is true or false
 */
export function filterDeep<T extends ListDeep>(
  list: T,
  key: string,
  value = true
): T {
  const _list = ([] as unknown) as T
  for (let i = 0; i < list.length; i++) {
    const item = { ...list[i] }
    const isFilter = value ? item[key] : !item[key]
    if (isFilter) {
      if (item.children && item.children.length) {
        item.children = filterDeep(item.children, key, value)
      }
      _list.push(item)
    }
  }
  return _list
}

/**
 * deeply find the slots in the list and convert them into a single-level array
 * @param list slot list
 */
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
