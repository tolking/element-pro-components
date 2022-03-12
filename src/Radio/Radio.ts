import { defineComponent, h, mergeProps, VNode } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { ElRadioGroup, ElRadio } from 'element-plus'
import { useSelectData, useEmitValue } from '../composables/index'
import { modelValueEmit } from '../utils/index'
import props from './props'
import type { IRadioProps } from './index'

export function createDefault<T>(
  props: IRadioProps,
  component: T,
  className: string
): () => VNode {
  const data = useSelectData(props)
  const emitValue = useEmitValue()
  const config = reactiveOmit(props, 'data', 'config')

  return () =>
    h(
      ElRadioGroup,
      mergeProps(config, {
        class: className,
        'onUpdate:modelValue': emitValue,
      }),
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
  emits: modelValueEmit,
  setup(props) {
    return createDefault<typeof ElRadio>(props, ElRadio, 'pro-radio')
  },
})
