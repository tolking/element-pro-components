import { defineComponent, h, mergeProps } from 'vue'
import { ElRadioGroup, ElRadio } from 'element-plus'
import {
  useDataConfig,
  useEmitValue,
  useSplitReactive,
} from '../composables/index'
import { radioProps, radioEmits, radioKeys } from './props'
import type { DefineComponent, VNode } from 'vue'
import type { IRadioProps } from './index'

export function createDefault<T>(
  props: IRadioProps,
  component: T,
  className: string,
): () => VNode {
  const { getLabel, getValue, getName, getDisabled } = useDataConfig()
  const emitValue = useEmitValue()
  const [config] = useSplitReactive(props, radioKeys)

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
            component as DefineComponent,
            {
              name: getName(item),
              value: getValue(item),
              disabled: getDisabled(item),
            },
            () => getLabel(item),
          )
        }),
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
