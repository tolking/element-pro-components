import type { PropType } from 'vue'
import type { IComponentSize } from '../types/index'

export default {
  modelValue: {
    type: Array as PropType<string[]>,
  },
  trigger: {
    type: String as PropType<'space' | 'enter'>,
  },
  size: {
    type: String as PropType<IComponentSize>,
  },
  type: {
    type: String as PropType<'success' | 'info' | 'warning' | 'danger'>,
  },
  hit: {
    type: Boolean,
  },
  color: {
    type: String,
  },
  effect: {
    type: String as PropType<'light' | 'dark' | 'plain'>,
  },
}
