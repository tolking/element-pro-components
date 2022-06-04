import type { PropType } from 'vue'
import type { ComponentSize } from 'element-plus'
import type { IDescriptionsColumns } from './type'

export const descriptionsProps = {
  columns: Array as PropType<IDescriptionsColumns>,
  detail: Object,
  border: Boolean,
  column: Number,
  direction: String as PropType<'vertical' | 'horizontal'>,
  size: String as PropType<ComponentSize>,
  title: String,
  extra: String,
  align: String as PropType<'left' | 'center' | 'right'>,
  labelAlign: String as PropType<'left' | 'center' | 'right'>,
}
