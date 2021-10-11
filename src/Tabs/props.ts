import type { PropType } from 'vue'

//TODO: Wait for the internal type reconstruction of the element-plus to try to import from its internal
type BeforeLeave = (
  newTabName: string,
  oldTabName: string
) => void | Promise<void> | boolean

export default {
  type: {
    type: String as PropType<'card' | 'border-card'>,
  },
  tabPosition: {
    type: String as PropType<'top' | 'right' | 'bottom' | 'left'>,
    default: 'top',
  },
  beforeLeave: {
    type: Function as PropType<BeforeLeave>,
    default: null,
  },
  stretch: Boolean,
}
