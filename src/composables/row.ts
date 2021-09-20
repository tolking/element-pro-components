// NOTE modify from element-plus, if a same hooks is added to the element-plus, replace this file by hooks
import { ComputedRef, computed, provide } from '@vue/runtime-core'
import type { IRowProps } from '../types/index'

export function useRow(
  props: Readonly<IRowProps> | IRowProps
): {
  rowStyle: ComputedRef<{
    marginLeft: string
    marginRight: string
  }>
  rowClass: ComputedRef<string[]>
} {
  const gutter = computed(() => props.gutter)
  provide('ElRow', { gutter })

  const rowStyle = computed(() => {
    const ret = {
      marginLeft: '',
      marginRight: '',
    }
    if (props.gutter) {
      ret.marginLeft = `-${props.gutter / 2}px`
      ret.marginRight = ret.marginLeft
    }
    return ret
  })

  const rowClass = computed(() => [
    'el-row',
    props.justify !== 'start' ? `is-justify-${props.justify}` : '',
    props.align !== 'top' ? `is-align-${props.align}` : '',
  ])

  return {
    rowStyle,
    rowClass,
  }
}
