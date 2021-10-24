import { defineComponent, h, VNode } from 'vue'
import { ElCheckboxGroup, ElCheckbox } from 'element-plus'
import { useSelectData, useEmitValue } from '../composables/index'
import props from './props'
import type { ICheckboxProps } from './index'

export function createDefault<T>(
  props: ICheckboxProps,
  component: T,
  className: string
): () => VNode {
  const data = useSelectData(props)
  const emitValue = useEmitValue()

  return () =>
    h(
      ElCheckboxGroup,
      {
        modelValue: props.modelValue || [],
        size: props.size,
        disabled: props.disabled,
        textColor: props.textColor,
        fill: props.fill,
        min: props.min,
        max: props.max,
        class: className,
        'onUpdate:modelValue': emitValue,
      },
      () =>
        data.value.map((item) => {
          return h(
            component,
            {
              name: item.name,
              label: item.value,
              disabled: item.disabled,
            },
            () => item.label
          )
        })
    )
}

export default defineComponent({
  name: 'ProCheckbox',
  props,
  emits: ['update:modelValue'],
  setup(props) {
    return createDefault<typeof ElCheckbox>(props, ElCheckbox, 'pro-checkbox')
  },
})
