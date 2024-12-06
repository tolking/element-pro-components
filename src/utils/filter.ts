import { isArray, isFunction, get } from './index'
import type { ExternalParam } from '../types/index'

/**
 * deep filter list
 * @param list list to be filter
 * @param key check key
 * @param value check the value is true or false
 * @param reItem rewrite value of list item
 */
export function filterDeep<T extends Array<ExternalParam>>(
  list: T,
  key: string,
  value = true,
  reItem?: (item: T[number]) => T[number],
): T {
  const _list = [] as unknown as T

  for (let i = 0; i < list.length; i++) {
    const item = { ...list[i] }
    const checkValue = get(item, key)
    const isFilter = value ? checkValue : !checkValue

    if (isFilter) {
      if (item.children && item.children.length) {
        item.children = filterDeep(item.children, key, value)
      }
      _list.push(isFunction(reItem) ? reItem(item) : item)
    }
  }
  return _list
}

/**
 * deeply find the `key` in the list and convert them into a single-level array
 * @param list list
 * @param key key
 * @param value key value, default: true
 * @param reItem rewrite value of list item
 */
export function filterFlat<
  T extends Array<ExternalParam>,
  Q extends unknown[] = T,
>(
  list: T,
  key: string,
  value = true,
  reItem?: (item: T[number]) => Q[number],
): Q {
  if (!isArray(list)) return [] as unknown as Q

  return list.reduce(
    (all, item) => {
      const _item = { ...item }
      const checkValue = get(_item, key)
      let _list = [] as unknown as Q

      if (_item.children && _item.children.length) {
        _list = filterFlat(_item.children, key, value, reItem)
        _item.children = undefined
      }
      if (!!checkValue === value) {
        _list.unshift(isFunction(reItem) ? reItem(_item) : _item)
      }
      return [...all, ..._list] as Q
    },
    [] as unknown as Q,
  )
}
