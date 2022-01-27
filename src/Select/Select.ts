import { defineComponent, h, VNode } from 'vue'
import { ElSelect, ElOptionGroup, ElOption } from 'element-plus'
import { useSelectData, useEmitValue } from '../composables/index'
import { modelValueEmit } from '../utils/index'
import props from './props'
import type { SelectDataItem } from '../types/index'
import type { ISelectProps } from './index'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createSelectProps(props: ISelectProps) {
  return {
    name: props.name,
    id: props.id,
    autocomplete: props.autocomplete,
    automaticDropdown: props.automaticDropdown,
    size: props.size,
    disabled: props.disabled,
    clearable: props.clearable,
    allowCreate: props.allowCreate,
    loading: props.loading,
    remote: props.remote,
    loadingText: props.loadingText,
    noMatchText: props.noMatchText,
    noDataText: props.noDataText,
    remoteMethod: props.remoteMethod,
    multipleLimit: props.multipleLimit,
    placeholder: props.placeholder,
    defaultFirstOption: props.defaultFirstOption,
    reserveKeyword: props.reserveKeyword,
    valueKey: props.valueKey,
    collapseTags: props.collapseTags,
    popperAppendToBody: props.popperAppendToBody,
    clearIcon: props.clearIcon,
  }
}

export default defineComponent({
  name: 'ProSelect',
  props,
  emits: modelValueEmit,
  setup(props, { slots }) {
    const data = useSelectData(props)
    const emitValue = useEmitValue()

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

    return () => {
      const config = createSelectProps(props)
      return h(
        ElSelect,
        Object.assign(
          {
            modelValue: props.modelValue,
            filterable: props.filterable,
            popperClass: props.popperClass,
            filterMethod: props.filterMethod,
            multiple: props.multiple,
            class: 'pro-select',
            'onUpdate:modelValue': emitValue,
          },
          config
        ),
        () => createDefault()
      )
    }
  },
})
