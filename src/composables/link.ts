import { computed, ComputedRef } from 'vue'
import { isURL } from '../utils/index'
import type { ILinkProps } from '../Link'

export function useLink(
  props: ILinkProps
): {
  type: ComputedRef<'a' | 'router-link' | 'span'>
  attr: ComputedRef<
    | {
        href: string
        target: string
        rel: string
      }
    | {
        to: string
      }
    | null
  >
} {
  const type = computed(() => {
    return props.to ? (isURL(props.to) ? 'a' : 'router-link') : 'span'
  })

  const attr = computed(() => {
    return props.to
      ? isURL(props.to)
        ? {
            href: props.to,
            target: '_blank',
            rel: 'noopener noreferrer',
          }
        : { to: props.to }
      : null
  })

  return {
    type,
    attr,
  }
}
