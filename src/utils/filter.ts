import { isArray } from '@vue/shared'
import type { ProColumns } from '../types/index'

export function filterSlotDeep(list: ProColumns): ProColumns {
  if (!isArray(list)) return []

  return list.reduce((all, item) => {
    const _item = { ...item }
    let _list: ProColumns = []
    if (_item.children && _item.children.length) {
      _list = filterSlotDeep(_item.children)
      delete _item.children
    }
    if (_item.slot) {
      _list.push(_item)
    }
    return [...all, ..._list]
  }, [] as ProColumns)
}
