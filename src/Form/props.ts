import type { PropType } from 'vue'
import type {
  IFormColumns,
  IFormMenuColumns,
  StringObject,
} from '../types/index'

export default {
  modelValue: {
    type: Object as PropType<StringObject>,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    default: () => ({}),
  },
  columns: {
    type: Array as PropType<IFormColumns>,
    default: undefined,
  },
  menu: {
    type: Object as PropType<IFormMenuColumns>,
    default: undefined,
  },
  labelPosition: {
    type: String as PropType<'right' | 'left' | 'top'>,
    default: undefined,
  },
  inline: {
    type: Boolean,
    default: false,
  },
  gutter: {
    type: Number,
    default: undefined,
  },
  type: {
    type: String,
    default: undefined,
  },
  justify: {
    type: String as PropType<
      'start' | 'end' | 'center' | 'space-around' | 'space-between'
    >,
    default: undefined,
  },
  align: {
    type: String as PropType<'top' | 'middle' | 'bottom'>,
    default: undefined,
  },
}
