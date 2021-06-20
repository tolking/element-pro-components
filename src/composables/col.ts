// NOTE modify from element-plus, if a same hooks is added to the element-plus, replace this file by hooks
import { ComputedRef, computed, inject, Ref, unref } from 'vue'
import { isObject } from '../utils/index'
import type { IColProps, IColSizeObject } from '../types/index'

export function useCol(
  props: Readonly<IColProps> | IColProps | Ref<IColProps>
): {
  colStyle: ComputedRef<{
    paddingLeft?: string
    paddingRight?: string
  }>
  colClass: ComputedRef<string[]>
} {
  const gutter = inject('ElRow', 0)

  const colStyle = computed(() => {
    if (gutter) {
      return {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px',
      }
    }
    return {}
  })
  const colClass = computed(() => {
    const _props = unref(props)
    const item: IColProps = {
      span: _props.span ?? 24,
      offset: _props.offset ?? 0,
      pull: _props.pull ?? 0,
      push: _props.push ?? 0,
      xs: _props.xs,
      sm: _props.sm,
      md: _props.md,
      lg: _props.lg,
      xl: _props.xl,
    }

    const ret = ['el-col']
    const pos = ['span', 'offset', 'pull', 'push'] as const
    pos.forEach((prop) => {
      const size = item[prop]
      if (typeof size === 'number' && size > 0) {
        ret.push(
          prop !== 'span'
            ? `el-col-${prop}-${item[prop]}`
            : `el-col-${item[prop]}`
        )
      }
    })
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
    sizes.forEach((size) => {
      const sizeProps = item[size]
      if (typeof sizeProps === 'number') {
        ret.push(`el-col-${size}-${sizeProps}`)
      } else if (isObject(sizeProps)) {
        Object.keys(sizeProps).forEach((prop) => {
          const _prop = prop as keyof IColSizeObject
          ret.push(
            _prop !== 'span'
              ? `el-col-${size}-${_prop}-${sizeProps[_prop]}`
              : `el-col-${size}-${sizeProps[_prop]}`
          )
        })
      }
    })

    if (gutter) {
      ret.push('is-guttered')
    }
    return ret
  })

  return {
    colStyle,
    colClass,
  }
}
