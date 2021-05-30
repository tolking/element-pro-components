import {
  DefineComponent,
  defineComponent,
  h,
  resolveDynamicComponent,
} from 'vue'
import { isFunction, isObject, camelize } from '../utils/index'
import type { StringObject } from '../types/index'

interface TargetEvent {
  target: {
    checked: unknown
    value: unknown
  }
}

export default defineComponent({
  name: 'ProFormComponent',
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
  emits: ['update:modelValue', 'change', 'input'],
  setup(props, { attrs, emit }) {
    function transitionAttrs() {
      const createAttrs = (type: 'update:modelValue' | 'change' | 'input') => ({
        ...attrs,
        [camelize('on-' + type)]: (value: unknown) => {
          emit(type, value)
          if (type !== 'update:modelValue') {
            const _value =
              attrs.type === 'checkbox' || attrs.type === 'radio'
                ? (value as TargetEvent).target.checked
                : (value as TargetEvent).target.value
            emit('update:modelValue', _value)
          }
        },
      })

      if (
        (props.is === 'input' &&
          (attrs.type === 'checkbox' || attrs.type === 'radio')) ||
        props.is === 'select'
      ) {
        return createAttrs('change')
      } else if (props.is === 'input' || props.is === 'textarea') {
        return createAttrs('input')
      } else {
        return createAttrs('update:modelValue')
      }
    }

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
        resolveDynamicComponent(props.is) as DefineComponent,
        transitionAttrs(),
        transitionSlots()
      )
  },
})
