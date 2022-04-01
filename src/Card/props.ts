import { cardProps, colProps, rowProps } from 'element-plus'
import { PropType } from 'vue'
import { objectOmit } from '../utils/index'

type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'

const _rowProps = objectOmit(rowProps, 'tag')
const _colProps = objectOmit(colProps, 'tag', 'span')

export default {
  ...cardProps,
  ..._rowProps,
  ..._colProps,
  // Modify the default value to be undefined, which is convenient to determine whether it is a Row
  span: Number,
  direction: {
    type: String as PropType<Direction>,
    default: 'row',
  },
  split: {
    type: Boolean,
    default: false,
  },
  ghost: {
    type: Boolean,
    default: false,
  },
}
