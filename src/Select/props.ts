import type { PropType } from 'vue'
import type { IComponentSize } from '../types/index'
import type { SelectConfig, SelectData } from './type'

export const commonProps = {
  data: {
    type: Array as PropType<SelectData>,
  },
  config: {
    type: Object as PropType<SelectConfig>,
  },
}

export default {
  ...commonProps,
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
  },
  name: String,
  id: String,
  autocomplete: {
    type: String,
  },
  automaticDropdown: Boolean,
  size: {
    type: String as PropType<IComponentSize>,
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  popperClass: {
    type: String,
  },
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  filterMethod: Function,
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
