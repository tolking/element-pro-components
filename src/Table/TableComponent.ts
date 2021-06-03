import { computed, defineComponent } from 'vue'
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
    const children = computed(() => {
      return isFunction(props.render)
        ? () => (props.render as UnknownFunction)(props.row)
        : () => String(props.render) || String(props.row[props.prop])
    })
    return children.value
  },
})
