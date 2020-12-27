import { computed, ComputedRef, defineEmit } from 'vue'
import { filterSlotDeep } from '../utils/index'
import type { ProColumns } from '../types/index'

export function useColumnsSlotList(
  columns: ProColumns
): ComputedRef<ProColumns> {
  return computed(() => {
    return filterSlotDeep(columns).map((item) => {
      item.header = item.prop + '-header'
      return item
    })
  })
}
