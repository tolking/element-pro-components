import { defineComponent, h, mergeProps, VNode } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { ElSelect, ElOptionGroup, ElOption } from 'element-plus'
import { useDataConfig, useEmitValue } from '../composables/index'
import { selectProps, selectEmits } from './props'
import type { SelectDataItem } from './index'

export default defineComponent({
  name: 'ProSelect',
  props: selectProps,
  emits: selectEmits,
  setup(props, { slots }) {
    const { getLabel, getValue, getDisabled, getChildren } = useDataConfig()
    const emitValue = useEmitValue()
    const config = reactiveOmit(props, 'data', 'config')

    function createOption(item: SelectDataItem): VNode {
      return h(
        ElOption,
        {
          value: getValue(item),
          label: getLabel(item),
          disabled: getDisabled(item),
        },
        () => slots.default && slots.default({ item }),
      )
    }

    function createDefault() {
      return props.data.map((item) => {
        const children = getChildren(item)

        if (children?.length) {
          return h(ElOptionGroup, { label: getLabel(item) }, () =>
            children?.map((child: SelectDataItem[]) => {
              return createOption(child)
            }),
          )
        } else {
          return createOption(item)
        }
      })
    }

    return () =>
      h(
        ElSelect,
        mergeProps(config, {
          class: 'pro-select',
          'onUpdate:modelValue': emitValue,
        }),
        () => createDefault(),
      )
  },
})
