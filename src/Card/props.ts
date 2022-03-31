import { cardProps, colProps, rowProps } from 'element-plus'
import { PropType } from 'vue'
import { objectOmit } from '../utils/index'

const _rowProps = objectOmit(rowProps, 'tag')
const _colProps = objectOmit(colProps, 'tag')

export default {
  ...cardProps,
  ..._rowProps,
  ..._colProps,
  direction: String as PropType<
    'row' | 'row-reverse' | 'column' | 'column-reverse'
  >,
  split: {
    type: Boolean,
    default: false,
  },
  ghost: {
    type: Boolean,
    default: false,
  },
}
