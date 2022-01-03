import type { PropType } from 'vue'
import type { ComponentSize } from 'element-plus/lib/utils/types'
import type { SelectConfig, SelectData } from '../types/index'

export const commonProps = {
  data: {
    type: Array as PropType<SelectData>,
  },
  config: {
    type: Object as PropType<SelectConfig>,
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
  popperAppendToBody: {
    type: Boolean,
    default: true,
  },
  clearIcon: {
    type: String,
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
