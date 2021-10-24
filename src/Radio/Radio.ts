import { defineComponent, h, VNode } from 'vue'
import { ElRadioGroup, ElRadio } from 'element-plus'
import { useSelectData, useEmitValue } from '../composables/index'
import props from './props'
import type { IRadioProps } from './index'

export function createDefault<T>(
  props: IRadioProps,
  component: T,
  className: string
): () => VNode {
  const data = useSelectData(props)
  const emitValue = useEmitValue()

  return () =>
    h(
      ElRadioGroup,
      {
        modelValue: props.modelValue,
        size: props.size,
        disabled: props.disabled,
        textColor: props.textColor,
        fill: props.fill,
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
  name: 'ProRadio',
  props,
  emits: ['update:modelValue'],
  setup(props) {
    return createDefault<typeof ElRadio>(props, ElRadio, 'pro-radio')
  },
})
