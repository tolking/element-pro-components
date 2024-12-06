import { defineComponent, h, mergeProps, resolveComponent } from 'vue'
import { isArray, isFunction, isObject, isString } from '../utils/index'
import { formComponentProps } from './props'
import type { DefineComponent, Slot } from 'vue'
import type { StringObject } from '../types/index'

interface TargetEvent {
  target: {
    checked: unknown
    value: unknown
  }
}

export default defineComponent({
  name: 'ProFormComponent',
  props: formComponentProps,
  emits: ['update:modelValue'],
  setup(props, { attrs, emit }) {
    const nativeComponents = ['input', 'textarea', 'select']

    function getComponent() {
      return isString(props.is) && !nativeComponents.includes(props.is)
        ? resolveComponent(props.is)
        : props.is
    }

    function getProps() {
      let prop = 'modelValue'
      let event = 'onUpdate:modelValue'

      if (props.modelKey && isArray(props.modelKey)) {
        ;[prop, event] = props.modelKey
      } else if (props.modelKey) {
        prop = props.modelKey
        event = `onUpdate:${props.modelKey}`
      }

      const _props: StringObject = mergeProps(attrs, {
        [prop]: props.modelValue,
        [event]: (value: unknown) => emit('update:modelValue', value),
      })

      if (isString(props.is) && nativeComponents.includes(props.is)) {
        if (
          props.is === 'select' ||
          attrs.type === 'checkbox' ||
          attrs.type === 'radio'
        ) {
          _props.checked = props.modelValue
          _props.onChange = (value: TargetEvent) =>
            emit('update:modelValue', value.target.checked)
        } else {
          _props.value = props.modelValue
          _props.onInput = (value: TargetEvent) =>
            emit('update:modelValue', value.target.value)
        }
        _props.modelValue = undefined
      }
      return _props
    }

    function getSlots() {
      if (isFunction(props.slots)) {
        return props.slots as Slot
      } else if (isObject(props.slots)) {
        const obj: StringObject = {}

        for (const key in props.slots) {
          const value = (props.slots as StringObject)[key]
          obj[key] = isFunction(value) ? value : () => value
        }

        return obj
      } else if (props.slots) {
        return () => props.slots
      } else {
        return undefined
      }
    }

    return () => h(getComponent() as DefineComponent, getProps(), getSlots())
  },
})
