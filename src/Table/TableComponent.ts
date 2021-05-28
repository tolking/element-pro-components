import { defineComponent } from 'vue'
import { isFunction } from '../utils/index'
import type { UnknownFunction } from '../types/index'

export default defineComponent({
  name: 'ProTableComponent',
  props: {
    row: {
      type: Object,
      required: true,
    },
    prop: {
      type: String,
      required: true,
    },
    render: {
      type: [Function, String],
      default: '',
    },
  },
  setup(props) {
    return isFunction(props.render)
      ? () => (props.render as UnknownFunction)(props.row)
      : () => props.render || props.row[props.prop]
  },
})
