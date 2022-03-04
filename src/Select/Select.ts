import { defineComponent, h, VNode } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { ElSelect, ElOptionGroup, ElOption } from 'element-plus'
import { useSelectData, useEmitValue } from '../composables/index'
import { modelValueEmit } from '../utils/index'
import props from './props'
import type { SelectDataItem } from './index'

export default defineComponent({
  name: 'ProSelect',
  props,
  emits: modelValueEmit,
  setup(props, { slots }) {
    const data = useSelectData(props)
    const emitValue = useEmitValue()
    const config = reactiveOmit(props, 'data', 'config')

    function createOption(item: SelectDataItem): VNode {
      return h(
        ElOption,
        {
          value: item.value,
          label: item.label,
          disabled: item.disabled,
        },
        () => slots.default && slots.default({ data: item })
      )
    }

    function createDefault() {
      return data.value.map((item) => {
        if (item.children && item.children.length) {
          return h(ElOptionGroup, { label: item.label }, () =>
            item.children?.map((child) => createOption(child))
          )
        } else {
          return createOption(item)
        }
      })
    }

    return () =>
      h(
        ElSelect,
        {
          ...config,
          class: 'pro-select',
          'onUpdate:modelValue': emitValue,
        },
        () => createDefault()
      )
  },
})
