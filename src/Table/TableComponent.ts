import { computed, defineComponent } from 'vue'
import { isFunction } from '../utils/index'

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
      type: null,
      default: '',
    },
  },
  setup(props) {
    const children = computed(() => {
      return isFunction(props.render)
        ? props.render(props.row)
        : props.render || props.row[props.prop]
    })
    return () => String(children.value)
  },
})
