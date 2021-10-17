import { defineComponent, h, VNode } from 'vue'
import { ElSelect, ElOptionGroup, ElOption } from 'element-plus'
import { useSelectData, useEmitValue } from '../composables/index'
import props from './props'
import type { SelectDataItem } from './type'

export function createOption(item: SelectDataItem): VNode {
  return h(ElOption, {
    value: item.value,
    label: item.label,
    disabled: item.disabled,
  })
}

export default defineComponent({
  name: 'ProSelect',
  props,
  emits: ['update:modelValue'],
  setup(props) {
    const data = useSelectData(props)
    const emitValue = useEmitValue()

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
          modelValue: props.modelValue,
          name: props.name,
          id: props.id,
          autocomplete: props.autocomplete,
          automaticDropdown: props.automaticDropdown,
          size: props.size,
          disabled: props.disabled,
          clearable: props.clearable,
          filterable: props.filterable,
          allowCreate: props.allowCreate,
          loading: props.loading,
          popperClass: props.popperClass,
          remote: props.remote,
          loadingText: props.loadingText,
          noMatchText: props.noMatchText,
          noDataText: props.noDataText,
          remoteMethod: props.remoteMethod,
          filterMethod: props.filterMethod,
          multiple: props.multiple,
          multipleLimit: props.multipleLimit,
          placeholder: props.placeholder,
          defaultFirstOption: props.defaultFirstOption,
          reserveKeyword: props.reserveKeyword,
          valueKey: props.valueKey,
          collapseTags: props.collapseTags,
          popperAppendToBody: props.popperAppendToBody,
          clearIcon: props.clearIcon,
          class: 'pro-select',
          'onUpdate:modelValue': emitValue,
        },
        () => createDefault()
      )
  },
})
