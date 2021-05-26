import { DefineComponent, defineComponent, h, resolveComponent } from 'vue'
import { isFunction, isObject } from '../utils/index'
import type { StringObject } from '../types/index'

export default defineComponent({
  name: 'ProFormCompont',
  props: {
    is: {
      type: String,
      required: true,
    },
    slots: {
      type: [Function, Object, String],
      default: '',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit }) {
    function transitionSlots() {
      if (isFunction(props.slots)) {
        return props.slots
      } else if (isObject(props.slots)) {
        const obj: StringObject = {}

        for (const key in props.slots) {
          const value = props.slots[key]
          obj[key] = isFunction(value) ? value : () => value
        }

        return obj
      } else if (props.slots) {
        return () => props.slots
      }
    }

    return () =>
      h(
        resolveComponent(props.is) as DefineComponent,
        {
          ...attrs,
          'onUpdate:modelValue': (value: unknown) =>
            emit('update:modelValue', value),
        },
        transitionSlots()
      )
  },
})
