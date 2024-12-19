import {
  defineComponent,
  h,
  mergeProps,
  onMounted,
  reactive,
  ref,
  resolveComponent,
} from 'vue'
import { isFunction, isObject, isString } from '../utils/index'
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
  setup(props, { attrs, emit, expose }) {
    const nativeComponents = ['input', 'textarea', 'select']
    const componentRef = ref<StringObject>({})
    const componentExpose = reactive<StringObject>({})

    onMounted(() => {
      Object.assign(componentExpose, componentRef.value)
    })

    expose(componentExpose)

    function getComponent() {
      return isString(props.is) && !nativeComponents.includes(props.is)
        ? resolveComponent(props.is)
        : props.is
    }

    function getProps() {
      const _props: StringObject = mergeProps({ ref: componentRef }, attrs)

      if (isString(props.is) && nativeComponents.includes(props.is)) {
        if (
          props.is === 'select' ||
          attrs.type === 'checkbox' ||
          attrs.type === 'radio'
        ) {
          _props.checked = attrs.modelValue
          _props.onChange = (value: TargetEvent) =>
            emit('update:modelValue', value.target.checked)
        } else {
          _props.value = attrs.modelValue
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
