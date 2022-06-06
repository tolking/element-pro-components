import { defineComponent, h, mergeProps, VNode } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { ElRadioGroup, ElRadio } from 'element-plus'
import { useDataConfig, useEmitValue } from '../composables/index'
import { radioProps, radioEmits } from './props'
import type { IRadioProps } from './index'

export function createDefault<T>(
  props: IRadioProps,
  component: T,
  className: string
): () => VNode {
  const configKeys = useDataConfig()
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
        props.data.map((item) => {
          return h(
            component,
            {
              name: item[configKeys.value.name],
              label: item[configKeys.value.value],
              disabled: item[configKeys.value.disabled],
            },
            () => item[configKeys.value.label]
          )
        })
    )
}

export default defineComponent({
  name: 'ProRadio',
  props: radioProps,
  emits: radioEmits,
  setup(props) {
    return createDefault<typeof ElRadio>(props, ElRadio, 'pro-radio')
  },
})
