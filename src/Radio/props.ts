import { commonProps } from '../Select/props'
import type { PropType } from 'vue'
import type { IComponentSize } from '../types/index'

export default {
  ...commonProps,
  modelValue: {
    type: [String, Number, Boolean],
  },
  size: {
    type: String as PropType<IComponentSize>,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  textColor: {
    type: String,
  },
  fill: {
    type: String,
  },
}
