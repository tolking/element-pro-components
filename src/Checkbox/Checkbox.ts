import { defineComponent, h, VNode } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { ElCheckboxGroup, ElCheckbox } from 'element-plus'
import { useSelectData, useEmitValue } from '../composables/index'
import { modelValueEmit } from '../utils/index'
import props from './props'
import type { ICheckboxProps } from './index'

export function createDefault<T>(
  props: ICheckboxProps,
  component: T,
  className: string
): () => VNode {
  const data = useSelectData(props)
  const emitValue = useEmitValue()
  const config = reactiveOmit(props, 'data', 'config')

  return () =>
    h(
      ElCheckboxGroup,
      {
        ...config,
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
  emits: modelValueEmit,
  setup(props) {
    return createDefault<typeof ElCheckbox>(props, ElCheckbox, 'pro-checkbox')
  },
})
