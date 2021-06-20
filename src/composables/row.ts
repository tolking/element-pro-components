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
  provide('ElRow', props.gutter)

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
    props.justify && props.justify !== 'start'
      ? `is-justify-${props.justify}`
      : '',
    props.align && ['middle', 'bottom'].includes(props.align)
      ? `is-align-${props.align}`
      : '',
    props.type === 'flex' ? 'el-row--flex' : '',
  ])

  return {
    rowStyle,
    rowClass,
  }
}
