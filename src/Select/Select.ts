import { defineComponent, h, mergeProps, VNode } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { ElSelect, ElOptionGroup, ElOption } from 'element-plus'
import { useDataConfig, useEmitValue } from '../composables/index'
import { modelValueEmit } from '../utils/index'
import { selectProps } from './props'
import type { SelectDataItem } from './index'

export default defineComponent({
  name: 'ProSelect',
  props: selectProps,
  emits: modelValueEmit,
  setup(props, { slots }) {
    const configKeys = useDataConfig()
    const emitValue = useEmitValue()
    const config = reactiveOmit(props, 'data', 'config')

    function createOption(item: SelectDataItem): VNode {
      return h(
        ElOption,
        {
          value: item[configKeys.value.value],
          label: item[configKeys.value.label],
          disabled: item[configKeys.value.disabled],
        },
        // NOTE: Remove `data: item` on next major release
        () => slots.default && slots.default({ item, data: item })
      )
    }

    function createDefault() {
      return props.data.map((item) => {
        if (item[configKeys.value.children]?.length) {
          return h(ElOptionGroup, { label: item[configKeys.value.label] }, () =>
            item[configKeys.value.children]?.map((child: SelectDataItem[]) => {
              return createOption(child)
            })
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
        () => createDefault()
      )
  },
})
