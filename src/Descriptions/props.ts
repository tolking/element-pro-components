import type { PropType } from 'vue'
import type { ComponentSize } from 'element-plus/lib/utils/types'
import type { IDescriptionsColumns } from './type'

export default {
  columns: {
    type: Array as PropType<IDescriptionsColumns>,
    default: undefined,
  },
  detail: {
    type: Object,
  },
  border: Boolean,
  column: Number,
  direction: {
    type: String as PropType<'vertical' | 'horizontal'>,
  },
  size: {
    type: String as PropType<ComponentSize>,
  },
  title: String,
  extra: String,
}
