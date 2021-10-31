import type { PropType } from 'vue'
import { IComponentSize } from '..'
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
    type: String as PropType<IComponentSize>,
  },
  title: String,
  extra: String,
}
