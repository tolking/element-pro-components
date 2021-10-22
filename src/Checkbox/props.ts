import { commonProps } from '../Select/props'
import props from '../Radio/props'
import type { PropType } from 'vue'

export default {
  ...commonProps,
  ...props,
  modelValue: {
    type: Array as PropType<Array<string | number | boolean>>,
  },
  min: {
    type: Number,
  },
  max: {
    type: Number,
  },
}
