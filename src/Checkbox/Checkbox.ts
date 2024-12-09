import { defineComponent, h, mergeProps } from 'vue'
import { ElCheckboxGroup, ElCheckbox } from 'element-plus'
import {
  useDataConfig,
  useEmitValue,
  useSplitReactive,
} from '../composables/index'
import { checkboxProps, checkboxEmits, checkboxGroupKeys } from './props'
import type { DefineComponent, VNode } from 'vue'
import type { ICheckboxProps } from './index'

export function createDefault<T>(
  props: ICheckboxProps,
  component: T,
  className: string,
): () => VNode {
  const { getLabel, getValue, getName, getDisabled } = useDataConfig()
  const emitValue = useEmitValue()
  const [config] = useSplitReactive(props, checkboxGroupKeys)

  return () =>
    h(
      ElCheckboxGroup,
      mergeProps(config, {
        class: className,
        'onUpdate:modelValue': emitValue,
      }),
      () =>
        props.data.map((item) => {
          return h(
            component as DefineComponent,
            {
              key: getValue(item),
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
  name: 'ProCheckbox',
  props: checkboxProps,
  emits: checkboxEmits,
  setup(props) {
    return createDefault<typeof ElCheckbox>(props, ElCheckbox, 'pro-checkbox')
  },
})
