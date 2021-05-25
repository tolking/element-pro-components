import { DefineComponent, defineComponent, h, resolveComponent } from 'vue'
import { isFunction } from '@vue/shared'
import type { StringObject } from '../types/index'

export default defineComponent({
  name: 'ProFormCompont',
  props: {
    is: {
      type: String,
      required: true,
    },
    slots: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit }) {
    function transitionProps() {
      const obj: StringObject = {}

      for (const key in props.slots) {
        const value = props.slots[key]
        obj[key] = isFunction(value) ? value : () => props.slots[key]
      }

      return obj
    }

    return () =>
      h(
        resolveComponent(props.is) as DefineComponent,
        {
          ...attrs,
          'onUpdate:modelValue': (value: unknown) =>
            emit('update:modelValue', value),
        },
        transitionProps()
      )
  },
})
