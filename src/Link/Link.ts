import {
  DefineComponent,
  defineComponent,
  h,
  mergeProps,
  resolveDynamicComponent,
} from 'vue'
import { useLink } from '../composables/index'
import props from './props'

export default defineComponent({
  name: 'ProLink',
  props,
  setup(props, { slots }) {
    const { type, attr } = useLink(props)

    return () =>
      h(
        resolveDynamicComponent(type.value) as DefineComponent,
        mergeProps(attr.value || {}, { class: 'pro-link' }),
        slots
      )
  },
})
