import { computed, ComputedRef } from 'vue'
import { checkUrl } from '../utils/index'
import type { ILinkProps } from '../types/index'

export function useLink(
  props: Readonly<ILinkProps>
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
    return props.to ? (checkUrl(props.to) ? 'a' : 'router-link') : 'span'
  })

  const attr = computed(() => {
    return props.to
      ? checkUrl(props.to)
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
