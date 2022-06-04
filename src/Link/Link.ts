import {
  computed,
  DefineComponent,
  defineComponent,
  h,
  mergeProps,
  resolveDynamicComponent,
} from 'vue'
import { isURL } from '../utils/index'
import { linkProps } from './props'
import type { UnknownObject } from '../types/index'

export default defineComponent({
  name: 'ProLink',
  props: linkProps,
  setup(props, { slots }) {
    const type = computed(() => {
      return props.to ? (isURL(props.to) ? 'a' : 'router-link') : 'span'
    })

    const attr = computed<UnknownObject>(() => {
      return props.to
        ? isURL(props.to)
          ? {
              href: props.to,
              target: '_blank',
              rel: 'noopener noreferrer',
            }
          : { to: props.to }
        : {}
    })

    return () =>
      h(
        resolveDynamicComponent(type.value) as DefineComponent,
        mergeProps(attr.value, { class: 'pro-link' }),
        slots
      )
  },
})
