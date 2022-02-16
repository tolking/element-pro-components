import { commonProps } from '../Select/props'
import type { PropType } from 'vue'
import type { ComponentSize } from 'element-plus/lib/constants/index'

export default {
  ...commonProps,
  modelValue: {
    type: [String, Number, Boolean],
  },
  size: {
    type: String as PropType<ComponentSize>,
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
