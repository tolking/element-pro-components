import type { Component, PropType } from 'vue'
import type { ComponentSize } from 'element-plus'
import type { SelectConfig, SelectDataItem } from './type'

export const commonProps = {
  data: {
    type: Array as PropType<SelectDataItem[]>,
    default: () => [],
  },
  config: {
    type: Object as PropType<SelectConfig>,
    default: () => ({}),
  },
}

export const selectProps = {
  name: String,
  id: String,
  autocomplete: {
    type: String,
  },
  automaticDropdown: Boolean,
  size: {
    type: String as PropType<ComponentSize>,
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0,
  },
  placeholder: {
    type: String,
  },
  defaultFirstOption: Boolean,
  reserveKeyword: Boolean,
  valueKey: {
    type: String,
  },
  collapseTags: Boolean,
  teleported: {
    type: Boolean,
    default: true,
  },
  clearIcon: {
    type: [String, Object] as PropType<string | Component>,
  },
  fitInputWidth: {
    type: Boolean,
    default: false,
  },
  suffixIcon: {
    type: [String, Object] as PropType<string | Component>,
  },
  tagType: {
    type: String as PropType<'success' | 'info' | 'warning' | 'danger'>,
    default: 'info',
  },
}

export default {
  ...commonProps,
  ...selectProps,
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
  },
  filterMethod: Function,
  popperClass: {
    type: String,
  },
}
